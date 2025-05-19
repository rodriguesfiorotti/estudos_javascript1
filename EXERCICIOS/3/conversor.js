const metersValue = parseFloat(prompt("Informe a medida em metros:"))

const conversionOption = prompt("Escolha a unidade de medida desejada informando seu número correspondente:\n\n1. milímetro (mm)\n2. centímetro (cm)\n3. decímetro (dm)\n4. decâmetro (dam)\n5. hectômetro (hm)\n6. quilômetro (km)")

let conversionResult
let unit = "vazio"

switch (conversionOption) {
    case ("1"):
        conversionResult = metersValue * 1000
        unit = " milímetro"
        break
    case ("2"):
        conversionResult = metersValue * 100
        unit = " centímetro"
        break
    case ("3"):
        conversionResult = metersValue * 10
        unit = " decímetro"
        break
    case ("4"):
        conversionResult = metersValue / 10
        unit = " decâmetro"
        break
    case ("5"):
        conversionResult = metersValue / 100
        unit = " hectômetro"
        break
    case ("6"):
        conversionResult = metersValue / 1000
        unit = " quilômetro"
        break
    default:
        alert("Opção Inválida")
}

if (unit !== "vazio" && !(isNaN(metersValue))) {
    if (conversionResult !== 1) {
        unit += "s"
    }
    
    alert(
        metersValue
        + " metros = "
        + conversionResult
        + unit
    )
} else {
    alert("Os dados inseridos estão inválidos!")
}

