const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-doms/') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function teste() {
  console.log('Clicou em ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', teste);


//Exercícios

// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo')
console.log(elementoAtivo)

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log(linguagem)

// Retorne a largura da janela
const largura = window.innerWidth;
console.log(largura)