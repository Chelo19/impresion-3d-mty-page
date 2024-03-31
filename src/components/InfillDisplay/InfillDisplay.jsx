import { Link, useNavigate } from 'react-router-dom';
import '../MaterialDisplay/MaterialDisplay.css'
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';

import sin_lijar from '../../assets/sin_lijar.png';

function InfillDisplay({material, stlFiles, setInfill, setColor}){
    const navigate = useNavigate();
    const [activeInfill, setActiveInfill] = useState('');
    const [activeColor, setActiveColor] = useState('');
    const [colors, setColors] = useState([]);
    const [specs, setSpecs] = useState([]);

    useEffect(() => {
        fetchData();
        getSpecs();
    }, []);
    
    const fetchData = async () => {
        const { data, error } = await supabase
        .from(`${material}`)
        .select('*');
        setColors(data);
    };

    const getSpecs = async () => {
        const { data, error } = await supabase
        .from(`material_specs`)
        .select('*')
        .eq('material', `${material}`);
        console.log(data[0]);
        setSpecs(data[0]);
    };

    const sendFinishes = (type) => {
        if(activeInfill && activeColor){
            setInfill(parseInt(activeInfill));
            setColor(activeColor);
            navigate('/request-upload');
        }
        else if(!activeInfill && activeColor){
            alert('Selecciona relleno');
        }
        else if(activeInfill && !activeColor){
            alert('Selecciona color');
        }
        else if(!activeInfill && !activeColor){
            alert('Selecciona relleno y color')
        }
    }

    return(
        <div className="material_display">
            <span id='material_display_title'>Selecciona las especificaciones para {material}</span>
            <div className='material_display_progress'><Link to={'/upload-file'}>Archivos ({stlFiles.length})</Link> &gt; <Link to={'/select-material'}>{material}</Link></div>
            <div className='material_display_container'>
                <div className='material_display_item'>
                    {/* <img src={sin_lijar}/> */}
                    <img src={`https://dpecitckuoshfndkfixv.supabase.co/storage/v1/object/public/material_imgs/${material}.png`}/>
                    <div className='material_display_item_container'>
                        {/* <span className='material_display_name'>{material}</span> */}
                        {/* <span className='material_display_description'>Acabado estándar como sale de la máquina.</span> */}
                        <span className='material_display_type'>Tecnología FDM</span>
                        <span className='material_display_extra'>Selecciona relleno:</span>
                        <div className='material_display_infills'>
                            <button id='20' className={activeInfill === '20' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setActiveInfill(e.target.id)}>20%</button>
                            <button id='40' className={activeInfill === '40' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setActiveInfill(e.target.id)}>40%</button>
                            <button id='60' className={activeInfill === '60' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setActiveInfill(e.target.id)}>60%</button>
                            <button id='80' className={activeInfill === '80' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setActiveInfill(e.target.id)}>80%</button>
                            <button id='95' className={activeInfill === '95' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setActiveInfill(e.target.id)}>95%</button>
                            <button id='100' className={activeInfill === '100' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setActiveInfill(e.target.id)}>100%</button>
                        </div>
                        <span className='material_display_extra'>Selecciona color:</span>
                        <div className='material_display_colors_select'>
                            {
                                colors.length > 0 ?
                                <>
                                    {colors.map((color) => {
                                        return(<button id={`${color.hex}`} className={activeColor === `${color.hex}` ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setActiveColor(e.target.id)} style={{backgroundColor: `#${color.hex}`}} key={color.id}/>);
                                    })}
                                </>
                                :
                                <>
                                </>
                            }
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => sendFinishes(1)}>Seleccionar Configuración</button>
                        </div>
                    </div>
                </div>
                <>
                    {
                        specs ?
                        <>
                            <div className='specs_description'>
                                {specs.description}
                            </div>
                            <div className='specs_display'>
                                <div className='specs_table'>
                                    <span className='specs_li_title'>
                                        Propiedades Físicas
                                    </span>
                                    <span className='specs_li'>
                                        <span>Densidad</span>
                                        <span>{specs.density} g/cm³</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Temperatura de ablandamiento</span>
                                        <span>{specs.softening_temperature} C°</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Temperatura de distorsión térmica</span>
                                        <span>{specs.deflection_temperature} C°</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Temperatura de fusión</span>
                                        <span>{specs.melting_temperature} C°</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Índice de fusión</span>
                                        <span>{specs.melt_index} g/10 min</span>
                                    </span>
                                </div>
                                <div className='specs_table'>
                                    <span className='specs_li_title'>
                                        Propiedades Mecánicas
                                    </span>
                                    <span className='specs_li'>
                                        <span>Fuerza de tensión</span>
                                        <span>{specs.tensile_strength} MPa</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Tasa de alargamiento de rotura</span>
                                        <span>{specs.breaking_elongation_rate} %</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Módulo de flexión</span>
                                        <span>{specs.bending_modulus} MPa</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Resistencia a la flexión</span>
                                        <span>{specs.bending_strength} MPa</span>
                                    </span>
                                    <span className='specs_li'>
                                        <span>Fuerza de impacto</span>
                                        <span>{specs.impact_strength} kJ/m²</span>
                                    </span>
                                </div>
                            </div>
                        </>
                        :
                        <>
                        </>
                    }
                </>
            </div>
        </div>
    )
}

export default InfillDisplay;