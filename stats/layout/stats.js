//Enable Tooltips    
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// Global vars 
var rowCounter = 1;



$(

    function getStats() {

        // Sending Api request in order to get data
        var playerUUID = document.getElementById("uuid").value
        playerAPI = document.getElementById("api").value
        // Colors Changer array
        var colorCodeChange = {
            'BLACK': 'black',
            'DARK_BLUE': '#0000AA',
            'DARK_GREEN': '#00AA00',
            'DARK_AQUA': '#00AAAA',
            'DARK_RED': '#AA0000',
            'DARK_PURPLE': '#AA00AA',
            'GOLD': '#FFAA00',
            'GRAY': '#555555',
            'DARK_GRAY': '#555555',
            'BLUE': '#5555FF',
            'GREEN': '#55FF55',
            'AQUA': '#55FFFF',
            'LIGHT_PURPLE': '#FF55FF',
            'YELLOW': '#FFFF55',
            'WHITE': '#white'
        };


        document.querySelector(".pfp-box").innerHTML = " <img src='https://mc-heads.net/body/" + playerUUID + "/100'>"

        $.ajax({
            url: "https://api.hypixel.net/player?key=" + playerAPI + "&uuid=" + playerUUID,
            datatype: "json",
            cache: false,
            success: function (data, status) {

                var wins = data.player.stats.SkyWars.wins || 0,
                    kills = data.player.stats.SkyWars.kills || 0,
                    deaths = data.player.stats.SkyWars.deaths || 0,
                    losses = data.player.stats.SkyWars.losses || 0,
                    heads = data.player.stats.SkyWars.heads || 0,

                    winstreak = data.player.stats.SkyWars.win_streak || 0,
                    coins = data.player.stats.SkyWars.coins || 0,
                    cosmetic_tokens = data.player.stats.SkyWars.cosmetic_tokens || 0,
                    souls_g = data.player.stats.SkyWars.souls_gathered || 0,
                    blocks_broken = data.player.stats.SkyWars.blocks_broken || 0,
                    souls = data.player.stats.SkyWars.souls || 0,
                    time_played = data.player.stats.SkyWars.time_played || 0,
                    opals = data.player.stats.SkyWars.opals || 0,
                    shard = data.player.stats.SkyWars.shard || 0,

                    heads_heavenly = data.player.stats.SkyWars.heads_heavenly || 0,
                    heads_divine = data.player.stats.SkyWars.heads_divine || 0,
                    heads_sweet = data.player.stats.SkyWars.heads_sweet || 0,
                    heads_succulent = data.player.stats.SkyWars.heads_succulent || 0,
                    heads_decent = data.player.stats.SkyWars.heads_decent || 0,
                    heads_salty = data.player.stats.SkyWars.heads_salty || 0,
                    heads_tasty = data.player.stats.SkyWars.heads_tasty || 0,
                    heads_meh = data.player.stats.SkyWars.heads_meh || 0,
                    heads_yucky = data.player.stats.SkyWars.heads_yucky || 0,
                    heads_eww = data.player.stats.SkyWars.heads_eww || 0,

                    // SOLO VARS STARTS!
                    wins_solo = data.player.stats.SkyWars.wins_solo || 0,
                    kills_solo = data.player.stats.SkyWars.kills_solo || 0,
                    deaths_solo = data.player.stats.SkyWars.deaths_solo || 0,
                    losses_solo = data.player.stats.SkyWars.losses_solo || 0,
                    time_played_solo = data.player.stats.SkyWars.time_played_solo || 0,

                    // INSANE
                    wins_solo_insane = data.player.stats.SkyWars.wins_solo_insane || 0,
                    kills_solo_insane = data.player.stats.SkyWars.kills_solo_insane || 0,
                    deaths_solo_insane = data.player.stats.SkyWars.deaths_solo_insane || 0,
                    losses_solo_insane = data.player.stats.SkyWars.losses_solo_insane || 0,

                    // NORMAL
                    wins_solo_normal = data.player.stats.SkyWars.wins_solo_normal || 0,
                    kills_solo_normal = data.player.stats.SkyWars.kills_solo_normal || 0,
                    deaths_solo_normal = data.player.stats.SkyWars.deaths_solo_normal || 0,
                    losses_solo_normal = data.player.stats.SkyWars.losses_solo_normal || 0,

                    heads_heavenly_solo = data.player.stats.SkyWars.heads_heavenly_solo || 0,
                    heads_divine_solo = data.player.stats.SkyWars.heads_divine_solo || 0,
                    heads_sweet_solo = data.player.stats.SkyWars.heads_sweet_solo || 0,
                    heads_succulent_solo = data.player.stats.SkyWars.heads_succulent_solo || 0,
                    heads_decent_solo = data.player.stats.SkyWars.heads_decent_solo || 0,
                    heads_salty_solo = data.player.stats.SkyWars.heads_salty_solo || 0,
                    heads_tasty_solo = data.player.stats.SkyWars.heads_tasty_solo || 0,
                    heads_meh_solo = data.player.stats.SkyWars.heads_meh_solo || 0,
                    heads_yucky_solo = data.player.stats.SkyWars.heads_yucky_solo || 0,
                    heads_eww_solo = data.player.stats.SkyWars.heads_eww_solo || 0,


                    // Teams VARS STARTS!
                    wins_team = data.player.stats.SkyWars.wins_team || 0,
                    kills_team = data.player.stats.SkyWars.kills_team || 0,
                    deaths_team = data.player.stats.SkyWars.deaths_team || 0,
                    losses_team = data.player.stats.SkyWars.losses_team || 0,
                    time_played_team = data.player.stats.SkyWars.time_played_team || 0,

                    // INSANE
                    wins_team_insane = data.player.stats.SkyWars.wins_team_insane || 0,
                    kills_team_insane = data.player.stats.SkyWars.kills_team_insane || 0,
                    deaths_team_insane = data.player.stats.SkyWars.deaths_team_insane || 0,
                    losses_team_insane = data.player.stats.SkyWars.losses_team_insane || 0,

                    // NORMAL
                    wins_team_normal = data.player.stats.SkyWars.wins_team_normal || 0,
                    kills_team_normal = data.player.stats.SkyWars.kills_team_normal || 0,
                    deaths_team_normal = data.player.stats.SkyWars.deaths_team_normal || 0,
                    losses_team_normal = data.player.stats.SkyWars.losses_team_normal || 0,

                    heads_heavenly_team = data.player.stats.SkyWars.heads_heavenly_team || 0,
                    heads_divine_team = data.player.stats.SkyWars.heads_divine_team || 0,
                    heads_sweet_team = data.player.stats.SkyWars.heads_sweet_team || 0,
                    heads_succulent_team = data.player.stats.SkyWars.heads_succulent_team || 0,
                    heads_decent_team = data.player.stats.SkyWars.heads_decent_team || 0,
                    heads_salty_team = data.player.stats.SkyWars.heads_salty_team || 0,
                    heads_tasty_team = data.player.stats.SkyWars.heads_tasty_team || 0,
                    heads_meh_team = data.player.stats.SkyWars.heads_meh_team || 0,
                    heads_yucky_team = data.player.stats.SkyWars.heads_yucky_team || 0,
                    heads_eww_team = data.player.stats.SkyWars.heads_eww_team || 0,

                    // MEGA VARS STARTS!
                    wins_mega_normal = data.player.stats.SkyWars.wins_mega_normal || 0,
                    kills_mega_normal = data.player.stats.SkyWars.kills_mega_normal || 0,
                    deaths_mega = data.player.stats.SkyWars.deaths_mega || 0,
                    losses_mega_normal = data.player.stats.SkyWars.losses_mega_normal || 0,
                    time_played_mega = data.player.stats.SkyWars.time_played_mega || 0,

                    // NORMAL
                    wins_mega_doubles = data.player.stats.SkyWars.wins_mega_doubles || 0,
                    kills_mega_doubles = data.player.stats.SkyWars.kills_mega_doubles || 0,
                    deaths_mega_doubles = data.player.stats.SkyWars.deaths_mega_doubles || 0,
                    losses_mega_doubles = data.player.stats.SkyWars.losses_mega_doubles || 0,
                    time_played_mega_doubles = data.player.stats.SkyWars.time_played_mega_doubles || 0,

                    // Ranked VARS STARTS!
                    wins_ranked = data.player.stats.SkyWars.wins_ranked || 0,
                    kills_ranked = data.player.stats.SkyWars.kills_ranked || 0,
                    deaths_ranked = data.player.stats.SkyWars.deaths_ranked || 0,
                    losses_ranked = data.player.stats.SkyWars.losses_ranked || 0,
                    time_played_ranked = data.player.stats.SkyWars.time_played_ranked || 0,
                    assists_ranked = data.player.stats.SkyWars.assists_ranked || 0,
                    survived_players_ranked = data.player.stats.SkyWars.survived_players_ranked || 0;


                var karmaStats = data.player.karma || 0;
                var previousNames = data.player.knownAliases;
                var previousShow = "";

                // Network Level Calculator
                const BASE = 10000;
                const GROWTH = 2500;

                /* Constants to generate the total amount of XP to complete a level */
                const HALF_GROWTH = 0.5 * GROWTH;

                /* Constants to look up the level from the total amount of XP */
                const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
                const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
                const GROWTH_DIVIDES_2 = 2 / GROWTH;

                function getLevel(exp) {
                    return exp <= 1 ? 1 : Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));
                }
                function getPercentageToNextLevel(exp) {
                    const lv = getLevel(exp);
                    const x0 = getTotalExpToLevel(lv);
                    return (exp - x0) / (getTotalExpToLevel(lv + 1) - x0);
                }
                function getTotalExpToLevel(level) {
                    const lv = Math.floor(level); const
                        x0 = getTotalExpToFullLevel(lv);
                    if (level === lv) return x0;
                    return (getTotalExpToFullLevel(lv + 1) - x0) * (level % 1) + x0;
                }

                function getTotalExpToFullLevel(level) {
                    return (HALF_GROWTH * (level - 2) + BASE) * (level - 1);
                }

                function getExactLevel(exp) {
                    return getLevel(exp) + getPercentageToNextLevel(exp);
                }


                for (var x in data.player.knownAliases) {
                    var previousShow = previousShow + " [" + previousNames[x] + "] ";
                }


                var quest = 0;
                for (var x in data.player.quests) {

                    getTotal = data.player.quests[x].completions

                    for (var i in getTotal) {
                        quest += Object.keys(getTotal[i]).length
                    }
                }

                // Rank + Rank color

                if (data.player.rankPlusColor == "None") {
                    var playerPlusColor = "#FF5555";
                } else {
                    var playerPlusColor = data.player.rankPlusColor;
                }

                var rankNameChange = {
                    "NONE": data.player.displayname + "idiot",
                    "VIP": "<span style='color:#55FF55'>[VIP] " + data.player.displayname + "</span>",
                    "VIP_PLUS": "<span style='color:#55FF55'>[VIP<b style='color:#FFAA00'>+</b>] " + data.player.displayname + "</span>",
                    "MVP": "<span style='color:#55FFFF'>[MVP] " + data.player.displayname + "</span>",
                    "MVP_PLUS": "<span style='color:#55FFFF'>[MVP<b style='color:" + playerPlusColor + "'>+</b>] " + data.player.displayname + "</span>",
                    "SUPERSTAR": "<span style='color:#FFAA00'>[MVP<b style='color:" + playerPlusColor + "'>++</b>] " + data.player.displayname + "</span>",
                    "HELPER": "<span style='color:#0000AA'>[HELPER] " + data.player.displayname + "</span>",
                    "MODERATOR": "<span style='color:#00AA00'>[MOD] " + data.player.displayname + "</span>",
                    "ADMIN": "<span style='color:#FF5555'>[ADMIN] " + data.player.displayname + "</span>",
                    "OWNER": "<span style='color:#FF5555'>[OWNER] " + data.player.displayname + "</span>",
                }
                // Assign the player rank Var
                var playerRank;

                if (typeof data.player.rank !== "undefined") {
                    playerRank = data.player.rank;
                } else if (typeof data.player.monthlyPackageRank !== "undefined" && data.player.monthlyPackageRank !== "NONE") {
                    playerRank = data.player.monthlyPackageRank;
                } else if (typeof data.player.packageRank !== "undefined") {
                    playerRank = data.player.packageRank;
                } else if (typeof data.player.newPackageRank !== "undefined") {
                    playerRank = data.player.newPackageRank;
                } else {
                    playerRank = "NONE";
                }
                // ################################
                // Skywars Level Math
                var skywarsExPerLevel = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000],
                    playerEXP = data.player.stats.SkyWars.skywars_experience,
                    exactLevel,
                    neededEXP;
                if (playerEXP >= 15000) {
                    exactLevel = (playerEXP - 15000) / 10000 + 12;
                    neededEXP = ((Math.floor(exactLevel + 1) - exactLevel).toFixed(4) * 10000)
                } else {

                    for (var i = 0; i < skywarsExPerLevel.length; i++) {

                        if (playerEXP < skywarsExPerLevel[i]) {
                            exactLevel = i + (playerEXP - skywarsExPerLevel[i - 1]) / (skywarsExPerLevel[i] - skywarsExPerLevel[i - 1]);
                            neededEXP = ((Math.floor(exactLevel + 1) - exactLevel).toFixed(4) * (Math.floor(skywarsExPerLevel[i]) + 1))
                            break;
                        }
                    }

                }

                // Get playtime function
                function getPlayTime(seconds) {
                    seconds = Number(seconds);
                    var days = Math.floor(seconds / (24 * 3600))
                    var hours = Math.floor((seconds % (24 * 3600)) / 3600);
                    var minutes = Math.floor(seconds % 3600 / 60);
                    var sec = Math.floor(seconds % 3600 % 60);

                    return days + "d " + hours + "h " + minutes + "m " + sec + "s "
                }

                // Skywars Ranked Rewards Checker
                function checkRankedRewards(request) {
                    var avaliableRewards = ['killeffect_blood_explosion', 'killeffect_heart_explosion', 'victorydance_guardians', 'projectiletrail_hearts', 'projectiletrail_notes', 'victorydance_dragon_rider', 'killeffect_head_rocket',
                        'killeffect_final_smash', 'projectiletrail_green_star', 'deathcry_grumpy_villager', 'deathcry_sad_puppy', 'deathcry_bazinga', 'deathcry_monster_burp', 'cage_magic-box-cage']

                    var diamondRewards = {
                        'projectiletrail_green_star': "Green Star",
                        'deathcry_grumpy_villager': "Grumpy Villager",
                        'deathcry_sad_puppy': "Sad Puppy",
                        'deathcry_bazinga': "Bazinga",
                        'deathcry_monster_burp': "Monster Burp",
                        'projectiletrail_notes': 'Notes trail',
                        'killeffect_heart_explosion': "Heart Explosion",
                        'cage_magic-box-cage': "Magic Box Cage"
                    },
                        goldRewards = {
                            'killeffect_blood_explosion': "Blood Explosion",
                            'victorydance_guardians': "Guardians",
                            'projectiletrail_hearts': "Hearts trails"
                        },
                        masterRewards = {
                            'killeffect_final_smash': "Final Smash",
                            'victorydance_dragon_rider': "Dragon rider",
                            'killeffect_head_rocket': "Head Rocket"
                        }

                    var output,
                        outputDiamond,
                        outputGold,
                        outputMaster,
                        lengthOutput,
                        playerRewards = [];

                    for (var x in data.player.stats.SkyWars.packages) {

                        for (var i = 0; i < avaliableRewards.length; i++) {
                            var apiRewards = data.player.stats.SkyWars.packages[x];

                            if (apiRewards == avaliableRewards[i]) {

                                if (typeof masterRewards[apiRewards] == "string") {
                                    outputMaster += masterRewards[apiRewards] + "<br>"

                                } else if (typeof diamondRewards[apiRewards] == "string") {
                                    outputDiamond += diamondRewards[apiRewards] + "<br>"

                                } else if (typeof goldRewards[apiRewards] == "string") {
                                    outputGold += goldRewards[apiRewards] + "<br>"

                                }


                                playerRewards.push(apiRewards)

                            }
                        }
                    }

                    if (request == "length") {
                        lengthOutput = playerRewards.length + "/14"
                        return lengthOutput
                    } else if (request == "rewardsM") {
                        if (typeof outputMaster !== "undefined") {
                            outputMaster = outputMaster.replace("undefined", "")
                            return outputMaster
                        } else {
                            return "No Rewards Found!"
                        }
                    } else if (request == "rewardsD") {
                        if (typeof outputDiamond !== "undefined") {
                            outputDiamond = outputDiamond.replace("undefined", "")
                            return outputDiamond
                        } else {
                            return "No Rewards Found!"
                        }
                    } else if (request == "rewardsG") {
                        if (typeof outputGold !== "undefined") {
                            outputGold = outputGold.replace("undefined", "")
                            return outputGold
                        } else {
                            return "No Rewards Found!"
                        }
                    }
                }

                // ================================
                // Ranked Seasons / Rating Function
                function getRankedSeasons() {

                    var timeCurrent = new Date(),
                        startingDate = new Date(2018, 3)

                    function monthDiff(d1, d2) {
                        var months;
                        months = (d2.getFullYear() - d1.getFullYear()) * 12;
                        months -= d1.getMonth();
                        months += d2.getMonth();
                        return months <= 0 ? 0 : months;
                    }

                    var m = 3,
                        y = 18,
                        _ = "_",
                        _rating = "_rating",
                        divCounter = 0,
                        highestrating = [];


                    for (var i = 0; i < (monthDiff(startingDate, timeCurrent) - 1); i++) {


                        if (typeof data['player']['stats']['SkyWars']['SkyWars_skywars_rating_' + m + '_' + y + '_rating'] !== "undefined") {

                            var sRating = data['player']['stats']['SkyWars']['SkyWars_skywars_rating_' + m + '_' + y + '_rating'];
                            var sposition = data['player']['stats']['SkyWars']['SkyWars_skywars_rating_' + m + '_' + y + '_position'];

                            highestrating.push(sRating)
                            document.getElementById("ranked-highestrating").innerHTML = new Intl.NumberFormat().format(Math.max(...highestrating))

                            if (sposition <= 1500 && sposition > 200) {
                                var positionColor = "Gold"
                            } else if (sposition <= 200 && sposition > 10) {
                                var positionColor = "aqua"
                            } else if (sposition <= 10) {
                                var positionColor = "dark_green"
                            } else if (sposition <= 5000 && sposition > 1500) {
                                var positionColor = "silver"
                            } else if (sposition <= 10000 && sposition > 5000) {
                                var positionColor = "dark_gray"
                            } else if (sposition <= 50000 && sposition > 10000) {
                                var positionColor = "#8b5a2b"
                            }

                            document.getElementById('rankedSeasons' + rowCounter).innerHTML += `
                                <div id="-box" class="box-2 col-md-6 col-lg" style="min-width:155px">
                                <b>${'S' + (i + 26) + ":"}</b> <span class="skywars-board-span" id="skywars-ranked-seasonbar1">${sRating + "<b style='margin-left:3px;color:" + positionColor + "'>[#" + sposition + "]</b>"}</span>
                                </div>
                            `

                        }

                        m = m + 1

                        if (m == 12) {
                            var m = 1,
                                y = y + 1;
                        }
                    }
                }

                getRankedSeasons()
                // ################################

                // getActivekit function
                function getActiveKit(action) {
                    var allKitRanked = {
                        "kit_ranked_ranked_scout": "Scout",
                        "kit_ranked_ranked_champion": "Champion",
                        "kit_ranked_ranked_healer": "Healer",
                        "kit_ranked_ranked_armorer": "Armorer",
                        "kit_ranked_ranked_default": "Default",
                        "kit_ranked_ranked_bowman": "Bowman",
                        "kit_ranked_ranked_athlete": "Athlete",
                        "kit_ranked_ranked_magician": "Magician",
                        "kit_ranked_ranked_pyromancer": "Pyromancer",
                        "kit_ranked_ranked_hound": "Hound",
                    };



                    if (action == "ranked") {
                        if (data.player.stats.SkyWars.activeKit_RANKED_random === false) {
                            return allKitRanked[data.player.stats.SkyWars.activeKit_RANKED]
                        } else {
                            return data.player.stats.SkyWars.activeKit_RANKED_random;
                        }
                    } else if (action == "solo-insane") {
                        if (data.player.stats.SkyWars.activeKit_RANKED_random === false) {
                            return allKitSoloInsane[data.player.stats.SkyWars.activeKit_RANK]
                        } else {
                            return data.player.stats.SkyWars.activeKit_RANKED_random;
                        }
                    } else if (action == "solo-normal") {
                        if (data.player.stats.SkyWars.activeKit_RANKED_random === false) {
                            return allKitRanked[data.player.stats.SkyWars.activeKit_RANKED]
                        } else {
                            return data.player.stats.SkyWars.activeKit_RANKED_random;
                        }
                    }
                }

                // ###################################




                document.getElementById("username-box").innerHTML = "<b style='padding-right:5px'>Username: " + rankNameChange[playerRank] + "</b>"
                document.getElementById("karma-box").innerHTML = "<b style='padding-right:5px'>Karma: </b>" + "<font style='color:#F351F3'>" + new Intl.NumberFormat().format(karmaStats) + "</font>";
                document.getElementById("pnames-box").innerHTML = "<b style='padding-right:5px'>Previous IGNs: </b>" + previousNames.length
                document.getElementById("pnames-show").setAttribute("data-original-title", previousShow);
                document.getElementById("hypixellevel-box").innerHTML = "<b style='padding-right:5px'>Hypixel Level: </b>" + Math.floor(getExactLevel(data.player.networkExp)) + " <span style='margin: 1px 0px 0px 6px;font-size:12px'>( <font style='color:#5555FF'>" + new Intl.NumberFormat().format((getTotalExpToLevel(Math.floor(getExactLevel(data.player.networkExp)) + 1) - data.player.networkExp)) + "</font> Exp left until Level " + (Math.floor(getExactLevel(data.player.networkExp)) + 1) + ")</span>"
                document.getElementById('quests-box').innerHTML = "<b style='padding-right:5px'>Quests Completed: </b>" + new Intl.NumberFormat().format(quest)
                document.getElementById("achievements-box").innerHTML = "<b style='padding-right:5px'>Achievement Points: </b>" + new Intl.NumberFormat().format(data.player.achievementPoints)

                // Skywars Data Output

                // OverAll stats
                document.getElementById('skywars-wins').innerHTML = new Intl.NumberFormat().format(wins)
                document.getElementById('skywars-kills').innerHTML = new Intl.NumberFormat().format(kills)
                document.getElementById('skywars-deaths').innerHTML = new Intl.NumberFormat().format(deaths)
                document.getElementById('skywars-losses').innerHTML = new Intl.NumberFormat().format(losses)
                document.getElementById('skywars-heads').innerHTML = new Intl.NumberFormat().format(heads)
                document.getElementById("skywars-Level").innerHTML = exactLevel.toFixed(2)
                document.getElementById('skywars-experience').innerHTML = "<font style='bottom:2px;font-size:11px;position: relative;'>( <font style='color:#5555FF'>" + new Intl.NumberFormat().format(parseInt(neededEXP)) + "</font> xp Needed for Level " + Math.floor(exactLevel + 1) + " )</font>"
                document.getElementById('skywars-WL').innerHTML = (wins / losses).toFixed(3)
                document.getElementById("skywars-KDR").innerHTML = (kills / deaths).toFixed(3)
                document.getElementById("skywars-winstreak").innerHTML = winstreak;
                document.getElementById('skywars-coins').innerHTML = new Intl.NumberFormat().format(coins)
                document.getElementById('skywars-tokens').innerHTML = new Intl.NumberFormat().format(cosmetic_tokens)
                document.getElementById('skywars-soulsg').innerHTML = new Intl.NumberFormat().format(souls_g)
                document.getElementById('skywars-playtime').innerHTML = getPlayTime(time_played)
                document.getElementById("skywars-souls").innerHTML = new Intl.NumberFormat().format(souls)
                document.getElementById("skywars-blocksbroken").innerHTML = new Intl.NumberFormat().format(blocks_broken)
                document.getElementById('skywars-opals').innerHTML = opals
                document.getElementById("skywars-shards").innerHTML = "(" + new Intl.NumberFormat().format(shard) + "/20,000)"

                // ====================
                // Graph OVERALL 
                // ====================

                document.getElementById("heavenly-heads").setAttribute("value", heads_heavenly)
                document.getElementById("divine-heads").setAttribute("value", heads_divine)
                document.getElementById("succulent-heads").setAttribute("value", heads_succulent)
                document.getElementById("sweet-heads").setAttribute("value", heads_sweet)
                document.getElementById("tasty-heads").setAttribute("value", heads_tasty)
                document.getElementById("salty-heads").setAttribute("value", heads_salty)
                document.getElementById("decent-heads").setAttribute("value", heads_decent)
                document.getElementById("meh-heads").setAttribute("value", heads_meh)
                document.getElementById("yucky-heads").setAttribute("value", heads_yucky)
                document.getElementById("eww-heads").setAttribute("value", heads_eww)

                // Solo Stats
                document.getElementById('skywars-wins-solo-overall').innerHTML = new Intl.NumberFormat().format(wins_solo);
                document.getElementById('skywars-kills-solo-overall').innerHTML = new Intl.NumberFormat().format(kills_solo)
                document.getElementById("skywars-deaths-solo-overall").innerHTML = new Intl.NumberFormat().format(deaths_solo)
                document.getElementById("skywars-losses-solo-overall").innerHTML = new Intl.NumberFormat().format(losses_solo)
                document.getElementById('skywars-WL-solo-overall').innerHTML = (wins_solo / losses_solo).toFixed(3)
                document.getElementById('skywars-KDR-solo-overall').innerHTML = (kills_solo / deaths_solo).toFixed(3)
                document.getElementById("skywars-playtime-solo-overall").innerHTML = getPlayTime(time_played_solo)

                document.getElementById('skywars-wins-solo-insane').innerHTML = new Intl.NumberFormat().format(wins_solo_insane);
                document.getElementById('skywars-kills-solo-insane').innerHTML = new Intl.NumberFormat().format(kills_solo_insane)
                document.getElementById("skywars-deaths-solo-insane").innerHTML = new Intl.NumberFormat().format(deaths_solo_insane)
                document.getElementById("skywars-losses-solo-insane").innerHTML = new Intl.NumberFormat().format(losses_solo_insane)
                document.getElementById('skywars-WL-solo-insane').innerHTML = (wins_solo_insane / losses_solo_insane).toFixed(3)
                document.getElementById('skywars-KDR-solo-insane').innerHTML = (kills_solo_insane / deaths_solo_insane).toFixed(3)

                document.getElementById('skywars-wins-solo-normal').innerHTML = new Intl.NumberFormat().format(wins_solo_normal);
                document.getElementById('skywars-kills-solo-normal').innerHTML = new Intl.NumberFormat().format(kills_solo_normal)
                document.getElementById("skywars-deaths-solo-normal").innerHTML = new Intl.NumberFormat().format(deaths_solo_normal)
                document.getElementById("skywars-losses-solo-normal").innerHTML = new Intl.NumberFormat().format(losses_solo_normal)
                document.getElementById('skywars-WL-solo-normal').innerHTML = (wins_solo_normal / losses_solo_normal).toFixed(3)
                document.getElementById('skywars-KDR-solo-normal').innerHTML = (kills_solo_normal / deaths_solo_normal).toFixed(3)

                // SOLO GRAPH

                document.getElementById("heavenly-heads-solo").setAttribute("value", heads_heavenly_solo)
                document.getElementById("divine-heads-solo").setAttribute("value", heads_divine_solo)
                document.getElementById("succulent-heads-solo").setAttribute("value", heads_succulent_solo)
                document.getElementById("sweet-heads-solo").setAttribute("value", heads_sweet_solo)
                document.getElementById("tasty-heads-solo").setAttribute("value", heads_tasty_solo)
                document.getElementById("salty-heads-solo").setAttribute("value", heads_salty_solo)
                document.getElementById("decent-heads-solo").setAttribute("value", heads_decent_solo)
                document.getElementById("meh-heads-solo").setAttribute("value", heads_meh_solo)
                document.getElementById("yucky-heads-solo").setAttribute("value", heads_yucky_solo)
                document.getElementById("eww-heads-solo").setAttribute("value", heads_eww_solo)


                // ============================== //
                // Teams Stats

                document.getElementById('skywars-wins-teams-overall').innerHTML = new Intl.NumberFormat().format(wins_team);
                document.getElementById('skywars-kills-teams-overall').innerHTML = new Intl.NumberFormat().format(kills_team)
                document.getElementById("skywars-deaths-teams-overall").innerHTML = new Intl.NumberFormat().format(deaths_team)
                document.getElementById("skywars-losses-teams-overall").innerHTML = new Intl.NumberFormat().format(losses_team)
                document.getElementById('skywars-WL-teams-overall').innerHTML = (wins_team / losses_team).toFixed(3)
                document.getElementById('skywars-KDR-teams-overall').innerHTML = (kills_team / deaths_team).toFixed(3)
                document.getElementById("skywars-playtime-teams-overall").innerHTML = getPlayTime(time_played_team)

                document.getElementById('skywars-wins-teams-insane').innerHTML = new Intl.NumberFormat().format(wins_team_insane);
                document.getElementById('skywars-kills-teams-insane').innerHTML = new Intl.NumberFormat().format(kills_team_insane)
                document.getElementById("skywars-deaths-teams-insane").innerHTML = new Intl.NumberFormat().format(deaths_team_insane)
                document.getElementById("skywars-losses-teams-insane").innerHTML = new Intl.NumberFormat().format(losses_team_insane)
                document.getElementById('skywars-WL-teams-insane').innerHTML = (wins_team_insane / losses_team_insane).toFixed(3)
                document.getElementById('skywars-KDR-teams-insane').innerHTML = (kills_team_insane / deaths_team_insane).toFixed(3)

                document.getElementById('skywars-wins-teams-normal').innerHTML = new Intl.NumberFormat().format(wins_team_normal);
                document.getElementById('skywars-kills-teams-normal').innerHTML = new Intl.NumberFormat().format(kills_team_normal)
                document.getElementById("skywars-deaths-teams-normal").innerHTML = new Intl.NumberFormat().format(deaths_team_normal)
                document.getElementById("skywars-losses-teams-normal").innerHTML = new Intl.NumberFormat().format(losses_team_normal)
                document.getElementById('skywars-WL-teams-normal').innerHTML = (wins_team_normal / losses_team_normal).toFixed(3)
                document.getElementById('skywars-KDR-teams-normal').innerHTML = (kills_team_normal / deaths_team_normal).toFixed(3)

                // TEAMS Graph
                document.getElementById("heavenly-heads-teams").setAttribute("value", heads_heavenly_team)
                document.getElementById("divine-heads-teams").setAttribute("value", heads_divine_team)
                document.getElementById("succulent-heads-teams").setAttribute("value", heads_succulent_team)
                document.getElementById("sweet-heads-teams").setAttribute("value", heads_sweet_team)
                document.getElementById("tasty-heads-teams").setAttribute("value", heads_tasty_team)
                document.getElementById("salty-heads-teams").setAttribute("value", heads_salty_team)
                document.getElementById("decent-heads-teams").setAttribute("value", heads_decent_team)
                document.getElementById("meh-heads-teams").setAttribute("value", heads_meh_team)
                document.getElementById("yucky-heads-teams").setAttribute("value", heads_yucky_team)
                document.getElementById("eww-heads-teams").setAttribute("value", heads_eww_team)


                // ================================ //
                // Mega stats


                document.getElementById('skywars-wins-mega-overall').innerHTML = new Intl.NumberFormat().format(wins_mega_normal + wins_mega_doubles);
                document.getElementById('skywars-kills-mega-overall').innerHTML = new Intl.NumberFormat().format(kills_mega_normal + kills_mega_doubles)
                document.getElementById("skywars-deaths-mega-overall").innerHTML = new Intl.NumberFormat().format(deaths_mega_doubles + deaths_mega)
                document.getElementById("skywars-losses-mega-overall").innerHTML = new Intl.NumberFormat().format(losses_mega_doubles + losses_mega_normal)
                document.getElementById('skywars-WL-mega-overall').innerHTML = ((wins_mega_normal + wins_mega_doubles) / (losses_mega_doubles + losses_mega_normal)).toFixed(3)
                document.getElementById('skywars-KDR-mega-overall').innerHTML = ((kills_mega_normal + kills_mega_doubles) / (deaths_mega_doubles + deaths_mega)).toFixed(3)
                document.getElementById("skywars-playtime-mega-overall").innerHTML = getPlayTime(time_played_mega + time_played_mega_doubles)

                document.getElementById('skywars-wins-mega-normal').innerHTML = new Intl.NumberFormat().format(wins_mega_normal);
                document.getElementById('skywars-kills-mega-normal').innerHTML = new Intl.NumberFormat().format(kills_mega_normal)
                document.getElementById("skywars-deaths-mega-normal").innerHTML = new Intl.NumberFormat().format(deaths_mega)
                document.getElementById("skywars-losses-mega-normal").innerHTML = new Intl.NumberFormat().format(losses_mega_normal)
                document.getElementById('skywars-WL-mega-normal').innerHTML = (wins_mega_normal / losses_mega_normal).toFixed(3)
                document.getElementById('skywars-KDR-mega-normal').innerHTML = (kills_mega_normal / deaths_mega).toFixed(3)
                document.getElementById("skywars-playtime-mega-normal").innerHTML = getPlayTime(time_played_mega)

                document.getElementById('skywars-wins-mega-doubles').innerHTML = new Intl.NumberFormat().format(wins_mega_doubles);
                document.getElementById('skywars-kills-mega-doubles').innerHTML = new Intl.NumberFormat().format(kills_mega_doubles)
                document.getElementById("skywars-deaths-mega-doubles").innerHTML = new Intl.NumberFormat().format(deaths_mega_doubles)
                document.getElementById("skywars-losses-mega-doubles").innerHTML = new Intl.NumberFormat().format(losses_mega_doubles)
                document.getElementById('skywars-WL-mega-doubles').innerHTML = (wins_mega_doubles / losses_mega_doubles).toFixed(3)
                document.getElementById('skywars-KDR-mega-doubles').innerHTML = (kills_mega_doubles / deaths_mega_doubles).toFixed(3)
                document.getElementById("skywars-playtime-mega-doubles").innerHTML = getPlayTime(time_played_mega_doubles)

                // ================================= //
                // Ranked Stats




                document.getElementById('skywars-wins-ranked-overall').innerHTML = new Intl.NumberFormat().format(wins_ranked);
                document.getElementById('skywars-kills-ranked-overall').innerHTML = new Intl.NumberFormat().format(kills_ranked)
                document.getElementById("skywars-deaths-ranked-overall").innerHTML = new Intl.NumberFormat().format(deaths_ranked)
                document.getElementById("skywars-losses-ranked-overall").innerHTML = new Intl.NumberFormat().format(losses_ranked)
                document.getElementById('skywars-WL-ranked-overall').innerHTML = (wins_ranked / losses_ranked).toFixed(3)
                document.getElementById('skywars-KDR-ranked-overall').innerHTML = (kills_ranked / deaths_ranked).toFixed(3)
                document.getElementById("ranked-assists").innerHTML = new Intl.NumberFormat().format(assists_ranked)
                document.getElementById("ranked-splayers").innerHTML = new Intl.NumberFormat().format(survived_players_ranked)

                document.getElementById("ranked-activekit").innerHTML = getActiveKit("ranked")
                document.getElementById("skywars-ranked-rewards").innerHTML = checkRankedRewards("length");
                document.getElementById("masterrewards").innerHTML = checkRankedRewards("rewardsM")
                document.getElementById("diamondrewards").innerHTML = checkRankedRewards("rewardsD")
                document.getElementById("goldrewards").innerHTML = checkRankedRewards("rewardsG")
                document.getElementById("skywars-ranked-playtime").innerHTML = getPlayTime(time_played_ranked)
            }
        })

        // Requesting Status API from api.hypixel.net/status
        $.ajax({
            url: "https://api.hypixel.net/status?key=" + playerAPI + "&uuid=" + playerUUID,
            datatype: "json",
            cache: false,
            success: function (data, status) {

                function capitalizeFirstLetter(string) {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }

                var status = data.session.online;

                if (status === true) {
                    document.getElementById("status-box").innerHTML = "<b style='padding-right:5px'>Status: </b><span style='color:lime;margin-left:4px'>Online</span>" + ": "  + capitalizeFirstLetter(data.session.gameType.toLowerCase()) + " | " + capitalizeFirstLetter(data.session.mode.toLowerCase())
                } else {



                    document.getElementById("status-box").innerHTML = "<b style='padding-right:5px'>Status: </b><span style='color:#ff4646;margin-left:4px'>Offline</span> "
                }
            }
        })

        // Requesting Data from Api.hypixel.net/findGuild
        $.ajax({
            url: "https://api.hypixel.net/findGuild?key=" + playerAPI + "&byUuid=" + playerUUID,
            datatype: "json",
            cache: false,
            success: function (data, status) {

                var guildID = data.guild;

                $.ajax({
                    url: "https://api.hypixel.net/guild?key=" + playerAPI + "&id=" + guildID,
                    datatype: "json",
                    cache: false,
                    success: function (data, status) {
                        var guildName = data.guild.name;

                        if (typeof data.guild.tag == "string") {
                            var guildTag = "<b style='margin-left:4px;color:" + colorCodeChange[data.guild.tagColor] + "'>[" + data.guild.tag + "]</b>"
                        } else {
                            var guildTag = "";
                        }


                        document.getElementById("guild-box").innerHTML = "<b style='padding-right:5px'>Guild: </b>" + guildName + " " + guildTag;

                    }
                })

            }
        })
    }
)

