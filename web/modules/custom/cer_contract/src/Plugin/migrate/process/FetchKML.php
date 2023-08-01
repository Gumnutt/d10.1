<?php

namespace Drupal\cer_contract\Plugin\migrate\process;

use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
use Drupal\file\Entity\File;
use GuzzleHttp\Client;
use Drupal\Core\File\FileSystemInterface;

/**
 * Fetches a KML file from a URL.
 *
 * @MigrateProcessPlugin(
 *   id = "fetch_kml"
 * )
 */
class FetchKML extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    // if value is not empty
    if (empty($value)) {
      return NULL;
    }

    $client = new Client();
    $response = $client->get($value);
    if ($response->getStatusCode() != 200) {
      throw new \Exception('Failed to fetch KML file: ' . $value);
    }

    // Ensure the directory exists.
    $directory = 'public://kml_files/';
    if (!\Drupal::service('file_system')->prepareDirectory($directory, FileSystemInterface::CREATE_DIRECTORY)) {
      throw new \Exception('Failed to create directory: ' . $directory);
    }

    // Save the KML data to a file.
    $kml_data = (string) $response->getBody();
    $file_uri = $directory . basename($value);
    file_put_contents($file_uri, $kml_data);

    // Create a File entity.
    $file = File::create([
      'uri' => $file_uri,
      'status' => 1,
    ]);
    $file->save();

    // Return the File entity ID.
    return $file->id();
  }
}
