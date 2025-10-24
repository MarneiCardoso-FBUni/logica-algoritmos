
// alert("Hello World, JavaScript!");

// --- Variáveis ---
/*
    int => inteiro ex: 5  8  9  23
    float => decimal ex: 0.2  1.75  3.14
    char => caractere ex: 'a'  'M'  '@'  '23
    string => texto ex: "Olá, Mundo!"  "Meu Nome é: João"
    bool => booleano ex: true  false
*/

// Em JavaScript não temos so tipos explicitos
var valor = 78;
let contador = 0;
const valorPi = 3.14;

// Tudo deve ser CONST a não ser que precise LET

// Cria as variáveis
const nome = "Marnei";
let sobrenome;

// Atribui os valores
sobrenome = "Cardoso";

// Reatribui o valor
sobrenome = 48;

// console.log("Olá, " + nome + " " + sobrenome);

// Comentário

// Escreva um algoritmo que receba dois valores, some os valores e mostre o resultado

// 1. Criação das Variáveis
let primeiroValor;
let segundoValor;
let resultado;

// 2. Atribuir valores (ENTRADA)
primeiroValor = 5;
segundoValor = 4;

// 3. Cálculos e Validações (PROCESSAMENTO)
resultado = primeiroValor + segundoValor;

// 4. Mostra o resultado (SAÍDA)
// console.log(resultado);
// console.log("Resultado: " + resultado);

console.log("O resultado da soma de 5 + 4 é 9");

// Concatenação de Valores
console.log("O resultado da soma de " + primeiroValor + " + " + segundoValor + " é " + resultado);

// Template String
console.log(`O resultado da soma de ${primeiroValor} + ${segundoValor} é ${resultado}`);

