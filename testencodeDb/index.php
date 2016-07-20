<?php
function excuteSqlOriginal($sql,$ifReturn){

	//   $query = "select * from teams";

	$connection = getDbConnection();
	$statement = $connection->prepare($sql);
	$statement->execute();
  // $output=$statement->fetchAll(PDO::FETCH_ASSOC);

  // $connection = newConnection();
  // $output = $connection->query($query);

  // $GLOBALS['outputObj']->setObject($output,"output for last insert id","  get the data from database");
  // $GLOBALS['outputObj']->output();
  if ($ifReturn) {
  $output=$statement->fetchAll(PDO::FETCH_ASSOC);
    //mysql_close();
    return $output;
  }else {
    //mysql_close();
    return null;
  }


}

 ?>
