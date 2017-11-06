$(document).ready(function() {

    //메인 상단 롤링
    $('.main-visual').slick({
        arrows: false,
        dots: true
    });

    $('.main-department').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

});