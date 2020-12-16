
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Stats | <?php echo $_SESSION['ign']; ?></title>
    <link rel="stylesheet" href="../frameworks/css/bootstrap.min.css">
    <link rel="stylesheet" href="../frameworks/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="layout/index-style.css">
    <script src="https://kit.fontawesome.com/dda5cbe6fd.js" crossorigin="anonymous"></script>
</head>

<body>
    <input type="text" id="api" hidden value="<?php echo $api; ?>">
    <input type="text" hidden id="uuid" value="<?php echo $uuid; ?>">

    <input type="text" id="heavenly-heads" hidden value="">
    <input type="text" hidden id="divine-heads" value="">
    <input type="text" id="succulent-heads" hidden value="">
    <input type="text" hidden id="sweet-heads" value="">
    <input type="text" id="tasty-heads" hidden value="">
    <input type="text" hidden id="salty-heads" value="">
    <input type="text" id="decent-heads" hidden value="">
    <input type="text" hidden id="meh-heads" value="">
    <input type="text" hidden id="yucky-heads" value="">
    <input type="text" hidden id="eww-heads" value="">


    <!-- SOLO Inputs -->
    <input type="text" id="heavenly-heads-solo" hidden value="">
    <input type="text" hidden id="divine-heads-solo" value="">
    <input type="text" id="succulent-heads-solo" hidden value="">
    <input type="text" hidden id="sweet-heads-solo" value="">
    <input type="text" id="tasty-heads-solo" hidden value="">
    <input type="text" hidden id="salty-heads-solo" value="">
    <input type="text" id="decent-heads-solo" hidden value="">
    <input type="text" hidden id="meh-heads-solo" value="">
    <input type="text" hidden id="yucky-heads-solo" value="">
    <input type="text" hidden id="eww-heads-solo" value="">

    <!-- teams Inputs -->
    <input type="text" id="heavenly-heads-teams" hidden value="">
    <input type="text" hidden id="divine-heads-teams" value="">
    <input type="text" id="succulent-heads-teams" hidden value="">
    <input type="text" hidden id="sweet-heads-teams" value="">
    <input type="text" id="tasty-heads-teams" hidden value="">
    <input type="text" hidden id="salty-heads-teams" value="">
    <input type="text" id="decent-heads-teams" hidden value="">
    <input type="text" hidden id="meh-heads-teams" value="">
    <input type="text" hidden id="yucky-heads-teams" value="">
    <input type="text" hidden id="eww-heads-teams" value="">



    <main class="container-fluid">
        <div class="titles-cont col-lg-12">
            <div class="pfp-box col-12 col-lg-3">

            </div>
            <div class="stats-cont col-12 col-lg-9">
                <div id="username-box" class="box col-12 col-md-6">
                    Username:
                </div>
                <div id="karma-box" class="box col-12 col-md-6">
                    Karma:
                </div>
                <div id="hypixellevel-box" class="box col-12 col-md-6">
                    Hypixel Level:
                </div>
                <div class="box col-12 col-md-6">
                    <span id="pnames-box">Previous IGNs:</span>

                    <span id="pnames-show" data-toggle="tooltip" data-placement="left" title="">
                        <i class="fa fa-question-circle" aria-hidden="true"></i>
                    </span>
                </div>

                <div id="status-box" class="box col-12 col-md-6">
                    Status:
                </div>
                <div id="achievements-box" class="box col-12 col-md-6">
                    Achievements:
                </div>
                <div id="quests-box" class="box col-12 col-md-6">
                    Quests Completed:
                </div>
                <div id="guild-box" class="box col-12 col-md-6">
                    Guild:
                </div>
            </div>
        </div>





        <span class="stats-settings col-12">

            <span class="mode col-md col-12">
                <button class="skywars-stats-button col-2" id="skywars-overall-stats-button"
                    class="active">Overall</button>
                <button class="skywars-stats-button col-2" id="skywars-solo-stats-button">Solo</button>
                <button class="skywars-stats-button col-2" id="skywars-teams-stats-button">Teams</button>
                <button class="skywars-stats-button col-2" id="skywars-mega-stats-button">Mega</button>
                <button class="skywars-stats-button col-2" id="skywars-ranked-stats-button">Ranked</button>
            </span>
            <a href="../session" class="row col-12 col-md-3"><button type="submit" class="skywars-stats-button"
                    id="skywars-session-stats-button" style="color:#FFF;text-align:center">Start a Session</button></a>
        </span>
        </div>
        <div class="titles-cont col-lg-12">


            <!-- 
            ====================================
            OVERALL STATS CONTAINER [TEXT]
            ==================================== 
            -->

            <div id="overall-cont" class="overall-stats-cont stats-cont col-12">
                <div class="row col-12 change-to-center except-center">
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses"></span>
                    </div>
                </div>
                <div class="row col-12 change-to-center except-center">
                    <div id="WL-box" class="box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Heads:</b> <span class="skywars-board-span" id="skywars-heads"></span>
                    </div>

                    <div id="level-box" class="box-2 col-6 col-lg">
                        <b>Level:</b> <span class="skywars-board-span" id="skywars-Level"></span>
                        <span class="skywars-board-span" id="skywars-experience"></span>

                    </div>
                </div>
                <div class="row col-12 change-to-center except-center">
                    <div id="opal-box" class="box-2 col-6 col-lg">
                        <b>Opals:</b> <span class="skywars-board-span" style="margin-right:5px" id="skywars-opals">Not
                            Found</span>
                        <span class="skywars-board-span" id="skywars-shards"></span>
                    </div>
                    <div id="shards-box" class="box-2 col-6 col-lg">
                        <b>Current Win streak:</b></b> <span class="skywars-board-span" id="skywars-winstreak"></span>
                    </div>
                    <div id="coins-box" class="box-2 col-6 col-lg">
                        <b>Coins:</b> <span class="skywars-board-span" id="skywars-coins"></span>
                    </div>
                    <div id="tokens-box" class="box-2 col-6 col-lg">
                        <b>Tokens:</b> <span class="skywars-board-span" id="skywars-tokens"></span>
                    </div>
                </div>
                <div class="row col-12 change-to-center except-center">
                    <div id="souls-box" class="box-2 col-6 col-lg">
                        <b>Souls:</b> <span class="skywars-board-span" id="skywars-souls"></span>
                    </div>
                    <div id="coins-box" class="box-2 col-6 col-lg">
                        <b>Souls Gathered:</b> <span class="skywars-board-span" id="skywars-soulsg"></span>
                    </div>
                    <div id="tokens-box" class="box-2 col-6 col-lg">
                        <b>Blocks Broken:</b> <span class="skywars-board-span" id="skywars-blocksbroken"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-playtime"></span>
                    </div>
                </div>
            </div>




            <!-- Solo Stats Container -->

            <div id="solo-cont" class="overall-stats-cont stats-cont col-12 hidden">

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color:#16b616;">[Overall]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-solo-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-solo-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-solo-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-solo-overall"></span>
                    </div>


                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-solo-overall"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-solo-overall"></span>
                    </div>

                    <div class="box-2 col-12 col-lg-3">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-playtime-solo-overall"></span>
                    </div>
                </div>
                <!-- Solo insane Stats structure starts  -->

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color: #a40d0d;">[Insane]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-solo-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-solo-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>deaths:</b> <span class="skywars-board-span" id="skywars-deaths-solo-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-solo-insane"></span>
                    </div>
                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-solo-insane"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-solo-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg-3">

                    </div>
                </div>

                <!-- Solo normal Stats structure starts  -->

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color: #D3B000;">[Normal]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-solo-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-solo-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>deaths:</b> <span class="skywars-board-span" id="skywars-deaths-solo-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-solo-normal"></span>
                    </div>
                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-solo-normal"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-solo-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg-3">

                    </div>

                </div>

            </div>

            <!-- 
            ====================================
            Solo STATS CONTAINER [GRAPH]
            ==================================== 
            -->



            <div id="teams-cont" class="overall-stats-cont stats-cont col-12 hidden">

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color:#16b616;">[Overall]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-teams-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-teams-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-teams-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-teams-overall"></span>
                    </div>


                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-teams-overall"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-teams-overall"></span>
                    </div>

                    <div class="box-2 col-12 col-lg-3">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-playtime-teams-overall"></span>
                    </div>
                </div>
                <!-- Solo insane Stats structure starts  -->

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color: #a40d0d;">[Insane]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-teams-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-teams-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-teams-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-teams-insane"></span>
                    </div>
                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-teams-insane"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-teams-insane"></span>
                    </div>
                    <div class="box-2 col-6 col-lg-3">

                    </div>
                </div>

                <!-- Solo normal Stats structure starts  -->

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color: #D3B000;">[Normal]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-teams-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-teams-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-teams-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-teams-normal"></span>
                    </div>
                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-teams-normal"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-teams-normal"></span>
                    </div>

                    <div class="box-2 col-6 col-lg-3">

                    </div>
                </div>

            </div>



            <div id="mega-cont" class="overall-stats-cont stats-cont col-12 hidden">
                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color:#16b616;">[Overall]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-mega-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-mega-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-mega-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-mega-overall"></span>
                    </div>


                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-mega-overall"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-mega-overall"></span>
                    </div>

                    <div class="box-2 col-12 col-lg-3">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-playtime-mega-overall"></span>
                    </div>
                </div>

                <!-- Mega stats Overall -->

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color: #a40d0d;">[Normal]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-mega-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-mega-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-mega-normal"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-mega-normal"></span>
                    </div>
                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-mega-normal"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-mega-normal"></span>
                    </div>
                    <div class="box-2 col-12 col-lg-3">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-playtime-mega-normal"></span>
                    </div>

                </div>
                <!-- Mega doubles Stats structure starts  -->

                <div class="row col-12 change-to-center">
                    <div class="box-2 col-12 col-lg-1 titles-change-to-center">
                        <b style="color: #D3B000;">[Double]</b>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-mega-doubles"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-mega-doubles"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-mega-doubles"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-mega-doubles"></span>
                    </div>
                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-mega-doubles"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-mega-doubles"></span>
                    </div>
                    <div class="box-2 col-12 col-lg-3">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-playtime-mega-doubles"></span>
                    </div>
                </div>
            </div>



            <!-- Ranked Stats container -->

            <div id="ranked-cont" class="ranked-cont overall-stats-cont stats-cont col-12 hidden">
                <div class="row col-12 change-to-center except-center">

                    <div class="box-2 col-6 col-lg">
                        <b>Wins:</b> <span class="skywars-board-span" id="skywars-wins-ranked-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Kills:</b> <span class="skywars-board-span" id="skywars-kills-ranked-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Deaths:</b> <span class="skywars-board-span" id="skywars-deaths-ranked-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Losses:</b> <span class="skywars-board-span" id="skywars-losses-ranked-overall"></span>
                    </div>

                    <div id="WL-box" class=" box-2 col-6 col-lg">
                        <b>W/L:</b> <span class="skywars-board-span" id="skywars-WL-ranked-overall"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>K/D:</b> <span class="skywars-board-span" id="skywars-KDR-ranked-overall"></span>
                    </div>
                </div>
                <div class="row col-12 change-to-center except-center">
                    <div id="KDR-box" class="box-2 col-6 col-lg">
                        <b>Assists:</b> <span class="skywars-board-span" id="ranked-assists"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>Highest Rating:</b> <span class="skywars-board-span" id="ranked-highestrating"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>Active Kit:</b> <span class="skywars-board-span" id="ranked-activekit"></span>
                    </div>
                    <div id="KDR-box" class="box-2 col-6 col-lg ">
                        <b>Survived players:</b> <span class="skywars-board-span" id="ranked-splayers"></span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Rewards:</b> <span type="button" id="skywars-ranked-rewards" style="margin-left:4px"
                            data-toggle="modal" data-target="#exampleModalCenter">1/2</span>
                    </div>
                    <div class="box-2 col-6 col-lg">
                        <b>Playtime:</b> <span class="skywars-board-span" id="skywars-ranked-playtime"></span>
                    </div>

                </div>
                <!-- Mega doubles Stats structure starts  -->

                <div id="rankedSeasons1" style="overflow-x:scroll;flex-wrap:nowrap"
                    class="rankedSeasons-board row col-12 change-to-center except-center">



                </div>
            </div>

        </div>
        <!-- 
            ====================================
            OVERALL STATS CONTAINER [GRAPH]
            ==================================== 
            -->


        <div style="order:3" class="charts-cont-overall charts-cont row col-12 graphs overall-graph ">

            <div class="col-lg-8">
                <h5 style="text-align: left;">Weekly Stats [Overall]</h5>
                <div id="chart_div2" class="chart"></div>
            </div>
            <div class="col-lg-4 pie-chart">
                <h5>Skywars heads [Overall]</h5>
                <div id="chart_div1" class="chart"></div>
            </div>
        </div>

        <!-- 
        ======================================
        END OF OVERALL STATS    
        ====================================== 
