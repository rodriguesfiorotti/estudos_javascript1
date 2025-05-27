let numero = parseFloat(prompt("Informe um número:"))
let resultado = "A tabuada de " + numero + " é:\n"

for (let indice = 0; indice <=20; indice++) {
    resultado += numero + " x " + indice + " = " + (numero * indice) + "\n"
}

alert(resultado)