<?php

namespace Drupal\alex_csv_migrate\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;

/**
 * Sanitize process plugin to remove HTML tags from the source data.
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
    // Remove any HTML tags from the source data using strip_tags().
    return strip_tags($value);
  }

}
