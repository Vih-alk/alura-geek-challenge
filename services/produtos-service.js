//GET

const produtosListados = () => {
    return fetch('http://localhost:3000/produto')
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

}


const verProduto = (id) => {
    return fetch(`http://localhost:3000/produto/${id}`)
    .then((resposta) => {
        return resposta.json();
    })
}

//POST

const criaProduto = ( imageURL, name, price, description ) => {
    return fetch('http://localhost:3000/produto', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        imageURL,
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


//DELETE

const deletarProduto = async (id) => {
    return await fetch(`http://localhost:3000/produto/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            
        },
    })
}

//PATCH

const editarProduto = async (imageURL, id, name, price, description) => {
    return fetch(`http://localhost:3000/produto/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            imageURL,
            name,
            price,
            description
        }),
    })
    .then((resposta) => {
        return resposta.json();
    })
    .catch((error) => console.log(error))
}

    

export const produtoService = {
    produtosListados,
    criaProduto,
    verProduto,
    deletarProduto,
    editarProduto
}


