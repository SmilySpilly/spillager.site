// ===================================
// graph Stats
// ===================================


// Calling AJAX 

$.ajax({
    url: "?action=getDataInfo",
    datatype: 'json',
    method: 'GET',
    cache: false,
    success: function (data, status) {

        console.log(status)

        console.log(data)

        var playerData = JSON.parse(data);

        var weeklymega_sunday = parseInt(playerData.sunday),
            weeklymega_monday = parseInt(playerData.monday),
            weeklymega_tuesday = parseInt(playerData.tuesday),
            weeklymega_wednesday = parseInt(playerData.wednesday),
            weeklymega_thursday = parseInt(playerData.thursday),
            weeklymega_friday = parseInt(playerData.friday),
            weeklymega_saturday = parseInt(playerData.saturday),

            weeklymega_sunday_w = parseInt(playerData.sunday_w),
            weeklymega_monday_w = parseInt(playerData.monday_w),
            weeklymega_tuesday_w = parseInt(playerData.tuesday_w),
            weeklymega_wednesday_w = parseInt(playerData.wednesday_w),
            weeklymega_thursday_w = parseInt(playerData.thursday_w),
            weeklymega_friday_w = parseInt(playerData.friday_w),
            weeklymega_saturday_w = parseInt(playerData.saturday_w),

            weeklymega_sunday_d = parseInt(playerData.sunday_d),
            weeklymega_monday_d = parseInt(playerData.monday_d),
            weeklymega_tuesday_d = parseInt(playerData.tuesday_d),
            weeklymega_wednesday_d = parseInt(playerData.wednesday_d),
            weeklymega_thursday_d = parseInt(playerData.thursday_d),
            weeklymega_friday_d = parseInt(playerData.friday_d),
            weeklymega_saturday_d = parseInt(playerData.saturday_d),

            // OVERALL
            weeklyoverall_sunday = parseInt(playerData.overall_sunday),
            weeklyoverall_monday = parseInt(playerData.overall_monday),
            weeklyoverall_tuesday = parseInt(playerData.overall_tuesday),
            weeklyoverall_wednesday = parseInt(playerData.overall_wednesday),
            weeklyoverall_thursday = parseInt(playerData.overall_thursday),
            weeklyoverall_friday = parseInt(playerData.overall_friday),
            weeklyoverall_saturday = parseInt(playerData.overall_saturday),

            weeklyoverall_sunday_w = parseInt(playerData.overall_sunday_w),
            weeklyoverall_monday_w = parseInt(playerData.overall_monday_w),
            weeklyoverall_tuesday_w = parseInt(playerData.overall_tuesday_w),
            weeklyoverall_wednesday_w = parseInt(playerData.overall_wednesday_w),
            weeklyoverall_thursday_w = parseInt(playerData.overall_thursday_w),
            weeklyoverall_friday_w = parseInt(playerData.overall_friday_w),
            weeklyoverall_saturday_w = parseInt(playerData.overall_saturday_w),

            weeklyoverall_sunday_d = parseInt(playerData.overall_sunday_d),
            weeklyoverall_monday_d = parseInt(playerData.overall_monday_d),
            weeklyoverall_tuesday_d = parseInt(playerData.overall_tuesday_d),
            weeklyoverall_wednesday_d = parseInt(playerData.overall_wednesday_d),
            weeklyoverall_thursday_d = parseInt(playerData.overall_thursday_d),
            weeklyoverall_friday_d = parseInt(playerData.overall_friday_d),
            weeklyoverall_saturday_d = parseInt(playerData.overall_saturday_d),

            // SOLO 

            weeklysolo_sunday = parseInt(playerData.solo_sunday),
            weeklysolo_monday = parseInt(playerData.solo_monday),
            weeklysolo_tuesday = parseInt(playerData.solo_tuesday),
            weeklysolo_wednesday = parseInt(playerData.solo_wednesday),
            weeklysolo_thursday = parseInt(playerData.solo_thursday),
            weeklysolo_friday = parseInt(playerData.solo_friday),
            weeklysolo_saturday = parseInt(playerData.solo_saturday),

            weeklysolo_sunday_w = parseInt(playerData.solo_sunday_w),
            weeklysolo_monday_w = parseInt(playerData.solo_monday_w),
            weeklysolo_tuesday_w = parseInt(playerData.solo_tuesday_w),
            weeklysolo_wednesday_w = parseInt(playerData.solo_wednesday_w),
            weeklysolo_thursday_w = parseInt(playerData.solo_thursday_w),
            weeklysolo_friday_w = parseInt(playerData.solo_friday_w),
            weeklysolo_saturday_w = parseInt(playerData.solo_saturday_w),

            weeklysolo_sunday_d = parseInt(playerData.solo_sunday_d),
            weeklysolo_monday_d = parseInt(playerData.solo_monday_d),
            weeklysolo_tuesday_d = parseInt(playerData.solo_tuesday_d),
            weeklysolo_wednesday_d = parseInt(playerData.solo_wednesday_d),
            weeklysolo_thursday_d = parseInt(playerData.solo_thursday_d),
            weeklysolo_friday_d = parseInt(playerData.solo_friday_d),
            weeklysolo_saturday_d = parseInt(playerData.solo_saturday_d),

            // TEAMS 

            weeklyteams_sunday = parseInt(playerData.teams_sunday),
            weeklyteams_monday = parseInt(playerData.teams_monday),
            weeklyteams_tuesday = parseInt(playerData.teams_tuesday),
            weeklyteams_wednesday = parseInt(playerData.teams_wednesday),
            weeklyteams_thursday = parseInt(playerData.teams_thursday),
            weeklyteams_friday = parseInt(playerData.teams_friday),
            weeklyteams_saturday = parseInt(playerData.teams_saturday),

            weeklyteams_sunday_w = parseInt(playerData.teams_sunday_w),
            weeklyteams_monday_w = parseInt(playerData.teams_monday_w),
            weeklyteams_tuesday_w = parseInt(playerData.teams_tuesday_w),
            weeklyteams_wednesday_w = parseInt(playerData.teams_wednesday_w),
            weeklyteams_thursday_w = parseInt(playerData.teams_thursday_w),
            weeklyteams_friday_w = parseInt(playerData.teams_friday_w),
            weeklyteams_saturday_w = parseInt(playerData.teams_saturday_w),

            weeklyteams_sunday_d = parseInt(playerData.teams_sunday_d),
            weeklyteams_monday_d = parseInt(playerData.teams_monday_d),
            weeklyteams_tuesday_d = parseInt(playerData.teams_tuesday_d),
            weeklyteams_wednesday_d = parseInt(playerData.teams_wednesday_d),
            weeklyteams_thursday_d = parseInt(playerData.teams_thursday_d),
            weeklyteams_friday_d = parseInt(playerData.teams_friday_d),
            weeklyteams_saturday_d = parseInt(playerData.teams_saturday_d),

            // RANKED

            weeklyranked_sunday = parseInt(playerData.ranked_sunday),
            weeklyranked_monday = parseInt(playerData.ranked_monday),
            weeklyranked_tuesday = parseInt(playerData.ranked_tuesday),
            weeklyranked_wednesday = parseInt(playerData.ranked_wednesday),
            weeklyranked_thursday = parseInt(playerData.ranked_thursday),
            weeklyranked_friday = parseInt(playerData.ranked_friday),
            weeklyranked_saturday = parseInt(playerData.ranked_saturday),

            weeklyranked_sunday_w = parseInt(playerData.ranked_sunday_w),
            weeklyranked_monday_w = parseInt(playerData.ranked_monday_w),
            weeklyranked_tuesday_w = parseInt(playerData.ranked_tuesday_w),
            weeklyranked_wednesday_w = parseInt(playerData.ranked_wednesday_w),
            weeklyranked_thursday_w = parseInt(playerData.ranked_thursday_w),
            weeklyranked_friday_w = parseInt(playerData.ranked_friday_w),
            weeklyranked_saturday_w = parseInt(playerData.ranked_saturday_w),

            weeklyranked_sunday_d = parseInt(playerData.sunday_d),
            weeklyranked_monday_d = parseInt(playerData.monday_d),
            weeklyranked_tuesday_d = parseInt(playerData.tuesday_d),
            weeklyranked_wednesday_d = parseInt(playerData.wednesday_d),
            weeklyranked_thursday_d = parseInt(playerData.thursday_d),
            weeklyranked_friday_d = parseInt(playerData.friday_d),
            weeklyranked_saturday_d = parseInt(playerData.saturday_d);

        console.log(weeklymega_sunday_w)
        console.log(typeof weeklymega_sunday_w)

        google.charts.load('current', { 'packages': ['corechart', 'line'] });

        // Set a callback to run when the Google Visualization API is loaded.


        function drawChartPie() {

            var heavenlyOverall = parseInt(document.getElementById("heavenly-heads").value)
            var divineOverall = parseInt(document.getElementById("divine-heads").value)
            var sweetOverall = parseInt(document.getElementById("sweet-heads").value)
            var succulentOverall = parseInt(document.getElementById("succulent-heads").value)
            var tastyOverall = parseInt(document.getElementById("tasty-heads").value)
            var saltyOverall = parseInt(document.getElementById("salty-heads").value)
            var decentOverall = parseInt(document.getElementById("decent-heads").value)
            var mehOverall = parseInt(document.getElementById("meh-heads").value)
            var yuckyOverall = parseInt(document.getElementById("yucky-heads").value)
            var ewwOverall = parseInt(document.getElementById("eww-heads").getAttribute("value"))


            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'type');
            data.addColumn('number', 'value');
            data.addRows([
                ['Heavenly', heavenlyOverall],
                ['Divine', divineOverall],
                ['Sweet', sweetOverall],
                ['Succulent', succulentOverall],
                ['Tasty', tastyOverall],
                ['Salty', saltyOverall],
                ['Decent', decentOverall],
                ['Meh', mehOverall],
                ['Yucky', yuckyOverall],
                ['Eww', ewwOverall],
            ]);

            // Set chart options
            var options = {
                width: "100px",
                height: "200px",
                "backgroundColor": "#1E1E1E",
                "colors": ['purple', '#C08F00', '#6AC5C3', '#9F42A8', '#0D9084'
                    , '#62CC5A', '#B2B353', '#B0AEB1', '#8B8A8B', '#424042'],
                "titleTextStyle": {
                    fontSize: 16,
                    color: "#DFDFDF",
                    bold: true
                },
                "pieSliceBorderColor": "transparent",
                "legend": 'none'

            };

            // Instantiate and draw our chart, passing in some options.

            var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
            chart1.draw(data, options);

        }

        //======================
        // Stats Graph [Overall]
        //======================

        function drawChartLine() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Wins');
            data.addColumn('number', 'Kills');
            data.addColumn('number', 'Deaths');

            data.addRows([
                [0, 0, 0, 0],
                [1, weeklyoverall_sunday_w, weeklyoverall_sunday, weeklyoverall_sunday_d],
                [2, weeklyoverall_monday_w, weeklyoverall_monday, weeklyoverall_monday_d],
                [3, weeklyoverall_tuesday_w, weeklyoverall_tuesday, weeklyoverall_tuesday_d],
                [4, weeklyoverall_wednesday_w, weeklyoverall_wednesday, weeklyoverall_wednesday_d],
                [5, weeklyoverall_thursday_w, weeklyoverall_thursday, weeklyoverall_thursday_d],
                [6, weeklyoverall_friday_w, weeklyoverall_friday, weeklyoverall_friday_d],
                [7, weeklyoverall_saturday_w, weeklyoverall_saturday, weeklyoverall_saturday_d],

            ]);

            var options = {
                colors: ['#11C26D', '#307adb', '#F75056'],
                backgroundColor: {
                    fill: "#1E1E1E"
                },
                chartArea: {
                    backgroundColor: "#1E1E1E",

                },
                curveType: 'function',
                legend: {
                    position: "none",
                },

            };

            var chart2 = new google.charts.Line(document.getElementById('chart_div2'));

            chart2.draw(data, google.charts.Line.convertOptions(options));

        }


        // ===================================
        // ===================================
        // SOLO GRAPH STARTS
        // ===================================
        // ===================================


        function drawChartPieSolo() {

            var heavenlyOverall = parseInt(document.getElementById("heavenly-heads-solo").value)
            var divineOverall = parseInt(document.getElementById("divine-heads-solo").value)
            var sweetOverall = parseInt(document.getElementById("sweet-heads-solo").value)
            var succulentOverall = parseInt(document.getElementById("succulent-heads-solo").value)
            var tastyOverall = parseInt(document.getElementById("tasty-heads-solo").value)
            var saltyOverall = parseInt(document.getElementById("salty-heads-solo").value)
            var decentOverall = parseInt(document.getElementById("decent-heads-solo").value)
            var mehOverall = parseInt(document.getElementById("meh-heads-solo").value)
            var yuckyOverall = parseInt(document.getElementById("yucky-heads-solo").value)
            var ewwOverall = parseInt(document.getElementById("eww-heads-solo").getAttribute("value"))


            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'type');
            data.addColumn('number', 'value');
            data.addRows([
                ['Heavenly', heavenlyOverall],
                ['Divine', divineOverall],
                ['Sweet', sweetOverall],
                ['Succulent', succulentOverall],
                ['Tasty', tastyOverall],
                ['Salty', saltyOverall],
                ['Decent', decentOverall],
                ['Meh', mehOverall],
                ['Yucky', yuckyOverall],
                ['Eww', ewwOverall],
            ]);

            // Set chart options
            var options = {
                width: "100px",
                height: "200px",
                "backgroundColor": "#1E1E1E",
                "colors": ['purple', '#C08F00', '#6AC5C3', '#9F42A8', '#0D9084'
                    , '#62CC5A', '#B2B353', '#B0AEB1', '#8B8A8B', '#424042'],
                "titleTextStyle": {
                    fontSize: 16,
                    color: "#DFDFDF",
                    bold: true
                },
                "pieSliceBorderColor": "transparent",
                "legend": 'none'

            };

            // Instantiate and draw our chart, passing in some options.

            var chart1 = new google.visualization.PieChart(document.getElementById('chart_div3'));
            chart1.draw(data, options);

        }

        //======================
        // Stats Graph [Teams]
        //======================

        function drawChartLineSolo() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Wins');
            data.addColumn('number', 'Kills');
            data.addColumn('number', 'Deaths');

            data.addRows([
                [0, 0, 0, 0],
                [1, weeklysolo_sunday_w, weeklysolo_sunday, weeklysolo_sunday_d],
                [2, weeklysolo_monday_w, weeklysolo_monday, weeklysolo_monday_d],
                [3, weeklysolo_tuesday_w, weeklysolo_tuesday, weeklysolo_tuesday_d],
                [4, weeklysolo_wednesday_w, weeklysolo_wednesday, weeklysolo_wednesday_d],
                [5, weeklysolo_thursday_w, weeklysolo_thursday, weeklysolo_thursday_d],
                [6, weeklysolo_friday_w, weeklysolo_friday, weeklysolo_friday_d],
                [7, weeklysolo_saturday_w, weeklysolo_saturday, weeklysolo_saturday_d],

            ]);

            var options = {
                colors: ['#11C26D', '#307adb', '#F75056'],
                backgroundColor: {
                    fill: "#1E1E1E"
                },
                curveType: 'function',
                chartArea: {
                    backgroundColor: "#1E1E1E",

                },


                legend: {
                    position: "none",
                },

            };

            var chart2 = new google.charts.Line(document.getElementById('chart_div4'));

            chart2.draw(data, google.charts.Line.convertOptions(options));

        }



        // ===================================
        // ===================================
        // SOLO GRAPH STARTS
        // ===================================
        // ===================================


        function drawChartPieTeams() {

            var heavenlyOverall = parseInt(document.getElementById("heavenly-heads-teams").value)
            var divineOverall = parseInt(document.getElementById("divine-heads-teams").value)
            var sweetOverall = parseInt(document.getElementById("sweet-heads-teams").value)
            var succulentOverall = parseInt(document.getElementById("succulent-heads-teams").value)
            var tastyOverall = parseInt(document.getElementById("tasty-heads-teams").value)
            var saltyOverall = parseInt(document.getElementById("salty-heads-teams").value)
            var decentOverall = parseInt(document.getElementById("decent-heads-teams").value)
            var mehOverall = parseInt(document.getElementById("meh-heads-teams").value)
            var yuckyOverall = parseInt(document.getElementById("yucky-heads-teams").value)
            var ewwOverall = parseInt(document.getElementById("eww-heads-teams").getAttribute("value"))


            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'type');
            data.addColumn('number', 'value');
            data.addRows([
                ['Heavenly', heavenlyOverall],
                ['Divine', divineOverall],
                ['Sweet', sweetOverall],
                ['Succulent', succulentOverall],
                ['Tasty', tastyOverall],
                ['Salty', saltyOverall],
                ['Decent', decentOverall],
                ['Meh', mehOverall],
                ['Yucky', yuckyOverall],
                ['Eww', ewwOverall],
            ]);

            // Set chart options
            var options = {
                width: "100px",
                height: "200px",
                "backgroundColor": "#1E1E1E",
                "colors": ['purple', '#C08F00', '#6AC5C3', '#9F42A8', '#0D9084'
                    , '#62CC5A', '#B2B353', '#B0AEB1', '#8B8A8B', '#424042'],
                "titleTextStyle": {
                    fontSize: 16,
                    color: "#DFDFDF",
                    bold: true
                },
                "pieSliceBorderColor": "transparent",
                "legend": 'none'

            };

            // Instantiate and draw our chart, passing in some options.

            var chart1 = new google.visualization.PieChart(document.getElementById('chart_div5'));
            chart1.draw(data, options);


        }

        //======================
        // Stats Graph [Teams]
        //======================

        function drawChartLineTeams() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Wins');
            data.addColumn('number', 'Kills');
            data.addColumn('number', 'Deaths');

            data.addRows([
                [0, 0, 0, 0],
                [1, weeklyteams_sunday_w, weeklyteams_sunday, weeklyteams_sunday_d],
                [2, weeklyteams_monday_w, weeklyteams_monday, weeklyteams_monday_d],
                [3, weeklyteams_tuesday_w, weeklyteams_tuesday, weeklyteams_tuesday_d],
                [4, weeklyteams_wednesday_w, weeklyteams_wednesday, weeklyteams_wednesday_d],
                [5, weeklyteams_thursday_w, weeklyteams_thursday, weeklyteams_thursday_d],
                [6, weeklyteams_friday_w, weeklyteams_friday, weeklyteams_friday_d],
                [7, weeklyteams_saturday_w, weeklyteams_saturday, weeklyteams_saturday_d],

            ]);

            var options = {
                colors: ['#11C26D', '#307adb', '#F75056'],
                backgroundColor: {
                    fill: "#1E1E1E"
                },
                chartArea: {
                    backgroundColor: "#1E1E1E",

                },


                legend: {
                    position: "none",
                },

            };

            var chart2 = new google.charts.Line(document.getElementById('chart_div6'));

            chart2.draw(data, google.charts.Line.convertOptions(options));

        }



        //======================
        // Stats Graph [Mega]
        //======================

        function drawChartLineMega() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Wins');
            data.addColumn('number', 'Kills');
            data.addColumn('number', 'Deaths');

            data.addRows([
                [0, 0, 0, 0],
                [1, weeklymega_sunday_w, weeklymega_sunday, weeklymega_sunday_d],
                [2, weeklymega_monday_w, weeklymega_monday, weeklymega_monday_d],
                [3, weeklymega_tuesday_w, weeklymega_tuesday, weeklymega_tuesday_d],
                [4, weeklymega_wednesday_w, weeklymega_wednesday, weeklymega_wednesday_d],
                [5, weeklymega_thursday_w, weeklymega_thursday, weeklymega_thursday_d],
                [6, weeklymega_friday_w, weeklymega_friday, weeklymega_friday_d],
                [7, weeklymega_saturday_w, weeklymega_saturday, weeklymega_saturday_d],

            ]);

            var options = {
                colors: ['#11C26D', '#307adb', '#F75056'],
                backgroundColor: {
                    fill: "#1E1E1E"
                },
                chartArea: {
                    backgroundColor: "#1E1E1E",
                },
                legend: {
                    position: "none",
                },

            };

            var chart2 = new google.charts.Line(document.getElementById('chart_div7'));

            chart2.draw(data, google.charts.Line.convertOptions(options));

        }


        //======================
        // Stats Graph [Ranked]
        //======================

        function drawChartLineRanked() {

            var data = new google.visualization.DataTable();
            data.addColumn('number', 'Day');
            data.addColumn('number', 'Wins');
            data.addColumn('number', 'Kills');
            data.addColumn('number', 'Deaths');

            data.addRows([
                [0, 0, 0, 0],
                [1, weeklyranked_sunday_w, weeklyranked_sunday, weeklyranked_sunday_d],
                [2, weeklyranked_monday_w, weeklyranked_monday, weeklyranked_monday_d],
                [3, weeklyranked_tuesday_w, weeklyranked_tuesday, weeklyranked_tuesday_d],
                [4, weeklyranked_wednesday_w, weeklyranked_wednesday, weeklyranked_wednesday_d],
                [5, weeklyranked_thursday_w, weeklyranked_thursday, weeklyranked_thursday_d],
                [6, weeklyranked_friday_w, weeklyranked_friday, weeklyranked_friday_d],
                [7, weeklyranked_saturday_w, weeklyranked_saturday, weeklyranked_saturday_d],
            ]);
            console.log(weeklyranked_monday)
            var options = {
                colors: ['#11C26D', '#307adb', '#F75056'],
                backgroundColor: {
                    fill: "#1E1E1E"
                },
                chartArea: {
                    backgroundColor: "#1E1E1E",

                },


                legend: {
                    position: "none",
                },

            };

            var chart2 = new google.charts.Line(document.getElementById('chart_div8'));

            chart2.draw(data, google.charts.Line.convertOptions(options));

        }

        function getReady() {
            drawChartPie();
            drawChartLine();
            google.charts.setOnLoadCallback(drawChartPie);
            google.charts.setOnLoadCallback(drawChartLine);

            drawChartPieSolo();
            drawChartLineSolo();
            google.charts.setOnLoadCallback(drawChartPieSolo);
            google.charts.setOnLoadCallback(drawChartLineSolo);

            drawChartPieTeams();
            drawChartLineTeams();
            google.charts.setOnLoadCallback(drawChartPieTeams);
            google.charts.setOnLoadCallback(drawChartLineTeams);

            drawChartLineMega();
            google.charts.setOnLoadCallback(drawChartLineMega);


            drawChartLineRanked();
            google.charts.setOnLoadCallback(drawChartLineRanked);
        }

        $(window).resize(function () {
            getReady()
            bluelines()


        });

        function bluelines() {


            if (window.innerWidth < 1280) {
                $("body").css("max-width", window.innerWidth - 30)
            } else {
                $("body").css("max-width", 1270)
            }

            if (window.innerWidth < 990) {
                $(".box-2").css("font-size", "17px")
                $(".seasons-line").removeClass("hidden")
            } else {
                $(".box-2").css("font-size", "15px")
                $(".seasons-line").addClass("hidden")
            }
        }

        setTimeout(getReady, 2000)

        $(document).ready(function () {
            bluelines()
            $(".stats-settings button").click(function () {
                getReady()
            })

            function removeLoadingPage() {
                $("html").css("overflow-y", 'scroll')
                $(".loading-page").addClass("hidden")
            }
            setTimeout(removeLoadingPage, 2000)

        })



    }
})


