// filepath: /c:/Users/mdeleon/OneDrive - Entidad Controladora SA de CV/Documentos/Marcelo/impresion-3d-mty-page/src/App.jsx
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { QuoteProvider } from "./modules/Quote/context/QuoteContext.jsx";
import Contact from "./pages/Contact/Contact";
import FAQ from "./pages/FAQ/FAQ";
import HomePage2 from "./pages/HomePage2/HomePage2.jsx";
import IndividualMaterial from "./pages/IndividualMaterial/IndividualMaterial.jsx";
import Materials from "./pages/Materials/Materials.jsx";
import NotFound from "./pages/NotFound/NotFound";

import p1sFarm from "./assets/homePage/p1s-farm.png";
import { QuoteRouter } from "./modules/Quote/Quote.router.jsx";
import { Box, Container } from "@mui/material";

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
          {/* <Container maxWidth="md" sx={{ mt: 14 }}> */}
              <Routes>
                <Route path="/" element={<HomePage2 />} />
                <Route path="/home" element={<HomePage2 />} />
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
          {/* </Container> */}
          </div>
          <Footer />
        </BrowserRouter>
      </QuoteProvider>
    </HelmetProvider>
  );
}

export default App;
