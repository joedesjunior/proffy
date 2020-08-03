import React from 'react'; 

// Import CSS - Landing
import './styles.css'

// Import React Router DOM 
import { Link } from 'react-router-dom';

// Import Images 
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

// Import Icons
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de Estudos" 
          className="hero-image"
        />

        <div className="buttons-container">
          
          {/* Button "Quero Estudar" */}
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Quero Estudar"/>
            Quero Estudar!
          </Link>

          {/* Button "Quero dar Aula" */}
          <Link to="/give-classes" className="giveClasses">
            <img src={giveClassesIcon} alt="Quero dar Aulas"/>
            Quero dar Aula!
          </Link>
          
        </div>

        <span className="total-connection">
          Total de 200 conexões já realizadas. <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;