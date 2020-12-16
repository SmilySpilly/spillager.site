<?php 
    
    session_start();
    include "../db_connect.php";
    if(isset($_GET['action'])){
        if($_GET['action'] == "getDataInfo"){

            $player_uuid = $_SESSION['uuid'];

            $stmtmega = $con->prepare("SELECT * FROM weeklymega WHERE player_uuid = '$player_uuid'");
            $stmtmega->execute();
            $stmtmega = $stmtmega->fetchAll();

            $globalJson =[];
            
            $playerInfo = new \stdClass();
                    $playerInfo = new \stdClass();
                        $playerInfo = new \stdClass();
            $playerInfo = new \stdClass();
                $playerInfo = new \stdClass();

            foreach($stmtmega as $info){


                $playerInfo->sunday = $info['Sunday'];
                $playerInfo->monday = $info['Monday'];
                $playerInfo->tuesday = $info['Tuesday'];
                $playerInfo->wednesday = $info['Wednesday'];
                $playerInfo->thursday = $info['Thursday'];
                $playerInfo->friday = $info['Friday'];
                $playerInfo->saturday = $info['Saturday'];
               

                $playerInfo->sunday_w = $info['Sunday_w'];
                $playerInfo->monday_w = $info['Monday_w'];
                $playerInfo->tuesday_w = $info['Tuesday_w'];
                $playerInfo->wednesday_w = $info['Wednesday_w'];
                $playerInfo->thursday_w = $info['Thursday_w'];
                $playerInfo->friday_w = $info['Friday_w'];
                $playerInfo->saturday_w = $info['Saturday_w'];
                
                $playerInfo->sunday_d = $info['Sunday_d'];
                $playerInfo->monday_d = $info['Monday_d'];
                $playerInfo->tuesday_d = $info['Tuesday_d'];
                $playerInfo->wednesday_d = $info['Wednesday_d'];
                $playerInfo->thursday_d = $info['Thursday_d'];
                $playerInfo->friday_d = $info['Friday_d'];
                $playerInfo->saturday_d = $info['Saturday_d'];

                
                

            }

            $stmtoverall = $con->prepare("SELECT * FROM weeklyoverall WHERE player_uuid = '$player_uuid'");
            $stmtoverall->execute();
            $stmtoverall = $stmtoverall->fetchAll();

            foreach($stmtoverall as $info){

                $playerInfo->overall_sunday = $info['Sunday'];
                $playerInfo->overall_monday = $info['Monday'];
                $playerInfo->overall_tuesday = $info['Tuesday'];
                $playerInfo->overall_wednesday = $info['Wednesday'];
                $playerInfo->overall_thursday = $info['Thursday'];
                $playerInfo->overall_friday = $info['Friday'];
                $playerInfo->overall_saturday = $info['Saturday'];


                $playerInfo->overall_sunday_w = $info['Sunday_w'];
                $playerInfo->overall_monday_w = $info['Monday_w'];
                $playerInfo->overall_tuesday_w = $info['Tuesday_w'];
                $playerInfo->overall_wednesday_w = $info['Wednesday_w'];
                $playerInfo->overall_thursday_w = $info['Thursday_w'];
                $playerInfo->overall_friday_w = $info['Friday_w'];
                $playerInfo->overall_saturday_w = $info['Saturday_w'];

                $playerInfo->overall_sunday_d = $info['Sunday_d'];
                $playerInfo->overall_monday_d = $info['Monday_d'];
                $playerInfo->overall_tuesday_d = $info['Tuesday_d'];
                $playerInfo->overall_wednesday_d = $info['Wednesday_d'];
                $playerInfo->overall_thursday_d = $info['Thursday_d'];
                $playerInfo->overall_friday_d = $info['Friday_d'];
                $playerInfo->overall_saturday_d = $info['Saturday_d'];

                
            }

            $stmtsolo = $con->prepare("SELECT * FROM weeklysolo WHERE player_uuid = '$player_uuid'");
            $stmtsolo->execute();
            $stmtsolo = $stmtsolo->fetchAll();

            foreach($stmtsolo as $info){

                $playerInfo->solo_sunday = $info['Sunday'];
                $playerInfo->solo_monday = $info['Monday'];
                $playerInfo->solo_tuesday = $info['Tuesday'];
                $playerInfo->solo_wednesday = $info['Wednesday'];
                $playerInfo->solo_thursday = $info['Thursday'];
                $playerInfo->solo_friday = $info['Friday'];
                $playerInfo->solo_saturday = $info['Saturday'];
               

                $playerInfo->solo_sunday_w = $info['Sunday_w'];
                $playerInfo->solo_monday_w = $info['Monday_w'];
                $playerInfo->solo_tuesday_w = $info['Tuesday_w'];
                $playerInfo->solo_wednesday_w = $info['Wednesday_w'];
                $playerInfo->solo_thursday_w = $info['Thursday_w'];
                $playerInfo->solo_friday_w = $info['Friday_w'];
                $playerInfo->solo_saturday_w = $info['Saturday_w'];
                
                $playerInfo->solo_sunday_d = $info['Sunday_d'];
                $playerInfo->solo_monday_d = $info['Monday_d'];
                $playerInfo->solo_tuesday_d = $info['Tuesday_d'];
                $playerInfo->solo_wednesday_d = $info['Wednesday_d'];
                $playerInfo->solo_thursday_d = $info['Thursday_d'];
                $playerInfo->solo_friday_d = $info['Friday_d'];
                $playerInfo->solo_saturday_d = $info['Saturday_d'];




            }

            $stmtteams = $con->prepare("SELECT * FROM weeklyteams WHERE player_uuid = '$player_uuid'");
            $stmtteams->execute();
            $stmtteams = $stmtteams->fetchAll();

            foreach($stmtteams as $info){

                    $playerInfo->teams_sunday = $info['Sunday'];
                    $playerInfo->teams_monday = $info['Monday'];
                    $playerInfo->teams_tuesday = $info['Tuesday'];
                    $playerInfo->teams_wednesday = $info['Wednesday'];
                    $playerInfo->teams_thursday = $info['Thursday'];
                    $playerInfo->teams_friday = $info['Friday'];
                    $playerInfo->teams_saturday = $info['Saturday'];
               

                    $playerInfo->teams_sunday_w = $info['Sunday_w'];
                    $playerInfo->teams_monday_w = $info['Monday_w'];
                    $playerInfo->teams_tuesday_w = $info['Tuesday_w'];
                    $playerInfo->teams_wednesday_w = $info['Wednesday_w'];
                    $playerInfo->teams_thursday_w = $info['Thursday_w'];
                    $playerInfo->teams_friday_w = $info['Friday_w'];
                    $playerInfo->teams_saturday_w = $info['Saturday_w'];
                
                    $playerInfo->teams_sunday_d = $info['Sunday_d'];
                    $playerInfo->teams_monday_d = $info['Monday_d'];
                    $playerInfo->teams_tuesday_d = $info['Tuesday_d'];
                    $playerInfo->teams_wednesday_d = $info['Wednesday_d'];
                    $playerInfo->teams_thursday_d = $info['Thursday_d'];
                    $playerInfo->teams_friday_d = $info['Friday_d'];
                    $playerInfo->teams_saturday_d = $info['Saturday_d'];



            }


            $stmtranked = $con->prepare("SELECT * FROM weeklyranked WHERE player_uuid = '$player_uuid'");
            $stmtranked->execute();
            $stmtranked = $stmtranked->fetchAll();

            foreach($stmtranked as $info){

                        $playerInfo->ranked_sunday = $info['Sunday'];
                        $playerInfo->ranked_monday = $info['Monday'];
                        $playerInfo->ranked_tuesday = $info['Tuesday'];
                        $playerInfo->ranked_wednesday = $info['Wednesday'];
                        $playerInfo->ranked_thursday = $info['Thursday'];
                        $playerInfo->ranked_friday = $info['Friday'];
                        $playerInfo->ranked_saturday = $info['Saturday'];
               

                        $playerInfo->ranked_sunday_w = $info['Sunday_w'];
                        $playerInfo->ranked_monday_w = $info['Monday_w'];
                        $playerInfo->ranked_tuesday_w = $info['Tuesday_w'];
                        $playerInfo->ranked_wednesday_w = $info['Wednesday_w'];
                        $playerInfo->ranked_thursday_w = $info['Thursday_w'];
                        $playerInfo->ranked_friday_w = $info['Friday_w'];
                        $playerInfo->ranked_saturday_w = $info['Saturday_w'];
                
                        $playerInfo->ranked_sunday_d = $info['Sunday_d'];
                        $playerInfo->ranked_monday_d = $info['Monday_d'];
                        $playerInfo->ranked_tuesday_d = $info['Tuesday_d'];
                        $playerInfo->ranked_wednesday_d = $info['Wednesday_d'];
                        $playerInfo->ranked_thursday_d = $info['Thursday_d'];
                        $playerInfo->ranked_friday_d = $info['Friday_d'];
                        $playerInfo->ranked_saturday_d = $info['Saturday_d'];

            }
            $jsonEnc = json_encode($playerInfo);
            print_r($jsonEnc);
        }

        } else if(isset($_SESSION['api'])){

            //Executing data from HTTP 
            $api = $_SESSION['api'];
            $uuid = $_SESSION['uuid'];
    
            // Including the Stats structure
            include "includes/index.php";
            
            
        }  else{
        header("location:../");
        exit();
        }