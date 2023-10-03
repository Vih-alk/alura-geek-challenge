import { produtoService } from "../services/produtos-service.js"

const form = document.querySelector('[data-form]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const imageURL = document.querySelector('[data-url]').value
    const name= document.querySelector('[data-nome]').value
    const price = document.querySelector('[data-preco]').value
    const description= document.querySelector('[data-descricao]').value

    produtoService.criaProduto(imageURL, name, price, description )
    .then(resposta => {
        window.location.href = '../pages/index.html'
        console.log(resposta)
    })
    .catch((error) => {
        console.log(error)
    })
})
