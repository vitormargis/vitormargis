title: Surge, seu novo melhor amigo para deploy de site estáticos
category: Open Source
tags: Open Source, javascript
date: 2017-05-05
lang: pt
---

Acho que já perdi a conta de quantos “experimentos” comecei, seja por diversão ou para estudar. Alguns se tornavam coisas publicáveis, e então um dos meus dilemas surgia. La para trás no tempo eu abriria meu FTP e jogaria os arquivos em uma hospedagem qualquer. Um tempo depois, aprendi a usar o GIT e o fluxo mudou. Fazia um *push*, entrava no servidor via SSH, *pull* e voilà.

Ambos processos sempre pareceram amadores. Eu sabia que no mundo real as pessoas não faziam as coisas assim. Já havia utilizado [Heroku](https://www.heroku.com/) no trabalho, mas de modo geral, na hora de publicar ficava na responsabilidade da pessoa de “infra” subir o bebê, ou configurar algum esquema de *continuous deployment*. Mas a questão era: eu só queria subir uns arquivos!

## Publicando seus arquivos

Então um dia apareceu nas minhas pesquisas pelo Google, achei esse cara legal chamado Surge. Com ele, subir seus arquivos estáticos ficou super fácil. E não, eu não recebo nada pra falar isso. Para publicar algo, você precisa primeiro instalar o *cli* via npm:

<pre class="language-bash"><code>
  npm install --global surge && surge
</code></pre>

Pronto. Sério, é simples assim. Seus arquivos serão publicados em um subdominio “alguma-coisa.surge.sh”. Mas não é só isso! Existem uma série de opções e coisas legais além disso. Como URL amigáveis automáticas e página 404 padrão por exemplo. Já na versão paga é possível configurar dominio, SSL, CORS e algumas outras coisas. Por fim, caso você queira atualizar o seu código no mesmo domínio, é só usar o mesmo comando com a flag de *domain*:

<pre class="language-bash"><code>
  surge -d alguma-coisa.surge.sh
</code></pre>

O surge não vai resolver todos os seu problemas, mas é uma opção bem legal para deploy rápido de sites estáticos simples, seja para um cliente ou para um projetinho pessoal.
