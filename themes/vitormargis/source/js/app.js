!function(){var e,t,a,r,i;this.Framenimate=function(n){if(e=-1,framenimateWrapper=n||document.querySelectorAll("[framenimate]"),n||(framenimateAttr=framenimateWrapper[0].getAttribute("framenimate").toString().split(";")),i={},framenimateWrapper[0].getAttribute("framenimate"))for(var o=0;o<framenimateAttr.length;o++)if(""!==framenimateAttr[o]){var s=framenimateAttr[o].replace(" ","").split(":");i[s.splice(0,1)[0]]=s.join(":").replace(" ","")}i.smooth?(r=i.smoothFactor||i.speed/1e3||m.speed/1e3,a="transition: opacity "+r+"s ease; position: absolute; opacity: 0"):a="position: absolute; opacity: 0";for(var p in framenimateWrapper)if(+p>=0){t=framenimateWrapper[p].children;for(var l=0;l<t.length;++l)t[l].setAttribute("class","frame frame-"+l),t[l].setAttribute("style",a);setInterval(this.loop,i.speed||m.speed)}},Framenimate.prototype.loop=function(){function r(){0!==e&&t[e-1].setAttribute("style",a),0===e&&t[t.length-1].setAttribute("style",a)}e<=t.length-2?e++:e=0,setTimeout(r,i.speed/2||m.speed/2),t[e].setAttribute("style",a.replace("opacity: 0","opacity: 1"))};var m={speed:50,smooth:!1,smoothFactor:0};0!==document.querySelectorAll("[framenimate]").length&&(this.framenimation=new Framenimate)}();

(function($){

  $('.page-content').addClass('loaded');

  if($('.title').text() === 'A Little Bit of Info!') $('nav.page-main-navigation ul li:nth-child(1) a').addClass('active');
  if($('.title').text() === 'Checkout Some Works') $('nav.page-main-navigation ul li:nth-child(2) a').addClass('active');
  if($('.title').text() === 'Get In Touch') $('nav.page-main-navigation ul li:nth-child(3) a').addClass('active');

  if($('.title').text() === 'A Little Bit of Info!') $('body').addClass('resume');
  if($('.title').text() === 'Checkout Some Works') $('body').addClass('works');
  if($('.title').text() === 'Get In Touch') $('body').addClass('contact');

  $('.chart.skillset-1').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 38,
    lineCap: 'butt',
    barColor: '#F4CF62',
    trackColor: "#f1f1f1",
    size: 90,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });

  $('.chart.skillset-2').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 38,
    lineCap: 'butt',
    barColor: '#555',
    trackColor: "#f1f1f1",
    size: 90,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });

  $('.chart.skillset-3').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 38,
    lineCap: 'butt',
    barColor: '#CF5253',
    trackColor: "#f1f1f1",
    size: 90,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });

  $('.chart.skillset-4').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 38,
    lineCap: 'butt',
    barColor: '#198ab1',
    trackColor: "#f1f1f1",
    size: 90,
    animate: 500,
    onStop: function(){
      $('.skills br').remove();
    }
  });


})(jQuery);
