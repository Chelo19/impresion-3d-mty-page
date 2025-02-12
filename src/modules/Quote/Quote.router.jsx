import { Route, Routes } from "react-router-dom";
import { PrintQuote } from "./components/PrintQuote/PrintQuote";
import { ServiceQuote } from "./components/ServiceQuote/ServiceQuote";
import { Quote } from "./pages/Quote.page";

export const QuoteRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Quote />} />
      <Route path="/cotizar-impresion" element={<PrintQuote />} />
      <Route path="/cotizar-servicio" element={<ServiceQuote />} />
    </Routes>
  );
};
