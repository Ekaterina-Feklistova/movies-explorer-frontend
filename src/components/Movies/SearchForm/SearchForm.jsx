import './SearchForm.css';
// import useFormValidation from '../../../hooks/useFormValidation.js';
// import ErrorContext from '../../contexts/ErrorContext';
import FormCheckBox from '../FormCheckBox/FormCheckBox.jsx'

function SearchForm() {
  return (
    <section className="search-form">
      <form noValidate className="search-form__form-container" name={'SearchForm'} >
        <fieldset className="search-form__input-container">
          <input type="text" className="search-form__input" required minLength="2" maxLength="40" placeholder="Фильм" name="search"/>
          <button className="search-form__button link" type="submit"> Поиск </button>
          <FormCheckBox />
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;