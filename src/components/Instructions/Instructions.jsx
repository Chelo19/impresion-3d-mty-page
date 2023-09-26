import './Instructions.css';

function Instructions(){
    return(
        <div className='instructions_wrapper'>
            <span className='display_title'>¿Cómo funciona?</span>
            <div className="instructions">
                <div className='instructions_item'>
                    <div className='instructions_item_number'>1</div>
                    <img className='instructions_item_img' src='src/assets/holograma.png' alt='350px X 232px'/>
                    <div className='instructions_item_description'>
                        <span className='instructions_item_description_title'>Compártenos los archivos que deseas imprimir</span>
                        <p className='instructions_item_description_description'>Ingresa los archivos de formato .stl que deseas imprimir, después elige la configuración adecuada para ti.</p>
                    </div>
                </div>
                <div className='instructions_item'>
                    <div className='instructions_item_number'>2</div>
                    <img className='instructions_item_img' src='src/assets/engranaje.png' alt='350px X 232px'/>
                    <div className='instructions_item_description'>
                        <span className='instructions_item_description_title'>Se imprimirán las piezas que deseas</span>
                        <p className='instructions_item_description_description'>Este proceso puede variar en tiempo por disponibilidad y personalización dependiendo de tus necesidades.</p>
                    </div>
                </div>
                <div className='instructions_item'>
                    <div className='instructions_item_number'>3</div>
                    <img className='instructions_item_img' src='src/assets/bienes.png' alt='350px X 232px'/>
                    <div className='instructions_item_description'>
                        <span className='instructions_item_description_title'>¡Nos encargamos de las entregas!</span>
                        <p className='instructions_item_description_description'>Actualmente ofrecemos entregas en toda el área metropolitana de Monterrey pero buscamos expandirnos por todo el país.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Instructions;