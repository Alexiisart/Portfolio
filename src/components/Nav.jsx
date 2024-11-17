import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Language from "./Language";
import { LanguageContext } from "./LanguageContext";

const Nav = ({ isScrolled }) => {
  const location = useLocation();
  const { language } = useContext(LanguageContext);

  const text = {
    es: {
      1: "Inicio",
      2: "Educación",
      3: "Experiencia",
      4: "Proyectos",
    },
    en: {
      1: "Home",
      2: "Education",
      3: "Experience",
      4: "Projects",
    },
  };

  return (
    <>
      <Language />
      <nav className={isScrolled ? "scrolled" : ""}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          {" "}
          {text[language][1]}{" "}
        </Link>
        <Link
          to="/education"
          className={location.pathname === "/education" ? "active" : ""}
        >
          {" "}
          {text[language][2]}{" "}
        </Link>
        <Link
          to="/experience"
          className={location.pathname === "/experience" ? "active" : ""}
        >
          {" "}
          {text[language][3]}{" "}
        </Link>
        <Link
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          {" "}
          {text[language][4]}{" "}
        </Link>
      </nav>
    </>
  );
};

export default Nav;
