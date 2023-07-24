<?php

namespace Drupal\dynamic_entity\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\ReplaceCommand;

class DynamicEntitySettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  // Returns an array of the names of configuration objects that the form will have to process.
  protected function getEditableConfigNames() {
    return ['dynamic_entity.settings'];
  }

  /**
   * {@inheritdoc}
   */
  // Returns the unique ID of the form.
  public function getFormId() {
    return 'dynamic_entity_settings';
  }

  /**
   * {@inheritdoc}
   */
  // This function is used to define the structure of the form.
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Gets the current configuration settings for this form.
    $config = $this->config('dynamic_entity.settings');

    // The form will be built using a hierarchical tree structure.
    $form['#tree'] = TRUE;

    // Get or initialise the number of file upload fields.
    $num_files = $form_state->get('num_files');
    if ($num_files === NULL) {
      $num_files = 1;
      $form_state->set('num_files', $num_files);
    }

    // Create a container to hold the datasets.
    $form['csv_files'] = [
      '#type' => 'container',
      '#prefix' => '<div id="csv-files-wrapper">',
      '#suffix' => '</div>',
    ];

    // Get or initialise the values of the file upload fields, if there are no values, use the values from the config.
    $field_values = $form_state->get('field_values');
    if (is_null($field_values)) {
      $field_values = $config->get('csv_files') ?: [];
    }

    for ($i = 0; $i < $num_files; $i++) {
      // For each file, we create a detail element in the form, that has a title, and is open by default.
      // The '#default_value' attribute is set to the configuration value for this specific file, if it exists.
      $form['csv_files'][$i] = [
        '#type' => 'details',
        '#title' => $this->t('File #@num', ['@num' => $i + 1]),
        '#open' => TRUE,
        '#default_value' => $config->get("csv_files.$i"),
      ];

      // Within each file detail, there's a 'name' field where user can specify the name of the file.
      $form['csv_files'][$i]['name'] = [
        '#type' => 'textfield',
        '#title' => $this->t('Name'),
        '#default_value' => $field_values[$i]['name'] ?? '',
      ];
      
      // The file is validated to be a 'csv' file and is uploaded to the 'public://dynamic_entity/' directory.
      // The '#default_value' attribute is set to the previously uploaded file for this field, if it exists.
      // When a file is uploaded, the 'uploadFile' function is called to handle the upload.
      $form['csv_files'][$i]['file'] = [
        '#type' => 'managed_file',
        '#title' => $this->t('CSV file'),
        '#upload_location' => 'public://dynamic_entity/',
        '#upload_validators' => [
          'file_validate_extensions' => ['csv'],
        ],
        '#default_value' => isset($field_values[$i]['file']) ? [$field_values[$i]['file']] : [],
        '#ajax' => [
          'callback' => '::uploadFile',
          'wrapper' => 'csv-files-wrapper',
        ],
      ];
    }

    $form['actions'] = [
      '#type' => 'actions',
    ];

    $form['actions']['add_csv'] = [
      '#type' => 'button',
      '#value' => $this->t('Add another dataset'),
      '#ajax' => [
        'callback' => '::addOne',
        'wrapper' => 'csv-files-wrapper',
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  // This function is called when the 'Add another dataset' button is pressed.
  // It increases the number of file upload fields and rebuilds the form.
  public function addOne(array &$form, FormStateInterface $form_state) {
    $num_files = $form_state->get('num_files');
    $add_button = $num_files + 1;
    $form_state->set('num_files', $add_button);

    $field_values = [];
    foreach ($form_state->getValue('csv_files') as $i => $field) {
      $field_values[$i]['name'] = $field['name'];
      $field_values[$i]['file'] = $field['file'][0];
    }
    $form_state->set('field_values', $field_values);
  
    // Rebuild the form.
    $form_state->setRebuild();
    
    return $form['csv_files'];
  }

  // This function is called when a file is uploaded. It makes the uploaded file a permanent file.
  public function uploadFile(array &$form, FormStateInterface $form_state) {
    $triggering_element = $form_state->getTriggeringElement();
    $file_parents = array_slice($triggering_element['#array_parents'], 0, -1);
    $file_id = $form_state->getValue($file_parents)[0];
  
    // Retrieve the file by ID and make it permanent.
    $file = \Drupal\file\Entity\File::load($file_id);
    if ($file) {
      $file->setPermanent();
      $file->save();
    }
  
    return $form['csv_files'];
  }

  /**
   * {@inheritdoc}
   */
  // This function is called when the form is submitted.
  // It makes all uploaded files permanent and stores their IDs and names in the configuration.
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $num_files = $form_state->get('num_files');

    for ($i = 0; $i < $num_files; $i++) {
      $file_id = $form_state->getValue(['csv_files', $i, 'file'])[0];
      $name = $form_state->getValue(['csv_files', $i, 'name']);

      // Retrieve the file by ID and make it permanent.
      $file = \Drupal\file\Entity\File::load($file_id);
      if ($file) {
        $file->setPermanent();
        $file->save();
      }

      // Save the file ID and the name of the file in the configuration.
      $this->config('dynamic_entity.settings')
        ->set("csv_files.$i.file", $file_id)
        ->set("csv_files.$i.name", $name)
        ->save();

      // Save the file ID and the name of the file in the form state for the next build of the form.
      $field_values[$i]['file'] = $file_id;
      $field_values[$i]['name'] = $name;
      $form_state->set('field_values', $field_values);
    }

    $this->config('dynamic_entity.settings')->save();

    parent::submitForm($form, $form_state);
  }

}
