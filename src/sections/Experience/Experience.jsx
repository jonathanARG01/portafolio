import React from 'react'
import { useLanguage } from './../../LanguageContext.jsx';

import Title from '../../components/Title/Title'

import './Experience.css';



const Experience = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        
        <>

            <section id='experience' className='section'>

                <Title title={ language ? 'My Experience' : 'Mi experiencia' }/>

                <div className="row">

                    <div className="col-md-6 d-flex">
                        <div className="box-experience">
                            <h5>{ language ? 'WANT – Digital web design and development agency' : 'WANT – Agencia digital de diseño y Desarrollo web'}.</h5>
                            <h6>{ language ? 'March 2019 – December 2020' : 'Marzo 2019 – Diciembre 2020' }</h6>
                           
                            <p>
                                { language ? 'During my time at WANT agency, initially as an intern and later as a full-time employee, I played the role of a frontend developer. During this period, I worked with various multidisciplinary teams to carry out high-quality web projects.' : 'Durante mi tiempo en la agencia WANT, inicialmente como pasante y posteriormente como empleado a tiempo completo, desempeñé el papel de desarrollador frontend. Durante este período, trabajé con diversos equipos multidisciplinarios para llevar a cabo proyectos web de alta calidad.' }
                                
                                <br />
                                { language ? 'My main responsibilities and accomplishments in this position included: ' : 'Mis principales responsabilidades y logros en esta posición incluyeron: ' }
                                
                                <br /><br />
                                <span>{ language ? 'Website and Landing Page Development' : 'Desarrollo de Sitios Web y Landing Pages' }: </span>
                                { language ? 'I was responsible for the layout and development of various websites and landing pages. These projects spanned different industries and required customized solutions to meet specific client objectives.' : 'Fui responsable de la maquetación y desarrollo de diversos sitios web y landing pages. Estos proyectos abarcaron diferentes industrias y requerían soluciones personalizadas para cumplir con los objetivos específicos de los clientes.' } 
                                
                                <br />
                                <span>{ language ? 'Email Development (Mailing)' : 'Desarrollo de Correos Electrónicos (Mailing)' }:</span>
                                { language ? 'Ensured promotional and transactional emails were visually appealing and highly functional across a variety of email platforms.' : 'Aseguré que los correos electrónicos promocionales y transaccionales fueran visualmente atractivos y altamente funcionales en una variedad de plataformas de correo electrónico.' }
                                
                                <br />
                                <span>{ language ? 'Used technology' : 'Tecnologías Utilizadas' }:</span>
                                { language ? 'During my time at WANT, I worked with a number of key technologies including WordPress, HTML, CSS, SASS, JavaScript, jQuery and Bootstrap. These tools allowed me to create highly interactive and responsive websites.' : 'Durante mi tiempo en WANT, trabajé con una serie de tecnologías clave que incluyeron WordPress, HTML, CSS, SASS, JavaScript, jQuery y Bootstrap. Estas herramientas me permitieron crear sitios web altamente interactivos y receptivos.' }
                                
                                <br />
                                <span>{ language ? 'Multidisciplinary Collaboration' : 'Colaboración Multidisciplinaria' }:</span>
                                { language ? 'Worked with teams of backend developers to integrate third-party APIs and ensure smooth operation of applications. Additionally, I worked closely with designers, who provided their designs in formats such as Adobe XD and Photoshop, ensuring faithful implementation of creative visions.' : 'Trabajé con equipos de desarrolladores backend para integrar APIs de terceros y garantizar un funcionamiento fluido de las aplicaciones. Además, trabajé en estrecha colaboración con diseñadores, quienes proporcionaron sus diseños en formatos como Adobe XD y Photoshop, asegurando una implementación fiel de las visiones creativas' }.
                            </p>

                        </div>
                    </div>

                    <div className="col-md-6 d-flex">
                        <div className="box-experience">
                            <h5>NEXTPERIENCE - FUSION</h5>
                            <h6>{ language ? 'June 2021 – September 2023' : 'Junio 2021 – Septiembre 2023' }</h6>
                            <p>
                                { language ? 'In my second experience as a frontend developer, I was hired directly and joined a team of about 7 people, which included both frontend and backend developers. Initially, my role focused on contributing to the development of frontend projects alongside my colleagues, but over time, due to changes in team dynamics, I became the sole frontend developer.' : 'En mi segunda experiencia como desarrollador frontend, fui contratado directamente y me uní a un equipo compuesto por aproximadamente 7 personas, que incluía tanto desarrolladores frontend como backend. Inicialmente, mi función se centró en contribuir al desarrollo de proyectos frontend junto con mis colegas, pero con el tiempo, debido a cambios en la dinámica del equipo, me convertí en el único desarrollador frontend' }.
                                <br />
                                { language ? 'During this period, my skillset expanded significantly as I worked with a wide range of technologies and tools. As I took on the responsibility of being the only frontend developer on the team, I was more frequently asked to provide development time estimates and recommendations on the most appropriate technologies to address specific projects. In recognition of my speed and ability to deliver high-quality developments, I was honored with an award from the team.' : 'Durante este período, mi conjunto de habilidades se amplió significativamente, ya que trabajé con una amplia gama de tecnologías y herramientas. A medida que asumía la responsabilidad de ser el único desarrollador frontend en el equipo, se me solicitaba con mayor frecuencia que proporcionara estimaciones de tiempo para el desarrollo y recomendaciones sobre las tecnologías más apropiadas para abordar proyectos específicos. En reconocimiento a mi rapidez y capacidad para ofrecer desarrollos de alta calidad, fui honrado con un premio por parte del equipo.' }
                                <br />
                                { language ? 'This experience allowed me to consolidate my skills in frontend development and I am excited to apply these skills in future challenges and projects that demand quality and efficiency.' : 'Esta experiencia me permitió consolidar mis habilidades en desarrollo frontend y estoy entusiasmado por aplicar estas habilidades en desafíos futuros y proyectos que demanden calidad y eficiencia' }.
                            </p>
                        </div>
                    </div>

                </div>

            </section>
        
        </>
    
    )

}



export default Experience
