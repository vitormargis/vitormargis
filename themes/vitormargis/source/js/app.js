(function($){
  $('.page-content').addClass('loaded');

  var url = window.location.href;

  console.log(url, url.includes('resume'));


  // if(url.includes('resume')) $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if(url.includes('works')) $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if(url.includes('playground')) $('nav.page-main-navigation ul li:nth-child(2) a').addClass('active');
  if(url.includes('contact')) $('nav.page-main-navigation ul li:nth-child(3) a').addClass('active');


  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 275) {
      $('body').addClass('scolled')
    } else {
      $('body').removeClass('scolled')
    }
    if ($(window).scrollTop() > 800) {
      return
    }
    $('.page-header').css({top: -$(window).scrollTop()*1.1})
  })
})(jQuery);
