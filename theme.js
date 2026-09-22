const botaoTema = document.getElementById("botaoTema");

function aplicarTema() {
    const tema = localStorage.getItem("tema") || "claro";

    if (tema === "escuro") {
        document.body.classList.add("dark");
        botaoTema.textContent = "☀️ Modo claro";
    } else {
        document.body.classList.remove("dark");
        botaoTema.textContent = "🌙 Modo escuro";
    }
}

botaoTema.addEventListener("click", function () {
    const temaAtual = localStorage.getItem("tema") || "claro";

    if (temaAtual === "claro") {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

    aplicarTema();
});

aplicarTema();