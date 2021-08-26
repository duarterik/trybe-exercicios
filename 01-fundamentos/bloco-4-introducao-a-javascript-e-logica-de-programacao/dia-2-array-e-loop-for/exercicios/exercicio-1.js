//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// // Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// //let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     sum += numbers[index];
// }

//console.log(sum);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

for (let index = 0; index < numbers.length; index += 1) {
    media += numbers[index] 
}

let mediaAritmetica = media / numbers.length 

console.log(mediaAritmetica);



// //Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let number = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     number += numbers[index]
// }

// number = number / numbers.length;

//     if (number > 20) {
//         console.log("valor maior que 20")
//     } else {
//         console.log("valor menor ou igual a 20")
//     }

// //Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maiorValor = numbers[0];

// for (index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > maiorValor) {
//       maiorValor = numbers[index];
//     }
// }

// console.log(maiorValor);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let impares = 0 

// for (index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 != 0) {
//       impares += 1;
//     }
// }

//     if (impares == 0) {
//         console.log('nenhum valor ímpar encontrado')
//     } else {
//         console.log(impares);
//     }

// let menorValor = numbers[0];

// for (index = 0; index < numbers.length; index += 1){
//     if (numbers[index] < menorValor) {
//         menorValor = numbers[index];
//     }
// }

// console.log(menorValor);