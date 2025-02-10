import React from "react";
import "./CustomStepper.css";
import CheckIcon from '@mui/icons-material/Check';

export default function CustomStepper({ steps, activeStep }) {
  return (
    <div className="custom-stepper">
      {steps.map((label, index) => (
        <div
          key={label}
          className={`step ${index < activeStep ? "completed" : ""} ${index === activeStep ? "active" : ""}`}
        >
          <div className="step-label">
            {index < activeStep ? <CheckIcon /> : label}
          </div>
          {index < steps.length - 1 && <div className="step-separator" />}
        </div>
      ))}
    </div>
  );
}