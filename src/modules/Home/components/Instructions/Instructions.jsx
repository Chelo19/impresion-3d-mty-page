import "./Instructions.css";

import holograma from "../../../../assets/holograma.png";
import engranaje from "../../../../assets/engranaje.png";
import bienes from "../../../../assets/bienes.png";

function Instructions() {
  return (
    <div className="instructions">
      {/* <span className='display_title'>¿Cómo funciona?</span> */}
      <div className="instructions_item">
        <div className="instructions_item_number">1</div>
        <img
          className="instructions_item_img"
          src={holograma}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Compártenos los archivos que deseas imprimir
          </span>
          <p className="instructions_item_description_description">
            Ingresa los archivos de formato .stl que deseas imprimir, después
            elige la configuración adecuada para ti.
          </p>
        </div>
      </div>
      <div className="instructions_item">
        <div className="instructions_item_number">2</div>
        <img
          className="instructions_item_img"
          src={engranaje}
          alt="350px X 232px"
        />
        <div className="instructions_item_description">
          <span className="instructions_item_description_title">
            Se imprimirán las piezas que deseas
          </span>
          <p className="instructions_item_description_description">
            Este proceso puede variar en tiempo por disponibilidad y
            personalización dependiendo de tus necesidades.
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
            ¡Nos encargamos de las entregas!
          </span>
          <p className="instructions_item_description_description">
            Actualmente ofrecemos entregas en toda el área metropolitana de
            Monterrey pero buscamos expandirnos por todo el país.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
