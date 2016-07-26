<?php
// create json object to store the field should be handled during the multilanguage

// there are two object, first is about columns ,second is about the new tables.
//tables as key and  the fields in the tables should be take as array.
$columnsTextFieldJsonArray={
  "attack_or_defense_type":["name"],
  "cameras":["camera_type"],
  "cities":["city_name"],
  "countries":["name","iso_code"],



  "games":["title"],

  "game_types":["type","cup_stage"],
  "match_parts":["match_part_name"],
"output_cols":["displayName"],
  "player_position_type":["name"],
  "player_team_position_types":["name","short_name"],
  "seasons":["full_name"],
  "stadiums":["name","full_name"],

  "team_formation_types":["name"]

};
// field should be defined as varchar type with length 50
$columnsVarcharFieldJsonArray={

"end_sequence_event_types":["name"],
"event_types":["name"],
"foul_cost_type":["name"],
"game_context_types":["game_context_name"],
"output_bd_type":["bd_type"],
"output_cols":["field_name","filter_data","cell_filter"],
"pitch_area_x_types":["name"],
"pitch_area_y_types":["name"],
  "position_bd":["name"],
"start_sequence_event_types":["name"],
  "tv_channels":["name"],
"win_data_type":["data_type"]
// TODO:   "output_cols":[""]

};

//one array stored all the array name
$tableFieldJsionArray=[
  "players",
  "teams",


];

?>
