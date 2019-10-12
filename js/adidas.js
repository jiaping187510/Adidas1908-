//按钮

$(function() {
    $(".item").mousedown(function() {
        $(this).css({
            left: "0px",
            top: "0px"
        })
    })
    $(".item").mouseup(function() {
        $(this).css({
            left: "-4px",
            top: "-4px"
        })
    })
    $(".item").mouseleave(function() {
        $(".item").css({
            left: "-4px",
            top: "-4px"
        })
    })
})

// 二级菜单
$(function() {
        $(".test").hide();
        $(".a1").on("mouseover", function() {
            $(".test").slideDown(300);
        })
        $(".test").on("mouseover", function() {
            $(".test").show();
        })
        $(".a1").on("mouseout", function() {
            $(".test").hide();
        })

    })
    //轮播图
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    marginLeft: 15,
    marginRight: 15,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});