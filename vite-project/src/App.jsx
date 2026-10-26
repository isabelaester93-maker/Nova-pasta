import React from "react";

function Cabecalho() {
  return (
    <header style={{
      backgroundColor: "#1e3a8a",
      color: "white",
      padding: "25px",
      textAlign: "center"
    }}>
      <h1>Sistema Escolar</h1>
      <p>Organizando o futuro através da educação</p>
    </header>
  );
}

function BoasVindas() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>Bem-vindo ao Sistema Escolar!</h2>
      <p>
        Aqui você pode visualizar os alunos
        cadastrados no sistema.
      </p>
    </section>
  );
}

function ListaAlunos() {
  const alunos = [
    "Ana Silva",
    "Pedro Santos",
    "Maria Oliveira",
    "João Costa"
  ];

  return (
    <section style={{ padding: "20px" }}>
      <h2>Alunos cadastrados</h2>

      <ul>
        {alunos.map((aluno, index) => (
          <li key={index} style={{
            padding: "10px",
            marginBottom: "8px",
            backgroundColor: "#e0e7ff",
            borderRadius: "5px"
          }}>
            {aluno}
          </li>
        ))}
      </ul>

      <p>Total de alunos: {alunos.length}</p>
    </section>
  );
}

function Rodape() {
  return (
    <footer style={{
      backgroundColor: "#1e3a8a",
      color: "white",
      padding: "15px",
      textAlign: "center"
    }}>
      <p>Projeto desenvolvido com React</p>
      <p>© 2026 - Sistema Escolar</p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Cabecalho />
      <BoasVindas />
      <ListaAlunos />
      <Rodape />
    </div>
  );
}