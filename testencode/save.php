<?php
require_once __DIR__ . '/output.php';
require_once __DIR__ . '/parserJson.php';

$columnsDef =["colsSeqCore","colsSeqExtra","colsEventCoreExtra","colShotExtra",
"colCrossExtra","colBallDriveExtra","colPassExtra","colsTackleExtraFromSeqCore","colsHeaderExtraFromSeqCore","colsFoulAll"] ;
$statsColummsDef =["colBallDriveExtraStats","colCrossExtraStats","colPassExtraStats","colsEventCoreStats","colShotExtraStats"] ;
$statsBdColumnsDef = ["colsPlayerBd","colsTeamBd"];

save($columnsDef);
save($statsColummsDef);
save($statsColummsDef);


function save($files){
  for ($i=0; $i < count($files) ; $i++) {

    $outputColId = saveColumnsData($files[$i]);
    updateWinOutPutCols();

  }
}



function saveColumnsData($json_name){
//save in out_cols
  return $output_cols_id;
}
//need id from output_cols, win_data_type , output_bd_type
function updateWinOutPutCols(){


}
 ?>
