$(document).ready(function() {
    // Image Slider
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    // Smooth Scrolling
    $('nav a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Animated Effects
    $(window).scroll(function() {
        $('.fade-in').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (position < scroll + windowHeight - 200) {
                $(this).addClass('fade-in-effect');
            }
        });
    });
});
