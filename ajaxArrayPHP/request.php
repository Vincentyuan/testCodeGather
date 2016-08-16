<?php

//receive data and then after several time return the data 

//require_once dirname(__DIR__).'\lib\ouput.php';

require_once dirname(__DIR__) . '/lib/output.php';


$outputObj = new phpOutput();

$outputObj->setObject($_GET,"_GET","get data");
$outputObj->output();

echo $_GET;
/*
$outputObj->setObject($_GET[0],"_GET[0]","get data");
$outputObj->output();
	$requestData = [] ;
	$convertGetData = "'".$_GET."'";
	
$outputObj->setObject($convertGetData,"converted data","get data");
$outputObj->output();

    foreach ($convertGetData as $key=>$value) {
      @$toJson=json_decode($key,true);

	  
$outputObj->setObject($toJson,"$key","get data");
$outputObj->output();


      if (!is_null($toJson)) {
        foreach ( $toJson as $key1 => $value1) {
          $requestData[$key1] = $value1;
        }
      }
    }

$outputObj->setObject($requestData,"requestData","use to test get array object");
$outputObj->output();
*/

?>