var soma = 0, numero = 0;

for (var i = 0; i < 10; i++) {
    numero = prompt("Digite um numero");
    numero = parseInt(numero);

    soma += numero;
}

alert("A soma dos números é " + soma);