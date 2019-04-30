var res = "";
do {
  if (res) {
    alert("Apenas aceitarei palavra com 6 caracteres");
  }

  res = prompt("Digite uma palavra iniciando com P ou que contenha F");
} while(/$p+/gi.test(res) || /f/gi.test(res));
