let nome = prompt('Informe seu primeiro nome:')
let sobrenome = prompt('Informe seu sobrenome:')
let campoDeEstudo = prompt('Informe seu campo de estudo:')
let anoNascimento = prompt('Informe o ano de seu nascimento:')
let anoAtual = new Date().getFullYear();

let nomeCompleto = nome + " " + sobrenome
let idade = anoAtual - parseFloat(anoNascimento) 

console.log("Nome Completo: " + nomeCompleto)
console.log("Campo de Estudos: " + campoDeEstudo)
console.log("Idade: " + idade + " anos")

alert("As informações vão aparecer no Console (Precione F12 para visualizar) ")

