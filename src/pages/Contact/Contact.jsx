import { Link } from 'react-router-dom';
import './Contact.css'

function Contact(){
    return(
        <div className="contact">
            <div className='instructions_wrapper'>
                <span className='display_title'>Contacto</span>
                <div className="instructions" id='contact_wrapper'>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src='src/assets/messenger_color.png' alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por Messenger de Facebook</span>
                            <p className='instructions_item_description_description'>¡Ingresa a tu cuenta de Messenger y mándanos un mensaje!</p>
                            <Link to={'https://www.facebook.com/people/Impresión-3D-Monterrey/100094563984724/'} target='_blank' className='contact_link' id='messenger'>Ir a Messenger</Link>
                        </div>
                    </div>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src='src/assets/instagram_color.png' alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por mensaje directo de Instagram</span>
                            <p className='instructions_item_description_description'>¡Ingresa a tu cuenta de Instagram y mándanos un mensaje directo!</p>
                            <Link to={'https://www.instagram.com/impresion_3d_mty/'} target='_blank' className='contact_link' id='instagram'>Ir a Instagram</Link>
                        </div>
                    </div>
                    <div className='instructions_item'>
                        <img className='instructions_item_img' src='src/assets/whatsapp_color.png' alt='350px X 232px'/>
                        <div className='instructions_item_description'>
                            <span className='instructions_item_description_title'>Contáctanos por mensaje en Whatsapp</span>
                            <p className='instructions_item_description_description'>Puedes enviarnos un mensaje que responderemos rápidamente por Whatsapp</p>
                            <Link to={'https://wa.me/8672207801'} target='_blank' className='contact_link' id='whatsapp'>Ir a Whatsapp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;