<?php
require_once __DIR__ . '/output.php';
require_once __DIR__ . '/parserJson.php';

$columnsDef =["colsSeqCore","colsSeqExtra","colsEventCoreExtra","colShotExtra",
"colCrossExtra","colBallDriveExtra","colPassExtra","colsTackleExtraFromSeqCore","colsHeaderExtraFromSeqCore","colsFoulAll"] ;
$statsColumnsDef =["colBallDriveExtraStats","colCrossExtraStats","colPassExtraStats","colsEventCoreStats","colShotExtraStats"] ;
$statsBdColumnsDef = ["colsPlayerBd","colsTeamBd"];

// saveColumnsDef($columnsDef);
// saveStatsColumnsDef($statsColumnsDef);
// saveBdColumnsDef($statsBdColumnsDef);

saveTest("test");

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

function saveTest($json){

    $jsonData=getArrayByName($json);

    $output_cols_ids = save($jsonData);

    updateWinOutPutCols($output_cols_ids,$json,3);

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


  $win_id = getWinIdByJsonName($jsonName);
  //according to the file name , determine the win_id.


  for($i = 0;$i < count($output_cols_ids);$i++){

    $sql = generateInsertWinOutputCols($output_cols_ids,$win_id,$output_bd_type_id);
    excuteSQL($sql,false);
  }


}



function generateInsertSQL($columnsData){

  //database should also changed , filtercellfiltered and sortCellFiltered can be removed。
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

function getWinIdByJsonName($jsonName){


// 0 sequences 1 passes  2 ballDrives  3 shots  4 crosses  5 throwIn  6 tackles
// 7 headers  8 fouls  9 blocks  10 corners  11 penalties  12 freeKicks
// 13 events  14 pitch3d  15 pitch2d  16 analytics2d  17 playersstats

// according to the table win_data_type, there are several type of window type data. here the id should be win_data_type_id
  $win_data_type_ids = [];
  switch ($jsonName) {


    case 'colsSeqCore':
      # code...
      $wintypes=[0,6,7,3,2,4,1,5]; // the win_id
      foreach ($wintypes as $key => $value) {
        # code...
        $value+=1; // convert to win_data_type_id
        array_push($win_data_type_ids,$value);
      }

      break;
    case 'colsSeqExtra':
      # code...
      array_push($win_data_type_ids,0+1);
      break;
    case 'colsEventCoreExtra':
      # code...
      $wintypes = [3,2,4,1,5];
      foreach ($wintypes as $key => $value) {
        # code...
          $value+=1; // convert to win_data_type_id
        array_push($win_data_type_ids,$value);
      }

      break;
    case 'colShotExtra':
      # code...
      array_push($win_data_type_ids,3+1);
      break;
    case 'colCrossExtra':
      # code...

      array_push($win_data_type_ids,4+1);
      break;
    case 'colBallDriveExtra':
      # code...

      array_push($win_data_type_ids,2+1);
      break;
    case 'colPassExtra':
      # code...
      array_push($win_data_type_ids,1+1);
      array_push($win_data_type_ids,5+1);
      break;
    case 'colsTackleExtraFromSeqCore':
      # code...
      array_push($win_data_type_ids,6+1);
      break;
    case 'colsHeaderExtraFromSeqCore':
      # code...
      array_push($win_data_type_ids,7+1);
      break;

    case 'colsFoulAll':
      # code...
      array_push($win_data_type_ids,8+1);
      break;

//statsColumnsDef
    case 'colsEventCoreStats':
      # code...
      $wintypes = [3,2,4,1];
      foreach ($wintypes as $key => $value) {
        # code...
        $value+=1; // convert to win_data_type_id
        array_push($win_data_type_ids,$value);
      }

      break;
    case 'colShotExtraStats':
      # code...
      array_push($win_data_type_ids,3+1);
      break;
    case 'colCrossExtraStats':
      # code...

      array_push($win_data_type_ids,4+1);
      array_push($win_data_type_ids,1+1);
      break;
    case 'colBallDriveExtraStats':
      # code...

      array_push($win_data_type_ids,2+1);
      break;
    case 'colPassExtraStats':
      # code...

      array_push($win_data_type_ids,1+1);
      break;


      //statsBdColumnsDef
    case 'colsPlayerBd':
      # code...
      //array_push($win_ids,1);
      //??
      array_push($win_data_type_ids,31);
      break;
    case 'colsTeamBd':
      # code...
    //  array_push($win_ids,1);
    //??
    array_push($win_data_type_ids,32);
      break;

    case 'test':
      # code...
      array_push($win_data_type_ids,1000);
      break;
    default:
      # code...
      break;
  }

  return $win_data_type_ids;
}
 ?>
