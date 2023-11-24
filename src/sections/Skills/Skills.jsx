import React from 'react';
import { useLanguage } from './../../LanguageContext.jsx';

import Title from '../../components/Title/Title';

import Skill from '../../components/Skill/Skill';

import './Skills.css';



const dataSkills = [
    {
        name: 'HTML',
        type: '',
        profile: 'frontend',
        img: 'html.png'
    },
    {
        name: 'CSS',
        type: '',
        profile: 'frontend',
        img: 'css.png'
    },
    {
        name: 'Javascript',
        type: '',
        profile: 'frontend',
        img: 'javascript.png'
    },
    {
        name: 'Angular',
        type: '',
        profile: 'frontend',
        img: 'angular.png'
    },
    {
        name: 'React',
        type: '',
        profile: 'frontend',
        img: 'react.png'
    },
    {
        name: 'Vue',
        type: '',
        profile: 'frontend',
        img: 'vue.png'
    },
    {
        name: 'Node',
        type: '',
        profile: 'backend',
        img: 'node.png'
    },
    {
        name: 'Bulma',
        type: '',
        profile: 'frontend',
        img: 'bulma.png'
    },
    {
        name: 'Bootstrap',
        type: '',
        profile: 'frontend',
        img: 'bootstrap.png'
    },
    {
        name: 'Mongo',
        type: 'bbdd',
        profile: 'backend',
        img: 'mongo.png'
    },
    {
        name: 'Git',
        type: '',
        profile: '',
        img: 'git.png'
    },
    {
        name: 'Sass',
        type: '',
        profile: 'frontend',
        img: 'sass.png'
    },
    {
        name: 'Less',
        type: '',
        profile: 'frontend',
        img: 'less.png'
    },
    {
        name: 'Ionic',
        type: '',
        profile: 'Mobile',
        img: 'ionic.png'
    },
    {
        name: 'Wordpress',
        type: '',
        profile: 'frontend',
        img: 'wordpress.png'
    }
];



const Skills = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
    
        <>

            <section id='skills' className='section'>

                <Title title={ language ? 'My Skills' : 'Mis habilidades' } />

                <div className="container-skills">
                    {
                        dataSkills.map( ( skill, index ) => (
                            <Skill key={ index } name={ skill.name } type={ skill.type } profile={ skill.profile } img={ skill.img } />
                        ))
                    }
                </div>

            </section>

        </>
  
    )

}



export default Skills;

       
