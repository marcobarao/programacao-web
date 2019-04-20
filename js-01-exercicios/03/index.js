var numero1 = prompt("Digite o primeiro numero");
var numero2 = prompt("Digite o segundo numero");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

var soma = numero1 + numero2;

if (soma < 10) {
  alert("A soma esta na casa da unidade");
} else if (soma < 100) {
  alert("A soma esta na casa da dezena");
} else if (soma < 1000) {
  alert("A soma esta na casa da centena");
} else {
  alert("A soma esta na casa do milhar ou mais");
}
