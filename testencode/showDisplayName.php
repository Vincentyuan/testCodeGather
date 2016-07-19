<?php
require_once __DIR__ . '/output.php';
require_once __DIR__ . '/parserJson.php';
require_once __DIR__ . '/db.php';
$query = "select frName from output_cols";
  $connection = getDbConnection();
  $statement = $connection->prepare($query);
  $statement->execute();

  $output=$statement->fetchAll(PDO::FETCH_ASSOC);


	$response=null;
  $keyId = null;
	if($keyId == null)
		$response = $output;
	else {
		$response = null;
		$j = 0;
		foreach ($output as $o){
			//$response[$o[$keyId]] = $o;
			$response[$j] = $o;
			$j++;
		}

	}


	for($i = 0; $i<count($response);$i++){
		echo $response[$i]['frName'].'<br>';
	}

 ?>
