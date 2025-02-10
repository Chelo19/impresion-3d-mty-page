import { useContext, useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import CustomButton from "../../../components/CustomButton/CustomButton";
import { QuoteContext } from "../../context/QuoteContext";
import "./ContactForm.css";

export default function ContactForm({ formData, handleChange }) {
    const [validated, setValidated] = useState(false);
    const [alertVariant, setAlertVariant] = useState(null);
    const [alertText, setAlertText] = useState('');
    const { setIsFinished, setActiveStep } = useContext(QuoteContext);


    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            const form = event.currentTarget;
            console.log('form:', form.checkValidity());

            if (form.checkValidity() === false) {
                event.stopPropagation();
                setValidated(true);
                return false;
            }
            else {
                // EN CASO DE QUE SEA SUCCESS
                setValidated(true);
                setAlertVariant('success');
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                setIsFinished(true);
                // setAlertText(
                //     <>
                //         Mensaje enviado correctamente, {formData.userName.split(' ')[0]}. En breve le contactaremos para darle seguimiento a su proyecto.
                //     </>
                // );
            }
        }
        return true;
    };
    return (
        <div>
            <h3>Datos de contacto</h3>
            <Form className='request-form' noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Escriba un nombre de contacto.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Correo electrónico de contacto</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="correo@ejemplo.com"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Escriba un correo electrónico válido.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Ej. 8120515415"
                        name="userPhone"
                        value={formData.userPhone}
                        onChange={handleChange}
                        pattern="[0-9]{10}"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Escriba un número de teléfono válido de 10 dígitos sin espacios ni guiones.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formComments">
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="userComments"
                        value={formData.userComments}
                        onChange={handleChange}
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        Cuéntenos un poco acerca de su proyecto.
                    </Form.Control.Feedback>
                </Form.Group>
                {alertVariant !== 'success' && (
                    <CustomButton type="primary">
                        Enviar
                    </CustomButton>
                )}
            </Form>
            {
                alertVariant &&
                <Alert id='request-form-alert' key={alertVariant} variant={alertVariant}>
                    {alertText}
                </Alert>
            }
        </div>
    );
}