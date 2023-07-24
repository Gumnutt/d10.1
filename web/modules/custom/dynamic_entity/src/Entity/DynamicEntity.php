<?php

namespace Drupal\dynamic_entity\Entity;

use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\ContentEntityBase;

/**
 * Defines the DynamicEntity entity.
 *
 * @ContentEntityType(
 *   id = "dynamic_entity",
 *   label = @Translation("Dynamic Entity"),
 *   base_table = "dynamic_entity",
 *   entity_keys = {
 *     "id" = "id",
 *     "uuid" = "uuid"
 *   },
 * )
 */
class DynamicEntity extends ContentEntityBase {

  /**
   * Define base field definitions for the entity.
   *
   * @param \Drupal\Core\Entity\EntityTypeInterface $entity_type
   *   The entity type to add fields to.
   *
   * @return array
   *   Array of base field definitions.
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['id'] = BaseFieldDefinition::create('integer')
      ->setLabel(t('ID'))
      ->setDescription(t('The ID of the dynamic entity.'))
      ->setReadOnly(TRUE);

    $fields['uuid'] = BaseFieldDefinition::create('uuid')
      ->setLabel(t('UUID'))
      ->setDescription(t('The UUID of the dynamic entity.'))
      ->setReadOnly(TRUE);

    // Define additional fields here.

    return $fields;
  }
}
