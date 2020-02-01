var endpoint = 'api/data/'

function get_label_list(used_apps_section) {
    labelList = []

    for (let i = 0; i < used_apps_section.length; i++) {
        labelList.push(used_apps_section[i]['name'])
    }
    return labelList
}

function get_time_spent_list(used_apps_section) {
    timeSpentList = []
    for (let i = 0; i < used_apps_section.length; i++) {
        timeSpentList.push(used_apps_section[i]['time_spent'])
    }
    return timeSpentList;
}

$.ajax({
    method: "GET",
    url: endpoint,
    success: function (data) {

        console.log(data.used_apps_chart.productivity_section)
        console.log(data.used_apps_chart.procrastination_section)
        var ctx = document.getElementById('my-percentage-canvas').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    label: '# of Votes',
                    data: [data.percentage_comparison.total_open_work_time, data.percentage_comparison.productivity, data.percentage_comparison.procrastination],
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


        console.log('productivity')

        var productivityAppsSpent = document.getElementById('productivity-apps-canvas')
        var myProductivityChart = new Chart(productivityAppsSpent, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Percentage of used Productivity Apps',
                    data: get_time_spent_list(data.used_apps_chart.productivity_section),
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgb(54, 162, 235)"

                }],
                labels: get_label_list(data.used_apps_chart.productivity_section)
            },
            options: {
                responsive: true,

            }
        });

        $('.checkbox').click(function (e) {
            $('#productivity-apps-canvas').show();
            $('#procrastination-apps-canvas').hide();
            $('#procrastination-apps-canvas').addClass('d-none');

            if ($(".checkbox").is(':checked')) {
                $('#procrastination-apps-canvas').removeClass('d-none')
                $('#procrastination-apps-canvas').show()
                 $('#productivity-apps-canvas').hide()
                console.log('procrastination')
                var procrastinationAppsSpent = document.getElementById('procrastination-apps-canvas')


                var myProcrastinationChart = new Chart(procrastinationAppsSpent, {
                    type: 'bar',
                    data: {
                        datasets: [{
                            label: 'Percentage of used Procrastinated Apps',
                            data: get_time_spent_list(data.used_apps_chart.procrastination_section),
                            backgroundColor: "rgba(255, 99, 132, 0.2)",
                            borderColor: "rgb(255, 99, 132)"

                        }],
                        labels: get_label_list(data.used_apps_chart.procrastination_section)
                    },
                    options: {
                        responsive: true,

                    }
                });

            }
        });


    },
    error: function (dataError) {
        console.log('ERROR')
        console.log(dataError)
    }

});




