import { Link, useNavigate } from 'react-router-dom';
import '../MaterialDisplay/MaterialDisplay.css'
import { useEffect, useState } from 'react';

import chapoteo from '../../assets/chapoteo.png';
import lijado from '../../assets/lijado.png';
import sin_lijar from '../../assets/sin_lijar.png';

function InfillDisplay({material, stlFiles, setIsSanded, setInfill, setColor}){
    const navigate = useNavigate();
    const [standardActive, setStandardActive] = useState('');
    const [sandedActive, setSandedActive] = useState('');
    const [standardColorActive, setStandardColorActive] = useState('');
    const [sandedColorActive, setSandedColorActive] = useState('');

    const sendFinishes = (type) => {
        if(type == 1){
            if(standardActive && standardColorActive){
                setIsSanded(false);
                setInfill(parseInt(standardActive));
                setColor(standardColorActive);
                navigate('/request-upload');
            }
            else if(!standardActive && standardColorActive){
                alert('Selecciona relleno');
            }
            else if(standardActive && !standardColorActive){
                alert('Selecciona color');
            }
            else if(!standardActive && !standardColorActive){
                alert('Selecciona relleno y color')
            }
        }
        else if(type == 2){
            if(sandedActive && sandedColorActive){
                setIsSanded(true);
                setInfill(parseInt(sandedActive));
                setColor(sandedColorActive);
                navigate('/request-upload');
            }
            else if(!sandedActive && sandedColorActive){
                alert('Selecciona relleno');
            }
            else if(sandedActive && !sandedColorActive){
                alert('Selecciona color');
            }
            else if(!sandedActive && !sandedColorActive){
                alert('Selecciona relleno y color')
            }
        }
    }

    useEffect(() => {
        console.log(standardColorActive);
    })

    return(
        <div className="material_display">
            <span id='material_display_title'>Selecciona el acabado para {material}</span>
            <div className='material_display_progress'><Link to={'/upload-file'}>Archivos ({stlFiles.length})</Link> &gt; <Link to={'/select-material'}>{material}</Link></div>
            <div className='material_display_container'>
                <div className='material_display_item'>
                    <img src={sin_lijar}/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>Estándar</span>
                        <span className='material_display_description'>Acabado estándar como sale de la máquina.</span>
                        <span className='material_display_type'>FDM</span>
                        <span className='material_display_extra'>Selecciona relleno:</span>
                        <div className='material_display_infills'>
                            <button id='20' className={standardActive === '20' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setStandardActive(e.target.id)}>20%</button>
                            <button id='40' className={standardActive === '40' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setStandardActive(e.target.id)}>40%</button>
                            <button id='60' className={standardActive === '60' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setStandardActive(e.target.id)}>60%</button>
                            <button id='80' className={standardActive === '80' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setStandardActive(e.target.id)}>80%</button>
                            <button id='95' className={standardActive === '95' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setStandardActive(e.target.id)}>95%</button>
                            <button id='100' className={standardActive === '100' ? 'selected_standard' : 'material_display_infills_button'} onClick={(e) => setStandardActive(e.target.id)}>100%</button>
                        </div>
                        <span className='material_display_extra'>Selecciona color:</span>
                        <div className='material_display_colors_select'>
                            <div/>
                            <button id='00000' className={standardColorActive === '00000' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setStandardColorActive(e.target.id)} style={{backgroundColor: '#000'}}/>
                            <button id='fffff' className={standardColorActive === 'fffff' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setStandardColorActive(e.target.id)} style={{backgroundColor: '#fff'}}/>
                            <button id='ffa500' className={standardColorActive === 'ffa500' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setStandardColorActive(e.target.id)} style={{backgroundColor: '#ffa500'}}/>
                            <button id='00ffff' className={standardColorActive === '00ffff' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setStandardColorActive(e.target.id)} style={{backgroundColor: '#00ffff'}}/>
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => sendFinishes(1)}>Seleccionar Estándar</button>
                        </div>
                    </div>
                </div>
                <div className='material_display_item'>
                    <img src={lijado}/>
                    <div className='material_display_item_container'>
                        <span className='material_display_name'>Suavizado</span>
                        <span className='material_display_description'>Acabado suavizado con lija para mejorar bordes.</span>
                        <span className='material_display_type'>FDM</span>
                        <span className='material_display_extra'>Selecciona relleno:</span>
                        <div className='material_display_infills'>
                            <button id='20' className={sandedActive === '20' ? 'selected_sanded' : 'material_display_infills_button'} onClick={(e) => setSandedActive(e.target.id)}>20%</button>
                            <button id='40' className={sandedActive === '40' ? 'selected_sanded' : 'material_display_infills_button'} onClick={(e) => setSandedActive(e.target.id)}>40%</button>
                            <button id='60' className={sandedActive === '60' ? 'selected_sanded' : 'material_display_infills_button'} onClick={(e) => setSandedActive(e.target.id)}>60%</button>
                            <button id='80' className={sandedActive === '80' ? 'selected_sanded' : 'material_display_infills_button'} onClick={(e) => setSandedActive(e.target.id)}>80%</button>
                            <button id='95' className={sandedActive === '95' ? 'selected_sanded' : 'material_display_infills_button'} onClick={(e) => setSandedActive(e.target.id)}>95%</button>
                            <button id='100' className={sandedActive === '100' ? 'selected_sanded' : 'material_display_infills_button'} onClick={(e) => setSandedActive(e.target.id)}>100%</button>
                        </div>
                        <span className='material_display_extra'>Selecciona color:</span>
                        <div className='material_display_colors_select'>
                            <div/>
                            <button id='00000' className={sandedColorActive === '00000' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setSandedColorActive(e.target.id)} style={{backgroundColor: '#000'}}/>
                            <button id='fffff' className={sandedColorActive === 'fffff' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setSandedColorActive(e.target.id)} style={{backgroundColor: '#fff'}}/>
                            <button id='ffa500' className={sandedColorActive === 'ffa500' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setSandedColorActive(e.target.id)} style={{backgroundColor: '#ffa500'}}/>
                            <button id='00ffff' className={sandedColorActive === '00ffff' ? 'selected_color_standard' : 'material_display_colors_select_button'} onClick={(e) => setSandedColorActive(e.target.id)} style={{backgroundColor: '#00ffff'}}/>
                        </div>
                        <div className='material_display_item_container'>
                            <button className='material_display_select' onClick={() => sendFinishes(2)}>Seleccionar Suavizado</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfillDisplay;