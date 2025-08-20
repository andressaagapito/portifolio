import React from "react";
import greenstar from "../../assets/mural/greenstar.png";
import asterisk from "../../assets/mural/asterisk.png";

function Experience() {
  return (
    // Container principal, centralizado horizontalmente
    <div className="container mx-auto relative">
      {/* Imagem greenstar posicionada no canto superior direito */}
      <img
        src={greenstar}
        alt="Green Star"
        className="absolute -top-4 right-2 w-14 h-14 z-10"
      />

      {/* Imagem asterisk posicionada no canto inferior esquerdo */}
      <img
        src={asterisk}
        alt="Asterisk"
        className="absolute -bottom-5 -left-4 w-16 h-16 z-10"
      />

      {/* Título da seção "Experiência" com fundo amarelo e texto centralizado */}
      <div className="bg-yellow-400 p-2 mb-2 text-left relative">
        <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
          EXPERIÊNCIA
        </h1>
      </div>

      {/* Container do conteúdo principal com fundo claro e rolagem automática se o conteúdo exceder a altura */}
      <div className="flex flex-wrap justify-center items-center bg-[#efe3d4] w-full h-[80vh] overflow-auto">
        {/* Caixa de texto com detalhes da experiência, centralizada e responsiva, com fundo amarelo claro e sombra */}
        <div
          className={`flex flex-wrap justify-center items-center font-jetbrains bg-[#fdf9b4] w-4/5 h-4/5 mx-auto p-5 text-base box-border overflow-auto shadow-lg transform rotate-1 lg:w-10/12 md:w-10/12 sm:w-11/12 sm:h-2/3 sm:p-4 sm:text-sm`}>
          {/* Texto que descreve o trabalho realizado na Applus+ */}
          <p>
            <strong>Applus+, Desenvolvimento Full Stack - Integral </strong>
            <em>(Fevereiro/2025 – Atual)</em>
          </p>
          <p>
					Atuei na manutenção do sistema ERP da Applus+, garantindo sua eficiência e prolongando a vida útil do software. Desenvolvi novas funcionalidades e implementei regras de negócio com foco na usabilidade e no desempenho. Contribuí na otimização e migração de sistemas legados, na criação de interfaces modernas com ReactJS e Tailwind CSS e no desenvolvimento de APIs escaláveis com Python e FastAPI. Atuei em equipes ágeis utilizando Scrum, Jira e Azure DevOps, integrando um time multicultural com comunicação diária em espanhol e inglês.
          </p>
          <br />
					<p>
            <strong>Applus+, Desenvolvimento Full Stack - Estágio </strong>
            <em>(Janeiro/2024 – Janeiro/2025)</em>
          </p>
					
          <div className="text-left">
            <p>
              <strong>Tecnologias utilizadas:</strong> HTML5, CSS3, Tailwind CSS, JavaScript, ReactJS,
              Node.JS, Python, FastAPI, Git.
            </p>
            <p>
              <strong>Bancos de dados:</strong> MySQL, PostgreSQL.
            </p>
            <p>
              <strong>Gerenciadores de Projetos Ágeis:</strong> Azure DevOps,
              Jira.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
