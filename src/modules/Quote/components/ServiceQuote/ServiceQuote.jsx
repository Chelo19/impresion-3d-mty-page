import React, { useContext, useState } from "react";
import FileInput from "../../../../components/FileInput/FileInput";
import { QuoteContext } from "../../context/QuoteContext";
import QuoteStepper from "./QuoteStepper";

export function ServiceQuote() {
  const { stlFiles, setStlFiles } = useContext(QuoteContext);
  const [activeStep, setActiveStep] = useState(0);

  const isNextEnabled = () => {
    if (activeStep === 0 && stlFiles.length > 0) return true;
    if (activeStep === 1) return true;
    return false;
  };

  const stepContent = [
    <FileInput stlFiles={stlFiles} setStlFiles={setStlFiles} />,
    <div>Step 2</div>,
    <div>Step 3</div>,
  ];
  return (
      <QuoteStepper
        stepContent={stepContent}
        isNextEnabled={isNextEnabled()}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
  );
}
