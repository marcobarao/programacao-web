var aleatorio = Math.ceil(Math.random() * 10);

do {
  var numero = prompt("Digite um numero entre 1 e 10 e adivinhe o numero");
  numero = parseInt(numero);

  if(numero < 1 || numero > 10) {
    alert("Apenas digite numero entre 1 e 10");
  } else if(numero < aleatorio) {
    alert("O numero digitado é menor que o numero aleatorio");
  } else if(numero > aleatorio) {
    alert("O numero digitado é maior que o numero aleatorio");
  }
} while((numero < 1 || numero > 10) || aleatorio !== numero);

alert(`Você adivinhou!! ${numero} = ${aleatorio}`);
