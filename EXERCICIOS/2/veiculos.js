const nameV1 = prompt("Insira o nome do primeiro veículo:")
const nameV2 = prompt("Insira o nome do segundo veículo:")
const speedV1 = parseFloat(prompt("Insira a velocidade do primeiro veículo:"))
const speedV2 = parseFloat(prompt("Insira a velocidade do segundo veículo:"))

if (speedV1 > speedV2) {
    alert("O primeiro veículo '" + nameV1 + "' é mais rápido que o segundo.")
} else if (speedV1 < speedV2) {
    alert("O segundo veículo '" + nameV2 + "' é mais rápido que o primeiro.")
} else if (speedV1 === speedV2) {
    alert("Ambos possuem a mesma velocidade")
} else {
    alert("Alguma informação está incorreta!")
}