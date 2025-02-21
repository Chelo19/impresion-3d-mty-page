import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./CtaSection.css";

export default function CtaSection() {
    const navigate = useNavigate();
  return (
    <div className="cta-section">
      <span className="cta-section-title">¿Listo para imprimir?</span>
      <div className="cta-section-buttons">
        <CustomButton type="secondary" onClick={() => navigate("/cotizador/cotizar-impresion")}>Cotizar {`>`}</CustomButton>
        <CustomButton type="secondary" outlined onClick={() => navigate("/contacto")}>Contacto {`>`}</CustomButton>
      </div>
    </div>
  );
}
