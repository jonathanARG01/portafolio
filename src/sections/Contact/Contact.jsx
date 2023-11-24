import React from 'react'
import { useLanguage } from './../../LanguageContext.jsx';

import Title from '../../components/Title/Title'

import './Contact.css';



const Contact = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        
        <>
    
            <section id='contact' className='section'>

                <Title title={ language ? 'Contact Me' : 'Contáctame' } />

                <div className="container-contact">

                    <div>
                        <img src="movil.png" alt="movil" />
                        <a href="tel:+56941497083">+569 41497083</a>
                    </div>

                    <div>
                        <img src="email.png" alt="email" />
                        <a href="mailto:jonathansw01@gmail.com">jonathansw01@gmail.com</a>
                    </div>

                </div>

            </section>

        </>

    )

}



export default Contact
