//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let valor = [];

for (let index = 1; index <= 25; index += 1) {
    valor.push(index);
}

console.log(valor);
for (let index = 0; index < valor.length; index += 1) {
    console.log(valor[index] / 2);
  };
