import React from "react";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import email from "../../assets/icons/email.png";
import location from "../../assets/icons/location.png";
import file from "../../assets/icons/file.png";
import cv from "../../assets/file/Dev-AndressaCSilva.pdf";
import greenstar from "../../assets/miscellaneous/greenstar.png";
import asterisk from "../../assets/miscellaneous/asterisk.png"

function Contact() {
  return (
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

      {/* Seção de cabeçalho da seção de contato com fundo amarelo e título centralizado */}
      <div className="bg-yellow-400 p-2 mb-2 text-left relative">
        <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
          CONTATO
        </h1>
      </div>

      {/* Container principal com fundo, altura e largura ajustados, e conteúdo centralizado */}
      <div className="flex flex-wrap justify-center items-center bg-[#efe3d4] w-full h-[80vh] overflow-auto">
        {/* Div com estilo rotacionado e sombra, contendo as informações de contato */}
        <div
          className={`flex flex-wrap justify-center items-center font-jetbrains bg-[#f59ca3] w-4/5 h-4/5 mx-auto p-5 text-base box-border overflow-auto shadow-lg transform rotate-1 lg:w-10/12 md:w-10/12 sm:w-11/12 sm:h-2/3 sm:p-4 sm:text-sm`}
        >
          {/* Seção de informações de contato com estilo responsivo para alinhar o texto e os ícones */}
          <div className="font-mono font-normal break-words whitespace-normal text-center sm:text-left">
            {/* Parágrafo para o link do LinkedIn com ícone e estilo responsivo */}
            <p className="flex items-center mb-4 text-xs sm:text-base">
              <img src={linkedin} alt="LinkedIn" className="w-5 mr-2" />
              <a
                href="https://linkedin.com/in/andressaagapito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                linkedin.com/in/andressaagapito
              </a>
            </p>

            {/* Parágrafo para o link do GitHub com ícone e estilo responsivo */}
            <p className="flex items-center mb-4 text-xs sm:text-base">
              <img src={github} alt="GitHub" className="w-5 mr-2" />
              <a
                href="https://github.com/andressaagapito"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-words"
              >
                github.com/andressaagapito
              </a>
            </p>

            {/* Parágrafo para o link de email com ícone e estilo responsivo */}
            <p className="flex items-center mb-4 text-xs sm:text-base">
              <img src={email} alt="Email" className="w-5 mr-2" />
              <a
                href="mailto:andressaagapito@gmail.com"
                className="text-blue-600 underline break-words"
              >
                andressaagapito@gmail.com
              </a>
            </p>

            {/* Parágrafo para a localização com ícone e texto de localização */}
            <p className="flex items-center mb-4 text-xs sm:text-base">
              <img src={location} alt="Location" className="w-5 mr-2" />
              <span>Rio de Janeiro, RJ</span>
            </p>

            {/* Parágrafo para o link de download do currículo com ícone e estilo responsivo */}
            <p className="flex items-center mb-4 text-xs sm:text-base">
              <img src={file} alt="File" className="w-5 mr-2" />
              <a
                href={cv}
                download
                className="text-blue-600 underline break-words"
              >
                Baixar currículo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
