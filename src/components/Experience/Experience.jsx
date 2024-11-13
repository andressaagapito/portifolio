import React from "react";
import greenstar from "../../assets/miscellaneous/greenstar.png";
import asterisk from "../../assets/miscellaneous/asterisk.png"

function Experience() {
  return (
    // Container principal, centralizado horizontalmente
    <div className="container mx-auto relative">
      {/* Imagem greenstar posicionada no canto superior direito */}
      <img
        src={greenstar}
        alt="Green Star"
        className="absolute -top-4 right-2 w-12 h-12 z-10"
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
          className={`flex flex-wrap justify-center items-center font-jetbrains bg-[#fdf9b4] w-4/5 h-4/5 mx-auto p-5 text-base box-border overflow-auto shadow-lg transform rotate-1 lg:w-10/12 md:w-10/12 sm:w-11/12 sm:h-2/3 sm:p-4 sm:text-sm`}
        >
          {/* Texto que descreve o trabalho realizado na Applus+ */}
          <p>
            <strong>Applus+, Desenvolvimento Full Stack</strong>
            <em>(Janeiro/2024 – Até o momento)</em>
          </p>
          <p>
            Atuei na manutenção do código do sistema ERP da Applus+, assegurando
            a melhoria contínua da experiência do usuário. Desenvolvi novas
            funcionalidades e implementei regras de negócio com foco na
            usabilidade e eficiência do sistema. Participei ativamente do design
            e implementação do novo sistema ERP da empresa, desempenhando um
            papel crucial tanto no desenvolvimento front-end quanto back-end,
            utilizando novas tecnologias para criar interfaces intuitivas e
            responsivas.
          </p>
          <br />

          {/* Lista de tecnologias utilizadas */}
          <p>
            <strong>Tecnologias utilizadas:</strong> JavaScript, React,
            Typescript, Next, Node.js, Python, HTML5, CSS3, Tailwind, Git.
          </p>
          <br />

          {/* Informações sobre os bancos de dados usados */}
          <p>
            <strong>Bancos de dados:</strong> MySQL, PostgreSQL.
          </p>
          <br />

          {/* Lista dos gerenciadores de projetos ágeis */}
          <p>
            <strong> Gerenciadores de Projetos Ágeis:</strong> Azure DevOps,
            Jira.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
