(function($){
  $('.page-content').addClass('loaded');

  var url = window.location.href;

  if(url.includes('works')) $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if(url.includes('playground')) $('nav.page-main-navigation ul li:nth-child(2) a').addClass('active');
  if(url.includes('contact')) $('nav.page-main-navigation ul li:nth-child(3) a').addClass('active');

  $('.toggle-menu-mobile').on('click', function() {
    $('body').toggleClass('mobile-opened');
    return false;
  })

  if ($('.title').height() < 60) {
    $('body').addClass('one-line-title')
  }

  $.get('/search.json', function(data) {
    console.log(data);
  })

  if ($(window).scrollTop() > 185) {
    $('body').addClass('scolled')
  } else {
    $('body').removeClass('scolled')
  }

  $('.page-header').css({top: -$(window).scrollTop()*1.1})

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 185) {
      $('body').addClass('scolled')
    } else {
      $('body').removeClass('scolled')
    }
    if ($(window).scrollTop() > 800) {
      return
    }
    $('.page-header').css({top: -$(window).scrollTop()*0.5})
  })
})(jQuery);
