var tabuada = 0;
var resultado = "";

do {
    tabuada = prompt("Digite qual tabuada que você deseja que calculemos");
    tabuada = parseInt(tabuada);
} while(tabuada < 1 || tabuada > 10);

for (var i = 1; i <= 10; i++) {
    resultado += `${tabuada} * ${i} = ${tabuada * i}\n`;
}

alert(resultado);