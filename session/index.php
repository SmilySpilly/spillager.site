<?php 
    
    session_start();

    if(isset($_SESSION['api'])){

        //Executing data from HTTPS
        $api = $_SESSION['api'];
        $uuid = $_SESSION['uuid'];

        // Including the Session structure
        include "includes/sessions.php";

    } else{
        header("location:../");
        exit();
    }