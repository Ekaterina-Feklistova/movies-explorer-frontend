import { Link } from 'react-router-dom';
import './Profile.css';
function Profile(){
  return (
    <>
      <section className="profile">
        <h2 className="profile__user-name">{`Привет!`}</h2>
        <form method="post" className="profile__form" noValidate>
          <fieldset className="profile__input-container">
            <p className="profile__input-name">Имя</p>
            <input
              type="text"
              name="username"
              autoComplete="off"
              required
              minLength="2"
              maxLength="40"
              className="profile__input profile__input_type_border"
              placeholder="Введите Ваше имя"
            />
            <span id="error-name" className="profile__error">
              Ошибка
            </span>
          </fieldset>
          <span className="profile__input-border"></span>
          <fieldset className="profile__input-container">
            <p className="profile__input-name">E-mail</p>
            <input
              type="email"
              name="email"
              autoComplete="off"
              required
              minLength="2"
              maxLength="40"
              className="profile__input"
              placeholder="Введите Вашу электронную почту"
            />
            <span id="error-email" className="profile__error">
              Ошибка
            </span>
          </fieldset>
          <span id="error-api" className="profile__error">
            Ошибка
          </span>
          <span id="success-api" className="profile__success">
            Обновление профиля произошло успешно.
          </span>
        </form>
          
            <button
              className="button profile__button-edit link"
              
            >
              Редактировать
            </button>
          
          
            <Link
              to="/"
              
              className="button profile__button-exit link"
            >
              Выйти из аккаунта
            </Link>
          
            <>
              <button
                className="profile__update-button link"                
              >
                Сохранить
              </button>
            </>
      </section>
    </>
  );
}

export default Profile;