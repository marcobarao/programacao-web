//Exercicio 04

var cotacao = prompt("Digite a cotação do dolar");
cotacao = parseFloat(cotacao);
var dolares = prompt("Digite a quantidade de doláres");
dolares = parseFloat(dolares);
var reais = cotacao * dolares;
reais = reais.toFixed(2);
alert("O valor em reais é " + reais);
