<?php
require_once __DIR__ . '/output.php';
set_time_limit(0);
  function getDbConnection(){


	$servername = "localhost:3306";//"localhost";//
    $username =  "root";//"root"; //
    $password = "";
    $dbName = 'db327705_footo';
    $dsn = "mysql:dbname=$dbName;host=$servername";//"mysql:dbname=footo1;host=$servername;"; // db327705-dev
	   
	   
	/*   
       $servername = "db89209.sql-pro.online.net";//"db327705-footo.sql-pro.online.net";//"localhost";//
       $username =  "db89209";//"db327705_footo";//"root"; //
       $password = "footodev1";
       $dbname = "db327705_testdb";
       $dsn = "mysql:dbname=$dbname;host=$servername;";//"mysql:dbname=$username;host=$servername;";//"mysql:dbname=footo1;host=$servername;"; //
*/

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
		  echo 'create connection successful'."$dbName"." $dsn<br/>";
		  //echo $conn;
		  if($conn == null){
			  echo "object null";
		  }else
		  {
			 // echo $conn;
		  }
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
		$database = "db327705_footo";
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

?>
