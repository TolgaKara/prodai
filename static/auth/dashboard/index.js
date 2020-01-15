var endpoint = 'api/data/'
$.ajax({
    method: "GET",
    url: endpoint,
    success: function (data) {
        console.log(data.percentage_comparison.productivity)
    },
    error: function (dataError) {
        console.log('ERROR')
        console.log(dataError)
    }

});
var ctx = document.getElementById('my-percentage-canvas').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [75, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],


        }],
        labels: ['Open Workhour', 'Productivity', 'Procrastination']
    },
    options: {
        responsive: true
    }
});

var apps = ['Netflix', 'Amazon', 'League of Legends']
var procrastinationAppsSpent = document.getElementById('my-procrastination-apps-chart')
var productivityAppsSpent = document.getElementById('my-productivity-apps-chart')
$('.checkbox').click(function (e) {
    console.log($('#productivity-apps-canvas').toggle(this.checked))
    console.log($('#procrastination-apps-canvas').toggle(!this.checked))
});
//var appsSpentChar = new Chart

