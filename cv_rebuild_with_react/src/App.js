import './App.css';
import Nav from './My_components/Nav/Nav'; 
import Contact from "./My_components/Contact_info/Contact";
import About from "./My_components/About/About";
import Projects from "./My_components/Projects/Projects";
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const year = new Date().getFullYear();
  
  return (
    <Router>
      <div>
        <Nav/>    
        <Routes>
          <Route path="/" exact element={<About/>} />
          <Route path="/project" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
