$(document).ready(function() {

    // 메인 상단 롤링
    $('.main-visual').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true
    });
    // 메인 하단 유관부서 롤링
    $('.main-department').slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });

    // 회원현황 조건별 검색
    $('.select-search input[name=classify]').change(function () {
        console.log($(this).val());
        $('.classify-content').hide();
        $('.'+$(this).val()).show();
    });
    // 회원현황 지역별 탭
    $('.tab-regional li').on('click', function() {
        var index = $(this).index() + 1;
        $(this).siblings('li').removeClass('seleted');
        $(this).addClass('seleted');
        $('.tab-content').hide();
        $('.regional' + index).show();
        return false;
    });
    // 회원현황 종사어업별 탭
    $('.tab-industry li').on('click', function() {
        var index = $(this).index() + 1;
        $(this).siblings('li').removeClass('seleted');
        $(this).addClass('seleted');
        $('.tab-content').hide();
        $('.industry' + index).show();
        return false;
    });

});

// Select Box
function selectboxEvent(target) {
    var $this = $(target),
        str = $this.val();
    $this.parent().children('.selectbox-value').text(str);
}