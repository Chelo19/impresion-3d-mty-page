import './WhySection.css';

function WhySection(){
    return(
        <div className='why_section'>
            <div className='why_section_left'>
                <span>Why Us</span>
                <img src='src/assets/heroModel_tube.png'/>
            </div>
            <ol className='why_section_list'>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Transparent pricing with no minimum order required</span>
                        <span className='why_section_list_item_description'>Unlike other 3d printing services, we will never charge you a service fee or require minimum order amounts.</span>
                    </div>
                </li>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>Instant price comparison of 3D printing services worldwide</span>
                        <span className='why_section_list_item_description'>Unlike other 3d printing services, we will never charge you a service fee or require minimum order amounts.</span>
                    </div>
                </li>
                <li className='why_section_list_item'>
                    <div className='why_section_list_item_content'>
                        <span className='why_section_list_item_title'>A wide range of technologies including FDM, SLA, SLS, DMLS & MJF</span>
                        <span className='why_section_list_item_description'>Unlike other 3d printing services, we will never charge you a service fee or require minimum order amounts.</span>
                    </div>
                </li>
            </ol>
        </div>
    )
}

export default WhySection;