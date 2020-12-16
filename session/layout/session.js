var gamesCount = parseInt(localStorage.getItem("games-count")) || 0,
    gamesExp = document.getElementById("gameExp"),
    gamesShards = document.getElementById("gameShards"),
    pause_time = document.getElementById("paused_timestamp").value,
    start_time = document.getElementById("start_timestamp").value,
    finish_time = document.getElementById("finish_timestamp").value,
    cooldown_time = document.getElementById("cooldown").value,

    sessionWinsH = document.getElementById("session-wins-history"),
    sessionKillsH = document.getElementById("session-kills-history"),
    sessionLossesH = document.getElementById("session-losses-history"),
    sessionDeathsH = document.getElementById("session-deaths-history"),
    sessionWinstreakH = document.getElementById("session-winstreak-history"),
    sessionKillstreakH = document.getElementById("session-killstreak-history"),
    sessionHighWSH = document.getElementById("session-highest-ws-history"),
    sessionHighKSH = document.getElementById("session-highest-ks-history"),

    sessionWinsHSolo = document.getElementById("session-wins-history-solo"),
    sessionKillsHSolo = document.getElementById("session-kills-history-solo"),
    sessionLossesHSolo = document.getElementById("session-losses-history-solo"),
    sessionDeathsHSolo = document.getElementById("session-deaths-history-solo"),
    sessionWinstreakHSolo = document.getElementById("session-winstreak-history-solo"),
    sessionKillstreakHSolo = document.getElementById("session-killstreak-history-solo"),
    sessionHighWSHSolo = document.getElementById("session-highest-ws-history-solo"),
    sessionHighKSHSolo = document.getElementById("session-highest-ks-history-solo"),

    sessionWinsHTeams = document.getElementById("session-wins-history-teams"),
    sessionKillsHTeams = document.getElementById("session-kills-history-teams"),
    sessionLossesHTeams = document.getElementById("session-losses-history-teams"),
    sessionDeathsHTeams = document.getElementById("session-deaths-history-teams"),
    sessionWinstreakHTeams = document.getElementById("session-winstreak-history-teams"),
    sessionKillstreakHTeams = document.getElementById("session-killstreak-history-teams"),
    sessionHighWSHTeams = document.getElementById("session-highest-ws-history-teams"),
    sessionHighKSHTeams = document.getElementById("session-highest-ks-history-teams");



function cooldown(){
    
    function getTime(seconds) {
        seconds = Number(seconds);
        var minutes = Math.floor(seconds % 3600 / 60);
        var sec = Math.floor(seconds % 3600 % 60);
        
        if(sec < 10){
            sec = "0" + sec
        } else{
            sec = sec
        }
        
        if(minutes < 10){
            minutes = "0" + minutes
        } else{
            minutes = minutes
        }
        
        if ((current_timestamp - cooldown_time) < 1487){
            $(".cooldown-timer").html(minutes + ":" + sec)

        }else{
            $(".cooldown-timer").html("00:00")   
           clearInterval(cooldownInt)
        }
        
   
    }

    
        current_timestamp = Date.now(),
        current_timestamp = current_timestamp.toString(),
        current_timestamp = current_timestamp.slice(0, -3),
        current_timestamp = parseInt(current_timestamp);
    
    if((current_timestamp - cooldown_time) < 1500){
        $('.new-session-clear').prop("disabled", true)
    } else {
         $('.new-session-clear').prop("disabled", false)
    }
        
    getTime( (parseInt(cooldown_time)  + 1500) - current_timestamp)    
   

}
var cooldownInt = setInterval(cooldown,1000)

function sessionTimer() {

    var start_time = document.getElementById("start_timestamp").value,
        finish_time = document.getElementById("finish_timestamp").value,
        pause_time = document.getElementById("paused_timestamp").value,
        current_timestamp = Date.now(),
        current_timestamp = current_timestamp.toString(),
        current_timestamp = current_timestamp.slice(0, -3),
        current_timestamp = parseInt(current_timestamp);

    function getTime(seconds) {
      
        seconds = Number(seconds) ;
        var hours = Math.floor((seconds % (24 * 3600)) / 3600);
        var minutes = Math.floor(seconds % 3600 / 60);
        var sec = Math.floor(seconds % 3600 % 60);
        var counter = parseInt(localStorage.getItem('timer-counter')) || 0;
        
        if(counter > 240){
          
            $('#end_session_button').prop("disabled", false);
        
        }
        
        counter += 1;
        localStorage.setItem('timer-counter',counter)
    
        if (sec < 10) {
            document.getElementById("timer-sec").innerHTML = "0" + sec;
        } else {
            document.getElementById("timer-sec").innerHTML = sec;
        }

        if (minutes < 10) {
            document.getElementById("timer-minutes").innerHTML = "0" + minutes;
        } else {
            document.getElementById("timer-minutes").innerHTML = minutes;
        }

        document.getElementById("timer-hours").innerHTML = hours + ":";
        
    }
    
  
    if((finish_time - 14) <= current_timestamp){
           getTime((finish_time - start_time))

        clearInterval(sessionTimerStart)
        
       if(document.getElementById('check-timer').classList.contains('active')){
           location.replace("sessionActivate.php/?action=endsession-d");
       }
    } else {
           if ((finish_time - start_time) >= 43200) {
    
                getTime((current_timestamp + 16) - start_time) 
    
        } else {
    
                getTime(finish_time - (current_timestamp + 14 ) ) 
                
        }
    }
    
    
    

}



$('.new-session-clear').click(function () {
    localStorage.clear()
})

