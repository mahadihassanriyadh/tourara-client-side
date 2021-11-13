import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useVacationPackages from '../../../hooks/useVacationPackages';
import VacationPackage from '../VacationPackage/VacationPackage';

const VacationPackages = () => {
    const { vacationPackages } = useVacationPackages();
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-3">Vacation Packages</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    vacationPackages.slice(2).map(vacationPackage => <VacationPackage
                        key={vacationPackage._id}
                        vacationPackage={vacationPackage}
                    ></VacationPackage>)
            ))}
            </Row>
            <Link to="/vacationPackages"><Button variant="secondary" className="btn-lg mt-3">Load More Vacation Packages</Button></Link>
        </div>
    );
};

export default VacationPackages;