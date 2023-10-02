import { produtoService } from "../services/produtos-service.js";

const novoProduto = ( imageURL, alt, name, price, id ) => {
   const card = document.createElement("div")
   
   const conteudo = `
   
   <div class= "produto__box">
        <img src="${imageURL}" alt"${alt}" class= "produto__img">
        <h1 class="produto-nome" class= "produto__item">${name}</h1>
        <p class="produto-preco" class= "produto__preco">${price}</p>
        <a class="ver-produto" href = "/pages/produto.html?id${id}">Ver produto</a>
   </div>
   `
  card.innerHTML = conteudo

   return card

};

const produtos = document.querySelector('[data-produto]');

const render = async () => {
   try {
      const produtosListados = await produtoService.produtosListados()
      produtosListados.forEach((elemento) => {
         produtos.appendChild(
            novoProduto(
               elemento.imageURL,
               elemento.alt,
               elemento.name,
               elemento.price,
               elemento.id
            )
         )
      });
   } catch (error) {
      console.log(error)
   }
}

render();