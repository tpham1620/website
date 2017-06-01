<?php
    var_dump($_POST['newText']);
    $post_data = $_POST['newText'];
    $filename ="../data/about_des.txt";
    $handle = fopen($filename, "w");      
    if (!empty($post_data)) {   
        fwrite($handle, $post_data);  
    }
    fclose($handle);
?>