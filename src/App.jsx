import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import About from './Component/About/About';
import Membership from './Component/MemberShip/MemberShip';


import Home from './Component/Home/Home';
import PersonalTrainer from './Component/PersonalTrainer/PersonalTrainer';
import Footer from './Component/Footer/Footer';
import Carousel from './Component/Carousel/Carousel';


export function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      
      <About /> 
      <Carousel/>
      <Membership /> 
      <PersonalTrainer/>
     <Footer/>
    </div>
  );
}

export default App;
