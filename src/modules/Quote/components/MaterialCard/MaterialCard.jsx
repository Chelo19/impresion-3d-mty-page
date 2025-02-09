import { useContext, useEffect } from "react";
import "./MaterialCard.css";
import { Button } from "@mui/material";
import { QuoteContext } from "../../context/QuoteContext";
// import CheckIcon from '@mui/icons-material/Check';

export default function MaterialCard({ material, colors }) {
  const { selectedMaterial, setSelectedMaterial, activeStep, setActiveStep } = useContext(QuoteContext);
  const handleMaterialSelection = (material) => {
    console.log("Material selected:", material);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setSelectedMaterial(material);
  };

  return (
    <div className="material-card">
      <div className="material-card-image">
        <img src={material.img_url} alt={material.material} />
        <div></div>
      </div>
      <div className="material-card-texts">
        <span className="material-card-title">{material.material}</span>
        <span className="material-card-description">
          {material.description}
        </span>
        {material.accuracy && (
          <span className="material-card-properties">
            <strong>Precisión: </strong>
            {material.accuracy}
          </span>
        )}
        {material.volumetric_speed && (
          <span className="material-card-properties">
            <strong>Velocidad volumétrica: </strong>
            {material.volumetric_speed} mm³/s
          </span>
        )}
        {colors.length > 0 && (
          <div className="material-card-colors">
            {colors.map((color) => (
              <div
                className="material-card-color"
                key={color.id}
                style={{
                  backgroundColor: `#${color.color_hex}`,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div className="material-card-features">
        {material.features && (
          <>
            <span>
              <strong>Características:</strong>
            </span>
            {material.features.map((feature, index) => (
              <div key={index} className="material-card-feature">
                <span>- {feature}</span>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="material-card-last-column">
        <span className="material-card-cpu">
          <strong>${material.cpu}</strong>
          <span style={{ fontSize: "18px" }}> mxn/g</span>
        </span>
        <button
          onClick={() => handleMaterialSelection(material)}
          variant="contained"
          color="primary"
          className="material-card-select-button-primary"
        >
          Seleccionar
        </button>
        <button variant="outlined" color="primary" className="material-card-select-button-alt">
          Mas
        </button>
        {selectedMaterial.id === material.id && (
          <div className="material-card-selected">Seleccionado</div>
        )}
      </div>
    </div>
  );
}
