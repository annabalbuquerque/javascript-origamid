var pessoa = {
    nome: 'Anna',
    idade: '21',
}

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
    cinco() {
        return 5;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    matadeHeight() {
        return this.height / 2;
    }
}

menu.backgroundColor = '#000';
menu.color = 'blue';
menu.esconder = function() {
    console.log('Escondi');
}
var bg = menu.backgroundColor;


//Exercícios

// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: 'Anna',
    sobrenome: 'Albuquerque',
    idade: 21,
    cidade: 'Brasília',
  }
  
  // Crie um método no objeto anterior, que mostre o seu nome completo
  dados.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
  }
  
  // Modifique o valor da propriedade preco para 3000
  var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  
  carro.preco = 3000;
  
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
      if(pessoa === 'homem') {
        return 'Latir';
      } else {
        return 'Nada';
      }
    }
  }