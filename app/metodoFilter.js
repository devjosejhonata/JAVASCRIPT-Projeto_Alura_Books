
// Seleciona todos os botões de filtro
const botoes = document.querySelectorAll('.btn');

// Adiciona um evento de clique a cada botão para filtrar livros
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// Função para filtrar os livros de acordo com a categoria selecionada
function filtrarLivros() {
    
    // Obtém o botão clicado pelo ID
    const elementoBtn = document.getElementById(this.id);

    // Captura o valor da categoria do botão
    const categoria = elementoBtn.value;

    // Filtra os livros com base na categoria ou disponibilidade
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

    // Exibe os livros filtrados na tela
    exibirOsLivrosNaTela(livrosFiltrados);

    // Se a categoria for 'disponivel', calcula e exibe o valor total dos livros disponíveis
    if(categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

// Filtra os livros pela categoria fornecida
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

// Filtra apenas os livros que estão disponíveis (quantidade > 0)
function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

// Exibe o valor total dos livros disponíveis na tela
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
      <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
      </div>
    `;
}
