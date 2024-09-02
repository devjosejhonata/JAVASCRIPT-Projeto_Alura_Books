
// Função para aplicar desconto a todos os livros
function aplicarDesconto(livros) {
    
    // Percentual de desconto
    const desconto = 0.3;

    // Utiliza o método map para aplicar o desconto a cada livro
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    });

    // Retorna a nova lista de livros com desconto aplicado
    return livrosComDesconto;
}
