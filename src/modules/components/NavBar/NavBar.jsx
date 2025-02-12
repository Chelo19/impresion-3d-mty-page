import { Link } from "react-router-dom";
import "./NavBar.css";

import impresion3dLogo from "../../../assets/impresion-3d-logo-simple.png";

function NavBar() {
  return (
    <div className="nav_bar">
      <Link to={"/"} className="nav_bar_left">
        <img src={impresion3dLogo} />
        <span>Impresión 3D Monterrey</span>
      </Link>
      <div className="nav_bar_right">
        <Link to={"/materiales"}>Materiales</Link>
        <Link to={"/contacto"}>Contáctanos</Link>
        <Link to={"/cotizador/cotizar-impresion"} id="nav_bar_print">
          Imprime ya
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
