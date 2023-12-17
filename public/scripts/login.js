function validarLogin() {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;

    // Validação básica de login
    if (email === 'teste@hotmail.com' && senha === '123') {
        // Redirecionar para a página /index após login bem-sucedido
        window.location.href = '/index';
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}
