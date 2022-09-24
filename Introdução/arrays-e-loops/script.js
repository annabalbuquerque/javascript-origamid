var videoGames = ['Switch', 'PS4', 'XBOX'];

videoGames.pop(); // Remove o último item e retorna ele
videoGames.push('3DS'); // Adiciona ao final da array
videoGames.length; // 3

//For Loop:
for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
   }
// Retorna de 0 a 9 no console

//While Loop:
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// Retorna de 0 a 9 no console

//Arrays e Loops
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}

//Break:
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
    if(videoGames[i] === 'PS4') {
 break;
 }
}

//forEach:
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
    console.log(item);
});
// O argumento item será atribuído dinamicamente


var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
    console.log(numero);
    numero++;
}

//Exercícios

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copaBrasil = [1959, 1962, 1970, 1994, 2002];
    console.log(copaBrasil);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}'
for (var i = 0; i < copaBrasil.length; i++) {
    console.log('O Brasil ganhou a copa de ' + copaBrasil[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var fruta = 0; fruta < frutas.length; fruta++) {
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'Pera') {
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array

var ultimaFruta = frutas[frutas.length - 1];