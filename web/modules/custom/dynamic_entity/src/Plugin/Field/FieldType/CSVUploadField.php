<?php

namespace Drupal\dynamic_entity\Plugin\Field\FieldType;

use Drupal\Core\Field\Plugin\Field\FieldType\EntityReferenceItem;

/**
 * Defines the 'CSVUploadField' entity field type.
 *
 * @FieldType(
 *   id = "csv_upload_field",
 *   label = @Translation("CSV upload field"),
 *   description = @Translation("A field containing a CSV file upload and a name."),
 *   category = @Translation("Custom"),
 *   default_widget = "csv_upload_widget",
 *   default_formatter = "csv_upload_formatter",
 *   list_class = "\Drupal\Core\Field\EntityReferenceFieldItemList",
 * )
 */
class CSVUploadField extends EntityReferenceItem {

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties = parent::propertyDefinitions($field_definition);

    $properties['file'] = DataDefinition::create('entity_reference')
      ->setLabel(t('CSV file'))
      ->setSetting('target_type', 'file')
      ->setRequired(TRUE);

    $properties['name'] = DataDefinition::create('string')
      ->setLabel(t('Name'))
      ->setRequired(TRUE);

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    $schema = parent::schema($field_definition);
    $schema['columns']['name'] = [
      'type' => 'varchar',
      'length' => 255,
      'not null' => FALSE,
    ];
    $schema['columns']['file'] = [
      'type' => 'int',
      'unsigned' => TRUE,
      'not null' => FALSE,
    ];
    return $schema;
  }
}
