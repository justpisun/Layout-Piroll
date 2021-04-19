$('.nav a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1000,
        easing: "swing"
    });
    return false;
});