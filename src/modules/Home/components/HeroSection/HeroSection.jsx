import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./HeroSection.css";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="hero-section">
      <div className="hero-section-info">
        <div className="hero-section-info-container">
          <div className="hero-section-info-text">
            <h1>Impresión 3D Monterrey</h1>
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
              <span className="hero-section-info-card-top">Hasta 50%</span>
              <span className="hero-section-info-card-bottom">
                De ahorro en proyectos
              </span>
            </div>
            <div
              className="hero-section-info-card"
              style={{ gridColumn: "1 / 4", gridRow: "3 / 4" }}
            >
              <div className="hero-section-info-card-marquee">
                <div className="hero-section-info-card-marquee-content">
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                  <div className="hero-section-info-card-marquee-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
