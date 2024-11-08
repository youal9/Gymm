import React, { useRef } from 'react';
import './Home.css';
import video from "../../assets/gym-video.mp4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import About from '../About/About'; // Lägg till denna rad för att importera About

const Home = () => {
  const aboutRef = useRef(null); // Skapa en ref för About-sektionen

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Rulla till About-sektionen
    }
  };

  return (
    <div className='hero-wrapper' id='home'>
      <section className="video-section">
        <div className="video-container">
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            style={{ maxWidth: "100%", maxHeight: "500px" }}
          />
          <div className='video-text'>
            <motion.div className="text-wrapper">
              <motion.h2
              className="home-h2"
                initial={{ x: '-100vw' }} // Startposition från vänster
                animate={{ x: 0 }} // Slutposition
                transition={{ duration: 3, ease: "easeOut" }}
              >
                Välkommen till Invasion
              </motion.h2>
              <motion.h2
              className="home-h2"
                initial={{ x: '60vw', opacity: 0 }} // Startar utanför skärmen och osynlig
                animate={{ x: 0, opacity: 1 }} // Flyttar till sin ursprungliga position och blir synlig
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <span className="fitness-span">Fitness</span>
              </motion.h2>
            </motion.div>
          </div>
        </div>
        <FontAwesomeIcon icon={faArrowDown} className="down-arrow" onClick={scrollToAbout} />
      </section>

     
      <div ref={aboutRef}>
        <About /> 
      </div>
    </div>
  );
};

export default Home;
