import React from "react";

function Navbar({ onNavigate }) {
  const buttons = [
    { label: "HOME", color: "bg-yellow-500", component: "HOME" },
    { label: "SOBRE", color: "bg-indigo-100", component: "SOBRE" },
    { label: "EXPERIÊNCIA", color: "bg-yellow-200", component: "EXPERIENCIA" },
    { label: "QUALIFICAÇÃO", color: "bg-green-100", component: "QUALIFICAÇÃO" },
    { label: "PORTIFÓLIO", color: "bg-orange-300", component: "PORTIFÓLIO" },
    { label: "CONTATO", color: "bg-pink-300", component: "CONTATO" },
  ];

  return (
    <div className="flex gap-2 sm:gap-4 p-2 flex-wrap">
      {buttons.map(({ label, color, component }) => (
        <button
          key={component}
          className={`${color} text-black text-sm font-bold px-8 py-2 rounded-r-full hover:opacity-80 flex-1 sm:flex-[1_1_0%] lg:flex-none`}
          onClick={() => onNavigate(component)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
