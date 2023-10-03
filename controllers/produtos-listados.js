
import { produtoService } from "../services/produtos-service.js"

const getProducts = ( imageURL, name, price, id) => {
    const card = document.createElement("div");

    const produto = `
    <div class="produtos__items">
        <div class="produto__icones">
            <button class="btn" type"button">
                <img class="icone__deletar" src="../assets/deletar.png" alt="deletar" />
            </button>

            <a href="../pages/adicionar-produtos.html?id=${id}">
                <button class="btn">
                    <img class="icone__editar" src="../assets/editar.png" alt="editar" />
                </button>
            </a>
        </div>
        <div class= "produto__box">
            <img src="${imageURL}" alt="imagem"  class="produto__img"/>
            <h1 class="produto__item"> ${name} </h1>
            <p class="produto__preco">${price} </p>
        </div>
    </div>
    `;
    card.innerHTML = produto;
    card.dataset.id = id;
    return card;
};

const produtos = document.querySelector("[data-produto]");

produtos.addEventListener("click", async (evento) => {
    let botaoDeletar = evento.target.className === "icone__deletar";
    if(botaoDeletar) {
        const produtoItem = event.target.closest("[data-id]");
        let id = produtoItem.dataset.id;
        produtoService
        .deletarProduto(id)
        .then((resposta) => {
            produtoItem.remove();
            console.log(resposta);
        })
        .catch((error) => console.log(error));
    }
});

const render = async () => {
    try {
        const produtosListados = await produtoService.produtosListados();

        produtosListados.forEach((produto) => {
            produtos.appendChild(
                getProducts( produto.imageURL, produto.name, produto.price, produto.id )
            )
        });
    } catch (error) {
        console.log(error)
    }
};

render();