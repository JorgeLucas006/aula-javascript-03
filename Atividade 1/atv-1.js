/*
1) Cria variável para armazenar a resposta da pergunta: você é maior de 18 anos?

a) Se for maior ou igual a 18 anos, escreva a mensagem no console: Que legal! Você já pode ter a carteira de habilitação.

b) Se for menor de 18 anos, escreva a mensagem no console: Poxa, que pena! Você ainda não pode ter a carteira de habilitação.
 */
var idade = 10;

function maioridadde(){
  if(idade >= 18){
    return console.log("Que legal! Você já pode ter a carteira de habilitação.")
  }else {
    return console.log("Poxa, que pena! Você ainda não pode ter a carteira de habilitação.")
  }
}

maioridadde()

idade = 19;

maioridadde()
