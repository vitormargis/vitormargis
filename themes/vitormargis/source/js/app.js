(function($){
  $('.page-content').addClass('loaded');

  var url = window.location.href;

  if(url.includes('works')) $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if(url.includes('playground')) $('nav.page-main-navigation ul li:nth-child(2) a').addClass('active');
  if(url.includes('articles')) $('nav.page-main-navigation ul li:nth-child(3) a').addClass('active');
  if(url.includes('contact')) $('nav.page-main-navigation ul li:nth-child(4) a').addClass('active');

  $('.toggle-menu-mobile').on('click', function() {
    $('body').toggleClass('mobile-opened');
    return false;
  })
  if ($('.title').outerHeight() < 60) {
    $('body').addClass('one-line-title')
  }

  // $.get('/search.json', function(data) {
  //   console.log(data);
  // })
  // console.log(url);

  if ($(window).scrollTop() > 185) {
    $('body').addClass('scolled')
  } else {
    $('body').removeClass('scolled')
  }
  // console.log(-$(window).scrollTop()*1.1);
  
  $('.page-header').css('transform', 'translateY(' + (-$(window).scrollTop()*1.1) + 'px)')
  // $('.page-header h1').css('opacity', (-$(window).scrollTop()*0.0075)+1)
  // $('.page-header.full h1').css('opacity', (-$(window).scrollTop()*0.0025)+1)

  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 185) {
      $('body').addClass('scolled')
    } else {
      $('body').removeClass('scolled')
    }
    if ($(window).scrollTop() > 1000) {
      return
    }
    $('.page-header').css('transform', 'translateY(' + (-$(window).scrollTop()*0.5) + 'px)')
    // $('.page-header h1').css('opacity', (-$(window).scrollTop()*0.0075)+1)
    // $('.page-header.full h1').css('opacity', (-$(window).scrollTop()*0.0025)+1)
  })

  function setLang(lang) {
    localStorage.setItem('vitorLang', lang);
    $(`.archives`).hide();
    $(`.archives.${lang}`).show();
    $(`.lang-switch`).removeClass('pt');
    $(`.lang-switch`).removeClass('en');
    $(`.lang-switch`).addClass(lang);
  }

  if($('.archives').length) {
    setLang(localStorage.vitorLang || 'pt')
  }

  $('.lang-switch a').on('click', function(event) {
    event.preventDefault()
    const lang = $(this).attr('href').substring(1);
    setLang(lang)
  })

})(jQuery);
