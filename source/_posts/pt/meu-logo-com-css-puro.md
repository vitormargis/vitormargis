title: Meu logo com CSS puro
category: Open Source
tags: Open Source, javascript
date: 2018-01-23
lang: pt
---

De tempos em tempo vejo alguns desafios relacionados a "desenhar" utilizando somente CSS. A verdade é que a maioria das vezes não são casos práticos ou com aplicação real no nosso dia a dia. Mas olhando para meu logo, me pareceu algo interessante e simples o suficiente para tentar fazer.

## Markup - HTML

<pre class="language-html"><code>
  &lt;div class="logo-vm">
    &lt;div class="stripe-1"&gt;&lt;/div&gt;
    &lt;div class="stripe-2"&gt;&lt;/div&gt;
    &lt;div class="stripe-3"&gt;&lt;/div&gt;
    &lt;div class="stripe-4"&gt;&lt;/div&gt;
    &lt;div class="stripe-5"&gt;&lt;/div&gt;
    &lt;div class="stripe-6"&gt;&lt;/div&gt;
  &lt;/div&gt;
</code></pre>

## Estilos - CSS

<pre class="language-css"><code>
  .logo-vm {
    border-radius: 100%;
    background: #333;
    width: 365px;
    height: 365px;
    position: relative;
  }

  .stripe-1 {
    width: 150px;
    height: 50px;
    background: #0989b3;
    position: absolute;
    left: 143px;
    z-index: 9;
    top: 62px;
    animation: animation-2 2.5s infinite;
  }

  .stripe-2 {
    position: absolute;
    border-top: 50px solid #40668b;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(133deg);
    top: 118px;
    left: 38px;
    animation: animation-1 2.5s infinite;
  }

  .stripe-3 {
    position: absolute;
    border-top: 50px solid #40668b;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(133deg);
    top: 118px;
    left: 188px;
    animation: animation-3 2.5s infinite;
  }

  .stripe-4 {
    position: absolute;
    border-bottom: 50px solid #12a6d4;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(229deg);
    top: 184px;
    left: 38px;
    animation: animation-6 2.5s infinite;
  }

  .stripe-5 {
    position: absolute;
    border-bottom: 50px solid #12a6d4;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(229deg);
    top: 184px;
    left: 188px;
    animation: animation-4 2.5s infinite;
  }

  .stripe-6 {
    width: 150px;
    height: 50px;
    background: #0989b3;
    position: absolute;
    left: 143px;
    z-index: 9;
    top: 244px;
    animation: animation-5 2.5s infinite;
  }
</code></pre>

## Animações

<pre class="language-css"><code>
  @keyframes animation-1 {
    0%    { opacity: 0; }
    8.3%  { opacity: 1; }
    16.6% { opacity: 1; }
    24.8% { opacity: 1; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50.5% { opacity: 1; }
    58.3% { opacity: 0; }
    67.2% { opacity: 0; }
    75.6% { opacity: 0; }
    84.2% { opacity: 0; }
    92.4% { opacity: 0; }
    100%  { opacity: 0; }
  }

  @keyframes animation-2 {
    0%    { opacity: 0; }
    8.3%  { opacity: 0; }
    16.6% { opacity: 1; }
    24.8% { opacity: 1; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50.5% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 0; }
    75.6% { opacity: 0; }
    84.2% { opacity: 0; }
    92.4% { opacity: 0; }
    100%  { opacity: 0; }
  }

  @keyframes animation-3 {
    0%    { opacity: 0; }
    8.3%  { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 1; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50.5% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 0; }
    84.2% { opacity: 0; }
    92.4% { opacity: 0; }
    100%  { opacity: 0; }
  }

  @keyframes animation-4 {
    0%    { opacity: 0; }
    8.3%  { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 0; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50.5% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 1; }
    84.2% { opacity: 0; }
    92.4% { opacity: 0; }
    100%  { opacity: 0; }
  }

  @keyframes animation-5 {
    0%    { opacity: 0; }
    8.3%  { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 0; }
    33.3% { opacity: 0; }
    41.6% { opacity: 1; }
    50.5% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 1; }
    84.2% { opacity: 1; }
    92.4% { opacity: 0; }
    100%  { opacity: 0; }
  }

  @keyframes animation-6 {
    0%    { opacity: 0; }
    8.3%  { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 0; }
    33.3% { opacity: 0; }
    41.6% { opacity: 0; }
    50.5% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 1; }
    84.2% { opacity: 1; }
    92.4% { opacity: 1; }
    100%  { opacity: 0; }
  }
