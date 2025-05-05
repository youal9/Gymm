import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!click) {
        setSticky(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [click]); // Lägg till "click" som beroende för att hantera menyn korrekt

  const handleClick = () => {
    setClick(!click);
    setSticky(false); // Stänger av "sticky" när menyn öppnas
  };

  const closeMenu = () => {
    setClick(false);
  };

  return (
    <div className={`header ${sticky ? 'dark-nav' : ''}`}>
      <nav className="navbar">
        <Link to="home" className="logo" smooth={true} duration={500} onClick={closeMenu}>
          Invasion <span>Fitness</span>
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
              Hem
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} offset={-100} onClick={closeMenu}>Om oss</Link>
          </li>
          <li className="nav-item">
            <Link to="membership" smooth={true} duration={500} offset={-100} onClick={closeMenu}>Medlemskap</Link>
          </li>
          <li className="nav-item">
            <Link to="PersonalTrainer" smooth={true} duration={500} offset={-90} onClick={closeMenu}>
              Personlig Tränare
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;