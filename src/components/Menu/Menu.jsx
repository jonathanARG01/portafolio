import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useLanguage } from './../../LanguageContext.jsx';

import './Menu.css';



function Menu() {
    
    const { language, toggleLanguage } = useLanguage();
    
    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            
            <Container>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    <Nav className="m-auto">
                        
                        <Nav.Link href="#main">       { language ? 'Main'       : 'Inicio'      } </Nav.Link>
                        <Nav.Link href="#about">      { language ? 'About'      : 'Nosotros'    } </Nav.Link>
                        <Nav.Link href="#skills">     { language ? 'Skills'     : 'Habilidades' } </Nav.Link>
                        <Nav.Link href="#experience"> { language ? 'Experience' : 'Experiencia' } </Nav.Link>
                        <Nav.Link href="#portfolio">  { language ? 'Portfolio'  : 'Portafolio'  } </Nav.Link>
                        <Nav.Link href="#contact">    { language ? 'Contact'    : 'Contacto'    } </Nav.Link>

                    </Nav>

                </Navbar.Collapse>

            </Container>

            <ul className='languages'>
                <li>
                    <button onClick={ toggleLanguage } className={ language ? '' : 'active' }>
                        <img src="es.png" alt="es" />
                    </button>
                </li>
                <li>
                    <button onClick={ toggleLanguage } className={ language ? 'active' : '' }>
                        <img src="en.png" alt="en" />
                    </button>
                </li>
            </ul>

        </Navbar>

    )

}



export default Menu;