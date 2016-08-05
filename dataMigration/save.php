<?php

/*
由于傻逼老板的原因，saveColumnsDef($columnsDef);
saveStatsColumnsDef($statsColumnsDef);可以用displayname and field name ， cellfilter 作为主键来保存数据，

而最后一个
saveBdColumnsDef($statsBdColumnsDef); 则不能，因为这里并没有cellfilter，我真是日了狗了。

重写一个专门的save函数给最后一个。

*/
require_once __DIR__ . '/output.php';
require_once __DIR__ . '/parserJson.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/jsonFileMapping.php';
require_once __DIR__ . '/objectMapping.php';

set_time_limit(0);
$outputObj = new phpOutput();
// $GLOBALS['outputObj']->setObject($newid,"output for newids","  get the data from database");
// $GLOBALS['outputObj']->output();


saveColumnsDef($columnsDef);
saveStatsColumnsDef($statsColumnsDef);
//different
saveBdColumnsDef($statsBdColumnsDef);

// saveTest("test");

function saveColumnsDef($columnsDef){
  for($i=0;$i<count($columnsDef);$i++){
    $jsonData=getArrayByName($columnsDef[$i]);

    $output_cols_ids = save($jsonData);
    updateWinOutPutCols($output_cols_ids,$columnsDef[$i],1);
  }
}


function saveStatsColumnsDef($statsColumnsDef){

  for($i=0;$i<count($statsColumnsDef);$i++){
    $jsonData=getArrayByName($statsColumnsDef[$i]);

    $output_cols_ids = save($jsonData);

    updateWinOutPutCols($output_cols_ids,$statsColumnsDef[$i],4);
  }
}


function saveBdColumnsDef($statsBdColumnsDef){




  for($i=0;$i<count($statsBdColumnsDef);$i++){
    $jsonData=getArrayByName($statsBdColumnsDef[$i]);

    $GLOBALS['outputObj']->setObject($jsonData,"jsondata","json data for $statsBdColumnsDef[$i] ");
    $GLOBALS['outputObj']->output();

    $output_cols_ids = saveBd($jsonData);
    updateWinOutPutCols($output_cols_ids,$statsBdColumnsDef[$i],3);
  }
}

function saveTest($json){

    $jsonData=getArrayByName($json);

    $output_cols_ids = save($jsonData);

    updateWinOutPutCols($output_cols_ids,$json,3);

}

function save($files){

  $ids = [];
  for ($i=0; $i < count($files) ; $i++) {

    $newid = saveColumnsData($files[$i]);
    if (!IsNullOrEmptyString($newid)) {
      array_push($ids,$newid);
    }
  }

  return $ids;
}

function saveBd($files){


  $ids = [];
  for ($i=0; $i < count($files) ; $i++) {

    //$newid = saveColumnsData($files[$i]);
    $json_obj = $files[$i];

    $cloumnsData = formatObj($json_obj);

    $GLOBALS['outputObj']->setObject(!isExistBd($cloumnsData),"exist or not ","exist or not");
    $GLOBALS['outputObj']->output();

     if (!isExistBd($cloumnsData)) {
        $sql = generateInsertSQL($cloumnsData);
        excuteSQL($sql,false);
      }
    $newid = getNewIdBd($cloumnsData['displayName'],$cloumnsData['field'],$cloumnsData['engName'],$cloumnsData['cellFilter']);

    $GLOBALS['outputObj']->setObject($newid,"newid","new id");
    $GLOBALS['outputObj']->output();
    if (!IsNullOrEmptyString($newid)) {
      array_push($ids,$newid);
    }
  }

  return $ids;
}




function saveColumnsData($json_obj){

  //first save ,then run function get id to return.
  $cloumnsData = formatObj($json_obj);
 if (!isExist($cloumnsData)) {
    $sql = generateInsertSQL($cloumnsData);

    //$output_cols_id=getNewId($files.displayName,$files.field);

    // $output = new phpOutput();
    // $output->setObject($sql,"sql","sql sentence");
    // $output->output();

    excuteSQL($sql,false);
  }
   $newid = getNewId($cloumnsData['displayName'],$cloumnsData['field'],$cloumnsData['engName'],$cloumnsData['cellFilter']);
  //  $newid = getLastInsertId();
  //  $GLOBALS['outputObj']->setObject($newid,"newid"," every insert id sql statement");
  //  $GLOBALS['outputObj']->output();
   //$newid = getLastInsertId();

   return $newid;


}


function getNewId($displayName,$field,$engName,$cellFilter){
  $getIdSql= generateGetidSql($displayName,$field,$engName,$cellFilter);
  return $getIdSql;
}
function getNewIdBd($displayName,$field,$engName,$cellFilter){

  $sql = 'select col_id from output_cols where displayName="'.$displayName.'"and fieldName ="'.$field.'" and engName ="'.$engName.'"';

  $newid = excuteSQL($sql,true);

//  $getIdSql= generateGetidSql($displayName,$field,$engName,$cellFilter);
  return $newid;
}
//
// function getLastInsertId(){
//
//   $sql = 'SELECT LAST_INSERT_ID();';
//
//   $newid = excuteSQL($sql,true);
//
//   //return $newid;
//   // $GLOBALS['outputObj']->setObject(mysql_insert_id(),"output for last insert id","  get the data from database");
//   // $GLOBALS['outputObj']->output();
//   return mysql_insert_id() ;
// }


