import React from "react";

const Switcher = ({ toggleLanguage, currentLanguage }) => {
  // Determine if Spanish is currently selected
  const isChecked = currentLanguage === "en"; // Cambiado a "es" en lugar de "en"

  // Handle checkbox change (toggle between Spanish and English)
  const handleCheckboxChange = () => {
    toggleLanguage(); // Llama a la función para cambiar el idioma
  };

  return (
    <div className="flex items-center">
      {/* Switch */}
      <label className="flex items-center cursor-pointer select-none">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          {/* Background of the switch */}
          <div className="flex items-center justify-between w-12 h-6 px-1 rounded-full shadow-inner bg-softPurple">
            {/* Indicator circle */}
            <div className={`h-4 w-4 rounded-full bg-white shadow-md transform transition duration-300 ${isChecked ? 'translate-x-6' : ''}`} />
          </div>
        </div>
      </label>
      {/* Flags */}
      <span className="ml-2">
        <span role="img" aria-label="Spain flag">{isChecked ? '🇺🇸' : '🇪🇸'}</span> {/* Cambiado el orden de las banderas */}
      </span>
    </div>
  );
};

export default Switcher;
