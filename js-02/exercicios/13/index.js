var maxH = 0;
var maxName = "";

for (var i = 0; i < 5; i++) {
  var name = prompt("Digite o nome do atleta");
  var h = prompt("Digite a altura do atleta");
  h = parseFloat(h);

  if (i === 0 || h > maxH) {
    maxName = name;
    maxH = h;
  }
}

alert(`O atleta ${maxName} tem a maior altura que é de ${maxH}`);
