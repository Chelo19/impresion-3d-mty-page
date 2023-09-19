import './MaterialDisplay.css'

function MaterialDisplay(){
    return(
        <div className="material_display">
            <span>Seleccionar material</span>
            <div className='material_display_container'>
                <div className='material_display_item'>
                    <img src='src/assets/heroModel_tube.png'/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>PLA</span>
                        <span className='material_display_description'>PLA is a low-cost plastic, perfect for prototypes and functional parts that do not require strength or heat resistance.</span>
                        <span className='material_display_type'>FDM</span>
                        <span className='material_display_extra'><strong>Finishes:</strong> Standard, Sanded</span>
                        <div className='material_display_colors'><div/><div style={{backgroundColor: '#000'}}/> <div style={{backgroundColor: 'orange'}}/><div style={{backgroundColor: 'aqua'}}/></div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select'>Select Material</button>
                        </div>
                    </div>
                </div>
                <div className='material_display_item'>
                    <img src='src/assets/heroModel_tube.png'/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>PLA</span>
                        <span className='material_display_description'>PLA is a low-cost plastic, perfect for prototypes and functional parts that do not require strength or heat resistance.</span>
                        <span className='material_display_type'>FDM</span>
                        <span className='material_display_extra'><strong>Finishes:</strong> Standard, Sanded</span>
                        <div className='material_display_colors'><div/><div style={{backgroundColor: '#000'}}/> <div style={{backgroundColor: 'orange'}}/><div style={{backgroundColor: 'aqua'}}/></div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select'>Select Material</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialDisplay;