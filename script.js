const nome = document.getElementById("nome")
const ddd = document.getElementById("ddd")
const telefone = document.getElementById("telefone")
const form = document.getElementById("form")
const tbody = document.getElementById("tbody")

form.addEventListener("submit",(event) => {
    event.preventDefault()
    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>(${ddd.value}) ${telefone.value}</td>`

    tbody.innerHTML += linha

    
})