import React, { useContext, useEffect, useState } from "react";
import { QuoteContext } from "../../../context/QuoteContext";
import "../../../styles/Quote.css";
import "./QuoteStepper.css";
import CustomStepper from "../../CustomStepper/CustomStepper";
import CustomButton from "../../../../components/CustomButton/CustomButton";

export default function QuoteStepper({ stepContent, isNextEnabled, handleSubmit }) {
  const { setSelectedColor, setStlFiles, selectedMaterial, setSelectedMaterial, setSelectedInfill, setSelectedLayerHeight, steps, isFinished, setIsFinished, activeStep, setActiveStep } = useContext(QuoteContext);

  useEffect(() => {
    console.log('selectedMaterial:', selectedMaterial);
  }, []);

  const handleNext = () => {
    console.log('activeStep:', activeStep);

    if (activeStep === steps.length - 1) {
      if (handleSubmit()) {
        setIsFinished(true);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsFinished(false);
    setSelectedInfill(null);
    setSelectedLayerHeight(null);
    setSelectedMaterial("");
    setSelectedColor(null);
    setStlFiles([]);
  };

  return (
    <div className="quote-stepper">
      <CustomStepper steps={steps} activeStep={activeStep} />
      {isFinished ? (
        <div>
          <p>Gracias por tu solicitud, seras contactado por un vendedor</p>
          <div className="quote-stepper-actions">
            <CustomButton type="secondary" onClick={handleReset}>Reset</CustomButton>
          </div>
        </div>
      ) : (
        <>
          <br />
          {stepContent[activeStep]}
          <div className="quote-stepper-actions">
            <CustomButton type="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}>
              Regresar
            </CustomButton>
            {activeStep !== steps.length - 1 && (
              <CustomButton type="primary" onClick={handleNext} disabled={!isNextEnabled}>
                {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </CustomButton>

            )}
          </div>
        </>
      )}
    </div>
  );
}