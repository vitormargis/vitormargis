(function($){
  $('.page-content').addClass('loaded');

  if($('.title').text() === 'A Little Bit of Info!') $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if($('.title').text() === 'Checkout Some Works') $('nav.page-main-navigation ul li:nth-child(2) a').addClass('active');
  if($('.title').text() === 'Get In Touch') $('nav.page-main-navigation ul li:nth-child(3) a').addClass('active');

  if($('.title').text() === 'A Little Bit of Info!') $('body').addClass('resume');
  if($('.title').text() === 'Checkout Some Works') $('body').addClass('works');
  if($('.title').text() === 'Get In Touch') $('body').addClass('contact');
})(jQuery);
