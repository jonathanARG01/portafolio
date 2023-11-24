import React from 'react';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

import './Skill.css';


const Skill = ({ name, type, profile, img }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    return (
    
        <>
            <div className="skill" variant="primary" skill={ name }>
                <h6> { name }</h6>
                <img src={ img } alt={ name } />
            </div>

            <Offcanvas show={show} onHide={handleClose} skill={ name }>
                
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> { name } </Offcanvas.Title>
                </Offcanvas.Header>
                
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>

            </Offcanvas>

        </>

    )

}



export default Skill;
