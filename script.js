const titulo = document.getElementById("titulo")

//Inputs
const nomeInput = document.getElementById("nome")
const email = document.getElementById("email")
const tell = document.getElementById("tell")

//Outputs
const resultNome = document.getElementById("resultNome")
const resultEmail = document.getElementById("resultEmail")
const resultTell = document.getElementById("resultTell")

console.log(titulo.textContent)

titulo.textContent = "Senai Cotia 2023"

function salvar() {

    resultNome.textContent = nomeInput.value
    resultEmail.textContent = email.value
    resultTell.textContent = tell.value

}