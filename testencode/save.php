<?php
require_once __DIR__ . '/output.php';
require_once __DIR__ . '/parserJson.php';

$columnsDef =["colsSeqCore","colsSeqExtra","colsEventCoreExtra","colShotExtra",
"colCrossExtra","colBallDriveExtra","colPassExtra","colsTackleExtraFromSeqCore","colsHeaderExtraFromSeqCore","colsFoulAll"] ;
$statsColumnsDef =["colBallDriveExtraStats","colCrossExtraStats","colPassExtraStats","colsEventCoreStats","colShotExtraStats"] ;
$statsBdColumnsDef = ["colsPlayerBd","colsTeamBd"];

saveColumnsDef($columnsDef);
saveStatsColumnsDef($statsColumnsDef);
saveBdColumnsDef($statsBdColumnsDef);


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

    $output_cols_ids = save($jsonData);
    updateWinOutPutCols($output_cols_ids,$statsBdColumnsDef[$i],3);
  }
}

function save($files){
  $ids = [];
  for ($i=0; $i < count($files) ; $i++) {

    $newid = saveColumnsData($files[$i]);

    array_push($ids,newid);
  }

  return $ids;
}




function saveColumnsData($json_obj){

  //first save ,then run function get id to return.

  $sql = generateInsertSQL($json_obj);

  //$output_cols_id=getNewId($files.displayName,$files.field);

  excuteSQL($sql,false);



  return getNewId($json_obj->dislayName,$json_obj->field);
}

function getNewId($displayName,$field){
  $getIdSql= generateGetidSql($displayName,$field);
}


//need id from output_cols, win_data_type , output_bd_type
function updateWinOutPutCols($output_cols_ids,$jsonName,$output_bd_type_id){
//col_ids , get id from the insert output_cols.
//$jsonName --- > win_id according to the final function write the logical.


  $win_id = "";
  //according to the file name , determine the win_id.


  for($i = 0;$i < count($output_cols_ids);$i++){
    
    $sql = generateInsertWinOutputCols($output_cols_ids,$win_id,$output_bd_type_id);
    excuteSQL($sql,false);
  }


}



function generateInsertSQL($columnsData){

  //database should also changed , filtercellfiltered and sortCellFiltered 可以被移除。
  $sql = "insert into output_cols ('displayName','fieldName',
'filterData','cellFilter','filterCellFiltered','sortCellFiltered',
'width','frName','engName','engDesc','frDesc')VALUES ($columnsData->displayName,$columnsData->field,
$columnsData->filterData,$columnsData->cellFilter,$columnsData->filterCellFiltered,$columnsData->sortCellFiltered,
$columnsData->width,$columnsData->frName,$columnsData->engName,$columnsData->engDesc,
$columnsData->frDesc)";


  return $sql;
}

function generateInsertWinOutputCols($col_id,$win_id,$output_bd_type_id){
  return "insert into win_output_cols (col_id,win_id,
output_bd_type_id) VALUES ($col_id,$win_id,$output_bd_type_id)";

}

function generateGetidSql($displayName,$field){
  $sql = "select col_id from output_cols where displayName=$displayName and fieldName = $field";
  return excuteSQL($sql,ture);

}
// if insert without return values
function excuteSQL($sql,$ifReturn){//if has return value ,ture
  //$connection = getDbConnection();


  $output = excuteSqlOriginal($sql);

  if($ifReturn){// return col_id
    return $output['col_id'];
  }else{ //used insert
    return ;
  }

}
 ?>
