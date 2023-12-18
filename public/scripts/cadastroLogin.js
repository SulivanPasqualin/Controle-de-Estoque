document.addEventListener('DOMContentLoaded', () => {
    const usuarioPFFields = document.getElementById('usuarioPFFields');
    const usuarioPJFields = document.getElementById('usuarioPJFields');

    const radioButtons = document.querySelectorAll('input[name="tipo_usuario"]');
    radioButtons.forEach(button => {
      button.addEventListener('change', () => {
        if (button.value === 'pf') {
          usuarioPFFields.style.display = 'block';
          usuarioPJFields.style.display = 'none';
        } else if (button.value === 'pj') {
          usuarioPFFields.style.display = 'none';
          usuarioPJFields.style.display = 'block';
        }
      });
    });

    const senhaInput = document.querySelectorAll('input[type="password"]');
    const confirmSenhaInput = document.querySelectorAll('input[placeholder="Confirme sua senha"]');

    senhaInput.forEach((senha, index) => {
      senha.addEventListener('keyup', () => {
        if (senha.value !== confirmSenhaInput[index].value) {
          confirmSenhaInput[index].style.borderColor = 'red';
        } else {
          confirmSenhaInput[index].style.borderColor = ''; // Revert to default
        }
      });
    });
  });

function cadastrarUsuario() {
    const tipoUsuario = document.querySelector('input[name="tipo_usuario"]:checked').value;
    let camposValidos = true;


  
    if (tipoUsuario === 'pf') {
      // Validar campos para Pessoa Física
      const nome = document.querySelector('#usuarioPFFields input[placeholder="Seu nome"]').value.trim();
      const cpf = document.querySelector('#usuarioPFFields input[placeholder="Seu CPF"]').value.trim();
      const email = document.querySelector('#usuarioPFFields input[type="email"]').value.trim();
      const senha = document.querySelector('#usuarioPFFields input[type="password"]').value.trim();
      const confirmarSenha = document.querySelector('#usuarioPFFields input[placeholder="Confirme sua senha"]').value.trim();
  
      // Verificar se os campos estão preenchidos
      if (!email || !nome || !senha || !confirmarSenha) {
        camposValidos = false;
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // Verificar se as senhas coincidem
      if (senha !== confirmarSenha) {
        camposValidos = false;
        alert('As senhas não coincidem!');
        return;
      }
  
      // Verificar se o email é válido (usando uma expressão regular simples)
      const emailValido = /\S+@\S+\.\S+/.test(email);
      if (!emailValido) {
        camposValidos = false;
        alert('Por favor, insira um email válido.');
        return;
      }
  
      // Verificar se o CPF é válido (usando uma expressão regular simples)
      const cpfValido = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/.test(cpf);
      if (!cpfValido) {
        camposValidos = false;
        alert('Por favor, insira um CPF válido (formato: XXX.XXX.XXX-XX).');
        return;
      }
  
      // Simulação de envio para o backend
      // Substitua este trecho pelo envio real para o seu backend
      fetch('URL de cadastro para PF', { method: 'POST', body: JSON.stringify({ email, nome, senha, cpf }) })
        .then(response => {
          if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = '/login'; // Redireciona para a rota de login após o cadastro bem-sucedido
          } else {
            throw new Error('Erro ao cadastrar usuário.');
          }
        })
        .catch(error => {
          alert(error.message);
        });
      
    } else if (tipoUsuario === 'pj') {
        // Validação para Pessoa Jurídica
        const nomeFantasia = document.querySelector('#usuarioPJFields input[placeholder="Seu nome fantasia"]').value.trim();
        const razaoSocial = document.querySelector('#usuarioPJFields input[placeholder="Sua razão social"]').value.trim();
        const cnpj = document.querySelector('#usuarioPJFields input[placeholder="Seu CNPJ"]').value.trim();
        const email = document.querySelector('#usuarioPJFields input[type="email"]').value.trim();
        const senha = document.querySelector('#usuarioPJFields input[type="password"]').value.trim();
        const confirmarSenha = document.querySelector('#usuarioPJFields input[placeholder="Confirme sua senha"]').value.trim();
    
        // Verificar se os campos estão preenchidos
        if (!email || !nomeFantasia || !razaoSocial || !cnpj || !senha || !confirmarSenha) {
          camposValidos = false;
          alert('Por favor, preencha todos os campos.');
          return;
        }
    
        // Verificar se as senhas coincidem
        if (senha !== confirmarSenha) {
          camposValidos = false;
          alert('As senhas não coincidem!');
          return;
        }
    
        // Verificar se o email é válido (usando uma expressão regular simples)
        const emailValido = /\S+@\S+\.\S+/.test(email);
        if (!emailValido) {
          camposValidos = false;
          alert('Por favor, insira um email válido.');
          return;
        }
    
        // Verificar se o CNPJ é válido (usando uma expressão regular simples)
        const cnpjValido = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
        if (!cnpjValido) {
          camposValidos = false;
          alert('Por favor, insira um CNPJ válido (formato: XX.XXX.XXX/XXXX-XX).');
          return;
        }
    
        // Simulação de envio para o backend
        // Substitua este trecho pelo envio real para o seu backend
        fetch('URL de cadastro para PJ', { method: 'POST', body: JSON.stringify({ email, nomeFantasia, razaoSocial, cnpj, senha }) })
          .then(response => {
            if (response.ok) {
              alert('Cadastro realizado com sucesso!');
              window.location.href = '/login'; // Redireciona para a rota de login após o cadastro bem-sucedido
            } else {
              throw new Error('Erro ao cadastrar usuário.');
            }
          })
          .catch(error => {
            alert(error.message);
          });
      }
    }
  
  function voltarParaLogin() {
    // Redirecionar para a rota /login
    window.location.href = '/login';
  }  