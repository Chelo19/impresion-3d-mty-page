import MaterialDisplay from '../../components/MaterialDisplay/MaterialDisplay';
import './SelectMaterial.css'

function SelectMaterial({stlFiles, setMaterial}){
    return(
        <div className="select_material">
            <MaterialDisplay setMaterial={setMaterial}/>
        </div>
    )
}

export default SelectMaterial;