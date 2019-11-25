const date = new Date();
const yearTag = document.querySelector('.year');

if (yearTag !== null ) {
    yearTag.innerHTML = date.getFullYear();
} else {
    console.log('footer not contained')
}

/* MESSAGES */
setTimeout(function () {
    $('#message').fadeOut('slow')
}, 5000);