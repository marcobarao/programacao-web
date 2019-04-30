function exercicio1() {
  var result = "";

  for (var i = 2; i <= 12; i += 2) {
    result += (i + "\n");
  }

  alert(result);
}

function exercicio2() {
  var result = "";

  for (var i = 1; i <= 1000; i += 2) {
    result += i;
    if (i < 1000) {
      result += " - ";
    }
  }

  alert(result);
}

function exercicio3() {
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
}

function exercicio4() {
  var resultado = "";

  for (var i = 1; i <= 20; i++) {
      resultado += `${i} - ${i * i}\n`;
  }

  alert(resultado);
}

function exercicio5() {
  for (var i = 0; i < 5; i++) {
      var numero = prompt("Digite um numero");
      if (numero % 2 === 0) {
          alert("O número é par");
      } else {
          alert("O número é impar");
      }
  }
}

function exercicio6() {
  var resultado = 0;

  for (var i = 1; i <= 100; i++) {
      resultado += i;
  }
  
  alert("O resultado é " + resultado);
}

function exercicio7() {
  var soma = 0, numero = 0;

  for (var i = 0; i < 10; i++) {
      numero = prompt("Digite um numero");
      numero = parseInt(numero);
  
      soma += numero;
  }
  
  alert("A soma dos números é " + soma);
}

function exercicio8() {
  var resultado = "";
  var numero = prompt("Digite um numero para descobrir os divisores");
  numero = parseInt(numero);
  
  for(var i = numero; i > 0; i--) {
      if (numero % i === 0) {
          resultado += i;
          if (i > 1) {
              resultado +=  ", ";
          }
      }
  }
  
  alert(resultado);  
}

function exercicio9() {
  var palavra = ""

  do {
    if (palavra) {
      alert("Apenas aceitarei palavra com 6 caracteres");
    }
  
    var palavra = prompt("Digite uma palavra de 6 caracteres");
  } while(palavra.length !== 6);
  
  alert("Obrigado!");  
}

function exercicio10() {
  var palavra = prompt("Digite uma palavra");
  var i = 1;
  
  while (i < palavra.length) {
    palavra = `${palavra.substr(0, i)}-${palavra.substr(i)}`;
    i += 2;
  }
  
  alert(palavra);
}

function exercicio11() {
  var aleatorio = Math.ceil(Math.random() * 10);

  do {
    var numero = prompt("Digite um numero entre 1 e 10");
    numero = parseInt(numero);
  
    if (numero < 1 || numero > 10) {
      alert("Apenas digite numero entre 1 e 10");
    }
  } while((numero < 1 || numero > 10) || numero !== aleatorio);
  
  alert(`Adivinhou!! ${numero} = ${aleatorio}`);  
}

function exercicio12() {
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
}

function exercicio13() {
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
}

function exercicio14() {
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
}

function exercicio15() {
  var res = "";
  do {
    if (res) {
      alert("Apenas aceitarei palavra iniciando com P ou que contenha F");
    }
  
    res = prompt("Digite uma palavra iniciando com P ou que contenha F");

  } while(!/(^p|f)+/gi.test(res));

  alert("Obrigado!");
}
