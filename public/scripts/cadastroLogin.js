document.getElementById('cadastro-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('cadastro-email').value;
    const nome = document.getElementById('cadastro-nome').value;
    const senha = document.getElementById('cadastro-senha').value;
    const confirmarSenha = document.getElementById('cadastro-confirmar-senha').value;
  
    // Verificar se os campos obrigatórios estão preenchidos
    if (!email || !nome || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
  
    // Verificar se as senhas coincidem
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return false;
    }
  
    // Aqui você pode enviar os dados do formulário para o servidor para cadastro
    // Por exemplo: fetch('URL de cadastro', { method: 'POST', body: JSON.stringify({ email, nome, senha }) });
  
    alert('Cadastro realizado com sucesso!');
    // Redirecionar para a rota de login após o cadastro bem-sucedido
    window.location.href = '/login';
});

const tipoCadastroRadio = document.querySelectorAll('input[name="tipo-cadastro"]');
const campoRazaoSocial = document.getElementById('campo-razao-social');
const campoConfirmarCNPJ = document.getElementById('cadastro-confirmar-cnpj'); // Corrigido o ID

tipoCadastroRadio.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'pessoa-fisica') {
            campoRazaoSocial.style.display = 'none';
            campoConfirmarCNPJ.style.display = 'none';
        } else if (this.value === 'pessoa-juridica') {
            campoRazaoSocial.style.display = 'block';
            campoConfirmarCNPJ.style.display = 'block';
        }
    });
});