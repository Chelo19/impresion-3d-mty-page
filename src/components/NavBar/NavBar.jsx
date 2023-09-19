import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar(){
    return(
        <div className="nav_bar">
            <Link to={'/'} className='nav_bar_left'>Impresion 3D</Link>
            <div className='nav_bar_center'><span>Links</span></div>
            <div className='nav_bar_right'>Busqueda</div>
        </div>
    )
}

export default NavBar;