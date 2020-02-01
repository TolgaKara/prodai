/*Time cycle option*/
$('#timetracking-option').change(function () {
    var cycleName = $('#timetracking-option').find(":selected").val();

    if (cycleName === 'custom') {
        console.log("I am in")
        $('#customTimeUserInput').removeClass('d-none');
    } else {
        $('#customTimeUserInput').addClass('d-none')

    }

});

/*Profile settings*/
$('#imageGroup').change(function () {
    var image_name = $('#imageGroup').val().replace(/C:\\fakepath\\/i, '');
    var accepted_img_extension = ['jpg', 'png', 'PNG', 'JPG'];
    var image_extension = image_name.split(".").pop()

    console.log(image_name)
    console.log(image_extension);

    if (accepted_img_extension.indexOf(image_extension) === -1) {
        $('#profile-alert').addClass('alert-danger');
        $('#profile-alert').text("We are right now only Supporting .jpg and .png");
        $("#profile-alert").delay(4000).slideUp(200, function () {
            $(this).alert('close');
        });
    } else {
        $('#img-label').text(image_name)

    }

})
