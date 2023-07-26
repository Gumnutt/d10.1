<?php

namespace Drupal\icon_global_alert\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides an icon global alert block.
 *
 * @Block(
 *   id = "global_alert",
 *   admin_label = @Translation("Icon global alert"),
 *   category = @Translation("Icon")
 * )
 */
class GlobalAlertBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'foo' => $this->t('Hello world!'),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['alert_content'] = [
      '#type' => 'text_format',
      '#title' => $this->t('Alert content'),
      '#default_value' => $this->configuration['alert_content']['value'] ?? '',
      '#format' => $this->configuration['alert_content']['format'] ?? 'full_html',
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $alert_content = $form_state->getValue('alert_content');
    $this->configuration['alert_content'] = [
      'value' => $alert_content['value'],
      'format' => $alert_content['format'],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $alert_content_value = $this->configuration['alert_content']['value'] ?? '';
    $alert_content_format = $this->configuration['alert_content']['format'] ?? 'full_html';

    return [
      '#theme' => 'icon__global_alert',
      '#alert_content' => [
        '#type' => 'processed_text',
        '#text' => $alert_content_value,
        '#format' => $alert_content_format,
      ]
    ];
  }

}
