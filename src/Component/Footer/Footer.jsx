// src/Footer.js
import React, { useState } from 'react';
import './Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Footer = () => {

    const [click,setClick]=useState(false)

    const handelClick =()=>{
        setClick(!click) 
    }
    return (
        <section className='footer'>
            <div className="footer-content">
                <Link to="home" > 
                 
                 <h3 onClick={handelClick} className='footer-h3' > Invasion <span>Fitness</span></h3>

                </Link>
               
                <p className='footer-text'>
                    Nordic Wellness – hela Sveriges träningsklubb. Alla har rätt
                    till ett riktigt bra gym – oavsett vem du är, 
                    var du bor eller varför du tränar.  
                </p>
                <div className="icon">
                    <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
            <div className="footer-right">
                <h4 className="footer-h4"> Kontakt</h4>
                <li>invasion@outlook.com</li>
                <li>tel: 072345678</li>
                <li>adress: råsunda 19</li>
                <li>Vanliga Frågor (FAQ)</li>
            </div>
            <div className="footer-right">
                <h4 className="footer-h4">Avtal & Policies</h4>
                <li>Medlemsavtal</li>
                <li>Autogiromedgivande</li>
                <li>Olycksfallsförsäkring</li>
                <li>Integritetspolicy</li>
            </div>
            <div className="footer-right">
                <h4 className="footer-h4"> Om oss</h4>
                <li>Jobba hos oss</li>
                <li> Våra partners</li>
                <li>Vårt ansvar</li>
            </div>
            <div className="footer-bottom">
                <p className="p-text">&copy; {new Date().getFullYear()}Copyright ©  Invasion gym.</p>
            </div>
        </section>
    );
}

export default Footer;
