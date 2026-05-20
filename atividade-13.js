// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================
let LerTeclado = require('readline-sync')

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
// console.log(matriz.length)
// console.log(matriz[0])
// console.log(matriz[1][1])

// console.log(matriz.length);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
// let soma = 0;
// for (let i = 0; i < mtri.length; i++) {
//   for (let j = 0; j < mtri[i].length; j++) {
//     soma += mtri[i][j];
//   }
// }

// console.log(`${soma}`);



console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
  //  const m = [
  //    [12,  7, 25],
  //    [ 3, 18,  9],
  //    [31, 14, 22],
  //  ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:
// let maior = m[0][0]
// let menor = m[0][0]

// let posMaior = [0, 0]
// let posMenor = [0, 0]

// for (let i = 0; i < m.length; i++) {
//   for (let j = 0; j < m[i].length; j++) {

//     if (m[i][j] > maior) {
//       maior = m[i][j]
//       posMaior = [i, j]
//     }

//     if (m[i][j] < menor) {
//       menor = m[i][j]
//       posMenor = [i, j]
//     }
//   }
// }

// console.log("Maior valor:", maior)
// console.log("Posição do maior:", posMaior)

// console.log("Menor valor:", menor)
// console.log("Posição do menor:", posMenor)


// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
// const matriz = [
//   [12,  7, 25],
//   [ 3, 18,  9],
//   [31, 14, 22],
// ];
// console.log("Matriz:");
// console.table(matriz);


// for (let i = 0; i < matriz.length; i++) {
//   let somaLinha = 0;

//   for (let j = 0; j < matriz[i].length; j++) {
//     somaLinha += matriz[i][j];
//   }

//   console.log(`Linha ${i}: ${somaLinha}`);
// }


// for (let j = 0; j < matriz[0].length; j++) {
//   let somaColuna = 0;

//   for (let i = 0; i < matriz.length; i++) {
//     somaColuna += matriz[i][j];
//   }

//   console.log(`Coluna ${j}: ${somaColuna}`);
// }


// let somaDiagonal = 0;

// for (let i = 0; i < matriz.length; i++) {
//   somaDiagonal += matriz[i][i];
// }

// console.log(`Diagonal principal: ${somaDiagonal}`);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:
let linha = LerTeclado.questionInt('Quantas linha vai ter? ')
let coluna = LerTeclado.questionInt('Vai ter quantas colunas? ')

let matriz = [];



for (let i = 0; i < linha; i++) {
  matriz[i] = [];


for(let j = 0; j < coluna; j++) {
  matriz[i][j] = LerTeclado.questionInt(`Digite m[${i}][${j}]:`)
}
}




console.table(matriz);
