// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/context/QuoteContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [stlFiles, setStlFiles] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedInfill, setSelectedInfill] = useState(null);
  const [selectedLayerHeight, setSelectedLayerHeight] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <QuoteContext.Provider
      value={{
        activeStep,
        setActiveStep,
        stlFiles,
        setStlFiles,
        selectedMaterial,
        setSelectedMaterial,
        selectedColor,
        setSelectedColor,
        selectedInfill,
        setSelectedInfill,
        selectedLayerHeight,
        setSelectedLayerHeight
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
