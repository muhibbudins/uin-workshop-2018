/* eslint-disable */

/**
 * Make sure DOM is ready
 */
$(document).ready(() => {

  /**
   * Clone navbar menu to sidebar
   */
  var clone = $('.navbar-nav').clone();
  clone.removeClass('navbar-nav ml-auto');
  clone.addClass('nav flex-column');

  $('.sidebar').html(clone);
  $('.nav.flex-column').removeClass('d-none');

  /**
   * Create function to open sidebar
   */
  $('.sidebar-toggle').click(() => {
    $('.sidebar').addClass('sidebar-active');
    $('.sidebar-overlay').addClass('sidebar-overlay-active');
  });

  /**
   * Create function to close sidebar
   */
  $('.sidebar-overlay').click(() => {
    $('.sidebar').removeClass('sidebar-active');
    $('.sidebar-overlay').removeClass('sidebar-overlay-active');
  });

  /**
   * Detect the window width
   */
  if ($(window).width() <= 768) {
    /**
     * Clean blocking classname
     */
    let parent = $('.pricing-slider, .service-slider');
    parent.find('.row').removeClass('row');

    /**
     * Run swiper when it's mobile version
     */
    new Swiper('.pricing-slider, .service-slider', {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true
    })
  }
});