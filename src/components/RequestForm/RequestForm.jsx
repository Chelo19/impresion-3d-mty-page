import { Link } from 'react-router-dom';
import './RequestForm.css'
import './FormInput.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function RequestForm({stlFiles, material, isSanded, infill, color}){

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userComments, setUserComments] = useState('');
    
    const [inputNameStyle, setInputNameStyle] = useState({color: 'inherit'});
    const [inputEmailStyle, setInputEmailStyle] = useState({color: 'inherit'});
    const [inputPhoneStyle, setInputPhoneStyle] = useState({color: 'inherit'});

    const handlePhoneNumberChange = (e) => {
        const inputValue = e.target.value;    
        const numericValue = inputValue.replace(/[^0-9]/g, '');
        setUserPhone(numericValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputNameStyle({color: 'inherit'});
        setInputEmailStyle({color: 'inherit'});
        setInputPhoneStyle({color: 'inherit'});
        let errorBool = false;
        if(!userName){
            console.log('1');
            setInputNameStyle({color: '#e35d6a'});
            let errorBool = false;
            errorBool = true;
        }
        if(!userEmail.includes("@")){
            console.log('2');
            setInputEmailStyle({color: '#e35d6a'});
            errorBool = true;
        }
        if(!userPhone){
            console.log('3');
            setInputPhoneStyle({color: '#e35d6a'});
            errorBool = true;
        }
        if(!errorBool){
            console.log('Bien');
        }
        else{
            alert('Favor de corregir los datos');
        }
    };

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
                                            <div className='request_form_material'>Cantidad {stl[0].quantity}</div>
                                            <div className='request_form_color' style={{backgroundColor: `#${color}`}}></div>
                                            <div className='request_form_material'>{material}</div>
                                            <div className='request_form_material'>{isSanded ? <>Suavizado</> : <>Estándar</>}</div>
                                            <div className='request_form_material'>Relleno {infill}%</div>
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
                <form className='form_container'>
                    <div className='form_wrapper'>
                        <span style={inputNameStyle}>Nombre *</span>
                        <input value={userName} id='form_input' type='text' onChange={(e) => setUserName(e.target.value)} maxLength={255}/>
                    </div>
                    <div className='form_wrapper'>
                        <span style={inputEmailStyle}>Email *</span>
                        <input value={userEmail} id='form_input' type='email' onChange={(e) => setUserEmail(e.target.value)} maxLength={100}/>
                    </div>
                    <div className='form_wrapper'>
                        <span style={inputPhoneStyle}>Teléfono *</span>
                        <input value={userPhone} id='form_input' type='text' onChange={handlePhoneNumberChange} maxLength={10}/>
                    </div>
                    <div className='form_wrapper'>
                        <span>Comentarios</span>
                        <textarea value={userComments} id='form_input' placeholder='(Opcional)' onChange={(e) => setUserComments(e.target.value)}/>
                    </div>
                    <span className='form_faq'>* obligatorio</span>
                    <button onClick={handleSubmit}>Enviar</button>
                    <span className='form_faq'>Si tienes alguna duda, haz click <Link to={'/preguntas-frecuentes'} target='_blank'>aquí</Link></span>
                </form>
            </div>
        </div>
    )
}

export default RequestForm;