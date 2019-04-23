var numero1 = prompt("Digite o primeiro numero");
var numero2 = prompt("Digite o segundo numero");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

if (numero1 > numero2) {
  alert("O primeiro numero é maior que o segundo");
} else {
  alert("O primeiro numero não é maior que o segundo");
}
