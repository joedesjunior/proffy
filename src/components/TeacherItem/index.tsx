import React from 'react';

//Import Icons
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

// Import CSS Teacher Item 
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/46693145?s=460&u=a406618453ccd8c848b454a1024f711edf463e36&v=4" alt="Joedes Junior"/>
            <div>
              <strong>Joedes Junior</strong>
              <span>Matemática</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de matemática avançada.
            <br/><br/>
            Apaixonado por calculos e coisas bizarras com números, e por mudar a vida das pessoas com meus ensinamentos. 
          </p>

          <footer>
            <p>
              Preço/Hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="WhatsApp"/>
              Chamar no WhatsApp
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;