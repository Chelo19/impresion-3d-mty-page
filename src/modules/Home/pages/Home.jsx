import { useNavigate } from 'react-router-dom';
import './Home.css';

import Gallery from '../components/Gallery/Gallery';
import Instructions from '../components/Instructions/Instructions';
import WhySection from '../components/WhySection/WhySection';
import galleryImg1 from "../../../assets/gallery_img_1.jpg";
import galleryImg2 from "../../../assets/gallery_img_2.jpg";
import galleryImg3 from "../../../assets/gallery_img_3.jpg";
import galleryImg4 from "../../../assets/gallery_img_4.jpg";
import galleryImg5 from "../../../assets/gallery_img_5.jpg";
import galleryImg6 from "../../../assets/gallery_img_6.jpg";
import client1 from "../../../assets/homePage/clients/fis.png";
import client2 from "../../../assets/homePage/clients/hemaq.jpg";
import client3 from "../../../assets/homePage/clients/maquinso.png";
import client4 from "../../../assets/homePage/clients/otomatiqa.jpg";
import client5 from "../../../assets/homePage/clients/rodarasesores.png";
import client6 from "../../../assets/homePage/clients/sertecpro.png";
import HeroSection from '../components/HeroSection/HeroSection';
import ApplicationsSection from '../components/ApplicationsSection/ApplicationsSection';
import CtaSection from '../components/CtaSection/CtaSection';

export default function Home(){
    const jobGallery = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg1, galleryImg2];
    const clientGallery = [client1, client2, client3, client4, client5, client6];

    const navigate = useNavigate();

    return (
        <div className='home'>
            <HeroSection/>
            <h1 className='home-title'>Aplicaciones</h1>
            <ApplicationsSection/>
            <h1 className='home-title'>Nuestro trabajo</h1>
            <Gallery imgArray={jobGallery}/>
            <h1 className='home-title'>¿Cómo funciona una cotización con nosotros?</h1>
            <Instructions/>
            <WhySection/>
            <CtaSection/>
            {/* <Gallery imgArray={clientGallery}/> */}
        </div>
    )
}