import '../Portfolio/Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__link-container">
          <Link
            to="https://github.com/Ekaterina-Feklistova/how-to-learn.git"
            className="portfolio__link link"
            target="_blank"
          >
            <p className="portfolio__subtitle">Статичный сайт</p>
            <button className="portfolio__button"></button>
          </Link>
        </li>
        <li className="portfolio__link-container">
          <Link
            to="https://github.com/Ekaterina-Feklistova/russian-travel.git"
            className="portfolio__link link"
            target="_blank"
          >
            <p className="portfolio__subtitle">Адаптивный сайт</p>
            <button className="portfolio__button"></button>
          </Link>
        </li>
        <li className="portfolio__link-container">
          <Link
            to="https://github.com/Ekaterina-Feklistova/react-mesto-api-full-gha.git"
            className="portfolio__link link"
            target="_blank"
          >
            <p className="portfolio__subtitle">
              Одностраничное приложение
            </p>
            <button className="portfolio__button"></button>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;