import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import './Banner.css';



const Banner = () => {
    return (
        <Carousel fade className="slide container-fluid" >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tiblisi, Georgia</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Maldives</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Hagia sophia, Turkey</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;