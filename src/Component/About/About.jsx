import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faPersonSwimming, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import bild from "../../assets/fit.png";
import { motion } from 'framer-motion'; // Importera Framer Motion

const About = () => {
  return (
    <div className="about">
      <section className="hero">
        <motion.div 
          className="about-img"
          initial={{ y: 100, opacity: 0 }}  // Starta utanför skärmen (nedanför) och med opacity 0
          whileInView={{ y: 0, opacity: 1 }} // När den är synlig: flytta till ursprunglig position och öka opacity
          transition={{ duration: 1.2, ease: 'easeOut' }} // Tidsinställning och easing för animationen
          viewport={{ once: true }} // Kör bara animationen en gång när den kommer i sikte
        >
          <img src={bild} alt="Gym" />
        </motion.div>

        <motion.div 
          className="about-tex"
          initial={{ y: 50, opacity: 0 }} // Starta utanför skärmen (nedanför) och med opacity 0
          whileInView={{ y: 0, opacity: 1 }} // När den är synlig: flytta till ursprunglig position och öka opacity
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.8 }} // Lägg till lite fördröjning så texten kommer efter bilden
          viewport={{ once: true }} // Kör bara animationen en gång
        >
          <h1 className="h2-text">Vad vi Erbjuder</h1>
          <div className="about-grid">
            <div className="about-card">
              <span><FontAwesomeIcon icon={faDumbbell} /></span>
              <div>
                <h3 className='card-h3'>Vår Träning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget blandit lacus.
                  Integer mattis sed est non fringilla. Etiam eget pulvinar lacus. Suspendisse potenti.
                  Suspendisse a lobortis lorem. Quisque vulputate gravida metus quis
                </p>
              </div>
            </div>
            <div className="about-card">
              <span><FontAwesomeIcon icon={faPersonSwimming} /></span>
              <div>
                <h3 className='card-h3'>Simmning</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget blandit lacus.
                  Integer mattis sed est non fringilla. Etiam eget pulvinar lacus. Suspendisse potenti.
                  Suspendisse a lobortis lorem. Quisque vulputate gravida metus quis
                </p>
              </div>
            </div>
            <div className="about-card">
              <span><FontAwesomeIcon icon={faHandHoldingMedical} /></span>
              <div>
                <h3 className='card-h3'>Sjukvård</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget blandit lacus.
                  Integer mattis sed est non fringilla. Etiam eget pulvinar lacus. Suspendisse potenti.
                  Suspendisse a lobortis lorem. Quisque vulputate gravida metus quis
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
