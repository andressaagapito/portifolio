import React, { useState } from "react";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Portifolio from "../Portifolio/Portifolio";
import Contact from "../Contact/Contact";
import greenstar from "../../assets/miscellaneous/greenstar.png";
import asterisk from "../../assets/miscellaneous/asterisk.png";

function Dashboard() {
  // Estado para armazenar o componente atualmente selecionado
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  // Objeto contendo os componentes disponíveis e o layout principal (dashboard)
  const components = {
    // Layout principal do dashboard com cards organizados em um grid
    dashboard: (
      <div
        // Configuração do grid principal
        className="grid grid-cols-3 justify-items-center bg-[#efe3d4] w-full h-[80vh] p-10 gap-4"
        style={{
          // Definição das áreas do grid usando grid-template-areas
          gridTemplateAreas: `
            "top-left . top-right ."
            "left center right ."
            "bottom-left . bottom-right ."
          `,
        }}>
        {/* Card para a seção SOBRE */}
        <Card
          text="SOBRE"
          color="bg-blue-100"
          onClick={() => setSelectedComponent("about")}
          style={{ gridArea: "top-left" }}
        />
        {/* Card para a seção EXPERIÊNCIA */}
        <Card
          text="EXPERIÊNCIA"
          color="bg-yellow-200"
          onClick={() => setSelectedComponent("experience")}
          style={{ gridArea: "top-right" }}
        />
        {/* Card para a seção QUALIFICAÇÃO */}
        <Card
          text="QUALIFICAÇÃO"
          color="bg-green-100"
          onClick={() => setSelectedComponent("education")}
          style={{ gridArea: "center" }}
        />
        {/* Card para a seção PORTIFÓLIO */}
        <Card
          text="PORTIFÓLIO"
          color="bg-orange-300"
          onClick={() => setSelectedComponent("portifolio")}
          style={{ gridArea: "bottom-left" }}
        />
        {/* Card para a seção CONTATO */}
        <Card
          text="CONTATO"
          color="bg-red-200"
          onClick={() => setSelectedComponent("contact")}
          style={{ gridArea: "bottom-right" }}
        />
      </div>
    ),
    // Definição dos componentes individuais para cada seção
    about: <About />,
    experience: <Experience />,
    education: <Education />,
    portifolio: <Portifolio />,
    contact: <Contact />,
  };

  return (
    <div className="container mx-auto relative">
      {/* Imagens decorativas exibidas apenas no dashboard */}
      {selectedComponent === "dashboard" && (
        <>
          {/* Imagem decorativa greenstar posicionada no canto superior direito */}
          <img
            src={greenstar}
            alt="Green Star"
            className="absolute -top-4 right-2 w-14 h-14 z-10"
          />
          {/* Imagem decorativa asterisk posicionada no canto inferior esquerdo */}
          <img
            src={asterisk}
            alt="Asterisk"
            className="absolute -bottom-5 -left-4 w-16 h-16 z-10"
          />
        </>
      )}

      {/* Barra de título "HOME", exibida apenas no dashboard */}
      {selectedComponent === "dashboard" && (
        <div className="bg-yellow-400 p-2 mb-2 text-left relative">
          <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
            HOME
          </h1>
        </div>
      )}

      {/* Renderiza o componente selecionado no estado */}
      <div className="w-full h-full flex items-center justify-center">
        {components[selectedComponent]}
      </div>
    </div>
  );
}

// Componente Card responsável por exibir cada botão de navegação
function Card({ text, color, onClick, style }) {
  return (
    <div
      // Configuração do card com animação de hover e estilo individual
      onClick={onClick}
      className={`relative flex items-center justify-center w-32 h-32 ${color} text-black font-bold text-center shadow-lg p-4 transform transition-transform duration-300 hover:scale-110 cursor-pointer`}
      style={style}>
      {/* Pin decorativo no topo do card */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-gray-500 rounded-full shadow-md z-10"></div>
      {/* Texto do card */}
      <p>{text}</p>
    </div>
  );
}

export default Dashboard;
