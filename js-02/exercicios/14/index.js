var quantidade = 0;
var soma = 0;
var maxH = 0;
var maxName = "";

do {
  var name = prompt("Digite o nome do atleta");
  var h = prompt("Digite a altura do atleta");
  h = parseFloat(h);

  if (quantidade === 0 || h > maxH) {
    maxName = name;
    maxH = h;
  }

  soma += h;
  quantidade++;

  var res = prompt("Deseja continuar? (S/N)");
} while (res === "S" || res === "s");

var media = soma / quantidade;

alert(`O atleta ${maxName} tem a maior altura que é de ${maxH} e a media de altura é de ${media}`);
