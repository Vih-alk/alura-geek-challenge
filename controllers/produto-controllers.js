const novoProduto = (nome, imagemURL, id, preco) => {
   const card = document.createElement("div")
   const conteudo = `
   <div class= "produto">
        <img src="${imagemURL}" alt"">
        <h1 class="produto-nome">${nome}</h1>
        <p class="produto-preco">${preco}</p>
        <a class="ver-produto">${}</a>
   </div>
   `
   card.innerHTML = conteudo

   return card
}

const produtos = document.querySelector("[data-produto]")