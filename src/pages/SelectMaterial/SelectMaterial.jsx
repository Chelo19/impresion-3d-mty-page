import MaterialDisplay from '../../components/MaterialDisplay/MaterialDisplay';
import './SelectMaterial.css'

function SelectMaterial({stlFiles}){
    console.log(stlFiles);
    return(
        <div className="select_material">
            {stlFiles.map((stl) => {
                return(
                    <>
                        {/* {stl[0].file.file.name} */}
                        <MaterialDisplay/>
                    </>
                )
            })}
        </div>
    )
}

export default SelectMaterial;