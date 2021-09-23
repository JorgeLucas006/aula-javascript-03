/*
1) Exibir no console o resultado das seguintes validações, dado os valores x = 5 e y = 7:
a) Se x for menor que y, mostrar a mensagem: Olá mundo!
b) Se x for maior que y, mostrar: Mundo, olá!
c) Se x for igual a y, mostrar: Adeus!
*/

var x = 5;
var y = 7;

function comparar(){
  if(x<y){
    return console.log("Olá mundo!")
  }else if(x>y){
    return console.log("Mundo, olá!")
  }else{
    return console.log("Adeus!")
  }
}

comparar()