;
var XPERTZ = XPERTZ || {};
XPERTZ.windowObj = XPERTZ.windowObj || {};
XPERTZ = (function (XPERTZ, $) {
    //Cashe html tag 
    var $html = $('html');
    var WW = $(window).width();
    var WH = $(window).height();
    var NAV_HEIGHT = $(".xpertz-header").height();
    //$('main').css('min-height', screen.height - NAV_HEIGHT);

    XPERTZ.init = function () {};
    return XPERTZ;

}(XPERTZ, jQuery));

if (!window.console) {
    var console = {
        log: function () {}
    };
}

$(window).on("load", function () {
    // $(".mcs").mCustomScrollbar(); 
});

$(document).ready(function () {

    if (typeof XPERTZ !== undefined) {
        XPERTZ.init();
    }

    window.onorientationchange = function () {
        console.log("onorientationchange");
    }

    // $.ajax({  
    //     type: "GET",
    //     url: "navigation.html",
    //     data: {},
    //     success: function (data) {
    //         $('#inc-navigation').html(data);
    //         console.log("onorientationchange");
    //     }
    // });

    // $.ajax({
    //     type: "GET",
    //     url: "footer.html",
    //     data: {},
    //     success: function (data) {
    //         $('#inc-footer').html(data);
    //     }
    // });


    if ($(window).width() < 767) {
        $(".header img").removeClass("img-responsive");
        $(".header img").css("width", "180");

        $(document).on('scroll', function () {
            console.log('Event Fired');
            jQuery(".collapse.navbar-collapse.in").removeClass("in");
        });
        // //SWIPER
        // var swiper = new Swiper('.js-co-creation', {
        //     slidesPerView: 'auto',
        //     centeredSlides: true,
        //     // pagination: { 
        //     //     el: '.swiper-pagination',
        //     //     clickable: true,
        //     // }
        // });

        // var swiper = new Swiper('.js-dab-dri', {
        //     slidesPerView: 'auto',
        //     centeredSlides: true,
        //     // pagination: {
        //     //     el: '.swiper-pagination',
        //     //     clickable: true, 
        //     // }
        // });
    }
    home();
    search();

    //$(".show-pass i").toggleClass("tn-eye tn-open-eye");
    // <i class="tn-icon tn-open-eye"></i>

    // $(".show-pass span i").on('click', '.toggle-password', function () {
    //     $(this).toggleClass("tn-eye tn-open-eye");

    //     var input = $("#pass_log_id").attr("type");

    //     if (input.attr("type") === "password") {
    //         input.attr("type", "text");
    //     } else {
    //         input.attr("type", "password");
    //     }
    // });

    $("body").on('click', '.toggle-password', function () {
        $(this).toggleClass("tn-eye tn-open-eye");
        var input = $("#pass_log_id");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }

    });

});
console.log("Custome App  Loaded 03");