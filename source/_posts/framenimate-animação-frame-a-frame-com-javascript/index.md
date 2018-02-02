title: Framenimate, animação frame a frame com javascript
category: Open Source
tags: Open Source, javascript
date: 2017-06-20
---


<strong><i>Framenimate</i></strong> is a small javascript plugin to create simple sequential frames animations. It was born from a personal necessity of creating a sequential animation out of a series of photos taken using the sequential shooting function from digital cameras. Enjoy!

## Basic Usage

To start a new frame animation is as simples as adding the <strong><i>framenimate</i></strong> attribute to the wrapper tag where your images/frames are contained:</p>

<pre class="language-html"><code>
  &lt;figure framenimate &gt;
    &lt;img src=&quot;image-1.png&quot;&gt;
    &lt;img src=&quot;image-2.png&quot;&gt;
    &lt;img src=&quot;image-3.png&quot;&gt;
    &lt;img src=&quot;image-4.png&quot;&gt;
    ...
  &lt;/figure&gt;
</code></pre>

## Options

To change the animation properties it's possible to add some custom rules to the <strong><i>framenimate</i></strong> attribute:

<pre class="language-html"><code>
  &lt;figure framenimate="speed:25;" &gt;
    &lt;img src=&quot;image-1.png&quot;&gt;
    &lt;img src=&quot;image-2.png&quot;&gt;
    &lt;img src=&quot;image-3.png&quot;&gt;
    &lt;img src=&quot;image-4.png&quot;&gt;
    ...
  &lt;/figure&gt;
</code></pre>

It is also possible to select the wrappers DOM node and create a new instance of animation for this target(s) through Javascript with <strong><i>new Framenimate</i></strong> and set some options:

<pre class="language-js"><code>
  var animation = new Framenimate(element, {
    speed: 400,
    smooth: 0.5,
    reverse: true
  });
</code></pre>

## Methods

<strong><i>Framenimate</i></strong> has also some methods for animation manipulation:

<pre class="language-js"><code>
  buttonReverse.addEventListener('click', function(){
    animation.reverse()
  })

  buttonPlay.addEventListener('click', function(){
    animation.play()
  })

  buttonStop.addEventListener('click', function(){
    animation.stop()
  })

  buttonNext.addEventListener('click', function(){
    animation.stop()
    animation.next()
  })

  buttonPrev.addEventListener('click', function(){
    animation.stop()
    animation.prev()
  })

  buttonGoTo.addEventListener('click', function(){
    animation.stop()
    animation.goTo(10)
  })
</code></pre>
