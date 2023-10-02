import { Link } from 'react-router-dom';
import './FAQ.css'

function FAQ(){
    return(
        <div className='faq'>
            <div className='faq_container'>
                <span className='faq_title'>Preguntas frecuentes</span>
                <div className='faq_item'>
                    <img src='src/assets/gear.png'/>
                    <div className='faq_qa_container'>
                        <span className='faq_question'>
                            P: ¿Cuánto tarda mi pedido en llegar?
                        </span>
                        <span className='faq_answer'>
                            R: Dependiendo de la cantidad de piezas, complejidad, acabado y peso puede ser mayor o menor el tiempo de entrega de tu pedido.
                        </span>
                    </div>
                </div>
                <div className='faq_item'>
                    <img src='src/assets/gear.png'/>
                    <div className='faq_qa_container'>
                        <span className='faq_question'>
                            P: ¿Como puedo obtener archivos 3D?
                        </span>
                        <span className='faq_answer'>
                            R: Existen muchas formas de obtener archivos, puedes aprender a modelar en 3D con programas como Fusion 360, Tinkercad o Blender. También puedes visitar páginas que proveen archivos .stl gratis.
                        </span>
                    </div>
                </div>
                <div className='faq_item'>
                    <img src='src/assets/gear.png'/>
                    <div className='faq_qa_container'>
                        <span className='faq_question'>
                            P: ¿Qué puedo hacer con la impresión 3D?
                        </span>
                        <span className='faq_answer'>
                            R: Se puede hacer literalmente lo que te imagines, desde esculturas, macetas, juguetes para regalar hasta incluso piezas de ingeniería.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;