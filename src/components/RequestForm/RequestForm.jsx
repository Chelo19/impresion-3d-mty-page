import { Link } from 'react-router-dom';
import './RequestForm.css'

function RequestForm({stlFiles, material, isSanded, infill, color}){
    return(
        <div className="request_form">
            <span>Ingresa tus datos</span>
            <div className='request_form_display'>
                <div className='request_form_item'>
                    <div className='request_form_stls'>
                        <span>Tus archivos</span>
                        {stlFiles ? 
                        <>
                            {stlFiles.map((stl) => {
                                return(
                                <>
                                    <div className='file_input_item' id='request_form_stl' key={stl[0].id}>
                                        <div className='file_input_item_content'>
                                            {stl[0].file.file.name}
                                            <div className='file_input_item_dimensions'>
                                                <span>{stl[0].file.width.toFixed(2)}mm</span>
                                                <span>x</span>
                                                <span>{stl[0].file.height.toFixed(2)}mm</span>
                                                <span>x</span>
                                                <span>{stl[0].file.depth.toFixed(2)}mm</span>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                            })}
                        </> 
                        : <></>}
                    </div>
                    <div className='request_form_specs'>
                        <span>Resumen</span>
                        <span>{material}</span>
                        <span>{isSanded ? <>Acabado suavizado</> : <>Acabado estandar</>}</span>
                        <span>{infill}</span>
                        <span>{color}</span>
                    </div>
                    {/* <span></span>
                    <span>{material}</span>
                    <span>{isSanded && <>Si</>}</span>
                    <span>{infill}</span> */}
                </div>
            </div>
        </div>
    )
}

export default RequestForm;