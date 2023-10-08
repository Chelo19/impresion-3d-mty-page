import { Link, useNavigate } from 'react-router-dom';
import './MaterialDisplay.css'

import filamento_pla from '../../assets/filamento_pla.png';

function MaterialDisplay({setMaterial, stlFiles}){
    const navigate = useNavigate();

    return(
        <div className="material_display">
            <span id='material_display_title'>Selecciona el material para las piezas</span>
            <div className='material_display_progress'><Link to={'/upload-file'}>Archivos ({stlFiles.length})</Link></div>
            <div className='material_display_container'>
                <div className='material_display_item'>
                    <img src={filamento_pla}/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>PLA</span>
                        <span className='material_display_description'>El PLA es un plástico de bajo costo, perfecto para prototipos y piezas funcionales.</span>
                        <span className='material_display_type'>FDM</span>
                        <span className='material_display_extra'>Acabados disponibles: Estándar, Suavizado</span>
                        <div className='material_display_colors'><div/><div style={{backgroundColor: '#000'}}/> <div style={{backgroundColor: 'orange'}}/><div style={{backgroundColor: 'aqua'}}/></div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => {setMaterial('PLA'); navigate('/select-finish')}}>Seleccionar material</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialDisplay;