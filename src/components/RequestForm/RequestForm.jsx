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

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function RequestForm({stlFiles, material, isSanded, infill, color}){
    const navigate = useNavigate();

    const [orderId] = useState(createId());

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userComments, setUserComments] = useState('');
    
    const [validated, setValidated] = useState(false);
    const [alertVariant, setAlertVariant] = useState(null);
    const [alertText, setAlertText] = useState('');

    const handleSubmit = (event) => {
        // // sendClientEmail();
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            sendAdminEmail();
            uploadSupabaseBucket();
        }
        setValidated(true);
        return false;
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
            setAlertVariant('success');
            setAlertText(
            <>
                Mensaje enviado correctamente, {userName.split(' ')[0]}. En breve le contactaremos para darle seguimiento a su proyecto.
                <br/><strong><Link to="/">Regresar</Link></strong>
            </>
            );
        }, function(error) {
            console.log('FAILED...', error);
            setAlertVariant('danger');
            setAlertText('Hubo un error al procesar su solicitud. Intente de nuevo.');
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
                <Form className='request-form' noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo electrónico de contacto</Form.Label>
                        <Form.Control type="email" placeholder="correo@ejemplo.com" onChange={(e) => setUserEmail(e.target.value)} required/>
                        <Form.Control.Feedback type="invalid">
                            Escriba un correo electrónico válido.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" onChange={(e) => setUserName(e.target.value)} required/>
                        <Form.Control.Feedback type="invalid">
                            Escriba un nombre de contacto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="tel" placeholder="Ej. 8120515415" onChange={(e) => setUserPhone(e.target.value)} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
                        <Form.Control.Feedback type="invalid">
                            Escriba un número de teléfono válido sin espacios ni guiones.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comentarios</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setUserMessage(e.target.value)} required/>
                        <Form.Control.Feedback type="invalid">
                            Cuéntenos un poco acerca de su proyecto.
                        </Form.Control.Feedback>
                    </Form.Group>
                    {
                        alertVariant != 'success' &&
                        <>
                            <Button id='home-contact-form-btn-submit' as="input" type="submit" value="Enviar"/>{' '}
                        </>
                    }
                </Form>
                {
                    alertVariant &&
                    <>
                        <Alert id='request-form-alert' key={alertVariant} variant={alertVariant}>
                            {alertText}
                        </Alert>
                    </>
                }
            </div>
        </div>
    )
}

export default RequestForm;