$( document ).ready(function() {

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn__active')
    });

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.header__nav').slideToggle();
    });

    $(window).resize(function () {
        if($(window).width() > 768) {
            $('.header__nav').removeAttr('style');
        }
    });

    $('.nav__item').on('click', function () {
        $(this).children('.drop-down').slideToggle();
        $(this).toggleClass('nav__item_active');

    });


    // $('.nav__item').on('click', function () {
    //     $(this).siblings().removeClass('nav__link_active');
    //     $(this).toggleClass('nav__link_active');
    // });

});
