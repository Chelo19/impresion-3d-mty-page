import './HomePage2.css'
import './bootstrap.css'
import './responsive.css'
import './style.css'
import './font-awesome.css'
import homePageCarrouselSliderImg from '../../assets/homePage/slider-img.png';
import homePageCarrouselS1 from '../../assets/homePage/s1.png';
import homePageCarrouselS2 from '../../assets/homePage/s2.png';
import homePageCarrouselS3 from '../../assets/homePage/s3.png';
import homePageCarrouselS4 from '../../assets/homePage/s4.png';
import homePageCarrouselAboutImg from '../../assets/homePage/about-img.png';
import homePageCarrouselCase1 from '../../assets/homePage/case-1.jpg';
import homePageCarrouselCase2 from '../../assets/homePage/case-2.jpg';
import homePageCarrouselClient from '../../assets/homePage/client.jpg';
import { Link } from 'react-router-dom'

function HomePage2(){
    return (
    <body>
        <div className="hero_area">
            <section className="slider_section ">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="img-box">
                            <img src={homePageCarrouselSliderImg} alt=""/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="detail-box">
                            <h1>
                            Imprimimos tus piezas
                            </h1>
                            <p>
                            Impresión 3D es un negocio que proporciona un servicio de impresión 3D de alta calidad para todo tipo de piezas
                            </p>
                            <div className="btn-box">
                            <Link to={'/materiales'} className="btn1">
                               Materiales
                            </Link>
                            <Link to={'/upload-file'} className="btn1" id='cotizar'>
                                Cotizar ahora
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="img-box">
                            <img src={homePageCarrouselSliderImg} alt=""/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="detail-box">
                            <h1>
                            Digital Marketing Experts
                            </h1>
                            <p>
                            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                            </p>
                            <div className="btn-box">
                            <a href="" className="btn1">
                                Contact Us
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="img-box">
                            <img src={homePageCarrouselSliderImg} alt=""/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="detail-box">
                            <h1>
                            Digital Marketing Experts
                            </h1>
                            <p>
                            Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                            </p>
                            <div className="btn-box">
                            <a href="" className="btn1">
                                Contact Us
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* <ol className="carousel-indicators">
                <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol> */}
            </div>

            </section>
        </div>

        <section className="service_section layout_padding">
            <div className="container">
            <div className="heading_container">
                <h2>
                Our Services
                </h2>
                <p>
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-3">
                <div className="box">
                    <div className="img-box">
                    <img src={homePageCarrouselS1} alt=""/>
                    </div>
                    <div className="detail-box">
                    <h5>
                        Link Building
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <a href="">
                        <span>
                        Read More
                        </span>
                        <i className="fa" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="box">
                    <div className="img-box">
                    <img src={homePageCarrouselS2} alt=""/>
                    </div>
                    <div className="detail-box">
                    <h5>
                        On page SEO
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <a href="">
                        <span>
                        Read More
                        </span>
                        <i className="fa" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="box">
                    <div className="img-box">
                    <img src={homePageCarrouselS3} alt=""/>
                    </div>
                    <div className="detail-box">
                    <h5>
                        Online Marketing
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <a href="">
                        <span>
                        Read More
                        </span>
                        <i className="fa" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="box">
                    <div className="img-box">
                    <img src={homePageCarrouselS4} alt=""/>
                    </div>
                    <div className="detail-box">
                    <h5>
                        Email Marketing
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>
                    <a href="">
                        <span>
                        Read More
                        </span>
                        <i className="fa" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="btn-box">
                <a href="">
                View More
                </a>
            </div>
            </div>
        </section>

        <section className="about_section layout_padding">
            <div className="container  ">
            <div className="row">
                <div className="col-md-6">
                <div className="detail-box">
                    <div className="heading_container">
                    <h2>
                        About Us
                    </h2>
                    </div>
                    <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                    are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                    the middle of text. All
                    </p>
                    <a href="">
                    Read More
                    </a>
                </div>
                </div>
                <div className="col-md-6 ">
                <div className="img-box">
                    <img src={homePageCarrouselAboutImg} alt=""/>
                </div>
                </div>

            </div>
            </div>
        </section>

        <section className="case_section layout_padding">
            <div className="container">
            <div className="heading_container">
                <h2>
                Our Case Studies
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="box">
                    <div className="img-box">
                    <img src={homePageCarrouselCase1} alt=""/>
                    </div>
                    <div className="detail-box">
                    <h5>
                        Sit amet consectetur adipisicing elit
                    </h5>
                    <p>
                        Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <a href="">
                        <span>
                        Read More
                        </span>
                        <i className="fa" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                <div className="box">
                    <div className="img-box">
                    <img src={homePageCarrouselCase2} alt=""/>
                    </div>
                    <div className="detail-box">
                    <h5>
                        Excepturi placeat nihil eos maxime
                    </h5>
                    <p>
                        Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <a href="">
                        <span>
                        Read More
                        </span>
                        <i className="fa" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="client_section ">
            <div className="container">
            <div className="heading_container heading_center">
                <h2>
                Testimonial
                </h2>
            </div>
            </div>
            <div id="customCarousel2" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <div className="container">
                    <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="box">
                        <div className="img-box">
                            <img src={homePageCarrouselClient} alt=""/>
                        </div>
                        <div className="detail-box">
                            <div className="client_info">
                            <div className="client_name">
                                <h5>
                                Morojink
                                </h5>
                                <h6>
                                Customer
                                </h6>
                            </div>
                            <i className="fa" aria-hidden="true"></i>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugia
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container">
                    <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="box">
                        <div className="img-box">
                            <img src={homePageCarrouselClient} alt=""/>
                        </div>
                        <div className="detail-box">
                            <div className="client_info">
                            <div className="client_name">
                                <h5>
                                Morojink
                                </h5>
                                <h6>
                                Customer
                                </h6>
                            </div>
                            <i className="fa" aria-hidden="true"></i>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugia
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="carousel-item">
                <div className="container">
                    <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="box">
                        <div className="img-box">
                            <img src={homePageCarrouselClient} alt=""/>
                        </div>
                        <div className="detail-box">
                            <div className="client_info">
                            <div className="client_name">
                                <h5>
                                Morojink
                                </h5>
                                <h6>
                                Customer
                                </h6>
                            </div>
                            <i className="fa" aria-hidden="true"></i>
                            </div>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                            dolore eu fugia
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* <ol className="carousel-indicators">
                <li data-target="#customCarousel2" data-slide-to="0" className="active"></li>
                <li data-target="#customCarousel2" data-slide-to="1"></li>
                <li data-target="#customCarousel2" data-slide-to="2"></li>
            </ol> */}
            </div>
        </section>


        <section className="contact_section layout_padding">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 col-lg-4 offset-md-1">
                <div className="form_container">
                    <div className="heading_container">
                    <h2>
                        Request A Call back
                    </h2>
                    </div>
                    <form action="">
                    <div>
                        <input type="text" placeholder="Full Name " />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone number" />
                    </div>
                    <div>
                        <input type="text" className="message-box" placeholder="Message" />
                    </div>
                    <div className="d-flex ">
                        <button>
                        SEND
                        </button>
                    </div>
                    </form>
                </div>
                </div>
                <div className="col-md-6 col-lg-7 px-0">
                <div className="map_container">
                    <div className="map">
                    <div id="googleMap"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>


    </body>
    )
}

export default HomePage2;