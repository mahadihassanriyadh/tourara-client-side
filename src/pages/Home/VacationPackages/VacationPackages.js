import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useVacationPackages from '../../../hooks/useVacationPackages';
import VacationPackage from '../VacationPackage/VacationPackage';

const VacationPackages = () => {
    const { vacationPackages } = useVacationPackages();
    if (vacationPackages.length === 0) {
        return (
            <div>
                <Spinner animation="grow"></Spinner>
            </div>
        )
    }
    return (
        <div className="container mt-5 mb-5">
            <h1 className="mb-3">Vacation Packages</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    vacationPackages?.map(vacationPackage => <VacationPackage
                        key={vacationPackage._id}
                        vacationPackage={vacationPackage}
                    ></VacationPackage>)
            ))}
            </Row>
        </div>
    );
};

export default VacationPackages;