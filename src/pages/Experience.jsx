import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../components/LanguageContext";
import arrow from "../assets/arrow.svg";
import segurosReservas from "../assets/Experience/seguros-reservas.svg";
import indotel from "../assets/Experience/indotel.svg";
import alexiis from "../assets/Experience/alexiis.svg";
import julioc from "../assets/Experience/julioc.svg";
import validafirma from "../assets/Experience/validafirma.svg";

const Experience = () => {
  const { language } = useContext(LanguageContext);
  const [showDeveloper, setShowDeveloper] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  const images = { segurosReservas, indotel, alexiis, julioc, validafirma };

  useEffect(() => {
    // Asegurarse de que el contenido se muestre con fade-in al cargar la página
    setFadeIn(true);
  }, []);

  const text = {
    es: {
      category: "Expe <br/> rien <br/>cia",
      developer: "Desarrollador",
      visualArtist: "Artista Visual",
      developerContent: [
        {
          image: images.segurosReservas,
          title: "Desarrollador de Nuevos Proyectos - Seguros Reservas",
          description:
            "Desarrollar plataformas web para la empresa, como lo han sido la plataforma de calculo de seguros vitalicios y la plataforma de intermediarios de seguros.",
        },
        {
          image: images.indotel,
          title:
            "Desarrollador Web - Instituto Dominicano de las Telecomunicaciones (INDOTEL)",
          description:
            "Desarrollo de componentes y funcionalidades para la página web del instituto.",
        },
        {
          image: images.alexiis,
          title: "Desarrollador Autónomo",
          description:
            "Freelance para negocios locales e instituciones públicas como INDOTEL, Sultana Medical Center, Anyelicons, entre otros.",
        },
        {
          image: images.julioc,
          title: "Grupo Julio Cabrera - Mueblería",
          description:
            "Desarrollo de sitio web en WordPress, optimización y gestión de contenido.",
        },
      ],
      visualArtistContent: [
        {
          image: images.indotel,
          title:
            "Diseñador Gráfico - Instituto Dominicano de las Telecomunicaciones (INDOTEL)",
          description: "Diseño gráfico y creación de identidad visual.",
        },
        {
          image: images.validafirma,
          title: "Manual de Identidad de ValidaFirma",
          description:
            "Proyecto del INDOTEL con el Gobierno de la República Dominicana.",
        },
        {
          image: images.alexiis,
          title: "Diseñador Gráfico Autónomo",
          description:
            "Freelance para negocios e instituciones como Alcaldia de San Pedro de Macorís, Cincoonce, Hermanos Ramírez, Butico, Shopping Time, entre otros.",
        },
      ],
    },
    en: {
      category: "Expe <br/> rien <br/> ce",
      developer: "Developer",
      visualArtist: "Visual Artist",
      developerContent: [
        {
          image: images.segurosReservas,
          title: "Web Developer - Seguros Reservas",
          description:
            "Development of platforms for the company, such as the life insurance calculator platform and the insurance intermediaries platform.",
        },
        {
          image: images.indotel,
          title:
            "Web Developer - Dominican Institute of Telecommunications (INDOTEL)",
          description:
            "Development of components and functionalities for the institute's website.",
        },
        {
          image: images.alexiis,
          title: "Freelance Developer",
          description:
            "Freelance for local businesses and public institutions such as INDOTEL, Sultana Medical Center, Anyelicons, among others.",
        },
        {
          image: images.julioc,
          title: "Julio Cabrera Group - Furniture Store",
          description:
            "WordPress website development, optimization, and content management.",
        },
      ],
      visualArtistContent: [
        {
          image: images.indotel,
          title:
            "Graphic Designer - Dominican Institute of Telecommunications (INDOTEL)",
          description: "Graphic design and visual identity creation.",
        },
        {
          image: images.validafirma,
          title: "ValidaFirma Identity Manual",
          description:
            "INDOTEL project with the Government of the Dominican Republic.",
        },
        {
          image: images.alexiis,
          title: "Freelance Graphic Designer",
          description:
            "Freelance for businesses and institutions such as San Pedro de Macorís City Hall, Cincoonce, Hermanos Ramírez, Butico, Shopping Time, among others.",
        },
      ],
    },
  };

  const toggleExperience = () => {
    setFadeIn(false);
    setTimeout(() => {
      setShowDeveloper(!showDeveloper);
      setFadeIn(true);
    }, 300);
  };

  return (
    <>
      <div className="experience">
        <h1>{text[language].title}</h1>

        <div
          className={`experience-content ${fadeIn ? "fade-in" : "fade-out"}`}
        >
          {showDeveloper ? (
            <ul>
              <h2>{text[language].developer}</h2>
              {text[language].developerContent.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt="image source" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              <h2>{text[language].visualArtist}</h2>
              {text[language].visualArtistContent.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt="image source" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="diviser-experience">
          <hr />
          <button onClick={toggleExperience}>
            <img src={arrow} alt="arrow" />
          </button>
        </div>

        <div className="bg-category"></div>
        <h1 dangerouslySetInnerHTML={{ __html: text[language].category }}></h1>
        <div className="mix-color-experience"></div>
        <div className="overlay-experience"></div>
      </div>
    </>
  );
};

export default Experience;
