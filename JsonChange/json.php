<?php

$connect = mysql_connect("localhost:3306","root","");
mysql_select_db("test", $connect);
$sql = "select * from test";
//$l = "d'accord";
//echo $l;
if($connect){
	$result =mysql_query($sql);
	//echo mysql_query($sql);
	//echo  json_encode($result);
	
	while($row = mysql_fetch_array($result))
  {
  echo json_encode(['name' => $row['NAME']]);
 
  }

}else
{
	//die('connect fail',mysql_error());
}
?>