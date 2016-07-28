<?php
function getDbConnection($useType){

// the server and the user name should
      $servername = "";
      $username = "";
      $password = "";
     switch ($userType) {
       case 'product':
         # code...
         $servername = "db327705-footo.sql-pro.online.net";//"localhost";//
         $username =  "db327705_footo";//"root"; //
         $password = "38Q55D=i7a";
         break;
       case 'dev':
         # code...
         break;
       case 'test':
         # code...
         break;

       default:
         # code...
         break;
     }


     $dsn = "mysql:dbname=$username;host=$servername;";//"mysql:dbname=footo1;host=$servername;"; //

//       echo "Start Connection";
//       echo "mysql:dbname=$username;host=$servername;";
//         echo "dsn is : $dsn";

     try {
         $conn = new PDO($dsn, $username, $password);
         // set the PDO error mode to exception
         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
         $conn->exec("set names 'utf8'");
         return $conn;
         }
     catch(PDOException $e)
         {
         echo "Connection failed: " . $e->getMessage();
//           return null;
         }
 }

 function getExactlyConnection(){

 }

 function excuteGroupSQL(){

 }


 ?>
