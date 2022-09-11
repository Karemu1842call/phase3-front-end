import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Hub from './components/Hub';
import Form from './components/Form';
import Cart from './components/Cart';
import Dealer from './components/Dealer';
import Footer from './components/Footer';
import {Route,Routes} from "react-router-dom"
import cardata from './hooks/Cardata';
import { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
    <NavBar /> 
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route exact path='/hub' element={<Hub />}/>
      
    </Routes>
    </div>
  );
}

export default App;
