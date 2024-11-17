import React, { useState, useContext } from "react";
import saturn from "../assets/Categories/saturn.mp4";
import { LanguageContext } from "../components/LanguageContext";

const Education = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  const toggleMostrarMas = () => {
    setMostrarMas(!mostrarMas);
  };

  const { language } = useContext(LanguageContext);

  const text = {
    es: {
      categorie: "Educación",
      uniTitle:
        "<span>Ingeniería en Sistemas de la Información</span> <br />Universidad Nacional Tecnológica (UNNATEC)",
      buttonShow: "Mostrar más",
      buttonHide: "Mostrar menos",
      certifications: "Certificaciones Relevantes en Desarrollo Web",
      designCertifications: "Certificaciones Relevantes en Diseño Gráfico",
      infoProgramming: `
            <h3>Certificaciones Relevantes en Desarrollo</h3><br />
            <ol>
              <li>Master en Fullstack Web Programming - <span>Udemy Academy</span></li>
              <li>Certificación en Angular y ASP.NET Core 9 - <span>Udemy Academy</span></li>
              <li>Desarrollo Web en HTML y CSS - <span>Instituto de Economía Internacional (Google Active)</span></li>
              <li>Inteligencia Artificial y Productividad - <span>Google/Santander Open Academy</span></li>
              <li>Gestión de Proyectos - <span>Santander Open Academy</span></li>
              <li>Nivel de Inglés Medio - <span>Institulo Nuevos Horizontes</span></li>
            </ol>
          `,
      infoDesign: `
            <h3>Certificaciones Relevantes en Diseño Gráfico</h3><br />
            <ol>
              <li>Técnico Superior en Diseño Gráfico - <span>Centro de Tecnología Universal (CENTU)</span></li>
              <li>Diplomado en Diseño Gráfico - <span>Edutin Academy</span></li>
              <li>Diseño y Creación de Logotipos - <span>Domestika</span></li>
              <li>Retoque Fotográfico y Efectos Visuales en Photoshop - <span>Domestika</span></li>
              <li>Secretos del Retoque Creativo - <span>Domestika</span></li>
              <li>Fundamentos del Marketing Digital - <span>Google/The Open University</span></li>
            </ol>
          `,
    },
    en: {
      categorie: "Education",
      uniTitle:
        "<span>Information Systems Engineering</span> <br />National Technological University (UNNATEC)",
      buttonShow: "Show more",
      buttonHide: "Show less",
      certifications: "Relevant Web Development Certifications",
      designCertifications: "Relevant Graphic Design Certifications",
      infoProgramming: `
            <h3>Relevant Development Certifications</h3><br />
            <ol>
              <li>Master in Fullstack Web Programming - <span>Udemy Academy</span></li>
              <li>Certification in Angular and ASP.NET Core 9 - <span>Udemy Academy</span></li>
              <li>Web Development in HTML and CSS - <span>Institute of International Economics (Google Active)</span></li>
              <li>Artificial Intelligence and Productivity - <span>Google/Santander Open Academy</span></li>
              <li>Project Management - <span>Santander Open Academy</span></li>
              <li>Intermediate English Level - <span>New Horizons Institute</span></li>
            </ol>
            `,
      infoDesign: `
            <h3>Relevant Graphic Design Certifications</h3><br />
            <ol>
              <li>Higher Technician in Graphic Design - <span>Universal Technology Center (CENTU)</span></li>
              <li>Diploma in Graphic Design - <span>Edutin Academy</span></li>
              <li>Logo Design and Creation - <span>Domestika</span></li>
              <li>Photo Retouching and Visual Effects in Photoshop - <span>Domestika</span></li>
              <li>Secrets of Creative Retouching - <span>Domestika</span></li>
              <li>Fundamentals of Digital Marketing - <span>Google/The Open University</span></li>
            </ol>
            `,
    },
  };

  return (
    <div className="education">
      <h2
        className={mostrarMas ? "subir" : ""}
        dangerouslySetInnerHTML={{ __html: text[language].uniTitle }}
      ></h2>

      <button onClick={toggleMostrarMas} className={mostrarMas ? "subir" : ""}>
        {mostrarMas ? text[language].buttonHide : text[language].buttonShow}
      </button>

      <div className={`informacion-adicional ${mostrarMas ? "mostrar" : ""}`}>
        <div className="fila">
          <div className="c-programming col-50">
            <div
              dangerouslySetInnerHTML={{
                __html: text[language].infoProgramming,
              }}
            ></div>
          </div>

          <div
            className="c-design col-50"
            dangerouslySetInnerHTML={{ __html: text[language].infoDesign }}
          ></div>
        </div>
      </div>

      <div className="bg-category"></div>

      <h1>{text[language].categorie}</h1>

      <div className="mix-color-education"></div>
      <div className="overlay-education"></div>
      <video className="education-saturn" autoPlay loop muted>
        <source src={saturn} type="video/mp4" />
      </video>
    </div>
  );
};

export default Education;
