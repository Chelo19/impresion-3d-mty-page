import { Link } from 'react-router-dom';
import './NavBar.css'

import impresion3dLogo from '../../assets/impresion-3d-logo.png';

function NavBar(){
    return(
        <div className="nav_bar">
            <div className='nav_bar_container'>
                <Link to={'/'} className='nav_bar_left'><img src={impresion3dLogo}/><span>Impresión 3D Monterrey</span></Link>
                {/* <div className='nav_bar_center'>Precios</div> */}
                <div className='nav_bar_right'>
                    <Link to={'/contact'}>Contáctanos</Link>
                    <Link to={'/upload-file'} id='nav_bar_print'>Imprime ya</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;