var sessionTimerStart = setInterval(function () {
    if (document.getElementById("check-timer").classList.contains("active") === true) {
        sessionTimer();

    } else if (document.getElementById("check-timer").classList.contains("paused") === true) {

        if ((pause_time - start_time) % 60 < 10) {
            document.getElementById("timer-sec").innerHTML = "0" + (pause_time - start_time) % 60;
        } else {
            document.getElementById("timer-sec").innerHTML = (pause_time - start_time) % 60;
        }

        
        if (Math.floor(((pause_time - start_time) / 60) % 60) < 10){
            document.getElementById("timer-minutes").innerHTML = "0" + Math.floor(((pause_time - start_time) / 60) % 60);
            
           
        }else{
            document.getElementById("timer-minutes").innerHTML = Math.floor(((pause_time - start_time) / 60) % 60);

        }

        document.getElementById("timer-hours").innerHTML = Math.floor((pause_time - start_time) / 60 / 60) + ":";

    } else {
        document.getElementById("timer-minutes").innerHTML = "00";

        document.getElementById("timer-hours").innerHTML = "0:";

        document.getElementById("timer-sec").innerHTML = "00";
    }

    if (document.getElementById("check-timer").classList.contains("active") === true || document.getElementById("check-timer").classList.contains("paused") === true) {


        $(".start-session-form").addClass("hidden");
        $(".session-ongoing-settings").removeClass("hidden");
    } else {


        $(".start-session-form").removeClass("hidden");
        $(".session-ongoing-settings").addClass("hidden");

    }

}, 500);

// =======================
// Timer ENDS
// =======================



// =======================
// SESSION SETTINGS STARTS
// =======================

function showBox() {
    var selectBox = document.getElementById("session-duration-select-box");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == "custom-d") {
        $('.custom-duration').show();
        $('.label-dur').show();
    }
    else {
        $('.custom-duration').hide();
        $('.label-dur').hide();
    }
}


var playerAPI = document.getElementById("playerAPI").value,
    playerUUID = document.getElementById("playerUUID").value;
