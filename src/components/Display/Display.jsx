import { Link } from 'react-router-dom';
import './Display.css'
import { useState } from 'react';

function Display(){
    const [display1Class, setDisplay1Class] = useState('display_features_selection_active');
    const [display2Class, setDisplay2Class] = useState('display_features_selection');
    const [display3Class, setDisplay3Class] = useState('display_features_selection');
    const [displayActive, setDisplayActive] = useState(1);

    const selectDisplay = (display) => {
        setDisplay1Class('display_features_selection');
        setDisplay2Class('display_features_selection');
        setDisplay3Class('display_features_selection');
        if(display == 1){
            setDisplay1Class('display_features_selection_active');
            setDisplayActive(display);
        }
        if(display == 2){
            setDisplay2Class('display_features_selection_active');
            setDisplayActive(display);
        }
        if(display == 3){
            setDisplay3Class('display_features_selection_active');
            setDisplayActive(display);
        }
    }

    return(
        <div className="display">
            <div className='display_text'>
                <span className='display_title'>¡Imprímelo en 3D!</span>
                <span className='display_subtitle'>¿Necesitas un gran servicio de impresión en 3D?</span>
                <span className='display_description'>Contáctanos para cotizar las piezas que necesites, desde piezas de ingeniería hasta tus figuras favoritas.</span>
                <div className='display_buttons'>
                    <Link to={'/upload-file'} className='display_button_main' id='display_button_print_now'>Imprime ya</Link>
                    {/* <Link className='display_button_second'>Try it Now</Link> */}
                </div>
            </div>
            <div className='display_gallery'>
                {displayActive == 1 && <img src='src/assets/heroModel_tube.png'/>}
                {displayActive == 2 && <img src='src/assets/mudkip_sombra.png'/>}
                {displayActive == 3 && <img src='src/assets/heroModel_screwClamp.png'/>}
                
            </div>
            <div className='display_features'>
                <Link className={`${display1Class}`} onClick={() => selectDisplay(1)}><img src='src/assets/gear.png'/><span>Piezas de ingeniería</span></Link>
                <Link className={`${display2Class}`} onClick={() => selectDisplay(2)}><img src='src/assets/escultura.png'/><span>Figuras y modelos</span></Link>
                <Link className={`${display3Class}`} onClick={() => selectDisplay(3)}><img src='src/assets/llave-inglesa.png'/><span>Piezas útiles</span></Link>
            </div>
        </div>
    )
}

export default Display;