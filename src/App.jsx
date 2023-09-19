import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage.jsx';
import UploadFile from './pages/UploadFile/UploadFile.jsx';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import SelectMaterial from './pages/SelectMaterial/SelectMaterial';

function App() {

  const [stlFiles, setStlFiles] = useState([]);
  console.log(stlFiles);

  return (
    <div className='main_app'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/upload-file" element={<UploadFile stlFiles={stlFiles} setStlFiles={setStlFiles} />}/>
          <Route path="/select-material" element={<SelectMaterial stlFiles={stlFiles}/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
