var palavra = prompt("Digite uma palavra");
var i = 1;

while (i < palavra.length) {
  palavra = `${palavra.substr(0, i)}-${palavra.substr(i)}`;
  i += 2;
}

alert(palavra);
