import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';
import Materials from './pages/Materials/Materials.jsx';
import IndividualMaterial from './pages/IndividualMaterial/IndividualMaterial.jsx';
import UploadFile from './pages/UploadFile/UploadFile.jsx';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SelectMaterial from './pages/SelectMaterial/SelectMaterial';
import RequestUpload from './pages/RequestUpload/RequestUpload';
import SelectInfill from './pages/SelectInfill/SelectInfill';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import NotFound from './pages/NotFound/NotFound';

function App() {

  const [stlFiles, setStlFiles] = useState([]);
  const [material, setMaterial] = useState('');
  const [isSanded, setIsSanded] = useState(false);
  const [infill, setInfill] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      e.preventDefault();
      e.returnValue = true;
    }
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => {
      window.removeEventListener("beforeunload", beforeUnloadHandler);
    }
  }, []);

  return (
    <div className='main_app'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/impresion-3d-mty-page/" element={<HomePage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/not-found" element={<NotFound />}/>
          <Route path="/materiales" element={<Materials />}/>
          <Route path="/material-individual/:material" element={<IndividualMaterial />}/>
          <Route path="/preguntas-frecuentes" element={<FAQ />}/>
          <Route path="/upload-file" element={<UploadFile stlFiles={stlFiles} setStlFiles={setStlFiles} />}/>
          <Route path="/select-material" element={<SelectMaterial stlFiles={stlFiles} setMaterial={setMaterial}/>}/>
          <Route path="/select-finish" element={<SelectInfill material={material} stlFiles={stlFiles} setIsSanded={setIsSanded} setInfill={setInfill} setColor={setColor}/>}/>
          <Route path="/request-upload" element={<RequestUpload stlFiles={stlFiles} material={material} isSanded={isSanded} infill={infill} color={color}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
