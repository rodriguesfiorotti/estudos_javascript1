let nome = prompt('Informe seu primeiro nome:')
let sobrenome = prompt('Informe seu sobrenome:')
let campoDeEstudo = prompt('Informe seu campo de estudo:')
let anoNascimento = prompt('Informe o ano de seu nascimento:')
let anoAtual = new Date().getFullYear();

let nomeCompleto = nome + " " + sobrenome
let idade = anoAtual - parseFloat(anoNascimento) 

alert(
    "Cadastro de Recrutas:\n" + 
    "\nNome Completo: " + nomeCompleto +
    "\nCampo de Estudos: " + campoDeEstudo + 
    "\nIdade: " + idade + " anos"
)

