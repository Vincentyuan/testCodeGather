<?php
//GET THE FULL NAME AND SHORT NAME THEN RUN THE FUNCTIONS
$full_name = $_POST['full_name'];
$short_name = $_POST['short_name'];


if (IsNullOrEmptyString($full_name)&&IsNullOrEmptyString($short_name)) {
  //if both of them is not equal to null
  addNewLanguage($full_name,$short_name,"_".short_name);
  
}else {
  # code...
}

function IsNullOrEmptyString($question){
    return (!isset($question) || trim($question)==='');
}
?>
