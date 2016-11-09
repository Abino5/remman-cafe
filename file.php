<?php
$filenameArray = array();
$path = $_GET['path'];
$handle = opendir(dirname(realpath(__FILE__)).'/img/'.$path);
    while($file = readdir($handle)){
        if($file !== '.' && $file !== '..'){
            array_push($filenameArray, "img/".$path."/".$file);
        }
    }
echo json_encode($filenameArray);
?>