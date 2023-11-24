import React from 'react';
import { useLanguage } from './../../LanguageContext.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import Title from '../../components/Title/Title';

import './About.css';



const About = () => {

    const { language, toggleLanguage } = useLanguage();

    return (

        <>
            
            <section id='about' className='section'>

                <Title title={ language ? 'About Me' : 'Sobre mi' } />

                <Container>

                    <Row>

                        <Col xs={12} lg={6} className='d-flex justify-content-center align-items-center'>
                            <img className='yo' src="yo.png" alt="jonathan" />
                        </Col>

                        <Col xs={12} lg={6}>
                            <h6>
                                { language ? 'My name is' : 'Mi nombre es' } <span>Jonathan Rojas</span>
                            </h6>
                            <p>
                                { language ? 'FrontEnd developer with 5 years of experience in web development. Strong in creating attractive and efficient user interfaces using the latest tools and technologies available, I am highly skilled in creating highly interactive and responsive websites that provide an excellent user experience.' : 'Desarrollador FrontEnd con 5 años de experiencia en desarrollo web. Fuerte en la creación de interfaces de usuario atractivas y eficientes utilizando las últimas herramientas y tecnologías disponibles, soy altamente capacitado en la creación de sitios web altamente interactivos y responsivos que brindan una excelente experiencia de usuario.' }
                            </p>

                            <Table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h5>{ language ? 'Name' : 'Nombre' }</h5>
                                            <h6>Jonathan Rojas</h6>
                                        </td>
                                        <td>
                                            <h5>{ language ? 'Country' : 'País' }</h5>
                                            <h6>{ language ? 'Chili' : 'Chile' }</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>{ language ? 'Age' : 'Edad' }</h5>
                                            <h6>30</h6>
                                        </td>
                                        <td>
                                            <h5>{ language ? 'Years of experience' : 'Años de experiencia' }</h5>
                                            <h6>5</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h5>{ language ? 'Phone' : 'Teléfono' }</h5>
                                            <h6>
                                                <a href="tel:+56941497083">+569 41497083</a>
                                            </h6>
                                        </td>
                                        <td>
                                            <h5>{ language ? 'Email' : 'Correo' }</h5>
                                            <h6>
                                                <a href="mailto:jonathansw01@gmail.com">jonathansw01@gmail.com</a>
                                            </h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="linkedin.png" alt="linkedin" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="github.png" alt="github" />
                                    </a>
                                </li>
                            </ul>
                            
                        </Col>
                    
                    </Row>

                </Container>
            
            </section>

        </>

    )

}



export default About;
