import './Register.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Register (){
  return (
    <main className="main">
      <section className="sign-up">
        <Link to="/">
          <img src={logo} alt="Логотип" className="sign-up__logo" />
        </Link>
        <h1 className="sign-up__title">Добро пожаловать!</h1>
        <form
          method="post"
          noValidate
          className="sign-up__form-container"
        >
          <fieldset className="sign-up__input-container">
            <p className="sign-up__text">Имя</p>
            <input
              id="name"
              type="text"
              className="sign-up__input"
              autoComplete="off"
              required
              minLength="2"
              maxLength="40"
              name="username"
            />
          </fieldset>
          <fieldset className="sign-up__input-container">
            <p className="sign-up__text">E-mail</p>
            <input
              id="email"
              type="email"
              className="sign-up__input"
              autoComplete="off"
              required
              minLength="2"
              maxLength="40"
              name="email"
            />
          </fieldset>
          <fieldset className="sign-up__input-container">
            <p className="sign-up__text">Пароль</p>
            <input
              id="password"
              type="password"
              className="sign-up__input"
              autoComplete="off"
              required
              minLength="2"
              maxLength="200"
              name="password"
            />
          </fieldset>
          <button
            type="submit"
            className="sign-up__button link"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="sign-up__info">
          Уже зарегистрированы?{' '}
          <Link
            to="/signin"
            className="sign-up__info sign-up__info_color_blue link"
          >
            Войти
          </Link>
        </p>
      </section>
    </main>
  );
}
export default Register;