function home() {
  console.log("HOME PAGE JS")
  var init, bindEvents, toggleAccordion, closeOtherAccordions;
  init = function () {
    if ($('#top-picks-slider').length > 0) {
      bindEvents();
    }
  }

  bindEvents = function () {
    console.log("STEP 01")
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
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
    var swiper = new Swiper('#popular-packages .swiper-container', {
      slidesPerView: 2,
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