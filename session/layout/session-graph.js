
google.charts.load('current', { 'packages': ['corechart', 'line'] });

//======================
// Stats Graph 
//======================


function drawChartPie() {

    var heavenlyOverall = parseInt(document.getElementById("heavenly-heads-g").value) || 0
    var divineOverall = parseInt(document.getElementById("divine-heads-g").value) || 0
    var sweetOverall = parseInt(document.getElementById("sweet-heads-g").value) || 0
    var succulentOverall = parseInt(document.getElementById("succulent-heads-g").value) || 0
    var tastyOverall = parseInt(document.getElementById("tasty-heads-g").value) || 0
    var saltyOverall = parseInt(document.getElementById("salty-heads-g").value) || 0
    var decentOverall = parseInt(document.getElementById("decent-heads-g").value) || 0
    var mehOverall = parseInt(document.getElementById("meh-heads-g").value) || 0
    var yuckyOverall = parseInt(document.getElementById("yucky-heads-g").value) || 0
    var ewwOverall = parseInt(document.getElementById("eww-heads-g").getAttribute("value")) || 0

    var totalHeads = heavenlyOverall + divineOverall + sweetOverall + succulentOverall + tastyOverall + saltyOverall + decentOverall + mehOverall + yuckyOverall + ewwOverall;

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
        "backgroundColor": "#1E1E1E",
        "colors": ['purple', '#C08F00', '#6AC5C3', '#9F42A8', '#0D9084'
            , '#62CC5A', '#B2B353', '#B0AEB1', '#8B8A8B', '#424042'],
        "titleTextStyle": {
            fontSize: 16,
            color: "#DFDFDF",
            bold: true
        },
        "pieSliceBorderColor": "transparent",
        "legend": 'none',

    };
    var chart1 = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart1.draw(data, options);

}

function drawChartLine() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Experience');
    data.addColumn('number', 'Kills');
    data.addColumn('number', 'Deaths');

    var exp1 = parseInt(localStorage.getItem('exp-1-graph')) || 0,
        exp2 = parseInt(localStorage.getItem('exp-2-graph')) || 0,
        exp3 = parseInt(localStorage.getItem('exp-3-graph')) || 0,
        exp4 = parseInt(localStorage.getItem('exp-4-graph')) || 0,
        exp5 = parseInt(localStorage.getItem('exp-5-graph')) || 0,
        exp6 = parseInt(localStorage.getItem('exp-6-graph')) || 0,
        exp7 = parseInt(localStorage.getItem('exp-7-graph')) || 0,

        kills1 = parseInt(localStorage.getItem('kills-1-graph')) || 0,
        kills2 = parseInt(localStorage.getItem('kills-2-graph')) || 0,
        kills3 = parseInt(localStorage.getItem('kills-3-graph')) || 0,
        kills4 = parseInt(localStorage.getItem('kills-4-graph')) || 0,
        kills5 = parseInt(localStorage.getItem('kills-5-graph')) || 0,
        kills6 = parseInt(localStorage.getItem('kills-6-graph')) || 0,
        kills7 = parseInt(localStorage.getItem('kills-7-graph')) || 0,

        deaths1 = parseInt(localStorage.getItem('deaths-1-graph')) || 0,
        deaths2 = parseInt(localStorage.getItem('deaths-2-graph')) || 0,
        deaths3 = parseInt(localStorage.getItem('deaths-3-graph')) || 0,
        deaths4 = parseInt(localStorage.getItem('deaths-4-graph')) || 0,
        deaths5 = parseInt(localStorage.getItem('deaths-5-graph')) || 0,
        deaths6 = parseInt(localStorage.getItem('deaths-6-graph')) || 0,
        deaths7 = parseInt(localStorage.getItem('deaths-7-graph')) || 0;


    data.addRows([
        [1, exp1, kills1, deaths1],
        [2, exp2, kills2, deaths2],
        [3, exp3, kills3, deaths3],
        [4, exp4, kills4, deaths4],
        [5, exp5, kills5, deaths5],
        [6, exp6, kills6, deaths6],
        [7, exp7, kills7, deaths7],

    ]);

    var options = {
        colors: ['#F351F3', '#307adb', '#F75056'],
        backgroundColor: {
            fill: "#1E1E1E"
        },
        height: 420,
        chartArea: {
            backgroundColor: "#1E1E1E",
        },
        legend: {
            position: "none",
        },

    };

    var chart2 = new google.charts.Line(document.getElementById('chart_div2'));

    chart2.draw(data, google.charts.Line.convertOptions(options));

}

function getReady() {

    bluelines()

    // drawChartPie();
    drawChartLine();
    google.charts.setOnLoadCallback(drawChartPie);
    google.charts.setOnLoadCallback(drawChartLine);

}

setInterval(getReady, 20000)

function bluelines() {

    if (window.innerWidth < 1280) {
        $("body").css("max-width", window.innerWidth - 30)
    } else {
        $("body").css("max-width", 1280)
    }


}

$(window).resize(function () {
    getReady()
    bluelines()
});

document.getElementById('total-heads').onchange = function () {
    getReady()

}

setTimeout(getReady, 2000)

$(document).ready(function () {
    function removeLoadingPage() {
        $("html").css("overflow-y", 'scroll')
        $(".loading-page").addClass("hidden")
    }
    setTimeout(removeLoadingPage, 2000)

})


