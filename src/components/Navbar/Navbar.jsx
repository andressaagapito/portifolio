import React from "react";

function Navbar({ onNavigate }) {
  return (
    // Container da barra de navegação, com layout flexível e espaçamento entre os botões
    <div className="flex gap-2 sm:gap-4 p-2 flex-wrap sm:flex-nowrap">
      {/* Botão HOME - Navega para o componente "HOME" */}
      <button
        className="bg-yellow-500 text-black text-sm font-bold px-8 py-2 rounded-r-full hover:opacity-80 flex-[3_1_100%] sm:flex-none sm:w-auto"
        onClick={() => onNavigate("HOME")}>
        HOME
      </button>

      {/* Botão SOBRE - Navega para o componente "SOBRE" */}
      <button
        className="bg-indigo-100 text-black text-sm font-bold px-8 py-2 rounded-r-full hover:opacity-80 flex-[1_1_10%] sm:flex-none sm:w-auto"
        onClick={() => onNavigate("SOBRE")}>
        SOBRE
      </button>

      {/* Botão EXPERIÊNCIA - Navega para o componente "EXPERIENCIA" */}
      <button
        className="bg-yellow-200 text-black text-sm font-bold px-8 py-2 rounded-r-full hover:opacity-80 flex-[1_1_10%] sm:flex-none sm:w-auto"
        onClick={() => onNavigate("EXPERIENCIA")}>
        EXPERIÊNCIA
      </button>

      {/* Botão QUALIFICAÇÃO - Navega para o componente "QUALIFICAÇÃO" */}
      <button
        className="bg-green-100 text-black text-sm font-bold px-8 py-2 rounded-r-full hover:opacity-80 flex-[1_1_10%] sm:flex-none sm:w-auto"
        onClick={() => onNavigate("QUALIFICAÇÃO")}>
        QUALIFICAÇÃO
      </button>

      {/* Botão CONTATO - Navega para o componente "CONTATO" */}
      <button
        className="bg-pink-300 text-black text-sm font-bold px-8 py-2 rounded-r-full hover:opacity-80 flex-[1_1_10%] sm:flex-none sm:w-auto"
        onClick={() => onNavigate("CONTATO")}>
        CONTATO
      </button>
    </div>
  );
}

export default Navbar;
