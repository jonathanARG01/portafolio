import React from 'react';
import { useLanguage } from './../../LanguageContext.jsx';

import Title from '../../components/Title/Title';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './Portfolio.css';

import sites from './../../sites.json';



const Portfolio = () => {
    
	const { language, toggleLanguage } = useLanguage();

    const uniqueTypes        = [...new Set(sites.map((site) => site.type))];
    const uniqueTechnologies = [...new Set(sites.flatMap((site) => site.tech))];


  	return (

		<>

			<section id='portfolio' className='section'>
		
				<Title title={ language ? 'My Portfolio' : 'Mi portafolio' } />

				<Tabs
					defaultActiveKey={uniqueTypes[0]}
					id='uncontrolled-tab-example'
					className='mb-3'>

					{ uniqueTypes.map((type) => (
						
						<Tab key={type} eventKey={type} title={type}>
						
							<Row>
								
								{sites
								.filter((site) => site.type === type)
								.map((site, index) => (
								
									<Col key={index} className='mb-5' xs={12} sm={6} md={4} lg={3}>
									
										<a href={site.url} target='_blank' className='box-project'>
											<h2 className='box-project-title'>{site.name}</h2>
											<img className='img' src={site.img} alt='page' />
											<div className='box-project-technologies'>
												{site.tech.map((tech, techIndex) => (
													<img
													key={techIndex}
													src={`${tech.toLowerCase()}.png`}
													alt='technology'/>
												))}
											</div>
										</a>

									</Col>

								))}

							</Row>

						</Tab>

					))}

					{ uniqueTechnologies.map((technology) => (
					
						<Tab key={technology} eventKey={technology} title={technology}>
							
							<Row>
							
								{ sites
								.filter((site) => site.tech.includes(technology))
								.map((site, index) => (
									
									<Col key={index} className='mb-5' xs={12} sm={6} md={4} lg={3}>
									
										<a href={site.url} target='_blank' className='box-project'>
											<h2 className='box-project-title'>{site.name}</h2>
											<img className='img' src={site.img} alt='page' />
											<div className='box-project-technologies'>
											{site.tech.map((tech, techIndex) => (
												<img
												key={techIndex}
												src={`${tech.toLowerCase()}.png`}
												alt='technology'
												/>
											))}
											</div>
										</a>

									</Col>
								
								))}

							</Row>

						</Tab>
				
					))}
				
				</Tabs>

			</section>

		</>

	);

};



export default Portfolio;
