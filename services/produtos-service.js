//GET

const produtosListados = () => {
    return fetch('http://localhost:3000/produto')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error))

}

//POST

const criaProduto = ( imageURL, section, name, price, description ) => {
    return fetch('http://localhost:3000/produto', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        imageURL,
        section,
        name,
        price,
        description
    })

    })
    .then(resposta => {
        if (resposta.ok) {
         return resposta.body   
        }
        throw new Error("Não foi possível adicionar o produto.")
    })

}

export const produtoService = {
    produtosListados,
    criaProduto
}