let candidato = "azul"

switch (candidato) {
  case "aprovado":
    console.log("Parabéns, você foi aprovado!");
    break;


  case "lista":
    console.log("Você está na lista de espera!");
    break;
    

  case "reprovado":
    console.log("Infelizmente não foi dessa vez. Continue tentando!");
    break;

  default:
    console.log("não se aplica");

}
