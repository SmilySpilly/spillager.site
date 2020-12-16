<?php 
    
    session_start();
    include "/home/spillag1/public_html/db_connect.php";
    
    $player_uuid = $_SESSION['uuid'];
    $stmtCheckUser = $con->prepare("SELECT * FROM sessions WHERE player_uuid = '$player_uuid'");
    $stmtCheckUser->execute();
    $stmtCheckUser = $stmtCheckUser->fetchAll();
    foreach($stmtCheckUser as $user){

    if(isset($_GET['action'])){
        
        $player_uuid = $_SESSION['uuid'];
        $player_key = $_SESSION['api'];
        $stopDate = date("Y-m-d H:i:s",strtotime('now'));
        
        if($_GET['action'] == "endsession" && $user['status'] == "active" || $user['status'] == "paused" ){
            

            $endSessionStatus = $con->prepare("UPDATE sessions SET status = 'Finished', cooldown ='$stopDate', finish_time = '$stopDate' WHERE player_uuid = '$player_uuid'");
            $endSessionStatus->execute();   

            header("location:../../session");
            exit();

        }else if($_GET["action"] == 'endsession-d' && $user['status'] == "active" || $user['status'] == "paused" ){
            $endSessionStatus = $con->prepare("UPDATE sessions SET status = 'Finished', cooldown ='$stopDate' WHERE player_uuid = '$player_uuid'");
            $endSessionStatus->execute();   

            header("location:../../session");
            exit();
        }
        else if($_GET["action"] == 'postRecentGames'){

            $gameNumber = $_GET['gameNumber'] ;
            $gameStatus = $_GET['gameStatus'] ?? "Draw";
            $gameKills = $_GET['gameKills'] ?? 0;
            $gameEXP = $_GET['gameEXP'] ?? 0;
            $gameShards = $_GET['gameShards'] ?? 0;
            $gameMode = $_GET['gameMode'] ?? " ";
            $gameCoins = $_GET['gameCoins'] ?? 0;
            $gameMap = $_GET['gameMap'] ?? 0;
            $gameStart = substr($_GET['gameStart'], 0, -3) ?? 0;
            $gameEnd = substr($_GET['gameEnd'], 0, -3)?? 0;

            $gameHeads = $_GET['gameHeads'] ?? 0;

            $headsHeavenly = $_GET['headsHeavenly'] ?? 0;
            $headsDivine = $_GET['headsDivine'] ?? 0;
            $headsSweet = $_GET['headsSweet'] ?? 0;
            $headsSucculent = $_GET['headsSucculent'] ?? 0;
            $headsDecent = $_GET['headsDecent'] ?? 0;
            $headsTasty = $_GET['headsTasty'] ?? 0;
            $headsSalty = $_GET['headsSalty'] ?? 0;
            $headsMeh = $_GET['headsMeh'] ?? 0;
            $headsYucky = $_GET['headsYucky'] ?? 0;
            $headsEww = $_GET['headsEww'] ?? 0;
            
            if($gameShards < 0){
                $gameShards = $gamesShards + 20000;
            } 
            
            if($gameHeads > 0){
                $headsTextPart = '
                <div class="row col-12" style="margin-top:21px">
                <div class="col-6"><strong style="color:#615f5f">Mode |</strong> <span style="color:#9E1398;font-weight:bold">Corrupted</span></div>
                <div class="col-6"><strong style="color:#615f5f">Total Heads | </strong>  <span style="color:#9E1398;font-weight:bold">'. $gameHeads .'</span></div>
                </div>
                <div class="row col-12" style="margin-top:9px">
                <div class="col-3" style="padding-right:0px"><strong style="color:#800080;font-size:15px">Heavenly</strong>  <span style="color:#1e1e1e"> | '. $headsHeavenly .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsHeavenly * 15 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#C08F00;font-size:15px">Divine</strong>  <span style="color:#1e1e1e"> | '. $headsDivine .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsDivine * 10 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#64BAB3;font-size:15px">Sweet</strong>  <span style="color:#1e1e1e"> | '. $headsSweet .'<br> <font style="font-size: 12px;color:#DE63D2;">('. $headsSweet * 8 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#9F42A8;font-size:15px">Succulent</strong>  <span style="color:#1e1e1e"> | '.$headsSucculent .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsSucculent * 7 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#0D9084;font-size:15px">Tasty</strong>  <span style="color:#1e1e1e"> | '. $headsTasty .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsTasty * 6 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#62CC5A;font-size:15px">Salty</strong>  <span style="color:#1e1e1e"> | '. $headsSalty .'<br> <font style="font-size: 12px;color:#DE63D2;">('. $headsSalty * 5 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#B2B353;font-size:15px">Decent</strong>  <span style="color:#1e1e1e"> | '. $headsDecent .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsDecent * 4 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#B0AEB1;font-size:15px">Meh</strong>  <span style="color:#1e1e1e"> | '. $headsMeh .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsMeh * 3 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#8B8A8B;font-size:15px">Yucky</strong>  <span style="color:#1e1e1e"> | '. $headsYucky .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsYucky * 2 .' Exp)</font></span></div>
                <div class="col-3" style="padding-right:0px"><strong style="color:#424042;font-size:15px">Eww</strong>  <span style="color:#1e1e1e"> | '. $headsEww .' <br><font style="font-size: 12px;color:#DE63D2;">('. $headsEww * 1 .' Exp)</font></span></div>
                </div>
                ';
            } else {
                $headsTextPart = "";
            }

            if ($gameStatus == "Winner"){
                $gameStatus = "<strong style='color:#19cd19'>Winner</strong>";
            } else {
                $gameStatus = "<strong style='color:#e62e38'>Loser</strong>";
            }

            $text = '
            <div class="modal fade" id="exampleModal'. $gameNumber .'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel'. $gameNumber .'" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel" style="color:#383838"> Skywars | ' . ucfirst(strtolower($gameMode)) .' [' . $gameNumber .']</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" style="color:#1e1e1e">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                    <div class="col-12 row">
                        <div style="margin-bottom:10px;" class="col-6">
                      <span style="padding-bottom:10px"><strong style="color:#615f5f">Status | </strong>'. $gameStatus .'<br></span>
                      <strong style="color:#615f5f">Kills | </strong><span style="color:#615f5f">'. $gameKills .'</span><br>
                      </div>
                      <div class="row col-6">
                      <div class="col-12"><strong style="color:#E161EF">Experience</strong><span style="color:#1e1e1e"> | '. $gameEXP .'</span></div>
                      <div class="col-12"> <strong style="color:#66D2C8">Shards</strong> <span style="color:#1e1e1e"> | '. $gameShards .'</span></div>
                      <div class="col-12"><strong style="color:#F7B900">Coins</strong> <span style="color:#1e1e1e"> | '. $gameCoins .'</span></div>
                      </div>
                    </div>
    
                      <div class="row col-12" style="margin-top:21px">
                      <div class="col-6"><strong style="color:#615f5f">Map | </strong> <span style="color:#55FF55;font-weight:bold">'. $gameMap .'</span></div>
                      <div class="col-6"><strong style="color:#615f5f">Lasted For</strong> <span style="color:#1e1e1e"> | '. gmdate("H:i:s", $gameEnd - $gameStart) .'</span></div>
                      <div class="col-6"><strong style="color:#615f5f">Started</strong> <span style="color:#1e1e1e"> | '. date("Y-m-d H:i:s",$gameStart) .'</span></div>
                      <div class="col-6"><strong style="color:#615f5f">Ended</strong> <span style="color:#1e1e1e"> | '. date("Y-m-d H:i:s", $gameEnd) .'</span></div>
                      </div>

                      '. $headsTextPart  .'
                    </div>
                    
                  </div>
                </div>
              </div>';

            $file = 'data/'.$player_uuid.'/wins/game' . $gameNumber .'.html';

            fopen($file,'w');
            file_put_contents($file,$text);
            

        }else if($_GET["action"] == 'pauseSession' && $user['status'] == "active"){

            // Preparing SQLI Query
            $getInfo = $con->prepare("SELECT * FROM sessions WHERE player_uuid = '$player_uuid'");
            $getInfo->execute();
            $getInfo = $getInfo->fetchAll();

            // Looping on the response Objects
            foreach($getInfo as $val){  
            $finish_time_timestamp = date("Y-m-d H:i:s", strtotime($val['finish_time']) + 14400);
            }

            // Preparing SQLI Query
            $pauseSessionStatus = $con->prepare("UPDATE sessions SET status = 'Paused', pause_time = '$stopDate',finish_time = '$finish_time_timestamp' WHERE player_uuid = '$player_uuid'");
            $pauseSessionStatus->execute();

            header("location:../../session");
            exit();
        }else if($_GET["action"] == 'resumeSession' && $user['status'] == "Paused" ){

            // Preparing SQLI Query
            $getInfo = $con->prepare("SELECT * FROM sessions WHERE player_uuid = '$player_uuid'");
            $getInfo->execute();
            $getInfo = $getInfo->fetchAll();

            foreach($getInfo as $val){

                $resume_finish_time = (strtotime($val['finish_time']) - 14400 ) + (strtotime("now") - strtotime($val['pause_time']));
                $resume_finish_time = date("Y-m-d H:i:s",$resume_finish_time);

                $resume_start_time = strtotime($val['start_time']) + (strtotime("now") - strtotime($val['pause_time']));
                $resume_start_time = date("Y-m-d H:i:s",$resume_start_time);
            }
            
            $resumeSessionStatus = $con->prepare("UPDATE sessions SET status = 'active',finish_time = '$resume_finish_time',start_time = '$resume_start_time' WHERE player_uuid = '$player_uuid'");
            $resumeSessionStatus->execute();

            header("location:../../session");
        exit();
        } else if($_GET['action'] == "getInfo"){

            // GET PLAYERS INFO AS A JSON OBJECT

            $getPlayerInfoDB = $con->prepare("SELECT * FROM sessions WHERE player_uuid = '$player_uuid'");
            $getPlayerInfoDB->execute();
            $getPlayerInfoDB = $getPlayerInfoDB->fetchAll();

            foreach($getPlayerInfoDB as $info){

                $playerDataObject = new \stdClass();
            
                $playerDataObject->wins = $info['wins'];
                $playerDataObject->kills = $info['kills'];
                $playerDataObject->deaths = $info['deaths'];
                $playerDataObject->losses = $info['losses'];
                $playerDataObject->solo_wins = $info['solo_wins'];
                $playerDataObject->solo_kills = $info['solo_kills'];
                $playerDataObject->solo_deaths = $info['solo_deaths'];
                $playerDataObject->teams_wins = $info['teams_wins'];
                $playerDataObject->teams_kills = $info['teams_kills'];
                $playerDataObject->teams_deaths = $info['teams_deaths'];
                $playerDataObject->teams_losses = $info['teams_losses'];

                $playerDataObject->shards = $info['shards'];
                $playerDataObject->skywars_experience = $info['skywarsxp'];
                $playerDataObject->coins = $info['coins'];

                $playerDataObject->eww_heads = $info['eww_heads'];
                $playerDataObject->yucky_heads = $info['yucky_heads'];
                $playerDataObject->meh_heads = $info['meh_heads'];
                $playerDataObject->salty_heads = $info['salty_heads'];
                $playerDataObject->tasty_heads = $info['tasty_heads'];
                $playerDataObject->decent_heads = $info['decent_heads'];
                $playerDataObject->succulent_heads = $info['succulent_heads'];
                $playerDataObject->sweet_heads = $info['sweet_heads'];
                $playerDataObject->divine_heads = $info['divine_heads'];
                $playerDataObject->heavenly_heads = $info['heavenly_heads'];
                
               

                $playerDataObject = json_encode($playerDataObject);

                print_r($playerDataObject);

            }

        } else {
       
             header("location:../../session");
            exit();
        }


    }else if($_SERVER['REQUEST_METHOD'] == "POST"){
    
        
    
        $player_uuid = $_SESSION['uuid'];
        $player_key = $_SESSION['api'];

        if(is_numeric($_POST['duration1'])){
            $finish_time = date("Y-m-d H:i:s",(strtotime($_POST['duration1']. ' minutes')));
        } else{
            $finish_time = date("Y-m-d H:i:s",strtotime($_POST['duration2']. ' minutes'));
        }   

        //Empty games Folder for the player
        $files = glob('data/' . $player_uuid .'/wins/*'); // get all file names
            foreach($files as $file){ // iterate files
              if(is_file($file))
                unlink($file); // delete file
            }
        
        // Assigning values into the Database [Sessions]
        $currentTimeStamp = date("Y-m-d H:i:s");

        // Assigning Values into the Database
        $jsonRequest = file_get_contents("https://api.hypixel.net/player?key=".$_SESSION['api'] ."&uuid=".$_SESSION['uuid'] );
        $doc  = json_decode($jsonRequest,true);
        

        // OVERALL
        $wins = $doc['player']['stats']['SkyWars']['wins'] ?? 0;
        $kills = $doc['player']['stats']['SkyWars']['kills'] ?? 0;
        $deaths = $doc['player']['stats']['SkyWars']['deaths'] ?? 0;
        $losses = $doc['player']['stats']['SkyWars']['losses'] ?? 0;
        $shards = $doc['player']['stats']['SkyWars']['shard'] ?? 0;
        $exp = $doc['player']['stats']['SkyWars']['skywars_experience'] ?? 0;
        $coins = $doc['player']['stats']['SkyWars']['coins'] ?? 0;

        // SOLO
        $wins_solo = $doc['player']['stats']['SkyWars']['wins_solo'] ?? 0;
        $kills_solo = $doc['player']['stats']['SkyWars']['kills_solo'] ?? 0;
        $deaths_solo= $doc['player']['stats']['SkyWars']['deaths_solo'] ?? 0;

        // teams
        $wins_teams = $doc['player']['stats']['SkyWars']['wins_team'] ?? 0;
        $kills_teams = $doc['player']['stats']['SkyWars']['kills_team'] ?? 0;
        $deaths_teams = $doc['player']['stats']['SkyWars']['deaths_team'] ?? 0;
        $losses_teams = $doc['player']['stats']['SkyWars']['losses_team'] ?? 0;

        $eww_heads = $doc['player']['stats']['SkyWars']['heads_eww'] ?? 0;
        $meh_heads = $doc['player']['stats']['SkyWars']['heads_meh'] ?? 0;
        $yucky_heads = $doc['player']['stats']['SkyWars']['heads_yucky'] ?? 0;
        $salty_heads = $doc['player']['stats']['SkyWars']['heads_salty'] ?? 0;
        $tasty_heads = $doc['player']['stats']['SkyWars']['heads_tasty'] ?? 0;
        $decent_heads = $doc['player']['stats']['SkyWars']['heads_decent'] ?? 0;
        $succulent_heads = $doc['player']['stats']['SkyWars']['heads_succulent'] ?? 0;
        $sweet_heads = $doc['player']['stats']['SkyWars']['heads_sweet'] ?? 0 ;
        $divine_heads = $doc['player']['stats']['SkyWars']['heads_divine'] ?? 0;
        $heavenly_heads = $doc['player']['stats']['SkyWars']['heads_heavenly'] ?? 0;
    
     
    
        $insertPlayerStats = $con->prepare("UPDATE sessions SET total_sessions = total_sessions + 1, start_time = '$currentTimeStamp',finish_time = '$finish_time', status = 'active',
                                                                wins = '$wins',kills = '$kills',deaths = '$deaths',losses = '$losses',
                                                                solo_wins = '$wins_solo',solo_kills = '$kills_solo',solo_deaths = '$deaths_solo',
                                                                teams_wins = '$wins_teams',teams_kills = '$kills_teams',teams_deaths = '$deaths_teams',teams_losses = '$losses_teams',
                                                                shards = '$shards',coins = '$coins',skywarsxp = '$exp',
                                                                eww_heads = '$eww_heads',yucky_heads = '$yucky_heads',meh_heads = '$meh_heads',salty_heads = '$salty_heads',tasty_heads = '$tasty_heads',decent_heads = '$decent_heads',succulent_heads = '$succulent_heads',sweet_heads = '$sweet_heads',divine_heads = '$divine_heads',heavenly_heads = '$heavenly_heads' WHERE player_uuid = '$player_uuid'"  );
    
        $insertPlayerStats->execute();

        header("location:../../session");
        exit();
            
    } else {
         header("location:../../session");
        exit();
    }
    }
?>