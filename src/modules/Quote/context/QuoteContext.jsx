import React, { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [stlFiles, setStlFiles] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedInfill, setSelectedInfill] = useState(null);
  const [selectedLayerHeight, setSelectedLayerHeight] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userComments: ''
  });
  const steps = [
    stlFiles.length <= 0 ? "Seleccionar archivos" : `${stlFiles.length} archivo(s) seleccionado(s)`,
    !selectedMaterial ? "Seleccionar material" : `Material Seleccionado: ${selectedMaterial.material}`,
    "Seleccionar Configuración",
    "Revisar Solicitud"
  ];
  const [isFinished, setIsFinished] = useState(false);

  return (
    <QuoteContext.Provider
      value={{
        steps,
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
        setSelectedLayerHeight,
        formData,
        setFormData,
        isFinished,
        setIsFinished
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};