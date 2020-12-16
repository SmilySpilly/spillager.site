
<?php     
    
    // Including Database Connection
    include "db_connect.php";
    session_start();
    session_destroy();
    session_start();
    
    ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
    
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        // Executing the Data From the HTTPS;
        $ign = $_POST['IGN'];
        $apiKey = $_POST['API'];
        $hashedKey = sha1($apiKey);

            $jsonRequestUUID = file_get_contents("https://api.hypixel.net/key?key=" . $apiKey);  // Requesting UUID From the API Key given;
            $uuidDoc = json_decode($jsonRequestUUID,true); // Decoding the api request;
            
            if($jsonRequestUUID === false){
                $alertMessage = "Wrong API Key!";
                $alert = " showAlert ";
                include "includes/structure.php";
                exit();
            } 
        
        $jsonRequestIGN = file_get_contents("https://api.hypixel.net/player?key=" . $apiKey . "&name=" . $ign); // Requesting UUID From the API Key given;
        $ignDoc = json_decode($jsonRequestIGN,true); // Decoding the api request;

        $keyUUID = $uuidDoc['record']['owner'];
        $playerUUID = $ignDoc['player']['uuid'];

        $keyUUID = str_replace("-","",$uuidDoc['record']['owner']); // Remove the "-" from the owner UUID

        if ($keyUUID == $playerUUID){

            $_SESSION['ign'] = $ignDoc['player']['displayname'];
            $_SESSION['uuid'] = $keyUUID;
            $_SESSION['api'] = $apiKey;

            $stmt = $con->prepare("SELECT IGN,apiKey,player_uuid FROM players WHERE player_uuid = ?");
            $stmt->execute(array($playerUUID));
            $getUser = $stmt->fetch();
            $rowCount = $stmt->rowCount();

            if($getUser['IGN'] !== $ign && $rowCount > 0){

                $stmt2 = $con->prepare("UPDATE players SET `IGN` = ? WHERE player_uuid = ?");
                $stmt2->execute(array($ignDoc['player']['displayname'],$playerUUID));

            } 
            if($getUser['apikey'] !== $apiKey && $rowCount > 0){
                $stmt2 = $con->prepare("UPDATE players SET `apiKey` = ? WHERE player_uuid = ?");
                $stmt2->execute(array($hashedKey,$playerUUID));
            }
           

             if($rowCount < 1){  
                
                $createPlayerSession = $con->prepare("INSERT INTO sessions VALUES ('$keyUUID','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','inactive',0)");
                $createPlayerSession->execute();
                    
                $stmt2 = $con->prepare("INSERT INTO players (`IGN`,`player_uuid`,`apiKey`) VALUES ('$ign','$keyUUID','$hashedKey')");
                $stmt2->execute();

                $soloKills = $ignDoc['player']['stats']['SkyWars']['kills_solo'];
                $soloWins = $ignDoc['player']['stats']['SkyWars']['wins_solo'];
                $soloDeaths = $ignDoc['player']['stats']['SkyWars']['deaths_solo'];

                $stmtSolo = $con->prepare("INSERT INTO weeklysolo VALUES ('$keyUUID', 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, $soloWins, $soloKills, $soloDeaths)");
                $stmtSolo->execute();
                 // ==============
                
                $teamsKills = $ignDoc['player']['stats']['SkyWars']['kills_team'];
                $teamsWins = $ignDoc['player']['stats']['SkyWars']['wins_team'];
                $teamsDeaths = $ignDoc['player']['stats']['SkyWars']['deaths_team'];
    
                $stmtTeams = $con->prepare("INSERT INTO weeklyteams VALUES ('$keyUUID', 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, $teamsWins, $teamsKills, $teamsDeaths)");
                $stmtTeams->execute();
                // ==============
                 
                $megaKills = $ignDoc['player']['achievements']['skywars_kills_mega'];
                $megaWins = $ignDoc['player']['achievements']['skywars_wins_mega'];
                $megaDeaths = $ignDoc['player']['stats']['SkyWars']['deaths_mega'] + $doc['player']['stats']['SkyWars']['deaths_mega_doubles'];
                        
                $stmtMega = $con->prepare("INSERT INTO weeklymega VALUES ('$keyUUID', 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, $megaWins, $megaKills, $megaDeaths)");
                $stmtMega->execute();
                // ==============
                
                $overallKills = $ignDoc['player']['stats']['SkyWars']['kills'];
                $overallWins = $ignDoc['player']['stats']['SkyWars']['wins'];
                $overallDeaths = $ignDoc['player']['stats']['SkyWars']['deaths'];

                $stmtOverall = $con->prepare("INSERT INTO weeklyoverall VALUES ('$keyUUID', 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0,0, $overallWins,  $overallKills, $overallDeaths)");
                $stmtOverall->execute();
                // ==============
                
                $rankedKills = $ignDoc['player']['stats']['SkyWars']['kills_ranked'];
                $rankedWins = $ignDoc['player']['stats']['SkyWars']['wins_ranked'];
                $rankedDeaths = $ignDoc['player']['stats']['SkyWars']['deaths_ranked'];
                    
                $stmtRanked = $con->prepare("INSERT INTO weeklyranked VALUES ('$keyUUID', 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, $rankedWins, $rankedKills, $rankedDeaths)");
                $stmtRanked->execute();    

                // Make a New dir for new players
                mkdir("session/data/".$keyUUID);
                mkdir("session/data/".$keyUUID.'/wins');
                mkdir("session/data/".$keyUUID.'/results');
            } 

            header("location:/stats/");
            exit();
        } else {
            header("location:spillager.site");
            exit();
        }
        
    } else{
        include "stats/includes/structure.php";
    }



