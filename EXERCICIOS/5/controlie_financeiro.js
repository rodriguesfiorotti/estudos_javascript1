let opcao
let totalConta

do {
    totalConta = parseFloat(prompt("Informe a quantidade inicial de dinheiro:"))
} while (isNaN(totalConta))

do {
    opcao = prompt(
        "Total na Conta: " + totalConta + 
        "\n  Selecione uma opção:" +
        "\n      1. Adicionar Dinheiro" +
        "\n      2. Remover Dinheiro" +
        "\n      3. Encerrar\n")

    switch (opcao) {
        case "1":
            totalConta += parseFloat(prompt("Infome a quantidade que quer adicionar:"))
            break
        case "2":
            totalConta -= parseFloat(prompt("Infome a quantidade que quer remover:"))
            break
        case "3": 
            alert("Encerrando o programa...")
            break
        default:
            alert("Opção Inválida!")
            break
    }
} while (opcao !== "3")