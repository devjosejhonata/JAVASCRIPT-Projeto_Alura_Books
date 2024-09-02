
// Elemento do DOM onde os livros serão inseridos
const elementoParaInserirLivros = document.getElementById('livros');

// Elemento do DOM onde o valor total dos livros disponíveis será mostrado
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

// Função para exibir os livros na tela
function exibirOsLivrosNaTela(listaDeLivros) {

    // Limpa o conteúdo dos elementos antes de inserir novos dados
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
    elementoParaInserirLivros.innerHTML = '';

    // Itera sobre a lista de livros e cria o HTML para cada livro
    listaDeLivros.forEach(livro => {
        
        // Verifica a disponibilidade do livro
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';

        // Adiciona o HTML do livro ao elemento
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags"><span class="tag">${livro.categoria}</span></div>
        </div>
        `;
    });
}

/*
Função alternativa que verifica a disponibilidade do livro (comentada porque está inativa no código)
function verificarDisponibilidadeDoLivro(livro) {
    if (livro.quantidade > 0) {
        return 'livro__imagens';
    } else {
        return 'livro__imagens indisponivel';
    }
}
*/
