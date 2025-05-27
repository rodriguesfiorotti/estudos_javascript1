let palavra = prompt("Informe uma palavra:")
let palindromo = ""

for (let indice = (palavra.length - 1); indice >= 0; indice--) {
    palindromo += palavra[indice]
}

if (palavra === palindromo) {
    alert(palavra + " é um palíndromo!!")
} else {
    alert("Esta palavra NÃO é um palíndromo, veja:\n\n" + palavra + " !== " + palindromo)
}