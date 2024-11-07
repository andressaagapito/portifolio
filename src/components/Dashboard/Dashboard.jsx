import React, { useState } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

function Dashboard() {
  // Estado para armazenar o componente selecionado; inicia com "dashboard"
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  // Mapeamento dos componentes disponíveis, com o dashboard como uma grade de cartões
  const components = {
    dashboard: (
      <div className="grid grid-cols-2 gap-8 justify-items-center bg-[#efe3d4] w-full h-[80vh] p-4">
        {/* Cada cartão navega para o componente correspondente ao ser clicado */}
        <Card
          text="SOBRE"
          color="bg-blue-100"
          onClick={() => setSelectedComponent("about")}
        />
        <Card
          text="EXPERIÊNCIA"
          color="bg-yellow-200"
          onClick={() => setSelectedComponent("experience")}
        />
        <Card
          text="QUALIFICAÇÃO"
          color="bg-green-100"
          onClick={() => setSelectedComponent("education")}
        />
        <Card
          text="CONTATO"
          color="bg-red-200"
          onClick={() => setSelectedComponent("contact")}
        />
      </div>
    ),
    about: <About />,
    experience: <Experience />,
    education: <Education />,
    contact: <Contact />,
  };

  return (
    <div className="container mx-auto">
      {/* Barra de título "HOME", exibida somente quando o dashboard está ativo */}
      {selectedComponent === "dashboard" && (
        <div className="bg-yellow-400 p-2 mb-2 text-left">
          <h1 className="text-xl font-bold text-gray-800 m-0 text-center">
            HOME
          </h1>
        </div>
      )}

      {/* Container para renderizar o componente ativo */}
      <div className="w-full h-full flex items-center justify-center">
        {components[selectedComponent]}
      </div>
    </div>
  );
}

// Componente Card: exibe um botão de navegação no formato de cartão
function Card({ text, color, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`relative flex items-center justify-center w-32 h-32 mt-10 ${color} text-black font-bold text-center shadow-lg p-4 transform transition-transform duration-300 hover:scale-110 cursor-pointer`}>
      {/* Pin decorativo no topo do cartão */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-4 bg-gray-500 rounded-full shadow-md z-10"></div>

      {/* Texto do cartão */}
      <p>{text}</p>
    </div>
  );
}

export default Dashboard;
