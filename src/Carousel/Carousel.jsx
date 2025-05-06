import React, { useRef } from 'react';
import './Carousel.css';

import img1 from '../assets/gym1.webp';
import img2 from '../assets/gym2.jpg';
import img3 from '../assets/gym3.jpg';
import img4 from '../assets/gym4.jpg';
import img5 from '../assets/gym5.jpg';
import img6 from '../assets/gym6.webp';
import img7 from '../assets/gym7.webp';

const images = [img7, img1, img2, img3, img4, img5, img6];

const Carousel = () => {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
  };

  return (
    <section id="carousel" className="carousel-section">
      <h1 className="carousel-title">Våra lokaler</h1>
      <div className="carousel-container">
        <button className="scroll-btn left" onClick={scrollLeft}>‹</button>
        <div className="image-strip" ref={scrollRef}>
          {images.map((img, i) => (
            <img key={i} src={img} alt={`slide-${i}`} className="carousel-image" />
          ))}
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>›</button>
      </div>
    </section>
  );
};

export default Carousel;
