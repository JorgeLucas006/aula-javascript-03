/*
2) Exibir no console o resultado das seguintes validações,vamos dizer o filme que está passando no cinema de acordo com a fruta, dado o valor de fruta = laranja:

a) Se fruta for igual a banana, mostrar: O filme é Os minions.
b) Se fruta for igual a laranja, mostrar: O filme é Laranja Mecânica.
c) Se fruta for igual a maçã, mostrar: O filme é Branca de neve.
d) Se não for nenhum dos valores acima, mostrar: O cinema tá fechado.
*/

var fruta = "laranja";

function filme() {
  if (fruta == "banana") {
    return console.log("O filme é Os minions.");
  } else if (fruta == "laranja") {
    return console.log("Laranja Mecânica.");
  } else if (fruta == "maçã") {
    return console.log("Branca de neve.");
  } else {
    return console.log("O cinema tá fechado.");
  }
}

filme();