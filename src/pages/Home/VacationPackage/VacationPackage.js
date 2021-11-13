import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VacationPackage = ({ vacationPackage }) => {
    const { name, price, description, img, type, _id } = vacationPackage;
    const vacationPackageDetailUrl = `/vacationPackageDetails/${_id}`
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <div>
                            <div>
                                <Card.Title title={name}>{name?.substring(0, 20)}</Card.Title>
                                <Card.Text title={description}>
                                {description?.substring(0, 100)} . . .
                                </Card.Text>
                            </div>
                            <div>
                                <Card.Text className="fs-5 text-danger mb-1 fw-bold">
                                    Price: { price }$
                                </Card.Text>
                                <Card.Text className="fs-6 mt-0">
                                    Type: { type }
                                </Card.Text>
                                <Link to={vacationPackageDetailUrl}><Button variant="dark">Place Order</Button></Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default VacationPackage;