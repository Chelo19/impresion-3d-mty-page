import React, { useContext, useRef } from "react";
import { QuoteContext } from "../../context/QuoteContext";
import FileInput from "./FileInput/FileInput";
import QuoteStepper from "./QuoteStepper/QuoteStepper";
import SelectMaterials from "./SelectMaterials/SelectMaterials";
import SelectConfiguration from "./SelectConfiguration/SelectConfiguration";
import OrderOverview from "./OrderOverview/OrderOverview";

export function PrintQuote() {
  const { stlFiles, setStlFiles, selectedMaterial, setSelectedMaterial, activeStep, setActiveStep } = useContext(QuoteContext);
  const orderOverviewRef = useRef();

  const isNextEnabled = () => {
    if (activeStep === 0) return true;
    if (activeStep === 1) return true;
    if (activeStep === 2) return true;
    if (activeStep === 3) return true;
    return false;
  };

  const handleSubmit = () => {
    if (orderOverviewRef.current) {
      return orderOverviewRef.current.handleSubmit();
    }
    return false;
  };

  const stepContent = [
    <FileInput stlFiles={stlFiles} setStlFiles={setStlFiles} />,
    <SelectMaterials selectedMaterial={selectedMaterial} setSelectedMaterial={setSelectedMaterial} />,
    <SelectConfiguration />,
    <OrderOverview ref={orderOverviewRef} />
  ];

  return (
    <QuoteStepper
      stepContent={stepContent}
      isNextEnabled={isNextEnabled()}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      handleSubmit={handleSubmit}
    />
  );
}