import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(){
    return(
        <div className="nav_bar">
            <Link to={'/'} className='nav_bar_left'><img src='src/assets/impresion-3d-logo.png'/>Impresión 3D Monterrey</Link>
            <div className='nav_bar_center'>Precios</div>
            <div className='nav_bar_right'>Contacto</div>
        </div>
    )
}

export default NavBar;