const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    let elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">R$${valorTotal}</span></p>
    </div>
    `
}