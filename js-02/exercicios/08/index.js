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