// Stats - Button functions
$(document).ready(function () {

    $("#skywars-overall-stats-button").addClass("active")
    $("#show-stats").addClass("active")

    $("#skywars-overall-stats-button").click(function () {
        $(".skywars-stats-button").removeClass("active")
        $(this).addClass("active")
        $(".overall-stats-cont").addClass("hidden")
        $("#overall-cont").removeClass("hidden")
        $(".changeBox").addClass("hidden")

        $(".graphs").addClass("hidden")
        $(".overall-graph").removeClass("hidden")
    })
    $("#skywars-solo-stats-button").click(function () {
        $(".skywars-stats-button").removeClass("active")
        $(this).addClass("active")
        $(".overall-stats-cont").addClass("hidden")
        $("#solo-cont").removeClass("hidden")
        $(".changeBox").addClass("hidden")

        $(".graphs").addClass("hidden")
        $(".solo-graph").removeClass("hidden")
    })
    $("#skywars-teams-stats-button").click(function () {
        $(".skywars-stats-button").removeClass("active")
        $(this).addClass("active")
        $(".overall-stats-cont").addClass("hidden")
        $("#teams-cont").removeClass("hidden")
        $(".changeBox").addClass("hidden")

        $(".graphs").addClass("hidden")
        $(".teams-graph").removeClass("hidden")
    })
    $("#skywars-mega-stats-button").click(function () {
        $(".skywars-stats-button").removeClass("active")
        $(this).addClass("active")
        $(".overall-stats-cont").addClass("hidden")
        $("#mega-cont").removeClass("hidden")
        $(".changeBox").addClass("hidden")

        $(".graphs").addClass("hidden")
        $(".mega-graph").removeClass("hidden")
    })
    $("#skywars-ranked-stats-button").click(function () {
        $(".skywars-stats-button").removeClass("active")
        $(this).addClass("active")
        $(".overall-stats-cont").addClass("hidden")
        $("#ranked-cont").removeClass("hidden")
        $(".changeBox").removeClass("hidden")

        $(".graphs").addClass("hidden")
        $(".ranked-graph").removeClass("hidden")
    })


    // Stats visibilty mode / Graph - Stats

    $("#show-stats").click(function () {
        $(".skywars-visibilty-button").removeClass("active")
        $(this).addClass("active")
    })
    $("#show-graph").click(function () {
        $(".skywars-visibilty-button").removeClass("active")
        $(this).addClass("active")
    })



    // Ranked Seasons Changer
    var rows = 1
    $("#arrow-lower").click(function () {
        if (rows < rowCounter - 1) {
            rows += 1

        }
        $(".rankedSeasons-board").addClass("hidden")
        $("#rankedSeasons" + rows).removeClass("hidden")
    })
    $("#arrow-higher").click(function () {

        if (rows > 1) {
            rows -= 1
        }

        $(".rankedSeasons-board").addClass("hidden")
        $("#rankedSeasons" + rows).removeClass("hidden")

    })

})

