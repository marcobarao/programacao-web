var numero1 = prompt("Digite o primeiro numero");
var numero2 = prompt("Digite o segundo numero");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (numero1 === numero2) {
  alert("Os numeros são iguais");
} else {
  alert("Os numeros são diferentes");
}

if (numero1 > numero2) {
  alert("O primeiro numero é maior que o segundo");
} else if (numero2 > numero1) {
  alert("O segundo numero é maior que o primeiro");
}

if (numero1 < 0) {
  alert("O primeiro numero é negativo");
}

if (numero2 < 0) {
  alert("O segundo numero é negativo");
}

if (numero1 % numero2 !== 0) {
  alert("Há resto de divisão do primeiro numero pelo segundo");
}
