import React from "react";
import CursorDestello from "./helpers/Cursor.jsx";
import ScrollContainer from "./helpers/ScrollContainer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext.jsx";

// Importaciones de las páginas
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";

const Appcv = () => {
  return (
    <LanguageProvider>
      <Router>
        <CursorDestello />
        <Routes>
          <Route path="/" element={<ScrollContainer />}>
            <Route index element={null} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default Appcv;
