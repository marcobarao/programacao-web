var aleatorio = Math.ceil(Math.random() * 10);

do {
  var numero = prompt("Digite um numero entre 1 e 10");
  numero = parseInt(numero);

  if (numero < 1 || numero > 10) {
    alert("Apenas digite numero entre 1 e 10");
  }
} while((numero < 1 || numero > 10) || numero !== aleatorio);

alert(`Adivinhou!! ${numero} = ${aleatorio}`);
