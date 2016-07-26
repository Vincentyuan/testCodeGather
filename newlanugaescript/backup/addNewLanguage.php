<?php
//used to update table structure while add a new language.

//language name , language short name , language suffix
function addNewLanguage($lang_name, $lang_short,$lang_suffix){
  //insert the data to footolanguage file which contains all the languges.

  // all the three field should not be the same .


  $newLangAlterArray = array();

  array_push($newLangAlterArray,getAlterSQL("footolanguage",$lang_name));
  array_push($newLangAlterArray,getAlterSQL("footolanguage",$lang_short));
  array_push($newLangAlterArray,getAlterSQL("footolanguage",$lang_suffix));

  excuteGroupSQL($newLangAlterArray);

}


function updateDatabaseAccordingLanguage($lang_Name){
// according to $lang_name fetch data with funcion from language table.
$conn = getDbConnection();
$langData = selectByConditionFromTable($conn,"footolanguage","where lang_name =$lang_Name","","");

$lang_name = $langData["lang_name"];
$lang_short = $langData["lang_short"];
$lang_suffix = $langData["lang_suffix"];
//next is to check columns exist and  then insert in the new columns and default value.

/*
1.check exist
2.if exist abandon, popup message ,if not alter new columns
3.set default value .
*/
$alterArray = getAlterGroupSQL($lang_short,$lang_suffix); //store all the alter statement here.
//call getAlterSQL here

excuteGroupSQL($alterArray);



}

function getAlterGroupSQL($lang_short,$lang_suffix){
  $alterArray = [];

  array_push($alterArray,getColumnAddAlterSQL($lang_short));
  array_push($alterArray,getTableCreateSQL($lang_suffix));

  return $alterArray;
}

function checkColumnExist($tableName,$newFieldName){
  //first check table exist ,second check columns exist
  if (checkTableExist($tableName)) {
    // continue check columns
    if(mysql_num_rows(mysql_query("SHOW COLUMNS FROM $tableName LIKE '".$newFieldName."'"))==1)
        return ture;
    else
        return false;
  } else {
    return false;
  }


}
function checkTableExist($tableName){
  //first check table exist ,second check columns exist
  if(mysql_num_rows(mysql_query("SHOW TABLES LIKE '".$tableName."'"))==1)
      return ture;
  else
      return false;
}

function excuteGroupSQL($sqlArray){
  // apply the transaction to ensure all the statements should finished then take effect
  $conn = getDbConnection();

  try {
    // begin a transaction
    $conn->beginTransaction();

    // A set of queries; if one fails, an exception should be thrown
    foreach ($sqlArray as $key => $value) {
      $conn->query($value);
    }

    // If we arrive here, it means that no exception was thrown
    // i.e. no query has failed, and we can commit the transaction
    $conn->commit();
} catch (Exception $e) {
  // We must rollback the transaction
    $conn->rollback();
}

  closeConnection($conn);

}

function getColumnAddAlterSQL($lang_short){
  $columnsAddSQL=[];

//loop the json object

  foreach ($columnsTextFieldJsonArray as $table => $columns) {
    if (!checkColumnExist($table,$columns)) {
      addToArray($columnsAddSQL,getColumnAddAlterSQL($table,$columns,$lang_short));
    }

  }


  return $columnsAddSQL;
}
function generateFullAlterSQL($tableName,$columnName,$lang_short){
// the default value should be handle while read the database.
  $alterTableSql=[];

 $alterSql= "ALTER TABLE $tableName ADD $lang_short."_".$columnName  text COLLATE utf8mb4_unicode_ci NOT NULL  ";
 $updateSql="update $tableName set $lang_short."_".$columnName = $columnName ";
 addToArray($alterTableSql,$alterSql);
 addToArray($alterTableSql,$updateSql);
 return $alterTableSql;
}
function addToArray($original,$newElement){
  foreach ($$newElement as $key => $value) {
    if (!is_null($newElement)) {
      array_push($original,$value);
    } else {
      //do nothing
    }
  }


}

function getTableCreateSQL( $lang_suffix){
  //create tables sql.
//loop the json array
$tableCreateSQL = [];

foreach ($tableFieldJsionArray as $key => $value) {
  if (!checkTableExist($key)) {
    addToArray($tableCreateSQL,generateFullCreateSQL($value,$lang_suffix));
  }
}

return $tableCreateSQL;
}

function generateFullCreateSQL($tableName,$lang_suffix){
  //need to imporve.
  $createAndInitial=[];
  $newTableName = $tableName"."_".$lang_suffix.";
  $createTableSQL="CREATE TABLE $newTableName  LIKE $tableName";
  $insertDataSQL="INSERT INTO $newTableName SELECT * FROM $tableName";

  addToArray($createAndInitial,$createTableSQL);
  addToArray($createAndInitial,$insertDataSQL);

  return $createAndInitial;

}

?>
