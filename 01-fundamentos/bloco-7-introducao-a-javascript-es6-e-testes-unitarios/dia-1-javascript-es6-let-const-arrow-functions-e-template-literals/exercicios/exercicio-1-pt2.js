const fatorial = n => {
  let resultado = 1;
  for (let i = n; i >= 1; i -= 1){
    resultado *= i
  }
  return resultado
}

console.log(fatorial(4));

//bonus

const recursivo = n => n === 0 ? 1 : n * (recursivo(n-1));

console.log(recursivo(4));