import './Login.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Login(){
  return (
    <main className="main">
      <section className="sign-in">
        <Link to="/">
          <img src={logo} alt="Логотип" className="sign-in__logo" />
        </Link>
        <h1 className="sign-in__title">Рады видеть!</h1>
        <form
          method="post"
          noValidate
          className="sign-in__form-container"
        >
          <fieldset className="sign-in__input-container">
            <p className="sign-in__text">E-mail</p>
            <input
              id="email"
              type="email"
              className="sign-in__input"
              autoComplete="off"
              required
              minLength="2"
              maxLength="40"
              name="email"
            />
          </fieldset>
          <fieldset className="sign-in__input-container">
            <p className="sign-in__text">Пароль</p>
            <input
              id="password"
              type="password"
              className="sign-in__input"
              autoComplete="off"
              required
              minLength="2"
              maxLength="200"
              name="password"
            />
          </fieldset>
          <button
            type="submit"
            className="sign-in__button link"
          >
            Войти
          </button>
        </form>
        <p className="sign-in__info">
          Еще не зарегистрированы?{' '}
          <Link
            to="/signup"
            className="sign-in__info sign-in__info_color_blue link"
          >
            Регистрация
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Login;