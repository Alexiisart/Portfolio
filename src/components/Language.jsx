import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import { LanguageContext } from './LanguageContext';

const Language = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switch-container">
      <Form.Check 
        type="switch"
        id="language-switch"
        label={language === 'es' ? "ES / EN" : "EN / ES"}
        checked={language === 'en'}
        onChange={toggleLanguage}
      />
    </div>
  );
}

export default Language;
