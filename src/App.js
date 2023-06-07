//import logo from './logo.svg';
import React from 'react';
import './App.css';
//import { Navbar } from 'reactstrap';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';

// import Marketplace from './pages/services';
import Services from './pages/services';
import About from './pages/about';
import Home from './pages/home'
import Contact from './pages/contact'
// import Registration from './pages/SignIn/Registration';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        {/* <Route path='/' Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/marketplace' Component={Marketplace} /> */}
        
        <Route path='/home' Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/about'  Component={About} />
        <Route path='/contact'  Component={Contact} />
        {/* <Route path='/sign-in' Component={Registration} /> */}
        
      </Routes>
    </Router>
    

    
  );
}

export default App;
