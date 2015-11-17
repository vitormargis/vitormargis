(function($){

  $('.page-content').addClass('loaded');

  if($('.title').text() === 'A Little Bit of Info!') $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if($('.title').text() === 'Checkout Some Works') $('nav.page-main-navigation ul li:nth-child(2) a').addClass('active');
  if($('.title').text() === 'Get In Touch') $('nav.page-main-navigation ul li:nth-child(3) a').addClass('active');

  if($('.title').text() === 'A Little Bit of Info!') $('body').addClass('resume');
  if($('.title').text() === 'Checkout Some Works') $('body').addClass('works');
  if($('.title').text() === 'Get In Touch') $('body').addClass('contact');

  $('.chart.skillset-1').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#F4CF62',
    trackColor: "#e0e0e0",
    size: 120,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });

  $('.chart.skillset-2').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#555',
    trackColor: "#e0e0e0",
    size: 120,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });

  $('.chart.skillset-3').easyPieChart({
    scaleColor: "#ecf0f1",
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#CF5253',
    trackColor: "#e0e0e0",
    size: 120,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });


})(jQuery);
