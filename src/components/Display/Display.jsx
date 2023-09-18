import { Link } from 'react-router-dom';
import './Display.css'

function Display(){
    return(
        <div className="display">
            <div className='display_text'>
                <span className='display_title'>Get It 3D Printed</span>
                <span className='display_subtitle'>Compare prices from top 3D printing services in seconds</span>
                <span className='display_description'>Craftcloud makes sourcing custom parts easy and affordable. Upload a model and we'll do the rest!</span>
                <div className='display_buttons'>
                    <Link to={'/upload-file'} className='display_button_main'>Get instant Quotes</Link>
                    <Link className='display_button_second'>Try it Now</Link>
                </div>
            </div>
            <div className='display_gallery'>
                <img src='src/assets/heroModel_tube.png'/>
            </div>
            <div className='display_features'>
                <Link className='display_features_selection'>Professional solutions</Link>
                <Link className='display_features_selection_active'>Professional solutions</Link>
                <Link className='display_features_selection'>Professional solutions</Link>
            </div>
        </div>
    )
}

export default Display;