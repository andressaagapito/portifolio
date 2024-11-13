import React from "react";
import greenstar from "../../assets/miscellaneous/greenstar.png";
import asterisk from "../../assets/miscellaneous/asterisk.png"; // Importe a imagem do asterisk

function About() {
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

      {/* Título da seção "Sobre" com fundo amarelo e texto centralizado */}
      <div className="bg-yellow-400 p-2 mb-2 text-left relative">
        <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
          SOBRE
        </h1>
      </div>

      {/* Container flexível para o conteúdo principal com fundo claro e rolagem automática se o conteúdo exceder a altura */}
      <div className="flex flex-wrap justify-center items-center bg-[#efe3d4] w-full h-[80vh] overflow-auto">
        {/* Caixa de texto centralizada e responsiva, com fundo lilás, rotação leve e sombra */}
        <div
          className={`flex flex-wrap justify-center items-center font-jetbrains bg-[#d9d7f1] w-4/5 h-4/5 mx-auto p-5 text-base box-border overflow-auto shadow-lg transform rotate-1 lg:w-10/12 md:w-10/12 sm:w-11/12 sm:h-2/3 sm:p-4 sm:text-sm`}
        >
          {/* Parágrafo descrevendo o perfil com formatação de ênfase para palavras-chave */}
          <p className="leading-relaxed text-justify">
            Sou <strong>entusiasta</strong> e <strong>curiosa</strong>, motivada
            a explorar e entender profundamente o funcionamento de tudo ao meu
            redor. Com uma paixão por transformar ideias em{" "}
            <strong>soluções reais</strong>, vejo a tecnologia como uma
            ferramenta poderosa para <strong>materializar visões</strong> e{" "}
            <strong>agregar valor</strong>. No desenvolvimento{" "}
            <strong>front end</strong>, trago uma abordagem focada em detalhes e
            usabilidade, sempre buscando criar{" "}
            <strong>interfaces intuitivas</strong> e{" "}
            <strong>visualmente atraentes</strong>. Tenho experiência em{" "}
            <strong>React</strong> e <strong>Tailwind CSS</strong>, o que me
            permite construir aplicações ágeis e escaláveis, com um forte
            compromisso em oferecer experiências digitais que encantem e{" "}
            <strong>satisfaçam</strong> as necessidades dos{" "}
            <strong>usuários</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
