import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import img1 from '../assets/images/img1.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';


const html = 80;
const res = 95;
const photoshop = 60;

export default function AppAbout() {
    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                    <div className='subtitle'>Learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}><Image src={img1} /></Col>

                    <Col sm={6}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatem vel accusantium maxime impedit odit, ipsa, aspernatur, est nobis quasi rerum itaque ducimus? Officia, quibusdam! Perspiciatis porro distinctio mollitia rerum.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestias odit itaque aliquid corrupti inventore distinctio sed, cupiditate necessitatibus sapiente sit velit fugiat, placeat quam nulla explicabo. Nulla, excepturi.</p>

                        <div className='progress-block'>
                            <h4>HTML / CSS / JAVASCRIPT</h4>
                            <ProgressBar now={html} label={`${html}%`} />
                        </div>

                        <div className='progress-block'>
                            <h4>RESPONSIVE</h4>
                            <ProgressBar now={res} label={`${res}%`} />
                        </div>

                        <div className='progress-block'>
                            <h4>PHOTOSHOP</h4>
                            <ProgressBar now={photoshop} label={`${photoshop}%`} />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}
