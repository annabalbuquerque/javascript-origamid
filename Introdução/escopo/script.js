var carro = 'Peugeot'

function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
   }
   mostrarCarro(); // Fusca no console
   console.log(carro); // Erro, carro is not defined


var carro = 'Fusca';

function mostrarCarro() {
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}
mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

//Const:
const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor
const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018,
}
data.dia = 29; // Funciona
// data = 'Janeiro'; // erro

//Let:
// let ano;
ano = 2018;
ano++;
console.log(ano); // 2019
// let ano = 2020; // erro, redeclarou a variável


if(true) {
    const carro = 'Fusca';
    console.log(carro);
   }
   console.log(carro); // erro, carro is not defined


//Exercícios

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
// console.log(var, marca, portas);

//não é possível acessar o var, pois o var em si, não é uma variável e console.log deveria estar dentro do bloco para conseguir acessar-lo.

// Como corrigir o erro abaixo?
   function somarDois(x) {
    const dois = 2;
    return x + dois;
}
   function dividirDois(x) {
    return x + dois;
}
somarDois(4);
// dividirDois(6);

//dividirDois(6) não funciona, pois está tentando acessar uma variável dentro da primeira função.