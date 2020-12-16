<?php 

    include "../db_connect.php";
    
    $player_uuid = $_SESSION['uuid'];
    $timerStatus;

    $checkSessionStatus = $con->prepare("SELECT * FROM sessions WHERE player_uuid = '$player_uuid'");
    $checkSessionStatus->execute();
    $sessionInfo = $checkSessionStatus->fetchAll();

      

    $checkUpdatedSessionStatus = $con->prepare("SELECT * FROM sessions WHERE player_uuid = '$player_uuid'");
    $checkUpdatedSessionStatus->execute();
    $sessionUpdatedInfo = $checkUpdatedSessionStatus->fetchAll();

    foreach($sessionUpdatedInfo as $user){
            
        $stopDate = date("Y-m-d H:i:s",strtotime('now'));
            
        if(strtotime("now") - strtotime($user['pause_time']) > 21600 && $user['status'] == 'Paused'){
            $ChangeSessionStatus = $con->prepare("UPDATE sessions set status = 'inactive',cooldown = '$stopDate' WHERE player_uuid = '$player_uuid'");
            $ChangeSessionStatus->execute();
        }
        if($user['status'] == "Finished") {
            $ChangeSessionStatus = $con->prepare("UPDATE sessions set cooldown = '$stopDate' WHERE player_uuid = '$player_uuid'");
            $ChangeSessionStatus->execute();
        }
        
        if($user['status'] == "active"){
            $timerStatus = "active";
            $sessionStatus = "<font style='color:#19cd19'>On Going</font>";
        } else if($user['status'] == "Finished"){
            $timerStatus = "finished";
            $sessionStatus = "<font style='color:#19cd19'>Finished</font>";
        }else if($user['status'] == "Paused"){
            $timerStatus = "paused";
            $sessionStatus = "<font style='color:#F7A531'>Paused</font>";
        }else {
            $timerStatus = "inactive";
            $sessionStatus = "<font style='color:#e62e38'>InActive</font>";
        } 
    }   
     $stopDate = date("Y-m-d H:i:s",strtotime('now'));
    foreach($sessionInfo as $user){
    
         if(strtotime($user['finish_time']) < strtotime("now") && $user['status'] != "inactive") {
            $ChangeSessionStatus = $con->prepare("UPDATE sessions set status = 'inactive' WHERE player_uuid = '$player_uuid'");
            $ChangeSessionStatus->execute();
        }
    }   



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Stats | <?php echo $_SESSION['ign'] ?></title>
    <link rel="stylesheet" href="../frameworks/css/bootstrap.min.css">
    <link rel="stylesheet" href="../frameworks/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="layout/session.css">
</head>

