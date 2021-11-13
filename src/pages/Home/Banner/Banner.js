import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/Banner1.jpg';
import banner2 from '../../../images/banners/Banner2.jpg';
import banner3 from '../../../images/banners/Banner3.jpg';

const Banner = () => {
    return (
        <div className="container mt-3">
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Dream City</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Keramisu Hill</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Paramin Heaven</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;