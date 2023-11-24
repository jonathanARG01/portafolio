import React from 'react'
import { useLanguage } from './../../LanguageContext.jsx';
import './Button.css'



const Button = () => {

    const { language, toggleLanguage } = useLanguage();

    return (

        <>
      
            <a href="#contact" className="btn-main">
                { language ? 'Contact Me' : 'Contáctame' }
            </a>

        </>
  
    )

}



export default Button
