const titulo = document.getElementById("titulo")
const nomeInput = document.getElementById("nome")
const email = document.getElementById("email")
const tell = document.getElementById("tell")
const resultado = document.getElementById("resultado")

console.log(titulo.textContent)

titulo.textContent = "Senai Cotia 2023"

function salvar() {

    resultado.textContent = nomeInput.value
    //resultado1.textContent = email.value
    //resultado2.textContent = telsl.value

}

function salvar1() {
    resultado1.textContent = email.value
}

function salvar2() {
    resultado2.textContent = tell.value
}