import React from 'react'
import { useLanguage } from './../../LanguageContext.jsx';

import './Main.css';



const Main = () => {

    const { language, toggleLanguage } = useLanguage();

    return (

        <>

            <section id="main" className='section'>

                <div className="fondo" style={{ backgroundImage: "url('fondo2.jpg')" }}></div>
                
                <p> { language ? 'I´m a' : 'Soy' } <br /><span>{ language ? 'Frontend Developer' : 'Desarrollador Frontend' }</span></p>
            
            </section>
        
        </>
  
    )

}



export default Main
