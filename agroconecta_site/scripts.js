const produtos = [
    {
        nome: "Tomate Orgânico",
        preco: "R$ 6,00 / kg",
        imagem: "https://images.unsplash.com/photo-1607274137341-9948b35a3962?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
        nome: "Mel Puro Artesanal",
        preco: "R$ 20,00 / pote",
        imagem: "https://images.unsplash.com/photo-1600166898678-17897f1c6ad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
        nome: "Queijo de Minas",
        preco: "R$ 30,00 / unidade",
        imagem: "https://images.unsplash.com/photo-1588412555878-83d0a19e5a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
        nome: "Alface Fresca",
        preco: "R$ 3,00 / unidade",
        imagem: "https://images.unsplash.com/photo-1582515073490-daf2e1d70000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    }
];

function carregarProdutos() {
    const secaoProdutos = document.getElementById('produtos');

    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
        `;

        secaoProdutos.appendChild(divProduto);
    });
}

document.addEventListener('DOMContentLoaded', carregarProdutos);
