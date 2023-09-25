import { useEffect } from 'react';
import MaterialDisplay from '../../components/MaterialDisplay/MaterialDisplay';
import './SelectMaterial.css'
import { useNavigate } from 'react-router-dom';

function SelectMaterial({stlFiles, setMaterial}){
    const navigate = useNavigate();
    useEffect(() => {
        if(stlFiles.length < 1){
            console.log('No puedes acceder aqui sin archivos');
            // navigate(-1);
        }
    }, []);

    return(
        <div className="select_material">
            <MaterialDisplay setMaterial={setMaterial} stlFiles={stlFiles}/>
        </div>
    )
}

export default SelectMaterial;