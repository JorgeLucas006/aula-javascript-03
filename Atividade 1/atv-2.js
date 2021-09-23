/*
2) Cria variável para armazenar a resposta da pergunta: você já terminou o ensino médio?

a) Se for verdade, escreva a mensagem no console: Poxa, que legal!.
b) Se for mentira, escreva a mensagem no console: Falta pouco! Logo você termina.
*/

var resp = true;

function ensinoMedio(){
  if(resp){
    return console.log("Poxa, que legal!")
  }else {
    return console.log("Falta pouco! Logo você termina.")
  }
}

ensinoMedio()

var resp = false;

ensinoMedio()