function requestSend() {
    
    
    
    $.ajax({

        url: "https://api.hypixel.net/player?key=" + playerAPI + "&uuid=" + playerUUID,
        datatype: "json",
        cache: true,
        success: function (data, status) {

            // Skywars Level Math
            var skywarsExPerLevel = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000],
                playerEXP = data.player.stats.SkyWars.skywars_experience,
                exactLevel,
                neededEXP;
            if (playerEXP >= 15000) {
                exactLevel = (playerEXP - 15000) / 10000 + 12;
                neededEXP = ((Math.floor(exactLevel + 1) - exactLevel).toFixed(4) * 10000)

            } else {
                var levelxp;

                for (var i = 0; i < skywarsExPerLevel.length; i++) {



                    if (playerEXP < skywarsExPerLevel[i]) {

                        levelxp = skywarsExPerLevel[i] - skywarsExPerLevel[i - 1]
                        exactLevel = i + (playerEXP - skywarsExPerLevel[i - 1]) / (skywarsExPerLevel[i] - skywarsExPerLevel[i - 1]);
                        neededEXP = ((Math.floor(exactLevel + 1) - exactLevel).toFixed(4) * (Math.floor(skywarsExPerLevel[i]) + 1))

                        break;
                    }

                }
            }
            // ============================================
            // VARS

            var wins = data.player.stats.SkyWars.wins || 0,
                kills = data.player.stats.SkyWars.kills || 0,
                deaths = data.player.stats.SkyWars.deaths || 0,
                losses = data.player.stats.SkyWars.losses || 0,
                wins_solo = data.player.stats.SkyWars.wins_solo || 0,
                kills_solo = data.player.stats.SkyWars.kills_solo || 0,
                deaths_solo = data.player.stats.SkyWars.deaths_solo || 0,
                wins_teams = data.player.stats.SkyWars.wins_team || 0,
                kills_teams = data.player.stats.SkyWars.kills_team || 0,
                deaths_teams = data.player.stats.SkyWars.deaths_team || 0,
                losses_solo = data.player.stats.SkyWars.losses_solo || 0,
                losses_teams = data.player.stats.SkyWars.losses_team || 0,

                shards = data.player.stats.SkyWars.shard || 0,
                skywarsExp = data.player.stats.SkyWars.skywars_experience || 0,
                heads = data.player.stats.SkyWars.heads || 0,
                coins = data.player.stats.SkyWars.coins || 0,

                eww_heads = data.player.stats.SkyWars.heads_eww || 0,
                yucky_heads = data.player.stats.SkyWars.heads_yucky || 0,
                meh_heads = data.player.stats.SkyWars.heads_meh || 0,
                salty_heads = data.player.stats.SkyWars.heads_salty || 0,
                tasty_heads = data.player.stats.SkyWars.heads_tasty || 0,
                decent_heads = data.player.stats.SkyWars.heads_decent || 0,
                succulent_heads = data.player.stats.SkyWars.heads_succulent || 0,
                sweet_heads = data.player.stats.SkyWars.heads_sweet || 0,
                divine_heads = data.player.stats.SkyWars.heads_divine || 0,
                heavenly_heads = data.player.stats.SkyWars.heads_heavenly || 0,
                totalHeads = data.player.stats.SkyWars.heads,
                gamescoins = document.getElementById("gamescoins");

            var sessionMinutes = Math.floor(((finish_time - start_time) / 60) % 60),
                sessionHours = Math.floor((finish_time - start_time) / 60 / 60);


            // ============================================        
            // GAMES HISTORY SESSION
            // ============================================        
            function getRecentGames() {

                if (gamesCount > 0) {



                    $(".games-hide-title").addClass("hidden")
                    $("#game-container").html("")
                    document.getElementById("modalsGames").innerHTML = ""
                    $("#games-played-overall").html("| " + gamesCount + " Games")
                }
                for (var i = 1; i <= gamesCount; i++) {

                    var checkCGames = (localStorage.getItem("Cgame" + i) !== null) ? localStorage.getItem("Cgame" + i) : "";

                    document.getElementById("game-container").innerHTML += `
                            <div class=" col-6 col-md no-games-title show-games-box" style='margin-right:7px;margin-top:5px;max-width:68px;min-width:68px;${checkCGames}border-bottom:3px solid ${localStorage.getItem('game' + i)}' >
                            <h2 class="btn fade-button" style='color:#DFDFDF;font-weight:bold;width:100%;height:100%;font-size:19px' data-toggle="modal" data-backdrop="false" data-target="#exampleModal${i}">${i}</h2>
                            </div>`;

                    $.ajax({
                        url: "data/" + playerUUID + "/wins/game" + i + ".html",
                        method: "GET",
                        success: function (data) {
                            document.getElementById("modalsGames").innerHTML += data
                        }
                    })
                }
            }

            if (document.getElementById('check-timer').classList.contains('stop-games') === true) {
                getRecentGames()
                $('#check-timer').removeClass('stop-games')
            }

            function postRecentGameJS(){
            if (wins - sessionWinsH.value == 1 || losses - sessionLossesH.value == 1) {

                if (wins - sessionWinsH.value == 1) {
                    var gameStatus = "Winner";
                    localStorage.setItem("game" + (gamesCount + 1), '#19cd19')
                } else if (losses - sessionLossesH.value == 1) {
                    var gameStatus = "Loser"
                    localStorage.setItem("game" + (gamesCount + 1), '#e62e38')
                }



                var gameKills = new Intl.NumberFormat().format(kills - sessionKillsH.value),
                    gameExperience = new Intl.NumberFormat().format(skywarsExp - gamesExp.value),
                    gameShards = ((shards - gamesShards) < 0 ) ? new Intl.NumberFormat().format((shards + 20000) - gamesShards.value) : new Intl.NumberFormat().format(shards - gamesShards.value),
                    gamescoins = new Intl.NumberFormat().format(coins - $('#gamescoins').attr('value'));

                if (heads - $('#total-heads').attr('value') > 0) {
                    var gameHeads = (heads - $('#total-heads').attr('value')),
                        gameHeavenly_heads = heavenly_heads - $("#heavenly-heads").attr("value"),
                        gameDivine_heads = divine_heads - $("#divine-heads").attr("value"),
                        gameSweet_heads = sweet_heads - $("#sweet-heads").attr("value"),
                        gameSucculent_heads = succulent_heads - $("#succulent-heads").attr("value"),
                        gameDecent_heads = decent_heads - $("#decent-heads").attr("value"),
                        gameTasty_heads = tasty_heads - $("#tasty-heads").attr("value"),
                        gameSalty_heads = salty_heads - $("#salty-heads").attr("value"),
                        gameMeh_heads = meh_heads - $("#meh-heads").attr("value"),
                        gameYucky_heads = yucky_heads - $("#yucky-heads").attr("value"),
                        gameEww_heads = eww_heads - $("#eww-heads").attr("value");

                    localStorage.setItem('Cgame' + (gamesCount + 1), "border-top: 3px solid #9E1398;");
                };

                // GRAPH UPDATE
                localStorage.setItem("exp-1-graph", parseInt(localStorage.getItem("exp-2-graph")))
                localStorage.setItem("exp-2-graph", parseInt(localStorage.getItem("exp-3-graph")))
                localStorage.setItem("exp-3-graph", parseInt(localStorage.getItem("exp-4-graph")))
                localStorage.setItem("exp-4-graph", parseInt(localStorage.getItem("exp-5-graph")))
                localStorage.setItem("exp-5-graph", parseInt(localStorage.getItem("exp-6-graph")))
                localStorage.setItem("exp-6-graph", parseInt(localStorage.getItem("exp-7-graph")))
                localStorage.setItem("exp-7-graph", skywarsExp - gamesExp.value)

                localStorage.setItem("kills-1-graph", parseInt(localStorage.getItem("kills-2-graph")))
                localStorage.setItem("kills-2-graph", parseInt(localStorage.getItem("kills-3-graph")))
                localStorage.setItem("kills-3-graph", parseInt(localStorage.getItem("kills-4-graph")))
                localStorage.setItem("kills-4-graph", parseInt(localStorage.getItem("kills-5-graph")))
                localStorage.setItem("kills-5-graph", parseInt(localStorage.getItem("kills-6-graph")))
                localStorage.setItem("kills-6-graph", parseInt(localStorage.getItem("kills-7-graph")))
                localStorage.setItem("kills-7-graph", kills - sessionKillsH.value)

                localStorage.setItem("deaths-1-graph", parseInt(localStorage.getItem("deaths-2-graph")))
                localStorage.setItem("deaths-2-graph", parseInt(localStorage.getItem("deaths-3-graph")))
                localStorage.setItem("deaths-3-graph", parseInt(localStorage.getItem("deaths-4-graph")))
                localStorage.setItem("deaths-4-graph", parseInt(localStorage.getItem("deaths-5-graph")))
                localStorage.setItem("deaths-5-graph", parseInt(localStorage.getItem("deaths-6-graph")))
                localStorage.setItem("deaths-6-graph", parseInt(localStorage.getItem("deaths-7-graph")))
                localStorage.setItem("deaths-7-graph", deaths - sessionDeathsH.value)

                $.ajax({
                    url: "https://api.hypixel.net/recentGames?key=" + playerAPI + "&uuid=" + playerUUID,
                    datatype: "json",
                    cache: false,
                    success: function (gameStats) {
                        
                        
                        if(gameStats.games[0].hasOwnProperty('ended')){
                        var gameMap = gameStats.games[0].map || "Unknown",
                            gameStartTime = gameStats.games[0].date,
                            gameEndTime = Date.now();
                        }else if(gameStats.games[1].hasOwnProperty('ended')){
                            var gameMap = gameStats.games[1].map || "Unknown",
                            gameStartTime = gameStats.games[1].date,
                            gameEndTime = Date.now();
                        }else if(gameStats.games[2].hasOwnProperty('ended')){
                            var gameMap = gameStats.games[2].map || "Unknown",
                            gameStartTime = gameStats.games[2].date,
                            gameEndTime = Date.now();
                        }

                        gamesCount += 1
                        localStorage.setItem("games-count", gamesCount)

                        $.ajax({
                            url: "sessionActivate.php/?action=postRecentGames&gameNumber=" + gamesCount + "&gameStatus=" + gameStatus +
                                '&gameKills=' + gameKills + "&gameEXP=" + gameExperience + "&gameMode=" + data.player.stats.SkyWars.lastMode + "&gameShards=" + gameShards + "&gameCoins=" + gamescoins + "&gameMap=" + gameMap +
                                "&gameStart=" + gameStartTime + "&gameEnd=" + gameEndTime + "&gameHeads=" + gameHeads +
                                "&headsHeavenly=" + gameHeavenly_heads + "&headsDivine=" + gameDivine_heads + "&headsSweet=" + gameSweet_heads + "&headsSucculent=" + gameSucculent_heads + "&headsDecent=" + gameDecent_heads +
                                "&headsTasty=" + gameTasty_heads + "&headsSalty=" + gameSalty_heads + "&headsMeh=" + gameMeh_heads + "&headsYucky=" + gameYucky_heads + "&headsEww=" + gameEww_heads,
                            method: "POST",
                            success: function (data, status) {

                            }
                        })
                        
                        gamesExp.setAttribute("value", skywarsExp)
                        gamesShards.setAttribute("value", shards)

                        $('#gamescoins').attr('value', coins)

                        // ============================================        
                        // ASSIGNING VALUES [HEADS]
                        // ============================================ 
                        
                    setTimeout(getRecentGames,2000)
                    }
                })

            }}
            
             if (wins - sessionWinsH.value != 0 || losses - sessionLossesH.value != 0){
                          postRecentGameJS()
                          
                      }

            // ============================================        
            // ASSIGNING VALUES TO THE SESSION BOARD [STARTS]
            // ============================================        

            $.ajax({
                url: "sessionActivate.php?action=getInfo",
                datatype: "json",
                cache: false,
                success: function (data, status) {
                    var playerData = JSON.parse(data);

                    // W/l COLOR!
                    if (((wins / losses) - (playerData.wins / playerData.losses)) < 0.0000) {
                        var wlColor = "#e62e38";
                    } else if (((wins / losses) - (playerData.wins / playerData.losses)) > 0.0000) {
                        var wlColor = "#19cd19";
                    } else {
                        var wlColor = "#F7A531";
                    }

                    // k/d COLOR!
                    if (((kills / deaths) - (playerData.kills / playerData.deaths)) < 0.0000) {
                        var kdColor = "#e62e38";
                    } else if (((kills / deaths) - (playerData.kills / playerData.deaths)) > 0.0000) {
                        var kdColor = "#19cd19";
                    } else {
                        var kdColor = "#F7A531";
                    }



                    $("#heavenly-heads-g").attr("value", heavenly_heads - playerData.heavenly_heads)
                    $("#divine-heads-g").attr("value", divine_heads - playerData.divine_heads)
                    $("#succulent-heads-g").attr("value", succulent_heads - playerData.succulent_heads)
                    $("#sweet-heads-g").attr("value", sweet_heads - playerData.sweet_heads)
                    $("#tasty-heads-g").attr("value", tasty_heads - playerData.tasty_heads)
                    $("#salty-heads-g").attr("value", salty_heads - playerData.salty_heads)
                    $("#decent-heads-g").attr("value", decent_heads - playerData.decent_heads)
                    $("#meh-heads-g").attr("value", meh_heads - playerData.meh_heads)
                    $("#yucky-heads-g").attr("value", yucky_heads - playerData.yucky_heads)
                    $("#eww-heads-g").attr("value", eww_heads - playerData.eww_heads)
                    $("#total-heads-g").attr("value", eww_heads + yucky_heads + meh_heads + decent_heads + salty_heads + tasty_heads + sweet_heads + succulent_heads + divine_heads + heavenly_heads);


                    $("#wins").html(new Intl.NumberFormat().format(wins) + "<font style='color:#19cd19'> (" + new Intl.NumberFormat().format(wins - playerData.wins) + "+)</font>");
                    $("#wins-hour").html((((wins - playerData.wins) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0));
                    $("#kills").html(new Intl.NumberFormat().format(kills) + "<font style='color:#19cd19'> (" + new Intl.NumberFormat().format(kills - playerData.kills) + "+)</font>");
                    $("#kills-hour").html((((kills - playerData.kills) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0));

                    $("#losses").html(new Intl.NumberFormat().format(losses) + "<font style='color:#e62e38;'> (" + new Intl.NumberFormat().format(losses - playerData.losses) + "+)</font>");
                    $("#losses-hour").html((((losses - playerData.losses) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0));

                    $("#deaths").html(new Intl.NumberFormat().format(deaths) + "<font style='color:#e62e38;'> (" + new Intl.NumberFormat().format(deaths - playerData.deaths) + "+)</font>");
                    $("#deaths-hour").html((((deaths - playerData.deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(0));


                    var WLHVar = isNaN((((wins - playerData.wins) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((losses - playerData.losses) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2)) ? 0 : (((wins - playerData.wins) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((losses - playerData.losses) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2),
                        KSHVar = isNaN((((kills - playerData.kills) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths - playerData.deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2)) ? 0 : (((kills - playerData.kills) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths - playerData.deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2);


                    $("#w-l").html((wins / losses).toFixed(3) + '<font style="color:' + wlColor + '"> (' + ((wins / losses) - (playerData.wins / playerData.losses)).toFixed(4) + ")</font>");
                    $("#w-l-hour").html(WLHVar);
                    $("#k-l").html((kills / deaths).toFixed(3) + '<font style="color:' + kdColor + '"> (' + ((kills / deaths) - (playerData.kills / playerData.deaths)).toFixed(4) + ")</font>");
                    $("#k-l-hour").html(KSHVar);

                    var shardsImprove = (shards - playerData.shards < 0) ? (shards + 20000) - playerData.shards : shards - playerData.shards

                    $("#shards").html(new Intl.NumberFormat().format(shards) + "<font style='color:#66D2C8'> (" + new Intl.NumberFormat().format(shardsImprove) + "+)</font>");
                    $("#shards-hour").html(new Intl.NumberFormat().format((((shardsImprove) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0)));
                    $("#experience").html(new Intl.NumberFormat().format(skywarsExp) + "<font style='color:#E161EF'> (" + new Intl.NumberFormat().format(skywarsExp - playerData.skywars_experience) + "+)</font>");
                    $("#experience-hour").html(new Intl.NumberFormat().format((((skywarsExp - playerData.skywars_experience) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0)));
                    $("#coins").html(new Intl.NumberFormat().format(coins) + "<font style='color:#F7B900'> (" + new Intl.NumberFormat().format(coins - playerData.coins) + "+)</font>");
                    $("#coins-hour").html(new Intl.NumberFormat().format((((coins - playerData.coins) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0)));

                    var recordedHeads = parseInt(playerData.heavenly_heads) + parseInt(playerData.divine_heads) + parseInt(playerData.sweet_heads) + parseInt(playerData.succulent_heads) + parseInt(playerData.tasty_heads) + parseInt(playerData.salty_heads) + parseInt(playerData.decent_heads) + parseInt(playerData.meh_heads) + parseInt(playerData.yucky_heads) + parseInt(playerData.eww_heads)

                    $("#heads").html(new Intl.NumberFormat().format(totalHeads) + "<font style='color:#90008A'> (" + new Intl.NumberFormat().format(totalHeads - recordedHeads) + "+)</font>")
                    $("#heads-hour").html(new Intl.NumberFormat().format((((totalHeads - recordedHeads) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0)))


                    // LOCALSTORAGE FOR WINSTREAK!
            
            if (sessionWinsH.value == 0) {
                sessionWinsH.setAttribute("value", wins);
                sessionKillsH.setAttribute("value", kills);
                sessionLossesH.setAttribute("value", losses);
                sessionDeathsH.setAttribute("value", deaths);
            
                if (localStorage.getItem('gamesShards') !== null) {
                    gamesShards.setAttribute("value", parseInt(localStorage.getItem('gamesShards')))
                } else {
                    gamesShards.setAttribute("value", shards)
                }
            
                if (localStorage.getItem('games-exp') !== null) {
                    gamesExp.setAttribute("value", parseInt(localStorage.getItem('games-exp')))
                } else {
                    gamesExp.setAttribute("value", skywarsExp)
                }
            
                if (localStorage.getItem('games-coins') !== null) {
                    gamescoins.setAttribute("value", parseInt(localStorage.getItem('games-coins')))
                } else {
                    gamescoins.setAttribute("value", coins)
                }
            
                // NORMAL
                if (localStorage.getItem('wsHistory') !== null) {
                    sessionWinstreakH.setAttribute("value", parseInt(localStorage.getItem('wsHistory')))
                } else {
                    sessionWinstreakH.setAttribute("value", 0)
                }
                if (localStorage.getItem('ksHistory') !== null) {
                    sessionKillstreakH.setAttribute("value", parseInt(localStorage.getItem('ksHistory')))
                } else {
                    sessionKillstreakH.setAttribute("value", 0)
                }
            
                // HIGHEST 
                if (localStorage.getItem('highWsHistory') !== null) {
                    sessionHighWSH.setAttribute("value", parseInt(localStorage.getItem('highWsHistory')))
                } else {
                    sessionHighWSH.setAttribute("value", 0)
                }
                if (localStorage.getItem('highKsHistory') !== null) {
                    sessionHighKSH.setAttribute("value", parseInt(localStorage.getItem('highKsHistory')))
                } else {
                    sessionHighKSH.setAttribute("value", 0)
                }
            
            
            }
            
            
            if (wins - sessionWinsH.value == 1) {
            
                sessionWinstreakH.setAttribute("value", parseInt(parseInt(sessionWinstreakH.value) + 1));
            
                if (sessionHighWSH.value < sessionWinstreakH.value) {
                    sessionHighWSH.setAttribute("value", parseInt(parseInt(sessionHighWSH.value) + 1));
                    localStorage.setItem("highWsHistory", sessionHighWSH.value);
                }
            
            } else if (losses - sessionLossesH.value == 1) {
                sessionWinstreakH.setAttribute("value", 0);
                localStorage.setItem("highWsHistory", sessionHighWSH.value);
            
            }
            
       
    
            
            if (kills - sessionKillsH.value >= 1 && deaths - sessionDeathsH.value !== 1) {
                sessionKillstreakH.setAttribute("value", parseInt(parseInt(sessionKillstreakH.value) + (parseInt(kills - sessionKillsH.value))));
                localStorage.setItem("ksHistory", sessionKillstreakH);
         
            
            } else if (deaths - sessionDeathsH.value == 1) {
                sessionKillstreakH.setAttribute("value", 0);
                localStorage.setItem("ksHistory", 0);
            
            }
            // HIGHEST KILL STREAK CODE
            if (sessionHighKSH.value < sessionKillstreakH.value) {
                sessionHighKSH.setAttribute("value", parseInt(sessionKillstreakH.value));
                localStorage.setItem("highKsHistory", sessionHighKSH.value);
            }
            
            sessionWinsH.setAttribute("value", wins);
            sessionKillsH.setAttribute("value", kills);
            sessionLossesH.setAttribute("value", losses);
            sessionDeathsH.setAttribute("value", deaths);
            
            localStorage.setItem("wsHistory", sessionWinstreakH.value);
            localStorage.setItem("ksHistory", sessionKillstreakH.value);


                    $("#winstreak").html(sessionWinstreakH.value);
                    $("#high-winstreak").html(sessionHighWSH.value);
                    $("#killstreak").html(sessionKillstreakH.value);
                    $("#high-killstreak").html(sessionHighKSH.value);

                    //======================
                    // SOLO [== | ==]
                    //======================

                    $("#wins-solo").html(new Intl.NumberFormat().format(wins_solo) + "<font style='color:#19cd19'> (" + new Intl.NumberFormat().format(wins_solo - playerData.solo_wins) + "+)</font>");
                    $("#wins-hour-solo").html(new Intl.NumberFormat().format(((wins_solo - playerData.solo_wins) / ((sessionHours * 60) + sessionMinutes)) * 60));
                    $("#kills-solo").html(new Intl.NumberFormat().format(kills_solo) + "<font style='color:#19cd19'> (" + new Intl.NumberFormat().format(kills_solo - playerData.solo_kills) + "+)</font>");
                    $("#kills-hour-solo").html(new Intl.NumberFormat().format(((kills_solo - playerData.solo_kills) / ((sessionHours * 60) + sessionMinutes)) * 60));
                    $("#deaths-solo").html(new Intl.NumberFormat().format(deaths_solo) + "<font style='color:#e62e38;'> (" + new Intl.NumberFormat().format(deaths_solo - playerData.solo_deaths) + "+)</font>");
                    $("#deaths-hour-solo").html(new Intl.NumberFormat().format(((deaths_solo - playerData.solo_deaths) / ((sessionHours * 60) + sessionMinutes)) * 60));

                    $("#losses-solo").html(new Intl.NumberFormat().format(deaths_solo) + "<font style='color:#e62e38;'> (" + new Intl.NumberFormat().format(deaths_solo - playerData.solo_deaths) + "+)</font>");
                    $("#losses-hour-solo").html((((deaths_solo - playerData.solo_deaths) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0));

                    var soloWLHVar = isNaN((((wins_solo - playerData.solo_wins) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths_solo - playerData.solo_deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2)) ? 0 : (((wins_solo - playerData.solo_wins) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths_solo - playerData.solo_deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2),
                        soloKSHVar = isNaN((((kills_solo - playerData.solo_kills) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths_solo - playerData.solo_deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2)) ? 0 : (((kills_solo - playerData.solo_kills) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths_solo - playerData.solo_deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2);

                    $("#w-l-solo").html((wins_solo / deaths_solo).toFixed(3) + '<font style="color:' + wlColor + '"> (' + ((wins_solo / deaths_solo) - (playerData.solo_wins / playerData.solo_deaths)).toFixed(4) + ")</font>");
                    $("#w-l-hour-solo").html(soloWLHVar);
                    $("#k-l-solo").html((kills_solo / deaths_solo).toFixed(3) + '<font style="color:' + kdColor + '"> (' + ((kills_solo / deaths_solo) - (playerData.solo_kills / playerData.solo_deaths)).toFixed(4) + ")</font>");
                    $("#k-l-hour-solo").html(soloKSHVar);

                    // LOCALSTORAGE FOR WINSTREAK!

                    if (sessionWinsHSolo.value == 0) {
                        sessionWinsHSolo.setAttribute("value", wins_solo);
                        sessionKillsHSolo.setAttribute("value", kills_solo);
                        sessionLossesHSolo.setAttribute("value", losses_solo);
                        sessionDeathsHSolo.setAttribute("value", deaths_solo);

                        // NORMAL
                        if (localStorage.getItem('wsHistory-solo') !== null) {
                            sessionWinstreakHSolo.setAttribute("value", parseInt(localStorage.getItem('wsHistory-solo')))
                        } else {
                            sessionWinstreakHSolo.setAttribute("value", 0)
                        }
                        if (localStorage.getItem('ksHistory-solo') !== null) {
                            sessionKillstreakHSolo.setAttribute("value", parseInt(localStorage.getItem('ksHistory-solo')))
                        } else {
                            sessionKillstreakHSolo.setAttribute("value", 0)
                        }

                        // HIGHEST 
                        if (localStorage.getItem('highWsHistory-solo') !== null) {
                            sessionHighWSHSolo.setAttribute("value", parseInt(localStorage.getItem('highWsHistory-solo')))
                        } else {
                            sessionHighWSHSolo.setAttribute("value", 0)
                        }
                        if (localStorage.getItem('highKsHistory-solo') !== null) {
                            sessionHighKSHSolo.setAttribute("value", parseInt(localStorage.getItem('highKsHistory-solo')))
                        } else {
                            sessionHighKSHSolo.setAttribute("value", 0)
                        }


                    }

                    if (wins_solo - sessionWinsHSolo.value == 1) {
                        sessionWinstreakHSolo.setAttribute("value", parseInt(parseInt(sessionWinstreakHSolo.value) + 1));
  
                    } else if (losses_solo - sessionLossesHSolo.value == 1) {
                        sessionWinstreakHSolo.setAttribute("value", 0);
                        localStorage.setItem("highWsHistory-solo", sessionHighWSHSolo.value);

                    }
                    if (sessionHighWSHSolo.value < sessionWinstreakHSolo.value) {
                            sessionHighWSHSolo.setAttribute("value", parseInt(parseInt(sessionHighWSHSolo.value) + 1));
                            localStorage.setItem("highWsHistory-solo", sessionHighWSHSolo.value);
                        }

                    if (kills_solo - sessionKillsHSolo.value >= 1 && deaths_solo - sessionDeathsHSolo.value !== 1) {
                        sessionKillstreakHSolo.setAttribute("value", parseInt(parseInt(sessionKillstreakHSolo.value) + (parseInt(kills_solo - sessionKillsHSolo.value))));

                        localStorage.setItem("ksHistory-solo", sessionKillstreakHSolo);


                    } else if (deaths_solo - sessionDeathsHSolo.value == 1) {
                        sessionKillstreakHSolo.setAttribute("value", 0);
                        localStorage.setItem("ksHistory-solo", 0);

                    }
                    // HIGHEST KILL STREAK CODE
                    if (sessionHighKSHSolo.value < sessionKillstreakHSolo.value) {
                        sessionHighKSHSolo.setAttribute("value", parseInt(sessionKillstreakHSolo.value));
                        localStorage.setItem("highKsHistory-solo", sessionHighKSHSolo.value);
                    }

                    sessionWinsHSolo.setAttribute("value", wins_solo);
                    sessionKillsHSolo.setAttribute("value", kills_solo);
                    sessionLossesHSolo.setAttribute("value", losses_solo);
                    sessionDeathsHSolo.setAttribute("value", deaths_solo);

                    localStorage.setItem("wsHistory-solo", sessionWinstreakHSolo.value);
                    localStorage.setItem("ksHistory-solo", sessionKillstreakHSolo.value);




                    $("#winstreak-solo").html(sessionWinstreakHSolo.value);
                    $("#high-winstreak-solo").html(sessionHighWSHSolo.value);
                    $("#killstreak-solo").html(sessionKillstreakHSolo.value);
                    $("#high-killstreak-solo").html(sessionHighKSHSolo.value);

                    // Teams [== | ==]

                    $("#wins-teams").html(new Intl.NumberFormat().format(wins_teams) + "<font style='color:#19cd19'> (" + new Intl.NumberFormat().format(wins_teams - playerData.teams_wins) + "+)</font>");
                    $("#wins-hour-teams").html(new Intl.NumberFormat().format(((wins_teams - playerData.teams_wins) / ((sessionHours * 60) + sessionMinutes)) * 60));
                    $("#kills-teams").html(new Intl.NumberFormat().format(kills_teams) + "<font style='color:#19cd19'> (" + new Intl.NumberFormat().format(kills_teams - playerData.teams_kills) + "+)</font>");
                    $("#kills-hour-teams").html(new Intl.NumberFormat().format(((kills_teams - playerData.teams_kills) / ((sessionHours * 60) + sessionMinutes)) * 60));
                    $("#deaths-teams").html(new Intl.NumberFormat().format(deaths_teams) + "<font style='color:#e62e38;'> (" + new Intl.NumberFormat().format(deaths_teams - playerData.teams_deaths) + "+)</font>");
                    $("#deaths-hour-teams").html(new Intl.NumberFormat().format(((deaths_teams - playerData.teams_deaths) / ((sessionHours * 60) + sessionMinutes)) * 60));
                
                    
        
                    //  + " | " + wins_teams  + " | " + playerData.teams_wins +
        
                    $("#losses-teams").html(new Intl.NumberFormat().format(losses_teams) + "<font style='color:#e62e38;'> (" + new Intl.NumberFormat().format(losses_teams - playerData.teams_losses) + "+)</font>");
                    $("#losses-hour-teams").html((((losses_teams - playerData.teams_losses) / ((sessionHours * 60) + sessionMinutes)) * 60).toFixed(0));

                    var teamsWLHVar = isNaN((((wins_teams - playerData.teams_wins) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((losses_teams - playerData.teams_losses) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2)) ? 0 : (((wins_teams - playerData.teams_wins) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((losses_teams - playerData.teams_losses) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2),
                        teamsKSHVar = isNaN((((kills_teams - playerData.teams_kills) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths_teams - playerData.teams_deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2)) ? 0 : (((kills_teams - playerData.teams_kills) / ((sessionHours * 60) + sessionMinutes)) * 60 / ((deaths_teams - playerData.teams_deaths) / ((sessionHours * 60) + sessionMinutes) * 60)).toFixed(2);

                    $("#w-l-teams").html((wins_teams / losses_teams).toFixed(3) + '<font style="color:' + wlColor + '"> (' + ((wins_teams / losses_teams) - (playerData.teams_wins / playerData.teams_losses)).toFixed(4) + ")</font>");
                    $("#w-l-hour-teams").html(teamsWLHVar);
                    $("#k-l-teams").html((kills_teams / deaths_teams).toFixed(3) + '<font style="color:' + kdColor + '"> (' + ((kills_teams / deaths_teams) - (playerData.teams_kills / playerData.teams_deaths)).toFixed(4) + ")</font>");
                    $("#k-l-hour-teams").html(teamsKSHVar);


                    $("#heavenly-heads").attr("value", heavenly_heads)
                    $("#divine-heads").attr("value", divine_heads)
                    $("#succulent-heads").attr("value", succulent_heads)
                    $("#sweet-heads").attr("value", sweet_heads)
                    $("#tasty-heads").attr("value", tasty_heads)
                    $("#salty-heads").attr("value", salty_heads)
                    $("#decent-heads").attr("value", decent_heads)
                    $("#meh-heads").attr("value", meh_heads)
                    $("#yucky-heads").attr("value", yucky_heads)
                    $("#eww-heads").attr("value", eww_heads)
                    $("#total-heads").attr("value", eww_heads + yucky_heads + meh_heads + decent_heads + salty_heads + tasty_heads + sweet_heads + succulent_heads + divine_heads + heavenly_heads);

                    // LOCALSTORAGE FOR WINSTREAK!

                   if (sessionWinsHTeams.value == 0) {
    sessionWinsHTeams.setAttribute("value", wins_teams);
    sessionKillsHTeams.setAttribute("value", kills_teams);
    sessionLossesHTeams.setAttribute("value", losses_teams);
    sessionDeathsHTeams.setAttribute("value", deaths_teams);
    

    
    // NORMAL
    if (localStorage.getItem('wsHistory-teams') !== null) {
        sessionWinstreakHTeams.setAttribute("value", parseInt(localStorage.getItem('wsHistory-teams')))
    } else {
        sessionWinstreakHTeams.setAttribute("value", 0)
    }
    if (localStorage.getItem('ksHistory-teams') !== null) {
        sessionKillstreakHTeams.setAttribute("value", parseInt(localStorage.getItem('ksHistory-teams')))
    } else {
        sessionKillstreakHTeams.setAttribute("value", 0)
    }

    // HIGHEST 
    if (localStorage.getItem('highWsHistory-teams') !== null) {
        sessionHighWSHTeams.setAttribute("value", parseInt(localStorage.getItem('highWsHistory-teams')))
    } else {
        sessionHighWSHTeams.setAttribute("value", 0)
    }
    if (localStorage.getItem('highKsHistory-teams') !== null) {
        sessionHighKSHTeams.setAttribute("value", parseInt(localStorage.getItem('highKsHistory-teams')))
    } else {
        sessionHighKSHTeams.setAttribute("value", 0)
    }

}

if (wins_teams - sessionWinsHTeams.value == 1) {

    sessionWinstreakHTeams.setAttribute("value", parseInt(parseInt(sessionWinstreakHTeams.value) + 1));

    if (sessionHighWSHTeams.value < sessionWinstreakHTeams.value) {
        sessionHighWSHTeams.setAttribute("value", parseInt(parseInt(sessionHighWSHTeams.value) + 1));
        localStorage.setItem("highWsHistory-teams", sessionHighWSHTeams.value);
    }

} else if (losses_teams - sessionLossesHTeams.value == 1) {
    sessionWinstreakHTeams.setAttribute("value", 0);
    localStorage.setItem("highWsHistory-teams", sessionHighWSHTeams.value);

}


if (kills_teams - sessionKillsHTeams.value >= 1 && deaths_teams - sessionDeathsHTeams.value !== 1) {
        
    sessionKillstreakHTeams.setAttribute("value", parseInt(parseInt(sessionKillstreakHTeams.value) + parseInt(kills_teams - sessionKillsHTeams.value)));

    if (sessionHighKSHTeams.value < sessionKillstreakHTeams.value) {
        sessionHighKSHTeams.setAttribute("value", parseInt(sessionKillstreakHTeams.value));
        localStorage.setItem("highKsHistory-teams", sessionHighKSHTeams.value);
    }

} else if (losses_teams - sessionLossesHTeams.value == 1) {
    sessionWinstreakHTeams.setAttribute("value", 0);
    localStorage.setItem("highKsHistory-teams", sessionHighWSHTeams.value);

}
// HIGHEST KILL STREAK CODE
if (sessionHighKSHTeams.value < sessionKillstreakHTeams.value) {
    sessionHighKSHTeams.setAttribute("value", parseInt(sessionKillstreakHTeams.value));
    localStorage.setItem("highKsHistory-teams", sessionHighKSHTeams.value);
}

    sessionWinsHTeams.setAttribute("value", wins_teams);
    sessionKillsHTeams.setAttribute("value", kills_teams);
    sessionLossesHTeams.setAttribute("value", losses_teams);
    sessionDeathsHTeams.setAttribute("value", deaths_teams);

    localStorage.setItem("wsHistory-teams", sessionWinstreakHTeams.value);
    localStorage.setItem("ksHistory-teams", sessionKillstreakHTeams.value);


    $("#winstreak-teams").html(sessionWinstreakHTeams.value);
    $("#high-winstreak-teams").html(sessionHighWSHTeams.value);
    $("#killstreak-teams").html(sessionKillstreakHTeams.value);
    $("#high-killstreak-teams").html(sessionHighKSHTeams.value);

    }
})

            // ============================================        
            // ASSIGNING VALUES TO THE SESSION BOARD [ENDS]
            // ============================================        
            var xpAnswer = playerEXP >= 15000 ? Math.round((10000 - neededEXP) / 10000 * 100) : Math.floor(levelxp / neededEXP * 100)
            var neededXPBar = playerEXP >= 15000 ? 10000 : levelxp;

            document.getElementById("lvl-presentage").innerHTML = "<div class='progress-placeholder1' style='position:absolute;left:73px;font-size:15px;font-weight:bold;text-shadow: 2px 2px #4b4848;color:#FFF'>Experience | " + new Intl.NumberFormat().format(10000 - neededEXP) + "/" + new Intl.NumberFormat().format(neededXPBar) + " | " + xpAnswer + "%</div>";
            $("#lvl-presentage").css("width", xpAnswer + "%")

            document.getElementById("shards-progress").innerHTML = "<div class='progress-placeholder2' style='position:absolute;left:73px;font-size:15px;font-weight:bold;text-shadow:2px 2px #4b4848;color:#FFF'>Shards | " + new Intl.NumberFormat().format(shards) + "/20,000 | " + Math.round(shards / 20000 * 100) + "%</div>";
            $("#shards-progress").css("width", (shards / 20000 * 100) + "%")

            localStorage.setItem("games-exp", skywarsExp)
            localStorage.setItem("gamesShards", shards)
            localStorage.setItem("gamescoins", coins)
        }
    })
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function sendStatusRequest() {
    $.ajax({
        url: "https://api.hypixel.net/status?key=" + playerAPI + "&uuid=" + playerUUID,
        method: "GET",
        data: "json",
        cache: false,
        success: function (data) {

            var currentStatus = (data.session.online === true) ? "<font style='color:#19cd19'>Online</font>" : "<font style='color:#e62e38'>Offline</font>",
                currentGame = (data.session.online === true) ? capitalizeFirstLetter(data.session.gameType.toLowerCase()) + " | " + capitalizeFirstLetter(data.session.mode.toLowerCase()) : "Not playing";

            currentGame = currentGame.replace(/_/g, " ");
            currentGame = currentGame.replace("insane", "");
            document.getElementById("player-stats").innerHTML = "<font style='font-size:18px'> " + currentStatus + " | " + currentGame + "</font>";


            if (document.getElementById("check-timer").classList.contains("paused") === true && data.session.gameType == "SKYWARS" && data.session.mode !== "LOBBY") {
                location.replace("sessionActivate.php/?action=resumeSession");

            }
        }
    })
}
if (document.getElementById("check-timer").classList.contains("active") === true || document.getElementById("check-timer").classList.contains("finished") === true) {
    requestSend;
}


if (document.getElementById("check-timer").classList.contains("active") === true || document.getElementById("check-timer").classList.contains("finished") === true) {
    setInterval(sendStatusRequest, 30000)
}
if( document.getElementById("check-timer").classList.contains("paused") === true){
    sendStatusRequest()
}

if (document.getElementById("check-timer").classList.contains("active") === true || document.getElementById("check-timer").classList.contains("finished") === true) {
    sessionTimer();
}


var requestRepeater = setInterval(function () {
    if (document.getElementById("check-timer").classList.contains("active") === true || document.getElementById("check-timer").classList.contains("paused") === true) {
        requestSend();
    }
}, 5000)


// =======================
// SEND A SESSION REQUEST [END]
// =======================


$(document).ready(function () {

    $(".overall").click(function () {
        $(".mode-button").removeClass("button-active")
        $(this).addClass("button-active")

        // showing overall stats
        $(".containers-stats-js").addClass("hidden")
        $(".stats-container1").removeClass('hidden')
    })
    $(".solo").click(function () {
        $(".mode-button").removeClass("button-active")
        $(this).addClass("button-active")

        // showing solo stats
        $(".containers-stats-js").addClass("hidden")
        $(".stats-container2").removeClass('hidden')
    })
    $(".teams").click(function () {
        $(".mode-button").removeClass("button-active")
        $(this).addClass("button-active")

        // showing teams stats
        $(".containers-stats-js").addClass("hidden")
        $(".stats-container3").removeClass('hidden')
    })

    // Session Settings buttons appear
    if (document.getElementById("check-timer").classList.contains("paused") === true) {
        $("#pause_session_button").addClass("hidden")
        $("#resume_session_button").removeClass("hidden")
    }

    // Alert Changes
    $("#session-logs-stats-button").click(function () {

        $(".session-alert").text("This feature is currently unavaiable!").removeClass("hidden").delay(4000).queue(function (next) {
            $(this).addClass("hidden");
            next();
        });
    })

})