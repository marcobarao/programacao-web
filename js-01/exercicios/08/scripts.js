// Exercicio 08

var horasTrabalhadas = prompt("Digite a quantidade de horas trabalhadas");
horasTrabalhadas = parseInt(horasTrabalhadas);
var valorHora = prompt("Digite o valor pago por hora");
valorHora = parseFloat(valorHora);
var total = horasTrabalhadas * valorHora;
total = total.toFixed(2);
alert("Você deve receber " + total + " reais");
