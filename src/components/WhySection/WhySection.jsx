import './WhySection.css';

function WhySection(){
    return(
        <div className='why_section'>
            <div className='why_section_left'>
                {/* <span>Why Us</span> */}
                <img src='src/assets/impresion-3d-logo.png'/>
            </div>
            <ol className='why_section_list'>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Entregas rápidas y seguras</span>
                        <span className='why_section_list_item_description'>Tu pedido será creado y entregado de la manera más profesional y eficiente posible.</span>
                    </div>
                </li>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Servicio personalizado</span>
                        <span className='why_section_list_item_description'>En la secciónde comentarios puedes agregar cualquier solicitud a tu gusto para tus piezas.</span>
                    </div>
                </li>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Gran soporte</span>
                        <span className='why_section_list_item_description'>Contamos con una línea de chat de messenger para poder contestar todas tus dudas relacionadas a tu pedido.</span>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default WhySection;