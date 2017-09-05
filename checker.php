<?php
$dir = './uploads/';
$files = scandir($dir);
$upfiles = array(); $i=0;
foreach($files as $key){
    if(substr($key,-3) == ".js"){
        $upfiles[$i] = $dir.$key;
        $i++;
    }
}
echo json_encode($upfiles);