import { Link } from 'react-router-dom';
import './Contact.css';

import messenger from '../../assets/messenger_color.png';
import instagram from '../../assets/instagram_color.png';
import whatsapp from '../../assets/whatsapp_color.png';
import gmail_color from '../../assets/gmail_color.png';
import Contact2 from './Contact2';

function Contact(){
    return(
        <div className="contact">
            <div className='instructions_wrapper' style={{"gap": "40px"}}>
                <span className='display_title' id='contact_title'>Contáctanos</span>
                <Contact2/>
                <span className='display_title'>Otros medios de contacto</span>
                <div className="instructions" id='contact_wrapper'>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src={messenger} alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por Messenger de Facebook</span>
                            <p className='instructions_item_description_description'>¡Ingresa a tu cuenta de Messenger y mándanos un mensaje!</p>
                            <Link to={'https://www.facebook.com/profile.php?id=61563777674355'} target='_blank' className='contact_link' id='messenger'>Ir a Messenger</Link>
                        </div>
                    </div>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src={instagram} alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por mensaje directo de Instagram</span>
                            <p className='instructions_item_description_description'>¡Ingresa a tu cuenta de Instagram y mándanos un mensaje directo!</p>
                            <Link to={'https://www.instagram.com/3dprintmty/'} target='_blank' className='contact_link' id='instagram'>Ir a Instagram</Link>
                        </div>
                    </div>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src={whatsapp} alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por mensaje en Whatsapp</span>
                            <p className='instructions_item_description_description'>Puedes enviarnos un mensaje que responderemos rápidamente por Whatsapp</p>
                            <Link to={'https://wa.me/8120515415'} target='_blank' className='contact_link' id='whatsapp'>Ir a Whatsapp</Link>
                        </div>
                    </div>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src={gmail_color} alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por Correo Electrónico</span>
                            <p className='instructions_item_description_description'>Puedes enviarnos un correo para responderte eficientemente a impresion3dmonterreymx@gmail.com</p>
                            <Link to={'mailto:impresion3dmonterreymx@gmail.com'} target='_blank' className='contact_link' id='gmail'>Ir a Correo</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;