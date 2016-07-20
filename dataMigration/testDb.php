<?php
require_once __DIR__ . '/output.php';
require_once __DIR__ . '/db.php';


  $query = "select * from teams";

  $connection = getDbConnection();
  $statement = $connection->prepare($query);
  $statement->execute();

  $output=$statement->fetchAll(PDO::FETCH_ASSOC);


/*   $connection = newConnection();
  $output = $connection->query($query);
   */


	$response=null;
	$keyId = 'name';
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


	$output = new phpoutput();
	$output->setObject($response,"response","test readdata");
	$output->output();

	for($i = 0; $i<count($response);$i++){
		echo $response[$i]['name'].'<br>';
	}


 ?>
