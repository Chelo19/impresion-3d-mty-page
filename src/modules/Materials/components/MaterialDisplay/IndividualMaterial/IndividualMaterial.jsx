import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './IndividualMaterial.css';
import { supabase } from '../../../../../supabase/client';

import mancha from '../../../../../assets/individual-material/mancha.png';
import ablandamiento from '../../../../../assets/individual-material/ablandamiento.png';
import density from '../../../../../assets/individual-material/densidad.png';
import distorsion from '../../../../../assets/individual-material/distorsion.png';
import fusion from '../../../../../assets/individual-material/fusion.png';
import tension from '../../../../../assets/individual-material/tension.png';
import rotura from '../../../../../assets/individual-material/rotura.png';
import flexion from '../../../../../assets/individual-material/flexion.png';
import impacto from '../../../../../assets/individual-material/impacto.png';

function IndividualMaterial(){
    let { material } = useParams();
    const [materialSpecs, setMaterialSpecs] = useState([]);

    useEffect(() => {
        console.log(material);
        fetchMaterial(material);
    }, []);

    const fetchMaterial = async (material) => {
        const { data, error } = await supabase
        .from('material_specs')
        .select('*')
        .eq('material', material.toUpperCase());
        console.log(data);
        setMaterialSpecs(data[0]);
        console.log(data[0].density);
    };

    return(
        <div className='individual_material'>
            <span className='individual_material_title'>
                {materialSpecs.material}
            </span>
            <div className='individual_material_item'>
                <div className='individual_material_item_left'>
                    {
                        materialSpecs.density != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_spec'>
                                Densidad<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.density} g/cm³</span>
                            </div>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={density} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Densidad del material
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.softening_temperature != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_spec'>
                                Temperatura de ablandamiento<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.softening_temperature} °C</span>
                            </div>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={ablandamiento} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Temperatura a la que comienza a ablandarse la pieza
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.deflection_temperature != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_spec'>
                                Temperatura de distorsión térmica<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.deflection_temperature} °C</span>
                            </div>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={distorsion} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Temperatura a la que comienza la distorsión de la pieza
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.melting_temperature != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_spec'>
                                Temperatura de fusión<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.melting_temperature} °C</span>
                            </div>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={fusion} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Temperatura a la que se derrite la pieza
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.melt_index != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_spec'>
                                Índice de fusión<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.melt_index} g/10 min</span>
                            </div>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={fusion} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Temperatura a la que fluye el material de la pieza
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                        </div>
                    }
                </div>
                <div className='individual_material_item_material'>
                    <img src={`https://dpecitckuoshfndkfixv.supabase.co/storage/v1/object/public/material_imgs/${material.toUpperCase()}.png`}/>
                </div>
                <div className='individual_material_item_right'>
                    {
                        materialSpecs.tensile_strength != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={tension} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Fuerza de la pieza a la tensión mecánica
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                            <div className='individual_material_spec'>
                                Fuerza de tensión<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.tensile_strength} MPa</span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.breaking_elongation_rate != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={rotura} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Estiramiento del material de la pieza antes de que se rompa
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                            <div className='individual_material_spec'>
                                Alargamiento de rotura<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.breaking_elongation_rate} %</span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.bending_modulus != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={flexion} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Medida de rigidez al flexionar la pieza
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                            <div className='individual_material_spec'>
                                Módulo de flexión<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.bending_modulus} MPa</span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.bending_strength != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={flexion} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Determina qué tanto se puede doblar la pieza sin romperse
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                            <div className='individual_material_spec'>
                                Resistencia a la flexión<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.bending_strength} MPa</span>
                            </div>
                        </div>
                    }
                    {
                        materialSpecs.impact_strength != 'N / A' &&
                        <div className='individual_material_icon'>
                            <div className='individual_material_icon_container'>
                                <img src={mancha} className='individual_material_icon_bg'/>
                                <img src={impacto} className='individual_material_icon_front'/>
                                <span className="tooltiptext_container">
                                    Fuerza que resiste la pieza al impacto
                                    <div className='tooltiptext_container_tail'/>
                                </span>
                            </div>
                            <div className='individual_material_spec'>
                                Fuerza de impacto<span className='individual_material_spec_highlight'>&nbsp;{materialSpecs.impact_strength} kJ/m²</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='individual_material_description'>
                {materialSpecs.description}
            </div>
            <Link to={'/upload-file'} className='individual_material_button'>
                    Imprime Ya
            </Link>
        </div>
    )

}

export default IndividualMaterial;