# Gerador de personas:

Você pode conferir aqui: <a href="https://generator2-faq1nvb51-eliasgabriel1.vercel.app/">Gerador de Personas</a>

Bem, como na faculdade eu possuo uma matéria de marketing digital, nesses últimos dias eu vi algumas coisas sobre persona, e como busca de facilidade de ver personagens e como se encaixa no produto, criei algumas personas de 20 -40 anos, sem especificar idade e sim a comunidade que ela vive, o maior problema séria a especificidade da persona, como um idoso de x anos que gosta de ouvir radios, fora feitos mais personas no geral, que tem uma maior atividade na comunidade, e nas redes sociais.

Cada persona possui uma caractéristica que pode ser explorado por profissionais do marketing, por exemplo a venda de produto geek, abrange em maioria os adolescentes porém, alguns adultos em atividade na comunidade possui essa caractéristicas, e como eles vivem e aonde vão, isso pode influenciar em como vou vender meu produto.

<div>
  <p> O Projeto atual fora feito com as devidas versões:</p>
  </div>
  
  <table>
<tr>
  <tr>
    <td>React.js</td>
    <td><a href="https://www.npmjs.com/package/react"><img src="https://shields.io/badge/version-v17.0.2-lightblue" /></a></td>
  </tr>
  <tr>
    <td>Styled-components</td>
    <td><a href="https://www.npmjs.com/package/styled-components"> <img src="https://shields.io/badge/version-v5.3.3-green" /></a></td>
  </tr>
    <tr>
    <td>Icon8</td>
    <td><a href="https://icons8.com.br/"></a></td>
  </tr>
  <tr>
    <td><a href="https://github.com/EliasGabriel1"><img src="https://img.icons8.com/clouds/100/000000/github.png" /></a></td>
  </tr>
</table>

A estrutura do projeto fora feito da seguinte maneira:

![image](https://user-images.githubusercontent.com/50595684/139959361-428e7e93-15c0-4465-b071-985b9b82571f.png)

Os dados da api, seria acessado com axios, jogando para uma constante ou uma função e exportando default, da mesma maneira que fora feito com o json e a function:

![image](https://user-images.githubusercontent.com/50595684/139960390-1da89cc0-c038-4df1-9fc4-cdeeaf84828a.png)

Nessa imagem eu pego os dados da function que eu exportei, eu faço um random de 0-4, sendo assim 5 personas, pois é o tanto que possui de personas, desses dados jogo pro contexto, no contexto faço uma função, aonde eu tiro todo do dado do contexto e jogo pra uma constante chamada de dragged, na lists faço um .map(sim eu sei que poderia usar for de alguma forma, mas Zzzzzzz), fazendo as listas, sendo asim poderia fazer mais de uma perosna por página.

![image](https://user-images.githubusercontent.com/50595684/139960787-2317a226-cab0-44a0-969f-81e5a761c2a3.png)
 
 Aqui no compontente de lista eu, pego todo dado  e o index e faço uma separação, um container com imagem e outra separação, sendo as duas separações aside, e o header no meio como main, separação 1 é sobre profissão e separação 2 é sobre a pessoa
![image](https://user-images.githubusercontent.com/50595684/139960832-95585311-c206-4973-8b53-45ebe413b98e.png)

