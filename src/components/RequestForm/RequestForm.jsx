import { Link, useNavigate } from 'react-router-dom';
import './RequestForm.css'
import './FormInput.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import emailjs from 'emailjs-com';
import { supabase } from '../../supabase/client';

import impresion3dLogo from '../../assets/impresion-3d-logo.png';

function RequestForm({stlFiles, material, isSanded, infill, color}){
    const navigate = useNavigate();

    const [orderId] = useState(createId());

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
            sendAdminEmail();
            // sendClientEmail();
            uploadSupabaseBucket();
        }
        else{
            alert('Favor de corregir los datos');
        }
    };

    const sendAdminEmail = async () => {
        emailjs.send("service_kmyfgfk", "template_ytn1ffa",{
        user_name: userName,
        user_email: userEmail,
        user_phone: userPhone,
        user_comments: userComments,
        material: material,
        is_sanded: isSanded,
        infill: infill,
        color: color,
        stl_files: stlFilesListed,
        order_id: orderId},
        'k27Yr9noc7Y8QOyoC')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

    const stlFilesListed = stlFiles.map((stl) => {
        return `Nombre: ${stl.file.file.name}, X: ${stl.file.width.toFixed(2)}, Y: ${stl.file.height.toFixed(2)}, Z: ${stl.file.depth.toFixed(2)}, ${stl.aspectRatio.toFixed(2)}%, Cantidad: ${stl.quantity}`;
    }).join('\n');

    const sendClientEmail = async () => {
        emailjs.send("service_kmyfgfk", "template_d0dxmik",{
        user_name: userName,
        user_email: userEmail},
        'k27Yr9noc7Y8QOyoC')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }

    const uploadSupabaseBucket = async () => {
        stlFiles.map(async (stl) => {
            const { data, error } = await supabase
            .storage
            .from('stls')
            .upload(`${orderId}/${stl.file.file.name}`, stl.file.file, {
                cacheControl: '3600',
                upsert: false
            })
            if(error) console.log(error);
            else{
                console.log(data);
                alert('¡Revisa tu email!');
                navigate('/');
            }
        });
    }

    function createId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const size = 24;
        let id = '';
      
        for (let i = 0 ; i < size ; i++) {
            const index = Math.floor(Math.random() * characters.length);
            id += characters.charAt(index);
        }

        return id;
    }

    function timeout(number) {
        return new Promise( res => setTimeout(res, number) );
    }

    function navigateFaq(){
        navigate('/preguntas-frecuentes');
    }

    return(
        <div className="request_form">
            <div className='request_form_display'>
                {stlFiles ? 
                <>
                    {stlFiles.map((stl) => {
                        return(
                        <>
                            <div className='request_form_item' key={stl.id}>
                                <img src={impresion3dLogo}/>
                                <div className='request_form_item_container' id='request_form_stl'>
                                    <div className='request_form_item_content'>
                                        {stl.file.file.name}
                                        {console.log(stl.file)}
                                        <div className='file_input_item_dimensions'>
                                            <span>{stl.file.width.toFixed(2)}mm</span>
                                            <span>x</span>
                                            <span>{stl.file.height.toFixed(2)}mm</span>
                                            <span>x</span>
                                            <span>{stl.file.depth.toFixed(2)}mm</span>
                                        </div>
                                        <div className='request_form_item_specs'>
                                            <div className='request_form_material'>Cantidad {stl.quantity}</div>
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
                        <textarea value={userComments} id='form_input' placeholder='(Comentarios, solicitudes, etc...)' onChange={(e) => setUserComments(e.target.value)}/>
                    </div>
                    <span className='form_faq'>* obligatorio</span>
                    <button onClick={handleSubmit}>Enviar</button>
                    {/* <span className='form_faq'>Si tienes alguna duda acerca de tu impresión, haz click <a onClick={navigateFaq}>aquí</a></span> */}
                </form>
            </div>
        </div>
    )
}

export default RequestForm;