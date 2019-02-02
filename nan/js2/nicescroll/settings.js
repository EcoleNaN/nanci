$(function() {
    $('html').niceScroll({
        cursorcolor: 'rgba(172,50,228,1)',
		cursoropacitymin: 0,
		cursoropacitymax: 1,
        cursorwidth: '10px',
        cursorborder: 0,
        cursorborderradius: 0,
        zindex: 9999,
        scrollspeed: 60,
        mousescrollstep: 40,
        autohidemode: true,
        background: '#222',
        cursorminheight: 170,
        horizrailenabled: false
    });
});
$(function() {
    $('.list-map').niceScroll({
        cursorcolor: 'rgba(172,50,228,1)',
		cursoropacitymin: 0,
		cursoropacitymax: 1,
        cursorwidth: '10px',
        cursorborder: 0,
        cursorborderradius: 0,
        zindex: 9999,
        scrollspeed: 40,
        mousescrollstep: 40,
        autohidemode: true,
        background: '#222',
        cursorminheight: 170,
        horizrailenabled: false
    });
});
$(window).on("resize", function() {
    $("html").niceScroll({
        scrollspeed: 60,
        mousescrollstep: 40,
        cursorwidth: 10,
        cursorminheight: 170,
        cursorborder: 0,
        cursorcolor: 'rgba(172,50,228,1)',
        cursorborderradius: 0,
        zindex: 9999,
        styler: "fb",
        background: '#222',
        autohidemode: true,
        horizrailenabled: false
    });
});