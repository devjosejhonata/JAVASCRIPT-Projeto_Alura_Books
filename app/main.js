
// Array para armazenar a lista de livros
let livros = [];

// Endpoint da API que fornece os dados dos livros
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

// Chama a função para buscar os livros da API ao carregar o script
getBuscarLivrosDaAPI();

// Função assíncrona que busca os dados dos livros da API
async function getBuscarLivrosDaAPI() {
    
    // Faz a requisição HTTP para o endpoint da API
    const res = await fetch(endpointDaAPI);
    
    // Converte a resposta da API para JSON e armazena no array de livros
    livros = await res.json();
    
    // Aplica um desconto aos livros e retorna a nova lista com desconto aplicado
    let livrosComDesconto = aplicarDesconto(livros);

    // Exibe os livros na tela utilizando a lista de livros com desconto
    exibirOsLivrosNaTela(livrosComDesconto);
}
