import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error404 from '../../images/NotFound/error404.jpg'
const NotFound = () => {
    return (
        <div className="container">
            <img className="w-100 mb-5" src={error404} alt="" />
            <Link to="/home"><Button variant="dark"  className="mb-5 btn-lg">Return Home</Button></Link>
        </div>
        
    );
};

export default NotFound;