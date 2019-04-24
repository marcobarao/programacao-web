var resultado = "";
var numero = prompt("Digite um numero para descobrir os divisores");
numero = parseInt(numero);
var i = numero

while(i > 0) {
    if (numero % i === 0) {
        resultado += i;
        if (i > 1) {
            resultado +=  ", ";
        }
    }

    i--;
}

alert(resultado);
