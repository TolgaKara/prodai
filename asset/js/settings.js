/*Time cycle option*/
$('#timecycleSelection').change(function () {
    console.log('clicked')
    var cycleName = $('#timecycleSelection').find(":selected").val();

    if (cycleName === 'custom') {
        $('#customTimeUserInput').removeClass('d-none');
    } else {
        $('#customTimeUserInput').addClass('d-none')

    }

});
