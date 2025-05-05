import React from 'react';
import './About.css';
import pov from '../../assets/gymm.webp';
import car from '../../assets/BAGS.jpg';
import { motion } from 'framer-motion'; 

function About() {
    
  return (
    <div className='oss' id="about">
        <motion.div 
           initial={{ x: -100, opacity: 0 }}  // Startposition: 100px till vänster och osynlig
           whileInView={{ x: 0, opacity: 1 }} // När synlig: flytta till sin riktiga position och synlig
          transition={{ duration: 1.2, ease: 'easeOut' }} 
           viewport={{ once: true }} // Kör animationen bara en gång
        >  
              <h1>Om oss</h1>
        </motion.div>

        
        
        <div className="oss-content"> 
            <div className="content">
              <motion.div 
                  initial={{ x: -80, opacity: 0 }}  // Startposition: 100px till vänster och osynlig
                  whileInView={{ x: 0, opacity: 1 }} // När synlig: flytta till sin riktiga position och synlig
                  transition={{ duration: 1.5, ease: 'easeOut' }} 
                  viewport={{ once: true }} // Kör animationen bara en gång
                >  

                <img src={pov} alt="Nordic Driving Academy" />
                </motion.div>
            </div>
            <div className="oss-container">
              <motion.div 
                initial={{ x: 80, opacity: 0 }}  // Startposition: 100px till vänster och osynlig
                 whileInView={{ x: 0, opacity: 1 }} // När synlig: flytta till sin riktiga position och synlig
                 transition={{ duration: 2.5, ease: 'easeOut' }} 
                 viewport={{ once: true }} // Kör animationen bara en gång
                >
                <h3>Invasion Fitness</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod id tellus sed scelerisque. 
                    Quisque iaculis malesuada blandit. Ut nec diam commodo, molestie purus gravida, maximus erat. 
                    Aenean id nunc at lorem malesuada gravida a et mauris. Sed id augue ultrices, dignissim magna ut, 
                    sollicitudin ipsum.
                </p>
                </motion.div>
            </div>
            <div className="oss-container">
            <motion.div 
                initial={{ x: -80, opacity: 0 }}  // Startposition: 100px till vänster och osynlig
                 whileInView={{ x: 0, opacity: 1 }} // När synlig: flytta till sin riktiga position och synlig
                 transition={{ duration: 2.5, ease: 'easeOut' }} 
                 viewport={{ once: true }} // Kör animationen bara en gång
                >
                <h3>LÅT PT PLANERA DIN TRÄNING</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod id tellus sed scelerisque. 
                    Quisque iaculis malesuada blandit. Ut nec diam commodo, molestie purus gravida, maximus erat. 
                    Aenean id nunc at lorem malesuada gravida a et mauris. Sed id augue ultrices, dignissim magna ut, 
                    sollicitudin ipsum.
                </p>
                </motion.div>
            </div>
            <div className="content">
            <motion.div 
                initial={{ x: 80, opacity: 0 }}  // Startposition: 100px till vänster och osynlig
                 whileInView={{ x: 0, opacity: 1 }} // När synlig: flytta till sin riktiga position och synlig
                 transition={{ duration: 2.5, ease: 'easeOut' }} 
                 viewport={{ once: true }} // Kör animationen bara en gång
                >
                <img src={car} alt="Nordic Driving Academy" />
                </motion.div>
            </div>
            
        </div>
    </div>
  );
}

export default About;
