import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';
import './AvailableMaterials.css'
import { Link } from 'react-router-dom';

export default function AvailableMaterials(){
    const [specs, setSpecs] = useState([]);

    useEffect(() => {
        getSpecs();
    }, []);
    
    const getSpecs = async () => {
        const { data, error } = await supabase
        .from(`material_specs`)
        .select('*');
        setSpecs(data);
    };

    return(
        <>
        {
            specs ?
            <div className='available_materials'>
                <span className='available_materials_title'>Materiales Disponibles</span>
                {
                    specs.map((specs) => {
                        return(
                            <>
                                <div className='available_materials_spec_item'>
                                    <div className='available_materials_specs_description'>
                                        <strong>{specs.material}:&nbsp;</strong>
                                        {specs.description}
                                    </div>

                                    <div className='available_materials_specs_display'>
                                        <div className='available_materials_specs_table'>
                                            <span className='available_materials_specs_li_title'>
                                                Propiedades Físicas
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Densidad</span>
                                                <span>{specs.density} g/cm³</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Temperatura de ablandamiento</span>
                                                <span>{specs.softening_temperature} C°</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Temperatura de distorsión térmica</span>
                                                <span>{specs.deflection_temperature} C°</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Temperatura de fusión</span>
                                                <span>{specs.melting_temperature} C°</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Índice de fusión</span>
                                                <span>{specs.melt_index} g/10 min</span>
                                            </span>
                                        </div>
                                        <div className='available_materials_specs_table'>
                                            <span className='specs_li_title'>
                                                Propiedades Mecánicas
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Fuerza de tensión</span>
                                                <span>{specs.tensile_strength} MPa</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Tasa de alargamiento de rotura</span>
                                                <span>{specs.breaking_elongation_rate} %</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Módulo de flexión</span>
                                                <span>{specs.bending_modulus} MPa</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Resistencia a la flexión</span>
                                                <span>{specs.bending_strength} MPa</span>
                                            </span>
                                            <span className='available_materials_specs_li'>
                                                <span>Fuerza de impacto</span>
                                                <span>{specs.impact_strength} kJ/m²</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <Link to={'/materiales'} className='available_materials_see_more_button'>
                    Ver más
                </Link>
            </div>
            :
            <>
            </>
            
        }
        </>
    )

}