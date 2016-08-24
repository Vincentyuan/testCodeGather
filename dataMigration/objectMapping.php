<?php

function getWinIdByJsonName($jsonName){


// 0 sequences 1 passes  2 ballDrives  3 shots  4 crosses  5 throwIn  6 tackles
// 7 headers  8 fouls  9 blocks  10 corners  11 penalties  12 freeKicks
// 13 events  14 pitch3d  15 pitch2d  16 analytics2d  17 playersstats

// according to the table win_data_type, there are several type of window type data. here the id should be win_data_type_id
  $win_data_type_ids = [];
  switch ($jsonName) {


    case 'colsSeqCore':
      # code...
      //$wintypes=[0,6,7,3,2,4,1,5]; // the win_id
	  $wintypes=[1,7,8,4,3,5,2,6];
      foreach ($wintypes as $key => $value) {
        # code...

        array_push($win_data_type_ids,$value);
      }

      break;
    case 'colsSeqExtra':
      # code...
      array_push($win_data_type_ids,1);
      break;
    case 'colsEventCoreExtra':
      # code...
      //$wintypes = [3,2,4,1,5];
	  $wintypes = [4,3,5,2,6];
      foreach ($wintypes as $key => $value) {
        # code...
         // $value+=1; // convert to win_data_type_id
        array_push($win_data_type_ids,$value);
      }

      break;
    case 'colShotExtra':
      # code...
      array_push($win_data_type_ids,4);
      break;
    case 'colCrossExtra':
      # code...

      array_push($win_data_type_ids,5);
      break;
    case 'colBallDriveExtra':
      # code...

      array_push($win_data_type_ids,3);
      break;
    case 'colPassExtra':
      # code...
      array_push($win_data_type_ids,2);
      array_push($win_data_type_ids,6);
      break;
    case 'colsTackleExtraFromSeqCore':
      # code...
      array_push($win_data_type_ids,7);
      break;
    case 'colsHeaderExtraFromSeqCore':
      # code...
      array_push($win_data_type_ids,8);
      break;

    case 'colsInterceptionAll':
      # code...
      array_push($win_data_type_ids,9);
	  array_push($win_data_type_ids,10);
      break;
    case 'colsFoulExtra':
      # code...
      array_push($win_data_type_ids,9);
      break;

    case 'colsAllEvents':
       # code...
       array_push($win_data_type_ids,14);
       break;
//statsColumnsDef
    case 'colsEventCoreStats':
      # code...
      //$wintypes = [3,2,4,1];
	  $wintypes = [4,3,5,2];
      foreach ($wintypes as $key => $value) {
        # code...
        //$value+=1; // convert to win_data_type_id
        array_push($win_data_type_ids,$value);
      }

      break;
    case 'colShotExtraStats':
      # code...
      array_push($win_data_type_ids,4);
      break;
    case 'colCrossExtraStats':
      # code...

      array_push($win_data_type_ids,5);
      array_push($win_data_type_ids,2);
      break;
    case 'colBallDriveExtraStats':
      # code...

      array_push($win_data_type_ids,3);
      break;
    case 'colPassExtraStats':
      # code...

      array_push($win_data_type_ids,2);
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

	case 'colsFitnessBd':

		array_push($win_data_type_ids,33);
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
