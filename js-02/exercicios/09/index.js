var palavra = ""

do {
  if (palavra) {
    alert("Apenas aceitarei palavra com 6 caracteres");
  }

  var palavra = prompt("Digite uma palavra de 6 caracteres");
} while(palavra.length !== 6);

alert("Obrigado!");
