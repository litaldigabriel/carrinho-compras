let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitarioProduto = produtoSelecionado.split('R$')[1];
    let quantidadeSelecionado = document.getElementById('quantidade');
    let valorTotal = quantidadeSelecionado.value * valorUnitarioProduto; 
    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidadeSelecionado.value}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span></section>`;
    totalGeral = totalGeral + valorTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';
    
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}