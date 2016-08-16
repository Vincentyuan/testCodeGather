<?php

$str = '{"arr":[5,8]}';

//$str = '{"arr":[5,8]}';
echo json_decode($str,true)['arr'][0];
echo $str[0];

?>