/* eslint-disable */
$(document).ready(() => {

  var clone = $('.navbar-nav').clone();
  clone.removeClass('navbar-nav ml-auto');
  clone.addClass('nav flex-column');

  $('.sidebar').html(clone);
  $('.nav.flex-column').removeClass('d-none');

  $('.sidebar-toggle').click(() => {
    $('.sidebar').addClass('sidebar-active');
    $('.sidebar-overlay').addClass('sidebar-overlay-active');
  });

  $('.sidebar-overlay').click(() => {
    $('.sidebar').removeClass('sidebar-active');
    $('.sidebar-overlay').removeClass('sidebar-overlay-active');
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