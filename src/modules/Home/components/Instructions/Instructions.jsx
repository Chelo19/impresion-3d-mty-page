import "./Instructions.css";

import holograma from "../../../../assets/holograma.png";
import engranaje from "../../../../assets/engranaje.png";
import bienes from "../../../../assets/bienes.png";
import contacto from "../../../../assets/homePage/InstructionsSection/contacto.png";
import cotizacion from "../../../../assets/homePage/InstructionsSection/cotizacion.png";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { Link, useNavigate } from "react-router-dom";

function Instructions() {
  const navigate = useNavigate();
  return (
    <div className="instructions">
      {/* <span className='display_title'>¿Cómo funciona?</span> */}
      <div className="instructions_item">
        <div className="instructions_item_number">1</div>
        <img
          className="instructions_item_img"
          src={bienes}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Contáctanos
          </span>
          <p className="instructions_item_description_description">
            Contáctanos por medio de la plataforma o <Link to={"/cotizador/cotizar-impresion"}>cotiza ya</Link>
          </p>
        </div>
      </div>
      <div className="instructions_item">
        <div className="instructions_item_number">2</div>
        <img
          className="instructions_item_img"
          src={bienes}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Nos pondremos en contacto contigo
          </span>
          <p className="instructions_item_description_description">
            Estableceremos la mejor opción para ti
          </p>
        </div>
      </div>
      <div className="instructions_item">
        <div className="instructions_item_number">3</div>
        <img
          className="instructions_item_img"
          src={bienes}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Te presentaremos una cotización
          </span>
          <p className="instructions_item_description_description">
            En caso de ser lo que esperabas, procederemos con tu proyecto
          </p>
        </div>
      </div>
      <div className="instructions_item">
        <div className="instructions_item_number">4</div>
        <img
          className="instructions_item_img"
          src={bienes}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Trabajaremos en tu proyecto
          </span>
          <p className="instructions_item_description_description">
            Te mantendremos informado de cada paso de tu proyecto
          </p>
        </div>
      </div>
      <div className="instructions_item">
        <div className="instructions_item_number">5</div>
        <img
          className="instructions_item_img"
          src={bienes}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">Resultado</span>
          <p className="instructions_item_description_description">
            Te entregaremos tu producto o resultado del servicio acordado
          </p>
        </div>
      </div>
      <div className="instructions_item-last-item">
        <div className="instructions_item-last-item-text">
          <span className="instructions_item-last-item-title">+300</span>
          <span className="instructions_item-last-item-description">
            Proyectos realizados
          </span>
        </div>
        <div className="instructions_item-last-item-buttons">
          <CustomButton type="primary" onClick={() => navigate("/cotizador/cotizar-impresion")}>Cotiza ya</CustomButton>
          <CustomButton type="secondary" outlined onClick={() => navigate("/contacto")}>Contacto</CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
