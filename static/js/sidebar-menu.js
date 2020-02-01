$('#menu-toggle').click( function (e) {
    e.preventDefault();
    $('.wrapper').toggleClass('menu-displayed');

    wrapperClassName = $('.wrapper').attr('class')

    if (wrapperClassName === 'wrapper') {
        $('#page-content-wrapper').css('padding-left', '0');
        $('#menu-toggle i').removeClass('fas fa-angle-left fa-lg');
        $('#menu-toggle i').addClass('fas fa-angle-right fa-lg');

    } else if (wrapperClassName === 'wrapper menu-displayed') {
        $('#page-content-wrapper').css('padding-left', '250px');
        $('#menu-toggle i').removeClass('fas fa-angle-right fa-lg');
        $('#menu-toggle i').addClass('fas fa-angle-left fa-lg');
    }
});