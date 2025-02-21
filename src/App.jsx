// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/App.jsx
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/bootstrap.css";
import Footer from "./modules/components/Footer/Footer.jsx";
import NavBar from "./modules/components/NavBar/NavBar.jsx";
import { QuoteProvider } from "./modules/Quote/context/QuoteContext.jsx";
import FAQ from "./pages/FAQ/FAQ";
import IndividualMaterial from "./modules/Materials/components/MaterialDisplay/IndividualMaterial/IndividualMaterial.jsx";
import Materials from "./modules/Materials/pages/Materials/Materials.jsx";
import NotFound from "./pages/NotFound/NotFound";

import p1sFarm from "./assets/homePage/p1s-farm.png";
import { QuoteRouter } from "./modules/Quote/Quote.router.jsx";
import { Box, Container } from "@mui/material";
import Home from "./modules/Home/pages/Home.jsx";
import Contact from "./modules/Contact/pages/Contact.jsx";

function App() {
  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      e.preventDefault();
      e.returnValue = true;
    };
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    };
  }, []);

  return (
    <HelmetProvider>
      <QuoteProvider>
        <Helmet>
          <meta property="og:image" content={p1sFarm} />
        </Helmet>
        <BrowserRouter>
          <NavBar />
          <div className="utility-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/materiales" element={<Materials />} />
              <Route
                path="/materiales/:material"
                element={<IndividualMaterial />}
              />
              <Route path="/preguntas-frecuentes" element={<FAQ />} />
              <Route path="/cotizador/*" element={<QuoteRouter />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </QuoteProvider>
    </HelmetProvider>
  );
}

export default App;
