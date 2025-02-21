import "./ApplicationsSection.css";

import applicationsSectionImg1 from "../../../../assets/homePage/ApplicationsSection/1.jpg";
import applicationsSectionImg2 from "../../../../assets/homePage/ApplicationsSection/2.jpg";
import applicationsSectionImg3 from "../../../../assets/homePage/ApplicationsSection/3.jpg";
import applicationsSectionImg4 from "../../../../assets/homePage/ApplicationsSection/4.jpg";
import applicationsSectionImg5 from "../../../../assets/homePage/ApplicationsSection/5.jpg";
import applicationsSectionImg6 from "../../../../assets/homePage/ApplicationsSection/6.jpg";
import applicationsSectionImg7 from "../../../../assets/homePage/ApplicationsSection/7.jpg";
import applicationsSectionImg8 from "../../../../assets/homePage/ApplicationsSection/8.jpg";

export default function ApplicationsSection() {
  return (
    <div className="applications-section">
      <div className="applications-section-item">
        <div className="applications-section-item-img">
          <img src={applicationsSectionImg4} />
        </div>
        <div className="applications-section-item-text">
          <span className="applications-section-item-title">Componentes para el Sector Eléctrico</span>
          <span className="applications-section-item-description">
            Fabricación de tapas, cubiertas y palancas de fuerza para tableros eléctricos industriales.
          </span>
        </div>
      </div>
      <div className="applications-section-item">
        <div className="applications-section-item-img">
          <img src={applicationsSectionImg7} />
        </div>
        <div className="applications-section-item-text">
          <span className="applications-section-item-title">Fixtures y Herramientas para Ensambles</span>
          <span className="applications-section-item-description">
            Diseño e impresión de fixtures personalizados para agilizar procesos de ensamblaje en líneas de producción.
          </span>
        </div>
        <span className="applications-section-item-feature">
          Nuevo
        </span>
      </div>
      <div className="applications-section-item">
        <div className="applications-section-item-img">
          <img src={applicationsSectionImg8} />
        </div>
        <div className="applications-section-item-text">
          <span className="applications-section-item-title">Piezas de Reemplazo</span>
          <span className="applications-section-item-description">
            Producción de repuestos difíciles de conseguir o descontinuados mediante ingeniería inversa.
          </span>
        </div>
      </div>
      <div className="applications-section-item">
        <div className="applications-section-item-img">
          <img src={applicationsSectionImg5} />
        </div>
        <div className="applications-section-item-text">
          <span className="applications-section-item-title">Producción en Pequeñas Series</span>
          <span className="applications-section-item-description">
            Fabricación de lotes pequeños sin necesidad de moldes costosos, ideal para pruebas y validaciones antes de producción en masa.
          </span>
        </div>
      </div>
      <div className="applications-section-item">
        <div className="applications-section-item-img">
          <img src={applicationsSectionImg1} />
        </div>
        <div className="applications-section-item-text">
          <span className="applications-section-item-title">Prototipos y Desarrollo de Productos</span>
          <span className="applications-section-item-description">
            Creación de prototipos funcionales y modelos de prueba antes de la producción final.
          </span>
        </div>
        <span className="applications-section-item-feature">
          Nuevo
        </span>
      </div>
    </div>
  );
}
