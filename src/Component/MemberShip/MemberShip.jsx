import React from 'react';
import './MemberShip.css'
import Price from "../../assets/Price"
import { motion } from 'framer-motion'; 

const Membership = () => {
  return (
    <div id="membership" className='membership'>
      <motion.div 
          initial={{ y: 100, opacity: 0 }}  // Starta utanför skärmen (nedanför) och med opacity 0
          whileInView={{ y: 0, opacity: 1 }} // När den är synlig: flytta till ursprunglig position och öka opacity
          transition={{ duration: 1.2, ease: 'easeOut' }} // Tidsinställning och easing för animationen
          viewport={{ once: true }} // Kör bara animationen en gång när den kommer i sikte
        >
          <h1 className='medlemskap-h1'>Medlemskap</h1>
        </motion.div>
        
        <motion.div
         initial={{ y: 100, opacity: 0 }}  // Starta utanför skärmen (nedanför) och med opacity 0
         whileInView={{ y: 0, opacity: 1 }} // När den är synlig: flytta till ursprunglig position och öka opacity
         transition={{ duration: 1.8, ease: 'easeOut', delay: 0.5 }} // Tidsinställning och easing för animationen
         viewport={{ once: true }} // Kör bara animationen en gång när den kommer i sikte
        
        >

       
      <div className="container">
       {Price.map((plan,index)=>(
         <div className="card" key={index}>
            <h2 className="prisnamn">{plan.name}</h2>
            <p className="pris">{plan.price}</p>
            <ul>
              {plan.features.map((features,index)=>(
                <li key={index}>{features}</li>
              ))}
            </ul>
            <button className="membership-button">Välj plan</button>
         </div>
       ))}
      </div>
       </motion.div>
    </div>
  );
}

export default Membership;