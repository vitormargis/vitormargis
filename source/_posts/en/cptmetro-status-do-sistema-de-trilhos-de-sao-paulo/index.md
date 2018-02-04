title: CPTMetro, São Paulo's rails system status
category: Open Source
tags: Open Source, javascript
date: 2017-10-20
lang: en
---

Recentemente estava desenvolvendo um projeto em que precisei dos status das linhas do metrô e percebi que não havia nenhum API pública que os fornecessem. Para não ser totalmente injusto, até encontrei algo. Uma api feita pela viaQuatro, a linha amarela e até o momento única privada do metro. Mas a verdade é que não gostei muito dela e imaginei que seria uma boa ideia também ter algo para as linha da CPTM, ou porque não, algo que fornecesse informação das duas companhias.

Hora de colocar mão na massa e primeira coisa for criar um wrapper/crawler para pegar os dados. Do metro optei por usar a API da viaQuatro, enquanto que para os dados da CPTM não tive muita escolha e fiz um crawler bem simples. O dados são coletados sob demanda cada vez que a API é requisitada, para não onerar o domínio de origem.

<pre class="language-js"><code>
  cptmetro.metro().then(data => data);
</code></pre>

Além disso resolvi fazer uma CLI para mostrar o dados no terminal. Essa foi a base para a API. Depois acabei me empolgando e fiz um site que pretendo transformar em um PDW para consumir a API e mostrar os status do sistema de trilhos de são paulo.

A API esta disponivel em http://api.cptmetro.margis.com.br/ e o site em http://cptmetro.margis.com.br/

Da pra melhorar, mas foi divertido fazer e aprendi algumas coisas. Críticas e sugestões são bem vindas nos comentarios.
