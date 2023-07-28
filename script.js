const titulo = document.getElementById("titulo")
const nomeInput = document.getElementById("nome")
const email = document.getElementById("email")
const tell = document.getElementById("tell")
const resultado = document.getElementById("resultado")
const resultado1 = document.getElementById("resultado1")
const resultado2 = document.getElementById("resultado2")

console.log(titulo.textContent)

titulo.textContent = "Senai Cotia 2023"

function salvar() {

    resultado.textContent = nomeInput.value
    resultado1.textContent = email.value
    resultado2.textContent = tell.value

}