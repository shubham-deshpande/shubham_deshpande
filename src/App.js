import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/Home';
import Qualification from './Components/Qualification';
import Skills from './Components/Skills';
import Achievements from './Components/Acievements'
import Projects from './Components/Projects';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar name="Shubham Deshpande" h="Home" q="Qualifications" e="Experience & Skills" a="Acheivements & Responsibilities" p="Projects"/>
      <Routes>
          <Route path="/shubham_deshpande" element={<Home/>} />
          <Route path="/shubham_deshpande/qualification" element={<Qualification/>}/>
          <Route path="/shubham_deshpande/experience" element={<Skills/>} />
          <Route path="/shubham_deshpande/achievement" element={<Achievements/>}/>
          <Route path="/shubham_deshpande/projects" element={<Projects/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;