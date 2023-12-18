const buscaInput = document.getElementById('busca');
const tabelaCadastros = document.getElementById('tabelaCadastros');
const pessoaFisicaCheckbox = document.getElementById('pessoaFisica');
const pessoaJuridicaCheckbox = document.getElementById('pessoaJuridica');
const totalClientes = document.getElementById('totalClientes');

function atualizarTotalClientes() {
  const linhasVisiveis = Array.from(tabelaCadastros.getElementsByTagName('tr')).filter(linha => linha.style.display !== 'none');
  totalClientes.textContent = `Total de Clientes: ${linhasVisiveis.length}`;
}

function filtrarRegistros() {
  const termoBusca = buscaInput.value.toLowerCase();
  const linhas = tabelaCadastros.getElementsByTagName('tr');
  const filtroPessoaFisica = pessoaFisicaCheckbox.checked;
  const filtroPessoaJuridica = pessoaJuridicaCheckbox.checked;
  
  Array.from(linhas).forEach(function(linha) {
    const dados = linha.getElementsByTagName('td');
    const tipo = dados[1].innerText.toLowerCase();
    const texto = dados[2].innerText.toLowerCase(); // Nome ou Documento

    const correspondeTermo = texto.includes(termoBusca);
    const correspondeTipo = (filtroPessoaFisica && tipo.includes('pessoa física')) || (filtroPessoaJuridica && tipo.includes('pessoa jurídica'));

    if (correspondeTermo && correspondeTipo) {
      linha.style.display = '';
    } else {
      linha.style.display = 'none';
    }
  });

  atualizarTotalClientes();
}

buscaInput.addEventListener('input', filtrarRegistros);
pessoaFisicaCheckbox.addEventListener('change', filtrarRegistros);
pessoaJuridicaCheckbox.addEventListener('change', filtrarRegistros);

// Atualiza o total de clientes inicialmente
atualizarTotalClientes();