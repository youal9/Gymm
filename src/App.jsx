import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Membership from './Component/MemberShip/MemberShip';


import Home from './Component/Home/home';
import PersonalTrainer from './Component/PersonalTrainer/PersonalTrainer';
import Footer from './Component/Footer/Footer';


export function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      
      <About /> 
      <Membership /> 
      <PersonalTrainer/>
     <Footer/>
    </div>
  );
}

export default App;
