<?php

namespace Drupal\custom_migrate\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Sanitize process plugin to remove HTML tags and convert to UTF-8.
 *
 * @MigrateProcessPlugin(
 *   id = "sanitize_process"
 * )
 */
class SanitizeProcess extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    // Convert the value to UTF-8 (if it's not already).
    $value = mb_convert_encoding($value, 'UTF-8', 'auto');

    // Remove any HTML tags from the source data using strip_tags().
    return strip_tags($value);
  }

}
