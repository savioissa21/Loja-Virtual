let carrinho = []; // Array que irá armazenar os itens no carrinho
let total = 0; // Variável para armazenar o valor total do carrinho

// Função para abrir/fechar o carrinho
function toggleCarrinho() {
    const carrinhoElement = document.getElementById("carrinho");
    carrinhoElement.style.display = carrinhoElement.style.display === "none" || carrinhoElement.style.display === "" ? "block" : "none";
}

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco }); // Adiciona o item ao array do carrinho
    total += preco; // Adiciona o preço ao total
    atualizarCarrinho(); // Atualiza a exibição do carrinho
    alert(`${produto} adicionado ao carrinho!`); // Alerta para o usuário
}

// Função para atualizar o carrinho visualmente
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById("itens-carrinho");
    itensCarrinho.innerHTML = ""; // Limpa o carrinho antes de atualizar

    // Para cada item no carrinho, cria um novo elemento no DOM
    carrinho.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item-carrinho");
        itemElement.innerHTML = `
            <span>${item.produto} - R$${item.preco.toFixed(2)}</span>
            <button onclick="removerDoCarrinho(${index})">Remover</button>
        `;
        itensCarrinho.appendChild(itemElement);
    });

    document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`; // Atualiza o total do carrinho
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
    total -= carrinho[index].preco; // Subtrai o preço do item do total
    carrinho.splice(index, 1); // Remove o item do array
    atualizarCarrinho(); // Atualiza a exibição do carrinho
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!"); // Verifica se o carrinho está vazio
    } else {
        alert("Compra finalizada! Obrigado pela preferência."); // Alerta de compra finalizada
        carrinho = []; // Limpa o carrinho
        total = 0; // Zera o total
        atualizarCarrinho(); // Atualiza a exibição
        toggleCarrinho(); // Fecha o carrinho
    }
}
