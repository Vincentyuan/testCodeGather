<?php



  function getDbConnection(){

       $servername = "db327705-footo.sql-pro.online.net";//"localhost";//
       $username =  "db327705_footo";//"root"; //
       $password = "38Q55D=i7a";
       $dsn = "mysql:dbname=$username;host=$servername;";//"mysql:dbname=footo1;host=$servername;"; //

//       echo "Start Connection";
//       echo "mysql:dbname=$username;host=$servername;";
//         echo "dsn is : $dsn";

       try {
           $conn = new PDO($dsn, $username, $password);
           // set the PDO error mode to exception
           $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           return $conn;
           }
       catch(PDOException $e)
           {
           echo "Connection failed: " . $e->getMessage();
//           return null;
           }
   }

    function closeConnection($conn){
        $conn = null;
    }

function getStaticData($connec){

        $res["eventTypes"] = selectByConditionFromTable($connec, "event_types", "", null, null);//if last param null => get array in js
        $res["endEventTypes"] = selectByConditionFromTable($connec, "end_sequence_event_types", "", null, null);
        $res["startEventTypes"] = selectByConditionFromTable($connec, "start_sequence_event_types", "", null, null);
    //            $res["attackAreaTypes"] = selectByConditionFromTable($connec, "goal_attacking_area_types", "", null, null);
        $res["xAreaTypes"] = selectByConditionFromTable($connec, "pitch_area_x_types", "", null, null);
        $res["yAreaTypes"] = selectByConditionFromTable($connec, "pitch_area_y_types", "", null, null);
        $res["gameContextTypes"] = selectByConditionFromTable($connec, "game_context_types", "", null, null);

    //            $res["teams"] = selectByConditionFromTable($connec, "teams", "", null);
    //            $res["PlayerBdCols"] = selectColumnsNameFromTable($connec, "player_bd_$gameId");
     return $res;
}
 function getGameDetailsCore($connec, $game, $withStaticData){
   return getGameDetailsOrProp($connec, $game, true, $withStaticData);
}

   function getGameDetailsOrProp($connec, $game, $withEventData, $withStaticData){

    $res = Array();
    if($withStaticData){
        $res["eventTypes"] = selectByConditionFromTable($connec, "event_types", "", null, null);//if last param null => get array in js
        $res["endEventTypes"] = selectByConditionFromTable($connec, "end_sequence_event_types", "", null, null);
        $res["startEventTypes"] = selectByConditionFromTable($connec, "start_sequence_event_types", "", null, null);
    //            $res["attackAreaTypes"] = selectByConditionFromTable($connec, "goal_attacking_area_types", "", null);
        $res["xAreaTypes"] = selectByConditionFromTable($connec, "pitch_area_x_types", "", null, null);
        $res["yAreaTypes"] = selectByConditionFromTable($connec, "pitch_area_y_types", "", null, null);
        $res["gameContextTypes"] = selectByConditionFromTable($connec, "game_context_types", "", null, null);
        $res["foulCostType"] = selectByConditionFromTable($connec, "foul_cost_type", "", null, null);

    //            $res["teams"] = selectByConditionFromTable($connec, "teams", "", null, null);
    //            $res["PlayerBdCols"] = selectColumnsNameFromTable($connec, "player_bd_$gameId");
     }
        if($game == null || empty($game))
            return $res;

        $res["game"] = $game;

        $homeTeamId = $res["game"]["home_team_id"];
        $awayTeamId = $res["game"]["away_team_id"];
        $gameId = $res["game"]["game_id"];
        $stadiumId = $res["game"]["stadium_id"];
        $path = $res["game"]["videos_path"];
        $path = formatPathDefault($path);

        if($withEventData){
          $res["data"]["sequences"] = selectByConditionFromTable($connec, "sequences_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["passes"] = selectByConditionFromTable($connec, "pass_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["ballDrives"] = selectByConditionFromTable($connec, "ball_drive_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["crosses"] = selectByConditionFromTable($connec, "cross_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["shots"] = selectByConditionFromTable($connec, "shot_bd", "WHERE game_id = $gameId", null, null);

          $res["data"]["throwIn"] = selectByConditionFromTable($connec, "	throw_in_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["tackles"] = selectByConditionFromTable($connec, "tackle_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["headers"] = selectByConditionFromTable($connec, "header_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["fouls"] = selectByConditionFromTable($connec, "foul_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["blocks"] = selectByConditionFromTable($connec, "block_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["corners"] = [] ;//selectByConditionFromTable($connec, "corner_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["penalties"] = [];//selectByConditionFromTable($connec, "penalty_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["freeKicks"] = [];//selectByConditionFromTable($connec, "freekick_bd", "WHERE game_id = $gameId", null, null);

          $res["data"]["allEvents"] = selectByConditionFromTable($connec, "events_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["teamStatsBd"] = selectByConditionFromTable($connec, "team_bd", "WHERE game_id = $gameId", null, null);
          $res["data"]["playerStatsBd"] = selectByConditionFromTable($connec, "player_bd", "WHERE game_id = $gameId", null, null);
        }


//        $res["seqEvents"] = selectByConditionFromTable($connec, "events_bd", "WHERE game_id = $gameId", null, null);
        $res["homeTeam"] = selectOneByConditionFromTable($connec, "teams", "WHERE team_id = $homeTeamId");
        $res["awayTeam"] = selectOneByConditionFromTable($connec, "teams", "WHERE team_id = $awayTeamId");

        //game players
       $res["gamePlayers"] = selectByConditionFromTable($connec, "game_players", "WHERE game_id = $gameId", "player_id", null);


         $res["stadium"] = selectOneByConditionFromTable($connec, "stadiums", "WHERE stadium_id = $stadiumId");

        $res["homePlayers"] = selectByConditionFromTable($connec, "players", "WHERE player_id in (SELECT player_id FROM game_players WHERE game_id = $gameId AND team_id = $homeTeamId)", "player_id", null);
        $res["awayPlayers"] = selectByConditionFromTable($connec, "players", "WHERE player_id in (SELECT player_id FROM game_players WHERE game_id = $gameId AND team_id = $awayTeamId)", "player_id", null);

        $res["rootPath"] =  $path; //formatPath($path, $DirSep);
        // $phpdate = strtotime( $res["game"]["date"] );
        // $dateStr = date( 'd-m-Y', $phpdate );
        $res["shortTitle"] = $res["homeTeam"]["alpha_code"]." - ".$res["awayTeam"]["alpha_code"];//." ".$dateStr. $res["game"]["date"];


        return $res;
    }

    function selectByConditionFromTable($connec, $table, $condition, $keyId, $cols){
        if($cols == null)
            $cols ="*";
        $queryStr = "SELECT $cols FROM $table $condition";

      //  error_log($queryStr);
        $statement=$connec->prepare($queryStr);
        $statement->execute();
        $output=$statement->fetchAll(PDO::FETCH_ASSOC);
        if($keyId == null)
            return $output;
        else {
            $response = null;
            foreach ($output as $o){
                $response[$o[$keyId]] = $o;
            }
            return $response;
        }

    }

   function selectColsByConditionFromTable($connec, $table, $cols, $condition, $keyId){

        $queryStr = "SET SQL_BIG_SELECTS=1";
        $statement=$connec->prepare($queryStr);
        $statement->execute();

        $queryStr = "SELECT $cols FROM $table $condition";
        // error_log($queryStr);
        $statement=$connec->prepare($queryStr);
        $statement->execute();
        $output=$statement->fetchAll(PDO::FETCH_ASSOC);
        if($keyId == null)
            return $output;
        else {
            $response = null;
            foreach ($output as $o){
                $response[$o[$keyId]] = $o;
            }
            return $response;
        }

    }

    function selectColumnsNameFromTable($connec, $table){
        $queryStr = "SHOW COLUMNS FROM $table";
        $statement=$connec->prepare($queryStr);
        $statement->execute();
        $output=$statement->fetchAll(PDO::FETCH_ASSOC);
        return $output;
    }


    function selectOneByConditionFromTable($connec, $table, $condition){

    $results = selectByConditionFromTable($connec, $table, $condition, null, null);
    $data = reset( $results);
    if($data == false){
        echo("Could not find any data in table : $table, with condition : $condition");
        return null;
    }
    else return $data;
    }



    function getDataFromTable($connec, $gameId, $ht, $frame0, $frame1, $table, $order, $byFrameArray){
        $framePack = $frame1 - $frame0;
        $queryStr = "SELECT * FROM $table WHERE game_id = $gameId AND halftime = $ht AND frame BETWEEN $frame0 AND $frame1 $order";
//        echo("select query is : $queryStr");

        $response = null;

        $statement = $connec->prepare($queryStr);
        $statement->execute();
        $output=$statement->fetchAll(PDO::FETCH_ASSOC);
        if($byFrameArray) {
           //$output = $result->fetchall();
            foreach ($output as $o){
               $response[$o['frame'] - $frame0] = $o;
            }
        }
        return $response;
       // $json=json_encode($results);

    }

 function getPlayerDataFromTable($connec, $gameId, $ht, $teamId, $frame0, $frame1, $table){
        $queryStr = "SELECT * FROM $table WHERE game_id = $gameId AND halftime = $ht AND team_id = $teamId AND frame BETWEEN $frame0 AND $frame1 ORDER BY frame, player_id";
//        echo("select query is : $queryStr");
//  error_log( $queryStr);

        $statement=$connec->prepare($queryStr);
        $statement->execute();
        $output=$statement->fetchAll(PDO::FETCH_ASSOC);
//          error_log(  print_R($output));
        $response = null;
           //$output = $result->fetchall();
            foreach ($output as $o){
               $response[$o['frame'] - $frame0][$o['player_id']] = $o;
            }

        return $response;
       // $json=json_encode($results);

    }

?>
