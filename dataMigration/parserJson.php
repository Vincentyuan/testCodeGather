<?php
require_once __DIR__ . '/output.php';

// $string = file_get_contents(__DIR__."/json/colBallDriveExtra.json");
// $colBallDriveExtra = json_decode($string,true);

function getArrayByName($fileName){
  $file = $fileName.".json";
  global $filePath;
  $path = $filePath.$file;
  $string = file_get_contents($path);
  $arrays = json_decode($string,true);
  return $arrays;
}
 ?>
