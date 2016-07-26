<?php
require_once __DIR__ . '/output.php';
set_time_limit(0);
  function getDbConnectionPdo(){
$dsn = 'mysql:host=localhost;dbname=test';
$username = 'root';
$password = '';
$options = array(
    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
); 

try{
	$dbh = new PDO($dsn, $username, $password, $options);
	return $dbh;
}catch(PDOException $e)
           {
           echo "Connection failed: " . $e->getMessage();
           return null;
           }
   
 }

   $query = "select * from teams";

  $connection = getDbConnectionPdo();
  $statement = $connection->prepare($query);
  $statement->execute();

  $output=$statement->fetchAll(PDO::FETCH_ASSOC);
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