//need id from output_cols, win_data_type , output_bd_type
function updateWinOutPutCols($output_cols_ids,$jsonName,$output_bd_type_id){
//col_ids , get id from the insert output_cols.
//$jsonName --- > win_id according to the final function write the logical.


  $win_ids = getWinIdByJsonName($jsonName);
  //according to the file name , determine the win_id.


  for($i = 0;$i < count($output_cols_ids);$i++){

    for ($j=0; $j < count($win_ids); $j++) {
      $sql = generateInsertWinOutputCols($output_cols_ids[$i],$win_ids[$j],$output_bd_type_id);
      excuteSQL($sql,false);
    }

  }


}



function generateInsertSQL($columnsData){


  //database should also changed , filtercellfiltered and sortCellFiltered can be removed。
  // $keys = ['displayName',"field","filterData","cellFilter","filterCellFiltered","sortCellFiltered","width","frName","engName","engDesc","frDesc"];
  //
  // $output = new phpOutput();
  // $output->setObject($columnsData,"columnsData","get the property");
  // $output->output();

  $sql = 'insert into output_cols (displayName,fieldName,
    filterData,cellFilter,filterCellFiltered,sortCellFiltered,
    width,frName,engName,engDesc,frDesc,chName,filter,cellClass,filterCondition,
    visible,treeAggregationType,customTreeAggregationFinalizerFn,chDesc)VALUES ("'.
    $columnsData['displayName'].'","'.
    $columnsData['field'].'","'.
    $columnsData['filterData'].'","'.
    $columnsData['cellFilter'].'","'.
    $columnsData['filterCellFiltered'].'","'.
    $columnsData['sortCellFiltered'].'","'.
    $columnsData['width'].'","'.
    $columnsData['frName'].'","'.
    $columnsData['engName'].'","'.
    $columnsData['engDesc'].'","'.
    $columnsData['frDesc'].'","'.
	$columnsData['chName'].'","'.
  $columnsData['filter'].'","'.
  $columnsData['cellClass'].'","'.
  $columnsData['filterCondition'].'","'.
  $columnsData['visible'].'","'.
  $columnsData['treeAggregationType'].'","'.
  $columnsData['customTreeAggregationFinalizerFn'].'","'.
	$columnsData['chDesc'].'")';


  return $sql;
}

function generateInsertWinOutputCols($col_id,$win_id,$output_bd_type_id){
  return 'insert into win_output_cols (col_id,win_id,
output_bd_type_id) VALUES ("'.$col_id.'","'.$win_id.'","'.$output_bd_type_id.'")';

}

function generateGetidSql($displayName,$field,$engName,$cellFilter){
  // displayName and fieldname and engname,cell filter
  $sql = 'select col_id from output_cols where displayName="'.$displayName.'"and fieldName ="'.$field.'" and engName ="'.$engName.'" and cellFilter = "'.$cellFilter.'"';

  $newid = excuteSQL($sql,true);

  return $newid;

}
// if insert without return values
function excuteSQL($sql,$ifReturn){//if has return value ,ture
  //$connection = getDbConnection();


  $output = excuteSqlOriginal($sql,$ifReturn);

  // $GLOBALS['outputObj']->setObject($output,"output for output","  get the data from database");
  // $GLOBALS['outputObj']->output();

  if($ifReturn){// return col_id

    if($output === NULL){
      return "";
    }else {

      // $GLOBALS['outputObj']->setObject($output,"output for newids","  get the data from database");
      // $GLOBALS['outputObj']->output();
      if (count($output) > 0) {
        return $output[0]['col_id'];
      }else {
        return "";
      }

    }

  }else{ //used insert
    return "";
  }

}

function formatObj($obj){
  // ($columnsData->displayName,$columnsData->field,
  // $columnsData->filterData,$columnsData->cellFilter,$columnsData->filterCellFiltered,$columnsData->sortCellFiltered,
  // $columnsData->width,$columnsData->frName,$columnsData->engName,$columnsData->engDesc,
  // $columnsData->frDesc)
  $keys = ['displayName',"field","filterData","cellFilter","filterCellFiltered",
  "sortCellFiltered","width","frName","engName","engDesc","frDesc","filter",
  "cellClass","filterCondition","visible","customTreeAggregationFinalizerFn","treeAggregationType"];

  for ($i=0; $i < count($keys); $i++) {
    if (!isset($obj[$keys[$i]])) {
        $obj[$keys[$i]] = "";
    }
  }

  return $obj;

}

function isExist($columnsData){

  $checkExistSql = 'select col_id from output_cols where displayName="'.$columnsData["displayName"].
  '"and fieldName ="'.$columnsData["field"].'" and engName ="'.$columnsData["engName"].'" and cellFilter = "'.$columnsData["cellFilter"].'"';
  $id = excuteSQL($checkExistSql,true);
  //if exist ?
  if (!IsNullOrEmptyString($id)) {
    return true;
  }else {
    return false;
  }
}
function isExistBd($columnsData){

  $checkExistSql = 'select col_id from output_cols where displayName="'.$columnsData["displayName"].
  '"and fieldName ="'.$columnsData["field"].'" and engName ="'.$columnsData["engName"].'"';
  $id = excuteSQL($checkExistSql,true);
  //if exist ?
  if (!IsNullOrEmptyString($id)) {
    return true;
  }else {
    return false;
  }
}

function IsNullOrEmptyString($question){
    return (!isset($question) || trim($question)==='');
}


 ?>
