document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Simulação de login (usuário e senha fixos)
    const usuarioCorreto = "aluno";
    const senhaCorreta = "1234";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === usuarioCorreto && password === senhaCorreta) {
        alert("Login bem-sucedido!");
        window.location.href = "dashboard.html"; // Redireciona para o painel do aluno
    } else {
        alert("Usuário ou senha incorretos!");
    }
});
