import './Footer.css';
import { Link } from 'react-router-dom';

import messenger from '../../../assets/messenger.png';
import instagram from '../../../assets/instagram.png';
import whatsapp from '../../../assets/whatsapp.png';
import email from '../../../assets/email.png';

function Footer(){
    return(
        <div className='footer'>
            <div className='footer_display'>
                <div className='footer_general'>
                    <div className='footer_references'>
                        {/* Referencias */}
                    </div>
                    <div className='footer_container'>
                        <div className='footer_item'>
                            <span className='footer_item_title'>Más</span>
                            <div className='footer_item_wrapper'><Link to={'/'}>Inicio</Link></div>
                            <div className='footer_item_wrapper'><Link to={'/contact'}>Contacto</Link></div>
                            <div className='footer_item_wrapper'><Link to={'/upload-file'}>Imprimir ahora</Link></div>
                        </div>
                        <div className='footer_item'>
                            <span className='footer_item_title'>Redes sociales</span>
                            <div className='footer_item_wrapper'><img src={messenger}/><Link to={'https://www.facebook.com/profile.php?id=61563777674355'} target='_blank'>Impresión 3D Monterrey - 3dprintmty</Link></div>
                            <div className='footer_item_wrapper'><img src={instagram}/><Link to={'https://www.instagram.com/3dprintmty/'} target='_blank'>3dprintmty</Link></div>
                            <div className='footer_item_wrapper'><img src={whatsapp}/><Link to={'https://wa.me/8120515415'} target='_blank'>+52 (81) 20515415</Link></div>
                            <div className='footer_item_wrapper'><img src={email}/><Link>cotizaciones@3dprintmty.com</Link></div>
                        </div>
                    </div>
                </div>
                <div className='footer_botom_links'>
                    <div className='footer_botom_links_wrapper'>
                        <Link>2023-2025</Link>
                        <Link>Impresión 3D Monterrey</Link>
                        <Link>Monterrey</Link>
                        <Link>Nuevo León</Link>
                        <Link>México</Link>
                    </div>
                    <span>Desarrollado por <Link to={'https://www.instagram.com/swifttek.com.mx/'} target='_blank' id='developer'>Swifttek</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Footer;