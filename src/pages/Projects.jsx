import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";
import portafolio from "../assets/Projects/miportafolio.mp4";
import validaFirma from "../assets/Projects/validafirma.png";
import rentaVitalicia from "../assets/Projects/rentavitalicia.png";
const Projects = () => {
  const { language } = useContext(LanguageContext);

  const videos = {
    portfolio: portafolio,
    validaFirma: validaFirma,
    rentaVitalicia: rentaVitalicia,
  };

  const text = {
    es: {
      category: "Pro <br/> yec <br/>tos",
      proyects: [
        {
          title: "Mi portafolio",
          subtitle: "Desarrollo",
          description:
            "Este es mi portafolio personal,donde muestro mis proyectos y habilidades.",
          image: videos.portfolio,
          tecnologias: ["React", "CSS Advanced", "Adobe XD", "Adobe Photoshop"],
          link: "https://alexiisportfolio.netlify.app/",
        },
        {
          title: "Valida Firma",
          subtitle: "Diseño Gráfico",
          description:
            "Proyecto del INDOTEL con el Gobierno de la República Dominicana.",
          image: videos.validaFirma,
          tecnologias: ["Adobe Photoshop", "Adobe Illustrator"],
          link: "https://www.behance.net/gallery/204811741/Validafirma-Branding",
        },
        {
          title: "Renta Vitalicia",
          subtitle: "Desarrollo",
          description:
            "Proyecto de la empresa Seguros Reservas, para la renta vitalicia.",
          image: videos.rentaVitalicia,
          tecnologias: ["Angular", ".Net Core", "SQL Server", "Adobe XD"],
          link: "",
        },
      ],
      interno: "Proyecto Interno",
      social: "Si quieres ver otros proyectos a mi visita mi",
    },
    en: {
      category: "Pro <br/> jec <br/>ts",
      proyects: [
        {
          title: "My portfolio",
          subtitle: "Development",
          description:
            "This is my personal portfolio, where I show my projects and skills.",
          image: videos.portfolio,
          tecnologias: ["React", "CSS Advanced", "Adobe XD", "Adobe Photoshop"],
          link: "https://alexiisportfolio.netlify.app/",
        },
        {
          title: "Valida Firma",
          subtitle: "Graphic Design",
          description: "Project of INDOTEL with the Dominican Government.",
          image: videos.validaFirma,
          tecnologias: ["Adobe Photoshop", "Adobe Illustrator"],
          link: "https://www.behance.net/gallery/204811741/Validafirma-Branding",
        },
        {
          title: "Renta Vitalicia",
          subtitle: "Development",
          description:
            "Project of the Seguros Reservas company, for life insurance.",
          image: videos.rentaVitalicia,
          tecnologias: ["Angular", ".Net Core", "SQL Server", "Adobe XD"],
          link: "",
        },
      ],
      interno: "Internal Project",
      social: "If you want to see other projects, visit my",
    },
  };

  return (
    <>
      <div className="projects">
        <div className="projects-content-info">
          <div className="bg-category"></div>
          <h1
            dangerouslySetInnerHTML={{ __html: text[language].category }}
          ></h1>
          <div className="mix-color-experience"></div>
          <div className="overlay-experience"></div>
        </div>

        <div className="projects-content-projects">
          {text[language].proyects.map((proyect, index) => (
            <div className="projects-content-projects-item" key={index}>
              {proyect.image.includes(".mp4") ? (
                <video
                  src={proyect.image}
                  alt={proyect.title}
                  loop
                  muted
                  autoPlay
                />
              ) : (
                <img src={proyect.image} alt="" />
              )}
              <div className="projects-content-projects-item-info">
                <h2>{proyect.title}</h2>
                <label>{proyect.subtitle}</label>
                <p
                  dangerouslySetInnerHTML={{ __html: proyect.description }}
                ></p>
                <p className="tecnologias">{proyect.tecnologias.join(", ")}</p>

                {proyect.link && (
                  <a
                    href={proyect.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ver proyecto
                  </a>
                )}
                {proyect.link === "" && (
                  <a style={{ color: "#0e262d" }}>{text[language].interno}</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="social-projects">
        <p>
          {text[language].social}{" "}
          <a
            href="https://www.linkedin.com/in/alexiisart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>{" "}
          |{" "}
          <a
            href="https://www.behance.net/alexiisguillen1"
            target="_blank"
            rel="noopener noreferrer"
          >
            behance
          </a>
        </p>
      </div>
    </>
  );
};

export default Projects;
