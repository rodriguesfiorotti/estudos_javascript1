const touristName = prompt("Informe o seu nome:")
let cities = " Nenhuma Cidade"
let newCity = prompt("Você já visitou alguma cidade?\n1. Sim\n2. Não")
let citiesQtd = 0

while (newCity === "1") {
    (cities === " Nenhuma Cidade") 
    ? 
    cities = "\n" + prompt("Informe o nome da cidade visitada:")
    :
    cities += "\n" + prompt("Informe o nome da cidade visitada:")

    newCity = prompt("Você visitou outra cidade?\n1. Sim\n2. Não")

    if (newCity === "1") {
        cities += ", "
    }

    citiesQtd++
}

alert(
    "O Turista: " + touristName +
    "\nVisitou: " + citiesQtd + " cidades\nSendo elas:"
    + cities
)