// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let asterisco = '*'
let linha = 5
let coluna = ''

for (let index = 0; index < linha; index += 1){
    coluna = coluna + asterisco
}

for (let index = 0; index < linha; index += 1) {
        console.log(coluna)
    }
