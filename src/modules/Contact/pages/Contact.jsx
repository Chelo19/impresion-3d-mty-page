import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./Contact.css";
import { supabase } from "../../../supabase/client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import messenger from "../../../assets/messenger.png";
import instagram from "../../../assets/instagram.png";
import whatsapp from "../../../assets/whatsapp.png";
import email from "../../../assets/email.png";
import Alert from "react-bootstrap/Alert";

import Logo from "../../../assets/impresion-3d-logo.png";

function Contact() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const [alertVariant, setAlertVariant] = useState(null);
  const [alertText, setAlertText] = useState("");
  const [validated, setValidated] = useState(false);

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendContactEmail();
    }
    setValidated(true);
    return false;
  };

  const sendContactEmail = async () => {
    emailjs
      .send(
        "service_kmyfgfk",
        "template_r9d3gwv",
        {
          user_name: userName,
          user_email: userEmail,
          user_company: userCompany,
          user_message: userMessage,
          user_phone: userPhone,
        },
        "k27Yr9noc7Y8QOyoC"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setAlertVariant("success");
          setAlertText(
            `Mensaje enviado correctamente, ${
              userName.split(" ")[0]
            }. En breve le contactaremos para darle seguimiento a su proyecto.`
          );
          formDbFill();
          setIsSent(true);
        },
        function (error) {
          console.log("FAILED...", error);
          setAlertVariant("danger");
          setAlertText(
            "Hubo un error al procesar su solicitud. Intente de nuevo."
          );
        }
      );
    event.preventDefault();
  };

  const formDbFill = async () => {
    const { data, error } = await supabase
      .from("contact_forms")
      .insert({
        name: userName,
        email: userEmail,
        phone: userPhone,
        company: userCompany,
        message: userMessage,
        origin: "CONTACT"
      });

    if (error) {
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16688283436"
        ></script>
        <script>
          {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-16688283436');
                    `}
        </script>
      </Helmet>
      <Form
        className="contact-page-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h1>Contáctanos para trabajar en tu proyecto</h1>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Escriba un nombre de contacto.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo electrónico de contacto</Form.Label>
          <Form.Control
            type="email"
            placeholder="correo@ejemplo.com"
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Escriba un correo electrónico válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Número de teléfono</Form.Label>
          <Form.Control
            type="phone"
            placeholder="Ej. 8120515415"
            onChange={(e) => setUserPhone(e.target.value)}
            pattern="[0-9]{10}"
            required
          />
          <Form.Control.Feedback type="invalid">
            Escriba un número de teléfono válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Empresa</Form.Label>
          <Form.Control
            type="text"
            placeholder="Empresa"
            onChange={(e) => setUserCompany(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Escriba la empresa a la que pertenece.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setUserMessage(e.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Cuéntenos un poco acerca de su proyecto.
          </Form.Control.Feedback>
        </Form.Group>
        {!isSent && (
          <>
            <Button
              id="contact-page-form-btn-submit"
              as="input"
              type="submit"
              value="Enviar"
            />{" "}
          </>
        )}
      </Form>
      <div className="contact-page-info">
        <img className="contact-page-info-bg" src={Logo} />
        <h1>Impresión 3D Monterrey</h1>
        <div className="contact-page-info-container">
          <h4>Redes sociales</h4>
          <div className="contact-page-info-item">
            <img src={messenger} />
            <Link
              to={"https://www.facebook.com/profile.php?id=61563777674355"}
              target="_blank"
            >
              Impresión 3D Monterrey - 3dprintmty
            </Link>
          </div>
          <div className="contact-page-info-item">
            <img src={instagram} />
            <Link to={"https://www.instagram.com/3dprintmty/"} target="_blank">
              3dprintmty
            </Link>
          </div>
        </div>
        <div className="contact-page-info-container">
          <h4>Contacto directo</h4>
          <div className="contact-page-info-item">
            <img src={whatsapp} />
            <Link to={"https://wa.me/8120515415"} target="_blank">
              +52 (81) 20515415
            </Link>
          </div>
          <div className="contact-page-info-item">
            <img src={email} />
            <Link>cotizaciones@3dprintmty.com</Link>
          </div>
        </div>
      </div>
      {alertVariant && (
        <>
          <Alert key={alertVariant} variant={alertVariant}>
            {alertText}
          </Alert>
        </>
      )}
    </div>
  );
}

export default Contact;
