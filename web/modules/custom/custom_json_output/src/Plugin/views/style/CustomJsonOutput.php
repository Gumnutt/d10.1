<?php

namespace Drupal\custom_json_output\Plugin\views\style;

use Drupal\views\Plugin\views\style\StylePluginBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Style plugin to render views results as JSON.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "custom_json_output",
 *   title = @Translation("JSON"),
 *   help = @Translation("Render views results as JSON."),
 *   theme = "views_view_custom_json_output",
 *   display_types = {"normal"}
 * )
 */
class CustomJsonOutput extends StylePluginBase {

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['json_keys'] = ['default' => []];
    return $options;
  }
  

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
  
    $fields = $this->displayHandler->getOption('fields');
    foreach ($fields as $field => $info) {
      $form['json_keys'][$field] = [
        '#type' => 'textfield',
        '#title' => $this->t('JSON key for @field', ['@field' => $field]),
        '#default_value' => isset($this->options['json_keys'][$field]) ? $this->options['json_keys'][$field] : $field,
      ];
    }
  }
  

  /**
   * {@inheritdoc}
   */
  public function render() {
    $results = $this->view->result;
    $fields = $this->view->field;
    $rows = [];
  
    foreach ($results as $row) {
      $rowData = [];
  
      foreach ($fields as $field_name => $field) {
        $json_key = isset($this->options['json_keys'][$field_name]) ? $this->options['json_keys'][$field_name] : $field_name;
        $rowData[$json_key] = $field->getValue($row);
      }
  
      $rows[] = $rowData;
    }
  
    return [
      '#theme' => 'views_view_custom_json_output',
      '#view' => $this->view,
      '#rows' => json_encode($rows),
    ];
  }
}
