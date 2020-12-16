   <?php
   
    $dsn = "your database info";
    $user = "your database user";
    $pass = "your database password";
    $option= array(
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
    );

    try{
        $con= new PDO($dsn, $user,$pass,$option);
        $con->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
    }
    catch(PDOException $e){
        echo "You've failed: " . $e->getmessage();
    }