<body>
    <main class="container-fluid" style="padding: 0;">
        <div class="row session-title col-11">
            <h4 class="col-8"><?php echo $_SESSION['ign'];?>'s Session <font style="font-size:19px"> <b
                        style="position:relative;bottom:1px">|</b><font id="changeStatusSession"> <?php echo $sessionStatus; ?></font></font>
            </h4>
            <p class="col-2 <?php echo $timerStatus; ?> session-timer stop-games" id="check-timer">
                <span id="timer-hours"></span>
                <span id="timer-minutes">00</span>:
                <span id="timer-sec">00</span></p>
        </div>

        <div class="row session-box col-11">
            <div class="col-md-5 statsBox">
                <button class="overall col mode-button button-active">Overall</button>
                <button class="solo mode-button col">Solo</button>
                <button class="teams mode-button col">Teams</button>
            </div>
            <div class="col-12 col-md-5 statsBox">
                <h5>Status:<span id="player-stats"></span></h5>
            </div>
            <div class="col-12 col-md-1 statsBox setting-icon">
                <span id="site-info" type="button" style="margin-left:4px" data-toggle="modal"
                    data-target="#info">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="font-size: 3.7rem;">
                      <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"/>
                      <circle cx="8" cy="4.5" r="1"/>
                    </svg>
                </span>
                <span type="button" id="session-settings-button" style="margin-left:4px" data-toggle="modal"
                    data-target="#exampleModalCenter">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear-fill" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="row col-11 stats-container-mixed" style='margin:auto;padding:0'>
            <div class="session-box col-12 col-md-9 row" style="min-height:461px;max-width: 667px;">
                <div class="row col-12 stats-container1 containers-stats-js">

                    <div class="col-12" style="margin:10px 10px 2px 0px">
                        <p class="container-titles">Seassion Stats</p> 
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Wins: </strong><span id="wins">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>Losses: </strong><span id="losses">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box " ><strong>W/L: </strong><span id="w-l">0</span></div>

                     <div class="col-6 col-md-4 show-stats-box"><strong>Kills: </strong><span id="kills">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>Deaths: </strong><span id="deaths">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>K/D: </strong><span id="k-l">0</span></div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>Wins/Hour: </strong><span id="wins-hour">0</span>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Losses/Hour: </strong><span
                            id="losses-hour">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>W/L /Hour: </strong><span id="w-l-hour">0</span>
                    </div>
                  
                    <div class="col-6 col-md-4 show-stats-box"><strong>Kill/Hour: </strong><span
                            id="kills-hour">0</span>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Deaths/Hour: </strong><span
                            id="deaths-hour">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>K/D /Hour: </strong><span id="k-l-hour">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>Winstreak: </strong><span id="winstreak">0</span>
                    </div>
                    <div class="col-6 col-md-8 show-stats-box"><strong>Heighest winstreak: </strong><span
                            id="high-winstreak">0</span></div>
                   
                    <div class="col-6 col-md-4 show-stats-box"><strong>Killstreak: </strong><span
                            id="killstreak">0</span>
                    </div>
                    
                    <div class="col-6 col-md-8 show-stats-box"><strong>Heighest killstreak: </strong><span
                            id="high-killstreak">0</span></div>
                </div>


                <div class="row col-12 stats-container2 hidden containers-stats-js">

                <div class="col-12" style="margin:10px 10px 2px 0px">
                        <p class="container-titles">Seassion Stats</p>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Wins: </strong><span id="wins-solo">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>Losses: </strong><span id="losses-solo">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>W/L: </strong><span id="w-l-solo">0</span></div>

                     <div class="col-6 col-md-4 show-stats-box"><strong>Kills: </strong><span id="kills-solo">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>Deaths: </strong><span id="deaths-solo">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>K/D: </strong><span id="k-l-solo">0</span></div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>Wins/Hour: </strong><span id="wins-hour-solo">0</span>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Losses/Hour: </strong><span
                            id="losses-hour-solo">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>W/L /Hour: </strong><span id="w-l-hour-solo">0</span>
                    </div>
                  
                    <div class="col-6 col-md-4 show-stats-box"><strong>Kill/Hour: </strong><span
                            id="kills-hour-solo">0</span>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Deaths/Hour: </strong><span
                            id="deaths-hour-solo">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>K/D /Hour: </strong><span id="k-l-hour-solo">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>Winstreak: </strong><span id="winstreak-solo">0</span>
                    </div>
                    <div class="col-6 col-md-8 show-stats-box"><strong>Heighest winstreak: </strong><span
                            id="high-winstreak-solo">0</span></div>
                   
                    <div class="col-6 col-md-4 show-stats-box"><strong>Killstreak: </strong><span
                            id="killstreak-solo">0</span>
                    </div>
                    
                    <div class="col-6 col-md-8 show-stats-box"><strong>Heighest killstreak: </strong><span
                            id="high-killstreak-solo">0</span></div>
            
                </div>


                <div class="row col-12 stats-container3 hidden containers-stats-js">

                <div class="col-12" style="margin:10px 10px 2px 0px">
                        <p class="container-titles">Seassion Stats</p>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Wins: </strong><span id="wins-teams">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>Losses: </strong><span id="losses-teams">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>W/L: </strong><span id="w-l-teams">0</span></div>

                     <div class="col-6 col-md-4 show-stats-box"><strong>Kills: </strong><span id="kills-teams">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>Deaths: </strong><span id="deaths-teams">0</span></div>
                     <div class="col-6 col-md-4 show-stats-box"><strong>K/D: </strong><span id="k-l-teams">0</span></div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>Wins/Hour: </strong><span id="wins-hour-teams">0</span>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Losses/Hour: </strong><span
                            id="losses-hour-teams">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>W/L /Hour: </strong><span id="w-l-hour-teams">0</span>
                    </div>
                  
                    <div class="col-6 col-md-4 show-stats-box"><strong>Kill/Hour: </strong><span
                            id="kills-hour-teams">0</span>
                    </div>
                    <div class="col-6 col-md-4 show-stats-box"><strong>Deaths/Hour: </strong><span
                            id="deaths-hour-teams">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>K/D /Hour: </strong><span id="k-l-hour-teams">0</span>
                    </div>

                    <div class="col-6 col-md-4 show-stats-box"><strong>Winstreak: </strong><span id="winstreak-teams">0</span>
                    </div>
                    <div class="col-6 col-md-8 show-stats-box"><strong>Heighest winstreak: </strong><span
                            id="high-winstreak-teams">0</span></div>
                   
                    <div class="col-6 col-md-4 show-stats-box"><strong>Killstreak: </strong><span
                            id="killstreak-teams">0</span>
                    </div>
                    
                    <div class="col-6 col-md-8 show-stats-box"><strong>Heighest killstreak: </strong><span
                            id="high-killstreak-teams">0</span></div>
               
                </div>

            </div>
            <!-- SECOND CONTAINER [OVERALL STATS] -->
            <div class="session-box col-12 col-md row perm-stats" style="min-height:461px;">

                <div class="row col-12 con-stats-overall-show">
                    <div class="col-12" style="margin:10px 10px 2px 0px;text-align:center;">
                        <p class="container-titles">Overall</p>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#E161EF;">
                                Experience </font>|</strong><span id="experience">0</span>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#E161EF;">
                                Experience/Hour </font>|</strong><span id="experience-hour">0</span></div>

                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#66D2C8">
                                Shards </font>|</strong><span id="shards">0</span>
                    </div>
                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#66D2C8">
                                Shards/Hour </font>|</strong><span id="shards-hour">0</span></div>

                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#9e1398;">
                                Heads </font>| </strong><span id="heads">0</span></div>
                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#9e1398;">
                                Heads/Hour </font>|</strong><span id="heads-hour">0</span>
                    </div>

                    
                    <div class="col-6 col-md-12 col-lg-6  show-stats-box special-stats-box"><strong>|<font style="color:#F7B900">
                                Coins </font>| </strong><span id="coins">0</span></div>
                    <div class="col-6 col-md-12 col-lg-6 show-stats-box special-stats-box"><strong>|<font style="color:#F7B900">
                                Coins/Hour </font>|</strong><span id="coins-hour" style='text-align: center;'>0</span>
                    </div>


                </div>
            </div>
        </div>
        <div class="session-box col-11 row">
            <div class="row col-12 game-container" >

                <div class="col-12" style="margin:10px 10px 5px 0px">
                    <p class="container-titles">Recent Games <span style="font-size:17px"
                            id="games-played-overall">[No Games Yet]</span></p>
                </div>
                <div class="col-6 col-md-4 no-games-title show-stats-box games-hide-title" ><strong>No Games Found</strong>
                </div>
                <div class="row col-12" id="game-container" style="margin-left:0px">
                </div>
            </div>
        </div>

        <div class="session-box col-11 row">
            <div class="row col-12 graph-container">

                <div class="col-12" style="margin:10px 10px 10px 0px">
                    <p class="container-titles">Graph</p>
                </div>


                <div class="progress" style="height: 34px;">

                    <div class="progress-bar" id="lvl-presentage" role="progressbar"
                        style="background-color:#DE63D2;width: 0%;" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>

                <div class="progress" style="height: 34px;">
                    <div class="progress-bar" id="shards-progress" role="progressbar" style="background-color:#66D2C8;width: 0%;" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>


            </div>
            <div style="order:3;padding: 20px 0px 10px 52px;" class="charts-cont-overall charts-cont row col-12 graphs">
                <div class="col-lg-8">
                    <p style="margin:20px 0px" class="container-titles">Session Stats</p>
                    <div id="chart_div2" class="chart"></div>
                </div>
                <div class="col-lg-4 pie-chart">
                    <p class="container-titles" style="margin:20px 0px;text-align:center">Session Heads</p>
                    <div id="chart_div1" style="height: 400px;" class="chart"></div>
                </div>
            </div>
        </div>

    </main>

    <!-- Moduel -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true"
        style="padding-right:0px">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle" style="color:#242424;">Session Settings</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span id="close-modal" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="height: 266px;">
                    <div id="settings-body" style="margin:0" class="row col-12">
                        <div class="session-ongoing-settings col-12 hidden">

                            <div class="row col-12">
                                <a href="sessionActivate.php/?action=pauseSession" class="col-12"> <button type="submit"
                                        id="pause_session_button" class="col-12 btn btn-primary mb-2">Pause
                                        Session</button></a>
                                <a href="sessionActivate.php/?action=resumeSession" class="col-12"> <button
                                        type="submit" id="resume_session_button"
                                        class="col-12 btn btn-warning mb-2 hidden">Resume Session</button></a>
                                <a href="sessionActivate.php/?action=endsession" class="col-12"> <button type="submit"
                                        id="end_session_button" disabled class="col-12 btn btn-danger mb-2">End
                                        Session</button></a>
                            </div>

                        </div>
                        <form class="start-session-form" action="sessionActivate.php" method="POST"
                            style="width:100%;height:255px">
                            <div class="form-group row col-12">

                                <label for="session-duration1" class="col-5">Session Duration</label>
                                <select onchange="showBox();" style="color:#242424" name="duration1"
                                    class="form-control col" id="session-duration-select-box">
                                    <option value="60">1 Hour</option>
                                    <option value="180">3 Hours</option>
                                    <option value="300">5 Hours</option>
                                    <option value="900">Unlimited</option>
                                    <option value="custom-d">Custom</option>
                                </select>

                            </div>
                            <div class="row col-12">
                                <label class="label-dur col-5" style="display:none;">Duration</label>
                                <input type="number" name="duration2" min="45" max="900"
                                    style="display:none;margin-top:5px;margin-bottom:17px"
                                    class="custom-duration form-control col" placeholder="[ONLY MINUTES]">
                            </div>


                            <div class="row col-12"
                                style="display: flex;justify-content: flex-end;position:absolute;bottom:5px;right:5px;height: 50px;">
                                
                                <div class="cooldown-timer col" style="color:#242424"></div>
                                
                                <div id="session-logs-stats-button" class="col-4 btn btn-info mb-2"
                                    style="margin-right:5px">Session Logs</div>
                                <button type="submit" class="col-5 btn btn-primary mb-2 new-session-clear">Start a new
                                    Session</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="modal fade" id="info" tabindex="-1" role="dialog" aria-hidden="true"
        style="padding-right:0px">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle" style="color:#242424;">Session Settings</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span id="close-modal" aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="height: 700px;">
                   <h3 style="color:#383838">Thanks for using Spillager.site!</h3><br>
                   
                   <h6 style="color:#383838">Here are some info before starting your Sessions | </h6><br>
                   <strong style="font-size:15px;color:#383838">
                   [+] To start a session press on the setting icon.<br>
                    [+] Each session has a cooldown of 25m to Prevent Spamming.<br>
                    [+] You cannot End a session before 2 mins of the run time.<br>
                   [+] Unlimited duration = 15h, You can end the session whenever you want .<br>
                   [+] If you have been detected in a SKYWARS game while your session is paused, the session will start automatically.<br>
                    [+] You may pause your session for 6h Limit then the session will End itself<br>
                    [+] Anything / Hour will show its true value once the session ends.<br>
                    [+] Recent games RARELY show false stats [Hypixel api issue].<br style='padding-bottom:40px'><br><br><br>
                   [+] Please report bugs/suggestions to me via twitter [@SmilySpilly].<br>
                   [+] Please Keep in mine this site is in beta version.<br><br><br><br><br>
                   </strong>
                   
                   <h4 style="color:#383838;text-align:center">Enjoy! </h4>
                    
                </div>
            </div>
        </div>
    </div>

    <input type="text" hidden id="playerAPI" value="<?php echo $api; ?>">
    <input type="text" hidden id="playerUUID" value="<?php echo $uuid; ?>">

    <!-- SESSION SETTINGS  -->
    <input type="text" id="session-duration" hidden
        value="<?php foreach($sessionInfo as $user){echo (strtotime($user['finish_time']) - strtotime($user['start_time']));} ?>">
    <input type="text" hidden id="start_timestamp"
        value="<?php foreach($sessionInfo as $user){echo strtotime($user['start_time']);} ?>">
    <input type="text" hidden id="finish_timestamp"
        value="<?php foreach($sessionInfo as $user){echo strtotime($user['finish_time']);} ?>">
    <input type="text" hidden id="paused_timestamp"
        value="<?php foreach($sessionInfo as $user){echo strtotime($user['pause_time']);} ?>">
     <input type="text" hidden id="cooldown"
    value="<?php foreach($sessionInfo as $user){echo strtotime($user['cooldown']);} ?>">


    <!-- HEADS INPUTS -->
    <input type="text" id="heavenly-heads" hidden value="1">
    <input type="text" hidden id="divine-heads" value="1">
    <input type="text" id="succulent-heads" hidden value="1">
    <input type="text" hidden id="sweet-heads" value="1">
    <input type="text" id="tasty-heads" hidden value="1">
    <input type="text" hidden id="salty-heads" value="1">
    <input type="text" id="decent-heads" hidden value="1">
    <input type="text" hidden id="meh-heads" value="1">
    <input type="text" hidden id="yucky-heads" value="1">
    <input type="text" hidden id="eww-heads" value="1">
    <input type="text" hidden id="total-heads" value="1">

    <input type="text" id="heavenly-heads-g" hidden value="1">
    <input type="text" hidden id="divine-heads-g" value="1">
    <input type="text" id="succulent-heads-g" hidden value="1">
    <input type="text" hidden id="sweet-heads-g" value="1">
    <input type="text" id="tasty-heads-g" hidden value="1">
    <input type="text" hidden id="salty-heads-g" value="1">
    <input type="text" id="decent-heads-g" hidden value="1">
    <input type="text" hidden id="meh-heads-g" value="1">
    <input type="text" hidden id="yucky-heads-g" value="1">
    <input type="text" hidden id="eww-heads-g" value="1">
    <input type="text" hidden id="total-heads-g" value="1">

    <input type="text" hidden id="gameExp" value="0">
    <input type="text" hidden id="gameShards" value="0">
    <input type="text" hidden id="gamescoins" value="0">

    <!-- SESSION STATS HISTORY -->
    <input type="text" hidden id="session-wins-history" value="0">
    <input type="text" hidden id="session-kills-history" value="0">
    <input type="text" hidden id="session-deaths-history" value="0">
    <input type="text" hidden id="session-losses-history" value="0">
    <input type="text" hidden id="session-winstreak-history" value="0">
    <input type="text" hidden id="session-killstreak-history" value="0">
    <input type="text" hidden id="session-highest-ws-history" value="0">
    <input type="text" hidden id="session-highest-ks-history" value="0">

    <input type="text" hidden id="session-wins-history-solo" value="0">
    <input type="text" hidden id="session-kills-history-solo" value="0">
    <input type="text" hidden id="session-deaths-history-solo" value="0">
    <input type="text" hidden id="session-losses-history-solo" value="0">
    <input type="text" hidden id="session-winstreak-history-solo" value="0">
    <input type="text" hidden id="session-killstreak-history-solo" value="0">
    <input type="text" hidden id="session-highest-ws-history-solo" value="0">
    <input type="text" hidden id="session-highest-ks-history-solo" value="0">

    <input type="text" hidden id="session-wins-history-teams" value="0">
    <input type="text" hidden id="session-kills-history-teams" value="0">
    <input type="text" hidden id="session-deaths-history-teams" value="0">
    <input type="text" hidden id="session-losses-history-teams" value="0">
    <input type="text" hidden id="session-winstreak-history-teams" value="0">
    <input type="text" hidden id="session-killstreak-history-teams" value="0">
    <input type="text" hidden id="session-highest-ws-history-teams" value="0">
    <input type="text" hidden id="session-highest-ks-history-teams" value="0">


    <div class="alert alert-secondary session-alert hidden" style="width: 343px;"></div>

    <div id="modalsGames" style="position:fixed;height:100%;width:100%">
    </div>
    <!-- LOADING PAGE SCRIPT -->
    <div class="loading-page">
        <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <p style="width:80%;margin:auto;text-align:center;bottom:90px; position:absolute;font-size:18px"><b>Note:</b> this is the beta version, please contact @SmilySpilly on twitter for Bug reports / Suggestions!</h4>
    </div>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src='../frameworks/js/jquery-3.3.1.min.js'></script>
    <script src='../frameworks/js/bootstrap.bundle.min.js'></script>
    <script src='../frameworks/js/bootstrap.min.js'></script>
    <script src="layout/session.js"></script>
    <script src="layout/session-graph.js"></script>
</body>

</html>