// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let asterisco = '*'
let coluna = ''
let linha = 5

for (let index = 0; index <= linha; index += 1) {
        console.log(coluna);
        coluna = coluna + asterisco;
    }