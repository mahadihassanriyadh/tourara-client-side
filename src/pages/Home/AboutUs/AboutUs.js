import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutUsImg from '../../../images/AboutUs/AboutUs.jpg' 

const AboutUs = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Row xs={1} md={2} className="bg-light mt-5 p-3 container">     
            <Col>
                <img className="img-fluid" src={aboutUsImg} alt="" />
            </Col>

            <Col className="d-flex flex-column justify-content-center ">
                <h2>About Us</h2>
                <p className="text-start p-3">Tourara is one of few travel companies in Bangladesh working on the field of sustainable tourism. We empower communities with tourism. Tourara provides tour services in collaboration with the local community. You’ll get a chance to stay with the local community, experience new culture, lifestyle. With Tourara, travelers will get a chance to experience Bangladesh in a new way.</p>
            </Col>
            </Row>
        </div>
    );
};

export default AboutUs;