import { Link, useNavigate } from 'react-router-dom';
import './MaterialDisplay.css'
import { supabase } from '../../supabase/client';

import filamento_pla from '../../assets/monstruo-morado.png';
import filamento_abs from '../../assets/abs.png';
import filamento_petg_cf from '../../assets/petg-cf-engrane.png';
import filamento_petg from '../../assets/heroModel_tube.png';
import { useEffect, useState } from 'react';

function MaterialDisplay({setMaterial, stlFiles}){
    const navigate = useNavigate();
    const [plaColors, setPlaColors] = useState([]);
    const [absColors, setAbsColors] = useState([]);
    const [petgCfColors, setPetgCfColors] = useState([]);
    const [petgColors, setPetgColors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetchPla();
            fetchAbs();
            fetchPetgCf();
            fetchPetg();
        }
        fetchData();
    }, []);

    const fetchPla = async () => {
        const { data, error } = await supabase
        .from('PLA')
        .select('*');
        setPlaColors(data);
    };

    const fetchAbs = async () => {
        const { data, error } = await supabase
        .from('ABS')
        .select('*');
        setAbsColors(data);
    };
    
    const fetchPetgCf = async () => {
        const { data, error } = await supabase
        .from('PETG-CF')
        .select('*');
        setPetgCfColors(data);
    };

    const fetchPetg = async () => {
        const { data, error } = await supabase
        .from('PETG')
        .select('*');
        setPetgColors(data);
    };

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
                        <span className='material_display_type'>Tecnología FDM</span>
                        <span className='material_display_extra'>Colores disponibles:</span>
                        <div className='material_display_colors'>
                            {
                                plaColors.length > 0 ?
                                <>
                                    {plaColors.map((color) => {
                                        return(<div style={{backgroundColor: `#${color.hex}`}} key={color.name}/>);
                                    })}
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => {setMaterial('PLA'); navigate('/select-finish')}}>Seleccionar material</button>
                        </div>
                    </div>
                </div>
                <div className='material_display_item'>
                    <img src={filamento_abs}/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>ABS</span>
                        <span className='material_display_description'>El ABS es un polímero económico, ideal para piezas que requieran resistencia mecánica.</span>
                        <span className='material_display_type'>Tecnología FDM</span>
                        <span className='material_display_extra'>Colores disponibles:</span>
                        <div className='material_display_colors'>
                            {
                                absColors.length > 0 ?
                                <>
                                    {absColors.map((color) => {
                                        return(<div style={{backgroundColor: `#${color.hex}`}} key={color.name}/>);
                                    })}
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => {setMaterial('ABS'); navigate('/select-finish')}}>Seleccionar material</button>
                        </div>
                    </div>
                </div>
                <div className='material_display_item'>
                    <img src={filamento_petg}/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>PETG</span>
                        <span className='material_display_description'>El PETG es un polímero perfecto para desarrollar piezas que requieran de una gran fuerza de impacto y condiciones al aire libre.</span>
                        <span className='material_display_type'>Tecnología FDM</span>
                        <span className='material_display_extra'>Colores disponibles:</span>
                        <div className='material_display_colors'>
                            {
                                petgColors.length > 0 ?
                                <>
                                    {petgColors.map((color) => {
                                        return(<div style={{backgroundColor: `#${color.hex}`}} key={color.name}/>);
                                    })}
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => {setMaterial('PETG'); navigate('/select-finish')}}>Seleccionar material</button>
                        </div>
                    </div>
                </div>
                <div className='material_display_item'>
                    <img src={filamento_petg_cf}/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>PETG-CF</span>
                        <span className='material_display_description'>El PETG-CF es un polímero endurecido con Fibra de Carbono, ideal para piezas que requieran resistencia mecánica y térmica.</span>
                        <span className='material_display_type'>Tecnología FDM</span>
                        <span className='material_display_extra'>Colores disponibles:</span>
                        <div className='material_display_colors'>
                            {
                                petgCfColors.length > 0 ?
                                <>
                                    {petgCfColors.map((color) => {
                                        return(<div style={{backgroundColor: `#${color.hex}`}} key={color.name}/>);
                                    })}
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => {setMaterial('PETG-CF'); navigate('/select-finish')}}>Seleccionar material</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MaterialDisplay;