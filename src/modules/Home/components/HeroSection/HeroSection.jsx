import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./HeroSection.css";

import fixture from "../../../../assets/homePage/HeroSection/fixtures.png";

import client1 from "../../../../assets/homePage/clients/fis.png";
import client2 from "../../../../assets/homePage/clients/hemaq.jpg";
import client3 from "../../../../assets/homePage/clients/maquinso.png";
import client4 from "../../../../assets/homePage/clients/otomatiqa.jpg";
import client5 from "../../../../assets/homePage/clients/rodarasesores.png";
import client6 from "../../../../assets/homePage/clients/sertecpro.png";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-section-info">
        <div className="hero-section-info-container">
          <div className="hero-section-info-text">
            <h1>Impresión 3D</h1><h1>Monterrey</h1>
            <h2>Gusto por crear.</h2>
            <div className="hero-section-info-buttons">
              <CustomButton
                type="primary"
                onClick={() => navigate("/cotizador/cotizar-impresion")}
              >
                Cotiza ya {`>`}
              </CustomButton>
              <CustomButton
                type="secondary"
                outlined
                onClick={() => navigate("/contacto")}
              >
                Contacto {`>`}
              </CustomButton>
            </div>
          </div>
          <div className="hero-section-info-cards">
            <div className="hero-section-info-card">
              <span className="hero-section-info-card-top">40+</span>
              <span className="hero-section-info-card-bottom">
                Empresas que confían en nosotros
              </span>
            </div>
            <div className="hero-section-info-card">
              <span className="hero-section-info-card-top">300+</span>
              <span className="hero-section-info-card-bottom">
                Pedidos realizados
              </span>
            </div>
            <div className="hero-section-info-card">
              <span className="hero-section-info-card-top">Hasta <br/>50%</span>
              <span className="hero-section-info-card-bottom">
                De ahorro en proyectos
              </span>
            </div>
            <div
              className="hero-section-info-card" id="hero-section-info-card-marquee-container"
            >
              <div className="hero-section-info-card-marquee">
                <div className="hero-section-info-card-marquee-content">
                  <div className="hero-section-info-card-marquee-item"><img src={client1} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client2} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client3} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client4} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client5} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client6} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client1} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client2} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client3} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client4} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client5} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client6} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client1} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client2} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client3} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client4} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client5} /></div>
                  <div className="hero-section-info-card-marquee-item"><img src={client6} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-img">
        <img src={fixture} alt="fixture" />
      </div>
    </div>
  );
}
