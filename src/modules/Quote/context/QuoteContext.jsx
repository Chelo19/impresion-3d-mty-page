// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/modules/Quote/context/QuoteContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext();

export const QuoteProvider = ({ children }) => {
  const [stlFiles, setStlFiles] = useState([]);
  const [material, setMaterial] = useState("");

  return (
    <QuoteContext.Provider value={{ stlFiles, setStlFiles }}>
      {children}
    </QuoteContext.Provider>
  );
};