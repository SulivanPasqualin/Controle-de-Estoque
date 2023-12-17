let produtosCadastrados = [
    {
        codigo: "00001",
        nome: "Produto 1",
        categoria: "Eletrônicos",
        quantidade: 5,
        preco: 25.99
    },
    {
        codigo: "00002",
        nome: "Produto 2",
        categoria: "Alimentos",
        quantidade: 0,
        preco: 12.5
    },
    {
        codigo: "00003",
        nome: "Produto 3",
        categoria: "Vestuário",
        quantidade: 10,
        preco: 39.99
    }

];

function exibirProdutos() {
    const tabelaProdutos = document.getElementById("tabelaProdutos");
    tabelaProdutos.innerHTML = "";

    const comEstoqueCheckbox = document.getElementById("comEstoqueCheckbox");
    const semEstoqueCheckbox = document.getElementById("semEstoqueCheckbox");

    let totalProdutos = 0;

    produtosCadastrados.forEach(produto => {
        if ((comEstoqueCheckbox.checked && produto.quantidade > 0) ||
            (semEstoqueCheckbox.checked && produto.quantidade === 0) ||
            (!comEstoqueCheckbox.checked && !semEstoqueCheckbox.checked)) {

            totalProdutos++;

            const tr = document.createElement("tr");
            tr.innerHTML = `
    <td>${produto.codigo}</td>
    <td>${produto.nome}</td>
    <td>${produto.categoria}</td>
    <td>${produto.quantidade}</td>
    <td>R$ ${produto.preco.toFixed(2)}</td>
    `;
            tabelaProdutos.appendChild(tr);
        }
    });

    document.getElementById("totalProdutos").textContent = `Total de Produtos: ${totalProdutos}`;
}

window.addEventListener("load", exibirProdutos);
document.getElementById("comEstoqueCheckbox").addEventListener("change", exibirProdutos);
document.getElementById("semEstoqueCheckbox").addEventListener("change", exibirProdutos);