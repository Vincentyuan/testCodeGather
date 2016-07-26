<?php

require_once __DIR__ . '/db.php';
  $query = "select * from teams";
  $connection = newConnection();
   $output = mysql_query($query);
  while($row = mysql_fetch_array($output))
   {
   echo $row['name'];
   echo "<br />";
   }
  
  mysql_close($connection);
  
  

?>