//self invoking anomyous function
(function($) {
    let typed = new Typed('span.txt-rotate', {
        strings: ["I'm a Full Stack Developer", "I'm a Front End Developer", "I'm a Back End Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        fadeOut: false,
        //smartBackSpace: true,
        loop: true
    });
})(jQuery);

$(document).ready(function() {

    $('.projects-wrapper').isotope({
        filter: '*',
        layoutMode: 'masonry'
    });

    $('.list-filter a').click(function() {
        let selector = $(this).attr('data-filter');
        $('.list-filter a').removeClass('.active');
        $(this).addClass('active');
        $('.projects-wrapper').isotope({
            filter: selector
        });
        //to stope it from default link behaviour
        return false;
    });

    $('.popup-imag').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });
});