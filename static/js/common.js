$(document).ready(function() {

    // 메인 상단 롤링
    $('.main-visual').slick({
        arrows: false,
        dots: true
    });
    // 메인 하단 유관부서 롤링
    $('.main-department').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    $('.tab-fishing li').on('click', function() {
        var index = $(this).index() + 1;
        $(this).siblings('li').removeClass('seleted');
        $(this).addClass('seleted');
        $('.tab-content').hide();
        $('.fishing' + index).show();
        return false;
    });

});