/* eslint-disable */
$(document).ready(() => {
  function duplicateNavbar(target, source) {
    var clone = $(source).clone();
    clone.removeClass('navbar-nav ml-auto');
    clone.addClass('nav flex-column');

    $(target).html(clone);
  }

  duplicateNavbar('.aside', '.navbar-nav');

  $('.aside-toggle').click(() => {
    $('.aside').addClass('aside-active');
    $('.aside-overlay').addClass('aside-overlay-active');
  });

  $('.aside-overlay').click(() => {
    $('.aside').removeClass('aside-active');
    $('.aside-overlay').removeClass('aside-overlay-active');
  });

  if ($(window).width() <= 768) {
    /**
     * Clean blocking classname
     */
    let parent = $('.pricing-slider, .service-slider');
    parent.find('.row').removeClass('row');

    new Swiper('.pricing-slider, .service-slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true
    })
  }
});