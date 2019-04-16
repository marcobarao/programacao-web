//Exercicio 07

var diametro = prompt("Digite o diametro da lata");
diametro = parseFloat(diametro);
var altura = prompt("Digite a altura da lata");
altura = parseFloat(altura);
var raio = diametro / 2;
var volume = Math.PI * Math.pow(raio, 2) * altura; 
alert("O volume desse cilindro é " + volume);
