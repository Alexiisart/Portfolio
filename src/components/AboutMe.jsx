import React, { useState, useEffect, useContext } from "react";

import background from "../assets/AboutMe/bk-02.png";
import light from "../assets/AboutMe/luz.png";
import sofa from "../assets/AboutMe/mueble.png";
import people from "../assets/AboutMe/personaje.png";
import { LanguageContext } from "./LanguageContext";

const AboutMe = ({ isActive }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bodyHeight = document.querySelector(".body-container").offsetHeight;
      if (scrollY > bodyHeight + 65) {
        const adjustedScrollY = scrollY - bodyHeight - 65;
        const windowHeight = window.innerHeight;
        const maxScroll = windowHeight;
        const progress = Math.min((adjustedScrollY / maxScroll) * 100, 100);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { language } = useContext(LanguageContext);

  const text = {
    es: {
      name: "Alexis Guillen",
      subname: "Desarrollador y Artista Visual",
      description:
        "Como desarrollador, domino las siguientes tecnologías <span>HTML, CSS, JavaScript, TypeScript, C#, Angular y React. </span> Me apasionan las tecnologías emergentes y actualmente estoy aprendiendo más sobre <span> Flutter, Nestjs, Node.js y .NET core 9.</span><br /><br />Mi enfoque de diseño se centra en el concepto de libertad asociada al espacio, reflejándose en un estilo sobrio y creativo. Creo en la organización y el detalle, asegurándome de que cada elemento sea estéticamente agradable, funcional y accesible.<br /><br />Me encanta combinar creatividad y tecnología para crear soluciones efectivas y atractivas. ¡Gracias por visitar mi portafolio!",
    },
    en: {
      name: "Alexis Guillen",
      subname: "Developer and Visual Artist",
      description:
        "As a developer, I master the following technologies <span>HTML, CSS, JavaScript, TypeScript, C#, Angular and React. </span> I am passionate about emerging technologies and I am currently learning more about <span> Flutter, Nestjs, Node.js and .NET core 9.</span><br /><br />My design approach focuses on the concept of freedom associated with space, reflected in a sober and creative style. I believe in organization and detail, ensuring that each element is aesthetically pleasing, functional, and accessible.<br /><br />I love combining creativity and technology to create effective and attractive solutions. Thank you for visiting my portfolio!",
    },
  };

  return (
    <>
      <div
        className={`about-me-container ${isActive ? "active" : ""}`}
        style={{ height: "100%" }}
      >
        <div className="info-me-container">
          <h1>{text[language].name}</h1>
          <h2>{text[language].subname}</h2>
          <br />
          <br />
          <p
            dangerouslySetInnerHTML={{ __html: text[language].description }}
          ></p>
        </div>
        {/* <div className="info-me-container">
                    <img className='html-icon' src={html} alt="" />
                </div> */}
        <div
          className="ambient"
          style={{ transform: `translateY(${scrollProgress * 0.5}px)` }}
        >
          <img
            className="background"
            src={background}
            alt=""
            style={{ transform: `translateY(${scrollProgress * -0.2}px)` }}
          />
          <img
            className="light"
            src={light}
            alt=""
            style={{
              transform: `translateY(${scrollProgress * -0.4}px) rotate(${
                scrollProgress * 0.5
              }deg)`,
            }}
          />
          <img
            className="sofa"
            src={sofa}
            alt=""
            style={{
              transform: `translateY(${scrollProgress * -0.3}px) scale(${
                1 + scrollProgress * 0.002
              })`,
            }}
          />
          <img
            className="people"
            src={people}
            alt=""
            style={{
              transform: `translateY(${scrollProgress * -0.6}px) scale(${
                1 + scrollProgress * 0.003
              })`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