-->

        <!-- 
            ====================================
            Solo STATS CONTAINER [GRAPH]
            ==================================== 
            -->
        <div style="order:3" class="charts-cont-overall charts-cont row col-12 graphs solo-graph hidden">
            <div class="col-lg-8">
                <h5 style="text-align: left;">Weekly Stats [Solo]</h5>
                <div id="chart_div4" class="chart"></div>
            </div>
            <div class="col-lg-4 pie-chart">
                <h5>Skywars heads [Solo]</h5>
                <div id="chart_div3" class="chart"></div>
            </div>
        </div>


        <!-- 
            ====================================
            Teams STATS CONTAINER [GRAPH]
            ==================================== 
            -->


        <div style="order:3" class="charts-cont-overall charts-cont row col-12 graphs teams-graph hidden">

            <div class="col-lg-8">
                <h5 style="text-align: left;">Weekly Stats [Teams]</h5>
                <div id="chart_div6" class="chart"></div>
            </div>
            <div class="col-lg-4 pie-chart">
                <h5>Skywars heads [Teams]</h5>
                <div id="chart_div5" class="chart"></div>
            </div>
        </div>


        <!-- 
            ====================================
            Mega STATS CONTAINER [GRAPH]
            ==================================== 
            -->


        <div style="order:3" class="charts-cont-overall charts-cont row col-12 graphs mega-graph hidden">

            <div class="col-lg-12">
                <h5 style="text-align: left;">Weekly Stats [Mega]</h5>
                <div id="chart_div7" class="chart"></div>
            </div>

        </div>



        <!-- 
            ====================================
            Ranked STATS CONTAINER [GRAPH]
            ==================================== 
            -->


        <div style="order:3" class="charts-cont-overall charts-cont row col-12 graphs ranked-graph hidden">

            <div class="col-lg-12">
                <h5 style="text-align: left;">Weekly Stats [Ranked]</h5>
                <div id="chart_div8" class="chart"></div>
            </div>

        </div>


    </main>


    <!-- Alerts Section -->

    <div class="alert session-alert alert-primary hidden" role="alert">
        <p></p>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Ranked Rewards</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" style="height: 266px;">
                    <div id="rewards-body" class="row col-12">
                        <span class="col row">
                            <h6 style="color: darkgreen;text-align:center;margin-bottom: 10px" class="col-12">[Masters]
                            </h6>
                            <span id="masterrewards" style="height: 189px;text-align:center" class="col"></span>
                        </span>
                        <h6 class="col row">
                            <font style="color: Aqua;text-align:center;margin-bottom: 10px" class="col-12">[Diamond]
                            </font>
                            <span id="diamondrewards" style="height: 189px;text-align:center" class="col"></span>
                        </h6>
                        <h6 class="col row">
                            <font style="color: Gold;text-align:center;margin-bottom: 10px" class="col-12">[Gold]</font>
                            <span id="goldrewards" style="height: 189px;text-align:center" class="col"></span>
                        </h6>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="loading-page">
        <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <p style="width:80%;margin:auto;text-align:center;bottom:90px; position:absolute;font-size:18px"><b>Note:</b> this is the beta version, please contact @SmilySpilly on twitter for Bug reports / Suggestions!</h4>
    </div>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src='../frameworks/js/jquery-3.3.1.min.js'></script>
    <script src="../frameworks/js/poper.min.js"></script>
    <script src='../frameworks/js/bootstrap.bundle.min.js'></script>
    <script src='../frameworks/js/bootstrap.min.js'></script>
    <script src='layout/stats.js'></script>
    <script src="layout/graph.js"></script>
</body>

</html>