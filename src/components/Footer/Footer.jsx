import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className='footer'>
            <div className='footer_display'>
                <div className='footer_general'>
                    <div className='footer_references'>
                        Referencias
                    </div>
                    <div className='footer_container'>
                        <div className='footer_item'>
                            <span className='footer_item_title'>More</span>
                            <Link>About</Link>
                            <Link>About</Link>
                            <Link>About</Link>
                        </div>
                        <div className='footer_item'>
                            <span className='footer_item_title'>Social</span>
                            <Link>About</Link>
                            <Link>About</Link>
                            <Link>About</Link>
                            <Link>About</Link>
                            <Link>About</Link>
                            <Link>About</Link>
                        </div>
                    </div>
                </div>
                <div className='footer_botom_links'>
                    <div className='footer_botom_links_wrapper'>
                        <Link>Terms and Conditions</Link>
                        <Link>Terms of Use</Link>
                        <Link>Terms and Conditions</Link>
                        <Link>Terms of Use</Link>
                        <Link>Terms and Conditions</Link>
                    </div>
                    <span>Impresion 3D Monterrey</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;