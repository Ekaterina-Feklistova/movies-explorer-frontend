import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation.jsx';

function Header() {
  
    return (
      <header className='header'>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <Navigation />
        <div className="header__button-conteiner">
          <Link to="/signup">
            <button className="header__button-register link">
              Регистрация
            </button>
          </Link>
          <Link to="/signin">
            <button className="header__button-login link">Войти</button>
          </Link>
        </div> 
      </header>
    );
  }
  
  export default Header;