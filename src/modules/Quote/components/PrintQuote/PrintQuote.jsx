import React, { useContext, useState } from "react";
import { QuoteContext } from "../../context/QuoteContext";
import FileInput from "./FileInput/FileInput";
import QuoteStepper from "./QuoteStepper/QuoteStepper";
import SelectMaterials from "./SelectMaterials/SelectMaterials";
import SelectConfiguration from "./SelectConfiguration/SelectConfiguration";

export function PrintQuote() {
  const { stlFiles, setStlFiles, selectedMaterial, setSelectedMaterial } = useContext(QuoteContext);
  const [activeStep, setActiveStep] = useState(0);

  const isNextEnabled = () => {
    // if (activeStep === 0 && stlFiles.length > 0) return true;
    if (activeStep === 0) return true;
    if (activeStep === 1) return true;
    if (activeStep === 2) return true;
    return false;
  };

  const stepContent = [
    <FileInput stlFiles={stlFiles} setStlFiles={setStlFiles} />,
    <SelectMaterials selectedMaterial={selectedMaterial} setSelectedMaterial={setSelectedMaterial}/>,
    <SelectConfiguration />,
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
