import './HomePage2.css'
import './bootstrap.css'
import { Link } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../assets/homePage/p1s-farm.png';
import CarouselImg2 from '../../assets/homePage/p1s-inside.jpg';
import CarouselImg3 from '../../assets/homePage/carousel3.jpg';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MaterialDisplay1 from '../../assets/homePage/pla.jpg';
import MaterialDisplay2 from '../../assets/homePage/abs.jpg';
import MaterialDisplay3 from '../../assets/homePage/petgcf.jpg';
import MaterialDisplay4 from '../../assets/homePage/petg.jpg';
import MaterialDisplay5 from '../../assets/homePage/tpu.jpg';

import Client1 from '../../assets/homePage/clients/fis.png';
import Client2 from '../../assets/homePage/clients/maquinso.png';
import Client3 from '../../assets/homePage/clients/otomatiqa.jpg';
import Client4 from '../../assets/homePage/clients/hemaq.jpg';
import Client5 from '../../assets/homePage/clients/sertecpro.png';
import HomeClientsBg from '../../assets/homePage/bg.jpg';


// import home_img from '../../assets/homePage/p1s-farm.png';

function HomePage2(){
    return (
        <body className='home'>
            <div className='home-carousel'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 home-img"
                            src={CarouselImg1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Impresión 3D Monterrey</h3>
                        <p>Servicio de impresión 3d en diversos materiales como PLA, ABS, PETG, PETG-CF y TPU.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 home-img"
                            src={CarouselImg2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Servicio personalizado</h3>
                        <p>Ofrecemos un servicio personalizado y rápido.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 home-img"
                            src={CarouselImg3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Orgullosamente Regios</h3>
                        <p>
                            Negocio 100% Regio, orgullosos de ser de Monterrey, Nuevo León, México.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <h1 id='home-title-separator'>Nuestros materiales</h1>

            <div className='home-materials'>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MaterialDisplay1} />
                            <Card.Body>
                            <Card.Title>PLA</Card.Title>
                            <Card.Text>
                                El PLA es un plástico de bajo costo, perfecto para prototipos y piezas funcionales.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MaterialDisplay2} />
                            <Card.Body>
                            <Card.Title>ABS</Card.Title>
                            <Card.Text>
                                El ABS es un polímero económico, ideal para piezas que requieran resistencia mecánica.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MaterialDisplay3} />
                            <Card.Body>
                            <Card.Title>PETG-CF</Card.Title>
                            <Card.Text>
                                El PETG-CF es un polímero endurecido con Fibra de Carbono, ideal para piezas que requieran resistencia mecánica y térmica.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MaterialDisplay4} />
                            <Card.Body>
                            <Card.Title>PETG</Card.Title>
                            <Card.Text>
                                El PETG es un polímero perfecto para desarrollar piezas que requieran de una gran fuerza de impacto y condiciones al aire libre.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={MaterialDisplay5} />
                            <Card.Body>
                            <Card.Title>TPU</Card.Title>
                            <Card.Text>
                                El TPU también llamado Poliuretano Termoplástico es un polímero excelente para aplicaciones que requieran de elasticidad, debido a que permite que la pieza se estire y regrese a su forma original.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <h1 id='home-title-separator'>Nuestros clientes</h1>

            <div className='home-clients'>
                <div id='home-clients-bg'/>
                <div className='home-clients-container'>
                    <img src={Client1}/>
                    <img src={Client2}/>
                    <img src={Client3}/>
                    <img src={Client4}/>
                    <img src={Client5}/>
                </div>
            </div>

            <h1 id='home-title-separator'>Contacto</h1>

            <div className='home-contact'>
                
            </div>

        </body>
    )
}

export default HomePage2;