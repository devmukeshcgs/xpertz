function search() {
    console.log("HOME PAGE JS")
    var filterSec = $('.filters');
    var mobVav = $('.mob-nav');
    var init, bindEvents, mobNav, toggleAccordion, closeOtherAccordions;
    init = function () {
        bindEvents();
    }

    bindEvents = function () {
        $('.js-mob-filter').click(function () {
            console.log("Filter Clicked");
            filterSec.addClass('mob-filter-show');
            mobVav.hide();
        })
    }
    userDropDown = function () {}
    mobNav = function () {

    }

    toggleAccordion = function (ele) {
        const parent = $(ele).closest('.accordion');
        closeOtherAccordions(parent);

        if (parent.is('.is-active')) {
            parent.removeClass('is-active');
        } else {
            parent.addClass('is-active');
        }
    }

    closeOtherAccordions = function (ele) {
        $('.accordion').not(ele).each(function () {
            if ($(this).is('.is-active')) {
                $(this).removeClass('is-active');
            }
        });
    }

    init();
};