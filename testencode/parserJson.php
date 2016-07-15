<?php
require_once __DIR__ . '/output.php';

// $string = file_get_contents(__DIR__."/json/colBallDriveExtra.json");
// $colBallDriveExtra = json_decode($string,true);

function getArrayByName($fileName){
  $file = $fileName.".json";
  $string = file_get_contents(__DIR__."/json/$file");
  $arrays = json_decode($string,true);
  return $arrays;
}
 ?>
