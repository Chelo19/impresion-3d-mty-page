import { Link } from 'react-router-dom';
import './RequestForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function RequestForm({stlFiles, material, isSanded, infill, color}){

    return(
        <div className="request_form">
            <div className='request_form_display'>
                {stlFiles ? 
                <>
                    {stlFiles.map((stl) => {
                        return(
                        <>
                            <div className='request_form_item'>
                                <img src='src/assets/impresion-3d-logo.png'/>
                                <div className='request_form_item_container' id='request_form_stl' key={stl[0].id}>
                                    <div className='request_form_item_content'>
                                        {stl[0].file.file.name}
                                        <div className='file_input_item_dimensions'>
                                            <span>{stl[0].file.width.toFixed(2)}mm</span>
                                            <span>x</span>
                                            <span>{stl[0].file.height.toFixed(2)}mm</span>
                                            <span>x</span>
                                            <span>{stl[0].file.depth.toFixed(2)}mm</span>
                                        </div>
                                        <div className='request_form_item_specs'>
                                            <div className='request_form_color' style={{backgroundColor: `#${color}`}}></div>
                                            <div className='request_form_material'>{material}</div>
                                            <div className='request_form_material'>{isSanded ? <>Suavizado</> : <>Estándar</>}</div>
                                            <div className='request_form_material'>{infill}%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                    })}
                </>
                : <></>}
            </div>
            <div className='request_form_personal_data'>
                {/*  */}
                {/*  */}
            </div>
        </div>
    )
}

export default RequestForm;