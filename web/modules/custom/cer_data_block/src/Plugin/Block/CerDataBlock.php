<?php

namespace Drupal\cer_data_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a CER data block.
 *
 * @Block(
 *   id = "cer_data_block",
 *   admin_label = @Translation("CER Data Block"),
 *   category = @Translation("Custom"),
 * )
 */
final class CerDataBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'example' => $this->t('Hello world!'),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {

    $entity_id = $this->configuration['dataset_reference'] ?? NULL;

    $default_value = NULL;

    if ($entity_id) {
      $default_value = \Drupal::entityTypeManager()->getStorage('data_pipelines')->load($entity_id);
    }

    $form['dataset_reference'] = [
      '#type' => 'entity_autocomplete',
      '#target_type' => 'data_pipelines',
      '#selection_settings' => [
        'target_bundles' => ['csv:file'],
      ],
      '#title' => $this->t('Dataset reference'),
      '#default_value' => $default_value,
    ];
  
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state){
    $this->configuration['dataset_reference'] = $form_state->getValue('dataset_reference');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity_id = $this->configuration['dataset_reference'];
    
    $dataset = \Drupal::entityTypeManager()->getStorage('data_pipelines')->load($entity_id);
    $destinations = $dataset->getDestinations();

    foreach ($destinations as $d) { 
      $fileDir = $d->getDestinationSettings()['dir'];
      $file_path = 'public://' . $fileDir . '/' . $dataset->getMachineName() . '.json';
    }

    $file = file_get_contents($file_path);
    $data = json_decode($file, true);
  
    return [
      '#theme' => 'cer__data_block',
      '#json' => $data,
    ];
  }

}
