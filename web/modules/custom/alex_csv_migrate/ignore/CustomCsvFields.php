<?php

namespace Drupal\alex_csv_migrate\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;

/**
 * Adds custom CSV fields dynamically to the migration process.
 *
 * @MigrateProcessPlugin(
 *   id = "custom_csv_fields"
 * )
 */
class CustomCsvFields extends ProcessPluginBase {
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    $columns = $this->configuration['columns'];
    $field_values = [];
    foreach ($columns as $column) {
      $field_name = 'field_' . $column;
      $field_value = $row->getSourceProperty($column);
      $field_values[$field_name] = [
        'plugin' => 'custom_csv_source',
        'source' => $column,
      ];
    }
    return $field_values;
  }
}
