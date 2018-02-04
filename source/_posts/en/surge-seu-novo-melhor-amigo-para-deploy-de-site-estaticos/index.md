title: Surge, your new best friend for deploying static websites
category: Open Source
tags: Open Source, javascript
date: 2017-05-05
lang: en
---

Acho que já perdi a conta de quantos “experimentos” comecei, seja por diversão ou para estudar. Alguns se tornavam coisas publicáveis, e então um dos meus dilemas surgia. La para trás no tempo eu abriria meu FTP e jogaria os arquivos em uma hospedagem qualquer. Um tempo depois, aprendi a usar o GIT e o fluxo mudou. Fazia um push, entrava no servidor via SSH, pull e voilà.

Ambos processos sempre pareceram amadores. Eu sabia que no mundo real as pessoas não faziam as coisas assim. Já havia utilizado heroku no trabalho, mas no geral, na hora de publicar, ficava não mão do cara de “infra” subir o bebê, ou configurar um esquema de continuous deployment. O ponto é, eu só queria subir uns arquivos!

Então que um dia apareceu nas minhas pesquisas no google esse cara legal chamado Surge. Com ele, subir seus arquivos estáticos ficou , fácil. E não, eu não recebo nada pra te falar isso.

## Publicando seus arquivos

Para publicar algo você precisa primeiro instalar o cli via npm e em seguida entrar na pasta com os arquivos que você deseja publicar.

<pre class="language-bash"><code>
  npm install --global surge && surge
</code></pre>

Pronto! É sério. É simples assim. Seus arquivos serão publicados em um subdominio “alguma-coisa.surge.sh’. Existem uma série de opções e coisas legais além disso. Como URL amigáveis automáticas e página 404 padrão por exemplo. Já na versão paga é possível configurar dominio, SSL, CORS e algumas outras coisas.

Pra fechar, caso você queira atualizar o seu codigo no mesmo dominio, é só usar o mesmo comando com a flag de “domain”:

<pre class="language-bash"><code>
  surge -d alguma-coisa.surge.sh
</code></pre>

Resumindo, o surge não vai resolver todos os seu problemas, mas é uma opção bem legal para deploy rápido de sites estáticos.
