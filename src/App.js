import React, { useState } from "react";
import Aside from "./components/Aside/Aside";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Portifolio from "./components/Portifolio/Portifolio";
import About from "./components/About/About";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  // Estado para controlar o componente ativo, inicializado com "HOME"
  const [activeComponent, setActiveComponent] = useState("HOME");

  // Função para atualizar o componente ativo baseado na navegação
  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  return (
    // Container principal da aplicação
    <div className="app-container">
      {/* Componente Navbar, que recebe a função de navegação como propriedade */}
      <Navbar onNavigate={handleNavigation} />

      {/* Container para o conteúdo principal, dividido em duas colunas */}
      <div className="content">
        {/* Coluna esquerda que exibe o componente "Aside" */}
        <div className="left-column">
          <Aside />
        </div>

        {/* Coluna direita para exibir o componente correspondente ao estado ativo */}
        <div className="right-column">
          {/* Renderização condicional do componente "Aside" */}
          {activeComponent === "ASIDE" && <Aside />}

          {/* Renderização condicional do componente "Experience" */}
          {activeComponent === "EXPERIENCIA" && <Experience />}

          {/* Renderização condicional do componente "Contact" */}
          {activeComponent === "CONTATO" && <Contact />}

          {/* Renderização condicional do componente "Education" */}
          {activeComponent === "QUALIFICAÇÃO" && <Education />}

					{/* Renderização condicional do componente "Portifolio" */}
					{activeComponent === "PORTIFÓLIO" && <Portifolio />}

          {/* Renderização condicional do componente "About" */}
          {activeComponent === "SOBRE" && <About />}

          {/* Renderização condicional do componente "Dashboard" */}
          {activeComponent === "HOME" && <Dashboard />}
        </div>
      </div>
    </div>
  );
}

export default App;
