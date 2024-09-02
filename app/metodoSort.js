
// Seleciona o botão de ordenar por preço
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');

// Adiciona um evento de clique ao botão para ordenar os livros por preço
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco);

// Função para ordenar os livros por preço
function ordenarLivrosPorPreco() {
    
    // Ordena a lista de livros pelo preço de forma ascendente
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    // Exibe os livros ordenados na tela
    exibirOsLivrosNaTela(livrosOrdenados);
}
