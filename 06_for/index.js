//    inicialização ; condição ; finalização 

for (let indice = 0; indice <= 3; indice++) {
    alert("Indice = " + indice)
}


// A opções de inicialização, indice e finalização são opcionais, podendo ser tratadas dentro do laço, e informadas nenhuma ou apenas algumas delas.

// Exemplo:

let i = 0

for ( ; ; ) {
    console.log("Indice = " + i)
    i++
    console.log("Indice = " + i)
    break
    i++  //Ele não vai chegar aqui por causa do break que vai encerrar o laço.
}


// Usando para apresentar cada letra de um nome:

let nome = "João"

for (let i2 = 0; i2 < nome.length; i2++) {
    console.log(nome[i2])
}

