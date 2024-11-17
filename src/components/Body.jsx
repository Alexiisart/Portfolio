import React, { useContext } from 'react'
import { LanguageContext } from './LanguageContext'
import astronaut from '../assets/astronaut.png'
import destello from '../assets/destello.png'

const Body = ({ isActive }) => {
    const { language } = useContext(LanguageContext);

    const text = {
        es: {
            title: "Lo mejor de ambos mundos",
            portfolio: "portfolio"
        },
        en: {
            title: "The best of both worlds",
            portfolio: "portfolio"
        }
    }

    return (
        <div className={`body-container ${isActive ? 'active' : ''}`} style={{ height: '100%' }}>
            <div className="text-body">
                <span className="overlay-txt"></span>
                <h1>{text[language].title}</h1>
                <p><span className='name'>Alexis,</span> {text[language].portfolio}</p>
            </div>

            <div className="bk-body">
                <div className="overlay"></div>
                <img className='destello' src={destello} alt="" />
                <img className='astronaut' src={astronaut} alt="" />
            </div>
        </div>
    )
}

export default Body
