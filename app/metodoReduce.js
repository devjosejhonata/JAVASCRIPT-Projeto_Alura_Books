
// Função para calcular o valor total de todos os livros disponíveis
function calcularValorTotalDeLivrosDisponiveis(livros) {
    
    // Utiliza o método reduce para somar os preços dos livros
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
