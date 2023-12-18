const buscaInput = document.getElementById('busca');
const tabelaRegistros = document.getElementById('tabelaRegistros');
const entradaCheckbox = document.getElementById('entrada');
const saidaCheckbox = document.getElementById('saida');
const totalRegistros = document.getElementById('totalRegistros');
const totalBalanco = document.getElementById('totalBalanco');

function atualizarTotalRegistros() {
    const linhasVisiveis = Array.from(tabelaRegistros.getElementsByTagName('tr')).filter(linha => linha.style.display !== 'none');
    totalRegistros.textContent = `Total de Registros: ${linhasVisiveis.length}`;
}

function atualizarTotalBalanco() {
    let totalEntradas = 0;
    let totalSaidas = 0;

    const linhasVisiveis = Array.from(tabelaRegistros.getElementsByTagName('tr')).filter(linha => linha.style.display !== 'none');

    linhasVisiveis.forEach(function(linha) {
        const valores = linha.getElementsByTagName('td');
        const valor = parseFloat(valores[0].innerText);

        if (valores[2].innerText === 'Entrada') {
            totalEntradas += valor;
        } else if (valores[2].innerText === 'Saída') {
            totalSaidas += valor;
        }
    });

    totalBalanco.textContent = `Total de Entradas: R$ ${totalEntradas.toFixed(2)} | Total de Saídas: R$ ${totalSaidas.toFixed(2)} | Balanço Total: R$ ${(totalEntradas - totalSaidas).toFixed(2)}`;
}

function filtrarRegistros() {
    const termoBusca = buscaInput.value.toLowerCase();
    const linhas = tabelaRegistros.getElementsByTagName('tr');
    const filtroEntrada = entradaCheckbox.checked;
    const filtroSaida = saidaCheckbox.checked;

    Array.from(linhas).forEach(function(linha) {
        const dados = linha.getElementsByTagName('td');
        const tipoMovimento = dados[2].innerText.toLowerCase();

        const correspondeBusca = termoBusca === '' ||
            dados[0].innerText.toLowerCase().includes(termoBusca) ||
            dados[1].innerText.toLowerCase().includes(termoBusca) ||
            tipoMovimento.includes(termoBusca) ||
            dados[3].innerText.toLowerCase().includes(termoBusca) ||
            dados[4].innerText.toLowerCase().includes(termoBusca);

        const correspondeTipo = (filtroEntrada && tipoMovimento.includes('entrada')) || (filtroSaida && tipoMovimento.includes('saída'));

        if (correspondeBusca && correspondeTipo) {
            linha.style.display = '';
        } else {
            linha.style.display = 'none';
        }
    });

    atualizarTotalRegistros();
    atualizarTotalBalanco();
}

buscaInput.addEventListener('input', filtrarRegistros);
entradaCheckbox.addEventListener('change', filtrarRegistros);
saidaCheckbox.addEventListener('change', filtrarRegistros);

// Atualiza o total de registros e o balanço inicialmente
atualizarTotalRegistros();
atualizarTotalBalanco();