;
var XPERTZ = XPERTZ || {};
XPERTZ.windowObj = XPERTZ.windowObj || {};
XPERTZ = (function (XPERTZ, $) {
    //Cashe html tag 
    var $html = $('html');
    var WW = $(window).width();
    var WH = $(window).height();

    XPERTZ.init = function () {};
    return XPERTZ;

}(XPERTZ, jQuery));

if (!window.console) {
    var console = {
        log: function () {}
    };
}

$(window).on("load", function () {
    $(".mcs").mCustomScrollbar();
});

$("show-hide-sec-body").on("click", function () {

});
$(".show-hide-sec-body").click(function () {
    $(".js-show-hide-sec-body").slideToggle("slow", function () {
        // Animation complete.
    });
});


$(document).ready(function () {

    if (typeof XPERTZ !== undefined) {
        XPERTZ.init();
    }

    window.onorientationchange = function () {
        console.log("onorientationchange");
    }

    $.ajax({
        type: "GET",
        url: "navigation.html",
        data: {},
        success: function (data) {
            $('#inc-navigation').html(data);
            console.log("onorientationchange");
        }
    });

    $.ajax({
        type: "GET",
        url: "footer.html",
        data: {},
        success: function (data) {
            $('#inc-footer').html(data);
        }
    });


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

    $("form0").validate({
        errorClass: 'help-block animation-slideDown',
        // You can change the animation class for a different entrance animation - check animations page
        errorElement: 'div',
        errorPlacement: function (error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function (e) {
            // You can use the following if you would like to highlight with green color the input after successful validation!
            e.closest('.form-group').removeClass('has-success has-error');
            // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
            e.closest('.help-block').remove();
        },
        rules: {},
        messages: {}
    });


    $("#submit").click(function () {

        console.log("alert");

    })

    $("#otp").validate({
        errorClass: 'help-block animation-slideDown', // You can change the animation class for a different entrance animation - check animations page
        errorElement: 'div',
        errorPlacement: function (error, e) {
            e.parents('.form-group > div').append(error);
        },
        highlight: function (e) {
            $(e).closest('.form-group').removeClass('has-success has-error').addClass('has-error');
            $(e).closest('.help-block').remove();
        },
        success: function (e) {
            // You can use the following if you would like to highlight with green color the input after successful validation!
            e.closest('.form-group').removeClass('has-success has-error'); // e.closest('.form-group').removeClass('has-success has-error').addClass('has-success');
            e.closest('.help-block').remove();
        },
        rules: {
            var_enterotp: {
                required: true,
                minlength: 3
            },
        },
        messages: {
            var_enterotp: {
                required: 'Please enter a firstname',
                minlength: 'Your firstname must consist of at least 3 characters'
            },

        }

    })

});
console.log("Custome App  Loaded");