import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider
      LanguageContext
      value={{ language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
