// ===============================
// SISTEMA DE LOGIN - GAMEZONE
// ===============================

// CADASTRO
function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem("usuarioGameZone", JSON.stringify(usuario));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
}


// LOGIN
function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const dados = localStorage.getItem("usuarioGameZone");

    if (!dados) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    const usuario = JSON.parse(dados);

    if (email === usuario.email && senha === usuario.senha) {

        localStorage.setItem("usuarioLogado", "true");

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    } else {
        alert("E-mail ou senha incorretos!");
    }
}


// ESQUECI A SENHA
function esqueciSenha() {

    const dados = localStorage.getItem("usuarioGameZone");

    if (!dados) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    const usuario = JSON.parse(dados);

    alert(
        "Sua senha cadastrada é: " + usuario.senha
    );
}