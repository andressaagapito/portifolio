import React from "react";
import Profile from "../../assets/profile/Profile.png";

function Aside() {
  return (
    // Container principal, configurado como coluna flexível e centralizado
    <div className="flex flex-col justify-center items-center text-center sm:mt-0">
      {/* Bloco de texto que exibe o nome e o cargo */}
      <div className="inline-block">
        {/* Nome do desenvolvedor com estilo personalizado de fonte, tamanho grande e espaçamento */}
        <h1 className="font-lato font-bold text-black text-5xl m-5">
          Andressa C. Silva
        </h1>

        {/* Cargo do desenvolvedor, com variação de tamanho de fonte para responsividade */}
        <h2 className="font-sedgwick text-black text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-normal">
          Desenvolvedora Front End
        </h2>
      </div>

      {/* Imagem de perfil com largura e altura responsivas */}
      <img
        src={Profile}
        alt="Profile"
        className="w-[60%] h-[60%] sm:max-w-[100%] md:max-w-full mt-5 sm:mt-8"
      />
    </div>
  );
}

export default Aside;
