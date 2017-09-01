<?php
header('Content-Type: application/json');

$uploaded = array();

if(!empty($_FILES['file']['name'][0])) {
    foreach($_FILES['file']['name'] as $position => $name) {
        print_r($_FILES);
        if(move_uploaded_file($_FILES['file']['tmp_name'][$position], 'uploads/' . $name)){
            $uploaded[] = array(
            'name' => $name,
            'file' => 'uploads/' . $name
            );
        }
    }
}

echo json_encode($uploaded);