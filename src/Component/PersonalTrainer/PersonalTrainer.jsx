import React from 'react';
import trainer from "../../assets/trainer"
import './PersonalTrainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'; 

const PersonalTrainer = () => {
  return (
    <div className="team" id="PersonalTrainer">
          <motion.div 
          initial={{ y: 100, opacity: 0 }}  // Starta utanför skärmen (nedanför) och med opacity 0
          whileInView={{ y: 0, opacity: 1 }} // När den är synlig: flytta till ursprunglig position och öka opacity
          transition={{ duration: 1.2, ease: 'easeOut' }} // Tidsinställning och easing för animationen
          viewport={{ once: true }} // Kör bara animationen en gång när den kommer i sikte
        >      
          <h1 className="team-title">Vårt Team</h1>
        </motion.div>
       
        <motion.div
         initial={{ y: 100, opacity: 0 }}  // Starta utanför skärmen (nedanför) och med opacity 0
         whileInView={{ y: 0, opacity: 1 }} // När den är synlig: flytta till ursprunglig position och öka opacity
         transition={{ duration: 1.8, ease: 'easeOut', delay: 0.5 }} // Tidsinställning och easing för animationen
         viewport={{ once: true }} // Kör bara animationen en gång när den kommer i sikte
        
        >
      <div className="trainer-grid">
        {trainer.map((trainer) => (
          <div key={trainer.id} className="trainer-card">
            <img src={trainer.image} alt={trainer.name} />
            <h4>{trainer.name}</h4>
            <p>{trainer.role}</p>
            <div className="trainer-social">
              <a href={trainer.socials.instagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={trainer.socials.facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href={trainer.socials.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default PersonalTrainer;