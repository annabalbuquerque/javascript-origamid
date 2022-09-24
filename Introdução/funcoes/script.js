function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));
console.log(areaQuadrado(2));

function pi() {
    return 3.14;
}
var total = 5 * pi();

console.log(total);

// peso e altura são os parâmetros
function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.80)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.70)); // 60 e 1.70 são os argumentos

//Parênteses executa a função

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Você gosta do céu';
    } else if(cor === 'verde') {
        return 'Você gosta de mato';
    } else {
        return 'Você não gosta de nada';
    }
   }

console.log(corFavorita()); // retorna 'Você não gosta de nada'

//Argumentos podem ser funções

addEventListener('click', function() {
    console.log('Clicou');
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//Pode ou não retornar um valor

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined

//Valores retornados

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade('Oi'));

   function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return 'Ainda faltam ' + (totalPaises - paisesVisitados) + ' países para visitar';
   }
   function jaVisitei(paisesVisitados) {
    return 'Já visitei ' + (paisesVisitados) + ' do total de ' + (totalPaises);
   }
   console.log(precisoVisitar(20));
   console.log(jaVisitei(20)); //erro, total de países não definido

//Exercícios

// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
    return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return lado*4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

// Crie uma função que verifica se um número é par
function isEven(numero) {
    var modulo = numero % 2;
    if(modulo === 0) {
        return true;
    } else {
        return false;
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll'
addEventListener('scroll', function() {
    console.log('Anna Albuquerque');
})