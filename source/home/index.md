title:
slug: home
---

<div class="hero">
  Hello there! My name is **Vitor** and I've been working with internet for about 9 years now, first as a **Designer**, and for the last 5 years as a **Front-end Developer**. This is my personal playground, enjoy!
</div>


<!-- <div id="field">
  <div id="ball" style="left: 264.46px; bottom: 95.6475px;"></div>
  <div id="ball2" style="left: 0.46px; bottom: 95.6475px;"></div>
  <div id="ball3" style="left: 164.46px; bottom: 95.6475px;"></div>
  <div id="ball4" style="left: 364.46px; bottom: 95.6475px;"></div>
</div> -->

<div class="me">
![](../resume/me.png "Logo Title Text 1")
</div>

<script type="text/javascript">

// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

(function() {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.getElementById("field");
  var ball = document.getElementById("ball");
  var ball2 = document.getElementById("ball2");
  var ball3 = document.getElementById("ball3");
  var ball4 = document.getElementById("ball4");

  var maxX = field.clientWidth - ball.offsetWidth;
  var maxY = field.clientHeight - ball.offsetHeight;

  var maxX2 = field.clientWidth - ball2.offsetWidth;
  var maxY2 = field.clientHeight - ball2.offsetHeight;

  var maxX3 = field.clientWidth - ball3.offsetWidth;
  var maxY3 = field.clientHeight - ball3.offsetHeight;  

  var maxX4 = field.clientWidth - ball4.offsetWidth;
  var maxY4 = field.clientHeight - ball4.offsetHeight;    

  var dur = 3.5

  var duration = dur; // seconds
  var duration2 = dur; // seconds
  var duration3 = dur; // seconds
  var duration4 = dur; // seconds
  var gridSize = 95; // pixels
  var gridSize2 = 91; // pixels
  var gridSize3 = 83; // pixels
  var gridSize4 = 81; // pixels

  var start = null;
  var start2 = null;
  var start3 = null;
  var start4 = null;
  var stretchFactor;

  function step(timestamp){
    var progress, x, y;
    if(start === null) {
      start = timestamp;
      // stretchFactor = 1 + (Math.random() * 2);
      stretchFactor = 3;
    }

    progress = (timestamp - start) / duration / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI + 100); // y = ƒ(t)

    ball.style.left = maxX/2 + (gridSize * x) + "px";
    ball.style.bottom = maxY/2 + (gridSize * y) + "px";

    if(progress >= 0.2)
      ball.classList.add('over');

    if(progress >= 0.75)
      ball.classList.remove('over');

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

  function step2(timestamp){
    var progress, x, y;
    if(start2 === null) {
      start2 = timestamp;
      // stretchFactor = 1 + (Math.random() * 2);
      stretchFactor = 3;
    }

    progress = (timestamp - start2) / duration2 / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI + 100); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

    ball2.style.left = maxX2/2 + (gridSize2 * x) + "px";
    ball2.style.bottom = maxY2/2 + (gridSize2 * y) + "px";

    if(progress >= 0.2)
      ball2.classList.add('over');

    if(progress >= 0.75)
      ball2.classList.remove('over');

    if(progress >= 1) start2 = null; // reset to start2 position
    requestAnimationFrame(step2);
  }

  setTimeout(function() {
    requestAnimationFrame(step2);  
  }, 700)

  function step3(timestamp){
    var progress, x, y;
    if(start3 === null) {
      start3 = timestamp;
      // stretchFactor = 1 + (Math.random() * 2);
      stretchFactor = 3;
    }

    progress = (timestamp - start3) / duration3 / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI + 100); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI + 100); // y = ƒ(t)

    ball3.style.left = maxX2/2 + (gridSize3 * x) + "px";
    ball3.style.bottom = maxY2/2 + (gridSize3 * y) + "px";

    if(progress >= 0.2)
      ball3.classList.add('over');

    if(progress >= 0.75)
      ball3.classList.remove('over');

    if(progress >= 1) start3 = null; // reset to start2 position
    requestAnimationFrame(step3);
  }

  setTimeout(function() {
    requestAnimationFrame(step3);  
  }, 1500)

  function step4(timestamp){
    var progress, x, y;
    if(start4 === null) {
      start4 = timestamp;
      // stretchFactor = 1 + (Math.random() * 2);
      stretchFactor = 3;
    }

    progress = (timestamp - start4) / duration4 / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI + 100); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI + 100); // y = ƒ(t)

    ball4.style.left = maxX2/2 + (gridSize3 * x) + "px";
    ball4.style.bottom = maxY2/2 + (gridSize3 * y) + "px";

    if(progress >= 0.2)
      ball4.classList.add('over');

    if(progress >= 0.75)
      ball4.classList.remove('over');

    if(progress >= 1) start4 = null; // reset to start2 position
    requestAnimationFrame(step4);
  }

  setTimeout(function() {
    requestAnimationFrame(step4);  
  }, 2400)  

})();

</script>
