function home() {
  console.log("HOME PAGE JS")
  var init, bindEvents, mobNav, toggleAccordion, closeOtherAccordions;
  init = function () {
    if ($('#top-picks-slider').length > 0) {}
    mobNav();
    userDropDown();
    bindEvents();
  }

  bindEvents = function () {
    console.log("STEP 01")
    var swiper = new Swiper('#top-picks-slider .swiper-container ', {
      slidesPerView: 2.5,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }

    });

    //////////////////////////////////////
    var swiper = new Swiper('#popular-packages .swiper-container', {
      slidesPerView: 2.5,
      spaceBetween: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }
    });

    //////////////////////////////////////
    var swiper = new Swiper('#testimonials .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }
  userDropDown = function () {
    setTimeout(() => {
      if ($('.user-pic-btn').length > 0) {
        $('.user-pic-btn').click(function () {
          console.log("CLICKED on NAV");
          $(".dropdown-menu").toggle();
        })
      }
    }, 2000);
  }
  mobNav = function () {
    setTimeout(() => {
      if ($('.js-mob-nav').length > 0) {

        $('.js-mob-nav > ul > li').click(function () {
          $('.js-mob-nav > ul > li').removeClass("active");
          $(this).addClass("active");
          // $("body").toggleClass("stop-scroll");
          console.log("CLICKED on NAV")
        });

      }

      if ($('.categories-list').length > 0) {
        $('.categories-list > ul >li').click(function () {
          console.log("CLICKED on LIST", $(this))
          $('.categories-list > ul >li').removeClass("active");
          $(this).addClass("active");
        });
      }
    }, 3000);
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