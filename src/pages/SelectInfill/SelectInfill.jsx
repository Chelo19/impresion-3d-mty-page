import { useEffect } from 'react';
import InfillDisplay from '../../components/InfillDisplay/InfillDisplay';
import '../SelectMaterial/SelectMaterial.css'
import { useNavigate } from 'react-router-dom';

function SelectInfill({material, stlFiles, setIsSanded, setInfill, setColor}){
    const navigate = useNavigate();
    useEffect(() => {
        if(stlFiles.length < 1){
            console.log('No puedes acceder aqui sin archivos');
            // navigate(-1);
        }
    }, []);

    return(
        <div className="select_material">
            <InfillDisplay material={material} stlFiles={stlFiles} setIsSanded={setIsSanded} setInfill={setInfill} setColor={setColor}/>
        </div>
    )
}

export default SelectInfill;