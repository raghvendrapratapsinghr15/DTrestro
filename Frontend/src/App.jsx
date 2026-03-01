import React from 'react'
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Toaster} from "react-hot-toast";


import Home from './pages/Home';
import Success from './pages/Success';
import NotFound from './pages/NotFound';


import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/menu" element={<MenuPage />} /> 
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App