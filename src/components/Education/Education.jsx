import React from "react";
import greenstar from "../../assets/mural/greenstar.png";
import asterisk from "../../assets/mural/asterisk.png";

function Education() {
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

      {/* Título da seção "Qualificação" com fundo amarelo e texto centralizado */}
      <div className="bg-yellow-400 p-2 mb-2 text-left relative">
        <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
          QUALIFICAÇÃO
        </h1>
      </div>

      {/* Container flexível para o conteúdo principal, com rolagem automática caso o conteúdo exceda a altura */}
      <div className="flex flex-wrap justify-center items-center bg-[#efe3d4] w-full h-[80vh] overflow-auto">
        {/* Caixa de texto com detalhes da qualificação, centralizada e responsiva */}
        <div
          className={`flex flex-wrap justify-center items-center font-jetbrains bg-[#f2fff5] w-4/5 h-4/5 mx-auto p-5 text-base box-border overflow-auto shadow-lg transform rotate-1 lg:w-10/12 md:w-10/12 sm:w-11/12 sm:h-2/3 sm:p-4 sm:text-sm`}>
          {/* Texto descritivo da qualificação, incluindo formação acadêmica e certificações */}
          <p>
            {/* Informação sobre a universidade e curso */}
            <strong>Formação Acadêmica:</strong> <br />
            Universidade Estácio de Sá <br />
            <strong>Análise e Desenvolvimento de Sistemas</strong> <br />
            <em>2021 – 2025</em>
            <br />
            <br />
            {/* Idiomas */}
            <strong>Idiomas:</strong> <br />
            <strong>Inglês</strong>: Intermediário (EF SET English Certificate
            70/100 – C1 Advanced) <br />
            <strong>Espanhol</strong>: Básico
            <br />
            <br />
            {/* Certificações */}
						<strong>Certificações:</strong> <br />
						Figma para Desenvolvedores <br />
						Trabalho em Equipe <br />
						Gestão Inteligente do Tempo <br />
						Comunicação Avançada: Escuta Ativa, Empatia e Assertividade
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
