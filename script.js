// adiciona um evento ao formulário para quando ele for enviado (submit)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // evita que o formulário seja enviado sem nada 
    var email = document.getElementById('email').value; // obtém o valor do email
    var password = document.getElementById('password').value; // obtém o valor da senha
    var emailError = document.getElementById('emailError'); // referência o erro no campo de email
    var passwordError = document.getElementById('passwordError'); // referência o erro no campo de senha
    var formMessage = document.getElementById('formMessage'); // referência o erro no campo do formulário

    // limpa as mensagens de erro anteriores
    emailError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';

    var valid = true; // variável que armazena se o formulário é válido ou não

    // valida o email
    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        valid = false; // Define como falso se o e-mail não for válido
    }

    // verifica o comprimento da senha
    if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        valid = false; // Define como falso se a senha for muito curta
    }

    // se o formulário for válido, exibe uma mensagem de sucesso
    if (valid) {
        formMessage.textContent = 'Inscrição bem-sucedida!';
        formMessage.style.color = 'green';
    } else {
        // se o formulário não for válido, exibe uma mensagem de erro
        formMessage.textContent = 'Por favor, corrija os erros acima.';
        formMessage.style.color = 'red';
    }
});

// função para validar o formato do email usando uma expressão regular
function validateEmail(email) {
    // verifica se o e-mail contém "@" e "." 
    return email.includes('@') && email.includes('.');
}
