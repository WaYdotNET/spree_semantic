//= require store/spree_frontend
//= require jquery.hoverIntent
//= require jquery.bxslider
//= require jquery.dotdotdot-1.5.2
//= require jquery.isotope
//= require matchMedia
//= require enquire
//= require bootstrap

$(function(){
  
  // Hide flash messages after timeout
  setTimeout('$(".flash").fadeOut(1000)', 5000);
  
  // Home sliders
  if($('#home-slider').length > 0) {
  
  var cached_carousel_1 = $('#featured-products .carousel').html();
  var cached_carousel_2 = $('#latest-products .carousel').html();
  
  $('#home-slider > ul').bxSlider({
                                  mode: 'horizontal',
                                  captions: true,
                                  adaptiveHeight: false,
                                  auto: true,
                                  autoHover: false,
                                  useCSS: true,
                                  controls: true,
                                  pagerSelector: '.slider-pager',
                                  touchEnabled: false
                                  });
  
  $('.carousel').bxSlider({
                          minSlides: 1,
                          maxSlides: 4,
                          useCSS: true,
                          slideWidth: 230,
                          slideMargin: 10,
                          auto: true,
                          autoHover: true,
                          controls: false,
                          touchEnabled: false
                          });
  
  $("#home-slider .product-description").dotdotdot({
                                                   watch: true,
                                                   height: 50
                                                   });
  
  }
  
  
  /* ------------------- Isotope --------------------- */
/* PORTFOLIO FILTER
 * ======================================================= */
  // cache container
  var $container = $('#isotope_container');
  var $filter = $('.portfolio-filter');
  // initialize isotope
  $container.isotope({
                     // options...
                     itemSelector : '.isotope-item',
                     layoutMode : 'masonry',
                     resizesContainer: true,
                     filter: '*'
                     });
  // filter items when filter link is clicked
  $('#filters a').click(function () {
                        var selector = $(this).attr('data-filter');
                        $container.isotope({ filter: selector });
                        return false;
                        });
  // update columnWidth on window resize
  $(window).smartresize(function () {
                        $container.isotope('reLayout');
                        });
  // Filter items when filter link is clicked
  $filter.find('a').click(function () {
                          var selector = $(this).attr('data-filter');
                          $filter.find('a').removeClass('current');
                          $(this).addClass('current');
                          });
  
  
  
  // Make buttons from radio inoputs
  $( "#product-variants .variants-buttons" ).buttonset();
  $( ".payment-method-selector").buttonset();
  
  // Search hover
  var searchHoverConfig = {
  over: function(){
  $("#search-bar").find('form').fadeIn('300');
  },
  timeout: 300, // number = milliseconds delay before onMouseOut
  out: function(){
  $("#search-bar").find("form").fadeOut('300');
  }
  };
  
  $("#search-bar").hoverIntent(searchHoverConfig);
  
  // Cart table responsive fixes
  var cart_description_header = $('[data-hook="cart_items_headers"]').find('.cart-item-description-header');
  var cart_adjustment_header = $('[data-hook="cart_items"]').find('.cart-adjustment-header');
  
  // Media
  enquire.register("screen and (max-width: 767px)", {
                   match : function() {
                   if(cart_description_header.length > 0 || cart_adjustment_header.length > 0) {
                   cart_description_header.attr('colspan', '0');
                   cart_adjustment_header.attr('colspan', '5');
                   }
                   },
                   unmatch : function() {
                   if(cart_description_header.length > 0 || cart_adjustment_header.length > 0) {
                   cart_description_header.attr('colspan', '2');
                   cart_adjustment_header.attr('colspan', '6');
                   }
                   }
                   }).listen();
  
  });