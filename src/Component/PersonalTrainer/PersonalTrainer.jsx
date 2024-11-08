import React from 'react';
import trainer from "../../assets/trainer"
import './PersonalTrainer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const PersonalTrainer = () => {
  return (
    <div className="team" id="PersonalTrainer">
      <h1 className="team-title">Vårt Team</h1>
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
    </div>
  );
};

export default PersonalTrainer;