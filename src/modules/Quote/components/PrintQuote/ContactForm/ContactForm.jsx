import { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { QuoteContext } from "../../../context/QuoteContext";
import "./ContactForm.css";
import { supabase } from "../../../../../supabase/client";
import emailjs from "emailjs-com";

export default function ContactForm({ formData, handleChange }) {
  const [validated, setValidated] = useState(false);
  const [alertVariant, setAlertVariant] = useState(null);
  const [alertText, setAlertText] = useState("");
  const {
    setIsFinished,
    setActiveStep,
    stlFiles,
    selectedMaterial,
    selectedInfill,
    selectedColor,
    selectedLayerHeight,
  } = useContext(QuoteContext);

  const [orderId] = useState(createId());
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      const form = event.currentTarget;
      console.log("form:", form.checkValidity());

      if (form.checkValidity() === false) {
        event.stopPropagation();
        setValidated(true);
        return false;
      } else {
        // EN CASO DE QUE SEA SUCCESS
        setValidated(true);
        setIsSending(true);
        uploadSupabaseBucket();
      }
    }
    return true;
  };

  const sendAdminEmail = async () => {
    const req = {
      user_name: formData.userName,
      user_email: formData.userEmail,
      user_phone: formData.userPhone,
      user_comments: formData.userComments,
      order_id: orderId,
      material: selectedMaterial.material,
      infill: selectedInfill.infill,
      color: selectedColor.name + " - " + selectedColor.color_hex,
      layer_height: selectedLayerHeight.layerHeight,
      stl_files: stlFilesListed,
    };
    emailjs
      .send("service_kmyfgfk", "template_ytn1ffa", req, "k27Yr9noc7Y8QOyoC")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setAlertText(
            <>
              Mensaje enviado correctamente, {formData.userName.split(" ")[0]}. En breve
              le contactaremos para darle seguimiento a su proyecto.
            </>
          );
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
          setIsFinished(true);
          setIsSending(false);
        },
        function (error) {
          console.log("FAILED...", error);
          setAlertVariant("danger");
          setAlertText(
            "Hubo un error al procesar su solicitud. Intente de nuevo."
          );
        }
      );
  };

  const uploadSupabaseBucket = async () => {
    stlFiles.map(async (stl) => {
      const { data, error } = await supabase.storage
        .from("3d_files")
        .upload(`${orderId}/${stl.file.file.name}`, stl.file.file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (error) alert("error uploading file");
      else {
        sendAdminEmail();
        console.log(data);
      }
    });
  };

  const stlFilesListed = stlFiles
    .map((stl) => {
      if (stl.file.type === "stl") {
        return `Nombre: ${stl.file.file.name}, X: ${stl.file.width.toFixed(
          2
        )}, Y: ${stl.file.height.toFixed(2)}, Z: ${stl.file.depth.toFixed(
          2
        )}, ${stl.aspectRatio.toFixed(2)}%, Cantidad: ${stl.quantity}`;
      } else {
        return `Nombre: ${stl.file.file.name}, Cantidad: ${stl.quantity}`;
      }
    })
    .join("\n");

  function createId() {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const size = 24;
    let id = "";

    for (let i = 0; i < size; i++) {
      const index = Math.floor(Math.random() * characters.length);
      id += characters.charAt(index);
    }

    return id;
  }

  function timeout(number) {
    return new Promise((res) => setTimeout(res, number));
  }

  return (
    <div>
      <h3>Datos de contacto</h3>
      <Form
        className="request-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
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
            Escriba un número de teléfono válido de 10 dígitos sin espacios ni
            guiones.
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
        {(alertVariant !== "success" && isSending === false)  && (
          <CustomButton type="primary">Enviar</CustomButton>
        )}
      </Form>
      {alertVariant && (
        <Alert
          id="request-form-alert"
          key={alertVariant}
          variant={alertVariant}
        >
          {alertText}
        </Alert>
      )}
    </div>
  );
}
