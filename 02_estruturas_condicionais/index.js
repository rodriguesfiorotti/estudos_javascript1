const idade = prompt("Informe a sua idade:")


if (idade >= 18) {
    alert("Você é maior de idade")
} else if (idade > 12) {
    alert("Você é menor de idade")
} else if (idade > 4) {
    alert("Você é criança")
} else {
    alert("Você é um bebê ou inseriu um valor errado kkk")
}


// Operador Ternário: 

alert("Vamos fazer a condição ternária agora...")

const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

alert(
    "A operação era a seguinte:\n\n" +
    '(6 === 6) ? "Verdadeiro" : "Falso"' +
    "\n\nResultado: " + resultado
)


const resultado2 = (6 !== 6) ? "Verdadeiro" : "Falso"

alert(
    "Outro Exemplo:\n\n" +
    '(6 !== 6) ? "Verdadeiro" : "Falso"' +
    "\n\nResultado: " + resultado2
)