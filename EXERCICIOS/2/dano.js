const nameC1 = prompt("Insira o nome do primeiro personagem:")
const attackC1 = parseFloat(prompt("Insira o poder de ataque dele:"))

const nameC2 = prompt("Insira o nome do segundo personagem:")
const healthC2 = parseFloat(prompt("Insira a quantidade de vída dele:"))
const defenseC2 = parseFloat(prompt("Insira a defesa dele:"))
const haveShield = parseFloat(prompt("Esse personagem possui escudo?\nInforme o número correspondente a resposta: \n\n1. Sim\n2. Não"))

let demage = 0

if (attackC1 > defenseC2 && haveShield === 2) {
    demage = attackC1 - defenseC2
} else if (attackC1 > defenseC2 && haveShield === 1) {
    demage = ((attackC1 - defenseC2) / 2)
}

alert("Foi causado " + demage + " pontos de dano.")

alert("O Personagem Defensor ficou com " + (healthC2 - demage) + " pontos de vida." )
