import InfillDisplay from '../../components/InfillDisplay/InfillDisplay';
import '../SelectMaterial/SelectMaterial.css'

function SelectInfill({material, setIsSanded, setInfill, setColor}){
    return(
        <div className="select_material">
            <InfillDisplay material={material} setIsSanded={setIsSanded} setInfill={setInfill} setColor={setColor}/>
        </div>
    )
}

export default SelectInfill;