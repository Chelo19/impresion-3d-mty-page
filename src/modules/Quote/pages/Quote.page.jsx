import React from "react";
import { useNavigate } from "react-router-dom";
import { QuoteProvider } from "../context/QuoteContext";

export function Quote() {

  const navigate = useNavigate();

  return (
    <QuoteProvider>
      <button onClick={() => navigate('print-quote')} >Impresion</button>
      <br/>
      <br/>
      <button onClick={() => navigate('service-quote')} >Servicio</button>
    </QuoteProvider>
  );
}
