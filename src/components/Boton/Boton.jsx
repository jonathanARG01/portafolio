import React from 'react'
import { useLanguage } from '../../LanguageContext.jsx';
import './Boton.css'



const Boton = () => {

    const { language, toggleLanguage } = useLanguage();

    return (

        <>
      
            <a href="#contact" className="btn-main">
                { language ? 'Contact Me' : 'Contáctame' }
            </a>

        </>
  
    )

}



export default Boton
