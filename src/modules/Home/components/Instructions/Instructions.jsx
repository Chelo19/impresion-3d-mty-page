import "./Instructions.css";

import { Link, useNavigate } from "react-router-dom";
import instruction1 from "../../../../assets/homePage/InstructionsSection/1.png";
import instruction2 from "../../../../assets/homePage/InstructionsSection/2.png";
import instruction3 from "../../../../assets/homePage/InstructionsSection/3.png";
import instruction4 from "../../../../assets/homePage/InstructionsSection/4.png";
import instruction5 from "../../../../assets/homePage/InstructionsSection/5.png";
import CustomButton from "../../../components/CustomButton/CustomButton";

function Instructions() {
  const navigate = useNavigate();
  return (
    <div className="instructions">
      {/* <span className='display_title'>¿Cómo funciona?</span> */}
      <div className="instructions_item">
        <div className="instructions_item_number">1</div>
        <div className="instructions_item_img_container">
          <img
            className="instructions_item_img"
            src={instruction5}
            alt="350px X 232px"
          />
        </div>
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Contáctanos
          </span>
          <p className="instructions_item_description_description">
            Contáctanos por medio de la plataforma o{" "}
            <Link to={"/cotizador/cotizar-impresion"}>cotiza ya</Link>
          </p>
        </div>
      </div>
      <div className="instructions_item">
        <div className="instructions_item_number">2</div>
        <div className="instructions_item_img_container">
          <img
            className="instructions_item_img"
            src={instruction4}
            alt="250px X 250px"
          />
        </div>
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
        <div className="instructions_item_img_container">
          <img
            className="instructions_item_img"
            src={instruction3}
            alt="350px X 232px"
          />
        </div>
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
        <div className="instructions_item_img_container">
          <img
            className="instructions_item_img"
            src={instruction1}
            alt="350px X 232px"
          />
        </div>
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
        <div className="instructions_item_img_container">
          <img
            className="instructions_item_img"
            src={instruction2}
            alt="350px X 232px"
          />
        </div>
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
          <CustomButton
            type="primary"
            onClick={() => navigate("/cotizador/cotizar-impresion")}
          >
            Cotiza ya
          </CustomButton>
          <CustomButton
            type="secondary"
            outlined
            onClick={() => navigate("/contacto")}
          >
            Contacto
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
