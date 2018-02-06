title: Framenimate, animação frame a frame com javascript
category: Open Source
tags: Open Source, javascript
date: 2017-06-20
lang: pt
---

**Framenimate** é uma pequena biblioteca em javascript que cria animações sequenciais de *frames*. Ela surgiu de uma necessidade pessoal que tive de criar animações sequenciais a partir de uma série de fotos tiradas utilizando a função de fotos sequenciais com a câmera.

## Basic Usage

Para iniciar uma nova animação de frames basta adicionar o atributo **framenimate** ao *wrapper* que contém  sua images/frames

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

Para trocar as propriedades da animação é possível adicionar algumas regras como atributo para sua instancia do **framenimate**:

<pre class="language-html"><code>
  &lt;figure framenimate="speed:25;" &gt;
    &lt;img src=&quot;image-1.png&quot;&gt;
    &lt;img src=&quot;image-2.png&quot;&gt;
    &lt;img src=&quot;image-3.png&quot;&gt;
    &lt;img src=&quot;image-4.png&quot;&gt;
    ...
  &lt;/figure&gt;
</code></pre>


É possível também selecionar o *wrapper* e criar uma nova instancia
de animação e adicionar opções:

<pre class="language-js"><code>
  var animation = new Framenimate(element, {
    speed: 400,
    smooth: 0.5,
    reverse: true
  });
</code></pre>

## Methods

*Framenimate* também possui alguns métodos para manipular a animação

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
