import './WhySection.css';

import impresion3dLogo from '../../../../assets/impresion-3d-logo.png';
import { Link } from 'react-router-dom';

function WhySection(){
    return(
        <div className='why_section'>
            <div className='why_section_left'>
                {/* <span>Why Us</span> */}
                <img src={impresion3dLogo}/>
            </div>
            <ol className='why_section_list'>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Entregas rápidas y seguras</span>
                        <span className='why_section_list_item_description'>Tu proyecto será trabajado de la manera más profesional y eficiente posible.</span>
                    </div>
                </li>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Servicio personalizado</span>
                        <span className='why_section_list_item_description'>Durante las primeras etapas de tu proyecto podrás solicitar modificaciones y adiciones.</span>
                    </div>
                </li>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Gran soporte</span>
                        <span className='why_section_list_item_description'>Contamos con una <Link to={"https://wa.me/8120515415"}>línea de chat de WhatsApp</Link> para poder contestar todas tus dudas relacionadas a tu pedido.</span>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default WhySection;