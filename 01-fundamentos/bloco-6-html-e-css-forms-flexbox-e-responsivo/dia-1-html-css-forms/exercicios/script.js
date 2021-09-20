const estadoEscolhido = document.querySelector('#input-estado');
const estadosDoBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 
'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

function findState() {
  for(let index = 0; index < estadosDoBrasil.length; index += 1) {
    let select = document.createElement('option')
    estadoEscolhido.appendChild(select).innerText = estadosDoBrasil[index]
    estadoEscolhido.appendChild(select).value = estadosDoBrasil[index]
  }
}
findState();

