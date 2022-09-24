var possuiGraduacao = true;

if(possuiGraduacao) {
    console.log('Possui graduacao');
} else {
    console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
 console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
 console.log('Possui graduação, mas não possui doutorado');
} else {
 console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

var corFavorita = 'Azul';

switch (corFavorita) {
 case 'Azul':
    console.log('Olhe para o céu.');
    break;
 case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
 case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
 default:
    console.log('Feche os olhos');
}


//Exercícios

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var minhaIdade = 21;
var idadeMae = 42;

if(minhaIdade > idadeMae) {
    console.log('É maior');
} else if(minhaIdade === idadeMae) {
    console.log('É igual');
} else {
    console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); //3


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; //false

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil possui mais habitantes.');
} else if (brasil == china) {
    console.log('Mesma quantidade de habitantes.');
} else {
    console.log('China possui mais habitantes.');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso');
} //false


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão');
} else {
 console.log('Falso');
} //Cão