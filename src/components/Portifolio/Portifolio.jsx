import React from "react";
import greenstar from "../../assets/mural/greenstar.png";
import asterisk from "../../assets/mural/asterisk.png";
import weatherApp from "../../assets/portifolio/weatherApp.png";
import pokedex from "../../assets/portifolio/pokedex.jpg";
import taskManager from "../../assets/portifolio/taskManager.png";
import {
  SiCss3,
  SiJest,
  SiTailwindcss,
  SiJavascript,
  SiReact,
} from "react-icons/si";

function Portifolio() {
  return (
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

      {/* Título da seção "Portifolio" */}
      <div className="bg-yellow-400 p-2 mb-2 text-left relative">
        <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
          PORTIFÓLIO
        </h1>
      </div>

      {/* Mural com altura fixa */}
      <div className="flex flex-wrap justify-center items-center bg-[#efe3d4] w-full h-[80vh] p-4 gap-6 overflow-auto">
        {/* Cards do Weather App */}
        <Card
          text="WeatherApp"
          color="bg-blue-200"
          image={weatherApp}
          captionColor="bg-blue-200"
          icon={[<SiTailwindcss />, <SiJavascript />, <SiJest />]}
          link="https://andressaagapito.github.io/weatherApp/"
        />
        {/* Cards do Pokedex */}
        <Card
          text="Pokedex"
          color="bg-yellow-200"
          image={pokedex}
          captionColor="bg-yellow-200"
          icon={[<SiCss3 />, <SiJavascript />, <SiReact />]}
          link="https://andressaagapito.github.io/pokedex/"
        />
        {/* Cards do Task Manager */}
        <Card
          text="Task Manager"
          color="bg-yellow-200"
          image={taskManager}
          captionColor="bg-green-200"
          icon={[<SiCss3 />, <SiJavascript />, <SiReact />]}
          link="https://andressaagapito.github.io/task-manager/"
        />
      </div>
    </div>
  );
}

function Card({ text, color, image, captionColor, icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center no-underline max-w-xs">
      {/* Card com a imagem inteira dentro */}
      <div
        className={`relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 ${color} shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer rounded-lg`}>
        {/* Pino decorativo no topo do card */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-gray-500 rounded-full shadow-md z-10"></div>

        {/* Imagem preenchendo o card */}
        <img
          src={image}
          alt={text}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Legenda abaixo do card com fundo sólido retangular e cor personalizada */}
      <div
        className={`mt-3 ${captionColor} w-full text-center font-jetbrains flex items-center justify-center gap-2`}>
        {/* Texto */}
        <p className="font-bold py-1">{text}</p>
        {/* Ícones */}
        {icon && (
          <div className="flex items-center gap-1">
            {Array.isArray(icon) ? (
              icon.map((item, index) => <span key={index}>{item}</span>)
            ) : (
              <span>{icon}</span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}

export default Portifolio;