</code></pre>

## Resultado final

Os valores poderiam ser feitos com porcentagem, é só uma questão de converter. É uma ideia que a princípio parece meio boba, mas pude entender melhor como funciona o "skew" por exemplo. Além disso, decidi adicionar algumas animações simples por diversão. Podia servir de loader: Quem sabe?

</br>

<style media="screen">
  body, html {
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
  }

  .wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes animation-1 {
    0%   { opacity: 0; }
    8.3% { opacity: 1; }
    16.6% { opacity: 1; }
    24.8% { opacity: 1; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50% { opacity: 1; }
    58.3% { opacity: 0; }
    67.2% { opacity: 0; }
    75.6% { opacity: 0; }
    84% { opacity: 0; }
    92.4% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes animation-2 {
    0%   { opacity: 0; }
    8.3% { opacity: 0; }
    16.6% { opacity: 1; }
    24.8% { opacity: 1; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 0; }
    75.6% { opacity: 0; }
    84% { opacity: 0; }
    92.4% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes animation-3 {
    0%   { opacity: 0; }
    8.3% { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 1; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 0; }
    84% { opacity: 0; }
    92.4% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes animation-4 {
    0%   { opacity: 0; }
    8.3% { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 0; }
    33.3% { opacity: 1; }
    41.6% { opacity: 1; }
    50% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 1; }
    84% { opacity: 0; }
    92.4% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes animation-5 {
    0%   { opacity: 0; }
    8.3% { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 0; }
    33.3% { opacity: 0; }
    41.6% { opacity: 1; }
    50% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 1; }
    84% { opacity: 1; }
    92.4% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes animation-6 {
    0%   { opacity: 0; }
    8.3% { opacity: 0; }
    16.6% { opacity: 0; }
    24.8% { opacity: 0; }
    33.3% { opacity: 0; }
    41.6% { opacity: 0; }
    50% { opacity: 1; }
    58.3% { opacity: 1; }
    67.2% { opacity: 1; }
    75.6% { opacity: 1; }
    84% { opacity: 1; }
    92.4% { opacity: 1; }
    100% { opacity: 0; }
  }

  .logo-vm {
    border-radius: 100%;
    background: #333;
    width: 365px;
    height: 365px;
    position: relative;
  }

  .stripe-1 {
    width: 150px;
    height: 50px;
    background: #0989b3;
    position: absolute;
    left: 143px;
    z-index: 9;
    top: 62px;
    animation: animation-2 2.5s infinite;
  }

  .stripe-2 {
    position: absolute;
    border-top: 50px solid #40668b;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(133deg);
    top: 118px;
    left: 38px;
    animation: animation-1 2.5s infinite;
  }

  .stripe-3 {
    position: absolute;
    border-top: 50px solid #40668b;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(133deg);
    top: 118px;
    left: 188px;
    animation: animation-3 2.5s infinite;
  }

  .stripe-4 {
    position: absolute;
    border-bottom: 50px solid #12a6d4;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(229deg);
    top: 184px;
    left: 38px;
    animation: animation-6 2.5s infinite;
  }

  .stripe-5 {
    position: absolute;
    border-bottom: 50px solid #12a6d4;
    border-left: 45px solid transparent;
    border-right: 0px solid transparent;
    height: 0px;
    width: 60px;
    transform: skewY(229deg);
    top: 184px;
    left: 188px;
    animation: animation-4 2.5s infinite;
  }

  .stripe-6 {
    width: 150px;
    height: 50px;
    background: #0989b3;
    position: absolute;
    left: 143px;
    z-index: 9;
    top: 244px;
    animation: animation-5 2.5s infinite;
  }
</style>

<div class="wrapper">
  <div class="logo-vm">
    <div class="stripe-1"></div>
    <div class="stripe-2"></div>
    <div class="stripe-3"></div>
    <div class="stripe-4"></div>
    <div class="stripe-5"></div>
    <div class="stripe-6"></div>
  </div>
</div>

</br>
