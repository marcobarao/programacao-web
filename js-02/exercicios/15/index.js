var res = "";
do {
  res = prompt("Digite uma palavra iniciando com P ou que contenha F");
} while(/$p+/gi.test(res) || /f/gi.test(res));
