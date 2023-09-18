import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '/src/pages/HomePage.jsx'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className='main_app'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
