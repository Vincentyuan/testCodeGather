<?php
require_once __DIR__ . '/output.php';
set_time_limit(0);
  function getDbConnection(){

      //  $servername = "localhost";//"db327705-footo.sql-pro.online.net";//"localhost";//
      //  $username =  "root";//"db327705_footo";//"root"; //
      //  $password = "";
      //  $dbname = "testchine";
      //  $dsn = "mysql:dbname=$dbname;host=$servername;";//"mysql:dbname=$username;host=$servername;";//"mysql:dbname=footo1;host=$servername;"; //
       //
       $servername = "db89209.sql-pro.online.net";//"db327705-footo.sql-pro.online.net";//"localhost";//
       $username =  "db89209";//"db327705_footo";//"root"; //
       $password = "footodev1";
       $dbname = "db327705_testdb";
       $dsn = "mysql:dbname=$dbname;host=$servername;";//"mysql:dbname=$username;host=$servername;";//"mysql:dbname=footo1;host=$servername;"; //



//       echo "Start Connection";
//       echo "mysql:dbname=$username;host=$servername;";
//         echo "dsn is : $dsn";

       try {
           $conn = new PDO($dsn, $username, $password);
           // set the PDO error mode to exception
           $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //   $conn->exec("set charcter set 'utf8'");
           $conn->exec("set names 'utf8'");
          // mysql_query("set charcter set 'utf8'");
          // mysql_query("set names 'utf8'");
           return $conn;
           }
       catch(PDOException $e)
           {
           echo "Connection failed: " . $e->getMessage();
           return null;
           }
   }
   function newConnection(){
	  //  $servername = "db89209.sql-pro.online.net";
		// $username = "db89209";
		// $password = "footodev1";
		// $database = "db327705_testdb";

    $servername = "localhost";
		$username = "root";
		$password = "";
		$database = "testchine";
	//	Create connection
		try{
			$conn =  mysql_connect($servername, $username, $password);
			mysql_query("set character set 'utf8'");//
			mysql_query("set names 'utf8'");//
			mysql_select_db($database,$conn);
			return $conn;
		}
		catch(PDOException $e){
			echo "connection failed:".$e->getMessage();
			return null;
		}


   }


  $query = "select * from teams";

  $connection = getDbConnection();
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




  // $connection = newConnection();
  // $output = mysql_query($query);
  // while($row = mysql_fetch_array($output))
  // {
  // echo $row['name'];
  // echo "<br />";
  // }
  //
  // mysql_close($connection);
  //
  //




?>
