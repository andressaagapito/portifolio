import React from "react";
import Profile from "../../assets/profile/Profile.png";
import purple from "../../assets/mural/purple.png";
import arrow from "../../assets/mural/arrow.png";

function Aside() {
  return (
    // Container principal
    <div className="flex flex-col justify-center items-center text-center sm:mt-0">
      {/* Bloco de nome e título */}
      <div className="inline-block relative">
        {/* Seta posicionada acima do nome "Silva", visível apenas em telas acima de 1059px */}
        <img
          src={arrow}
          alt="Arrow"
          className="absolute top-4 -right-10 w-16 h-10 hidden-below-1190"
        />

        {/* Título */}
        <h1 className="font-lato font-bold text-black text-5xl m-5">
          Andressa C. Silva
        </h1>

        {/* Subtítulo e marcador roxo */}
        <div className="relative inline-flex items-center justify-center">
          <h2 className="font-sedgwick text-black text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-normal relative z-10">
            Desenvolvedora Full Stack
          </h2>

          {/* Marcador roxo abaixo do subtítulo */}
          <img
            src={purple}
            alt="Purple"
            className="absolute bottom-[-10px] left-[80%] transform -translate-x-1/2 w-[40%] z-0"
          />
        </div>
      </div>

      {/* Imagem */}
      <img
        src={Profile}
        alt="Profile"
        className="w-[60%] h-[60%] sm:max-w-[100%] md:max-w-full mt-5 sm:mt-8"
      />
    </div>
  );
}

export default Aside;
