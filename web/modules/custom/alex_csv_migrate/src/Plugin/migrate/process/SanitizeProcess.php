<?php

namespace Drupal\alex_csv_migrate\Plugin\migrate\process;

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
   * The function takes a value, detects its current encoding, converts it to UTF-8 if necessary, and
   * then removes any HTML tags from the value.
   *
   * @param value The value to be transformed. It could be a string or any other data type.
   * @param MigrateExecutableInterface migrate_executable The  parameter is an
   * instance of the MigrateExecutableInterface interface. It provides methods for executing a migration,
   * such as running the migration process and handling rollback operations.
   * @param Row row The  parameter is an object that represents a single row of data being migrated.
   * It contains the values of the fields in the source data that are being migrated.
   * @param destination_property The destination property is the name of the property in the destination
   * entity where the transformed value will be stored.
   *
   * @return the value after removing any HTML tags using the strip_tags() function.
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    // Detect the current encoding of the value (if it's not already UTF-8).
    $current_encoding = mb_detect_encoding($value, 'auto');

    // Set a default encoding (e.g., ISO-8859-1) if the current encoding is not detected.
    $current_encoding = $current_encoding ?: 'ISO-8859-1';

    // Convert the value to UTF-8 (if it's not already).
    if ($current_encoding !== 'UTF-8') {
      $value = mb_convert_encoding($value, 'UTF-8', $current_encoding);
    }

    // Remove any HTML tags from the source data using strip_tags().
    return strip_tags($value);
  }

}
