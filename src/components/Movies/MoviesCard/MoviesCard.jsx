import { Link } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import movie1 from '../../../images/movie1.svg';
import movie2 from '../../../images/movie2.svg';
import movie3 from '../../../images/movie3.svg';
import movie4 from '../../../images/movie4.svg'

function MoviesCard() {

  return (
    <>
      <li className="movies-card">
        <article className="movies-card__content">
          <div className="movies-card__container">
            <Link target="_blank">
              <img
                src={movie1}
                alt='pic1'
                className="movies-card__image"
              />
            </Link>
          </div>
          <div className="movies-card__title-container">
            <Link
              className="movies-card__title"
              target="_blank"
            >
              33 слова о дизайне
            </Link>
              <p className="movies-card__duration">
                1ч42м
              </p>
          </div>
        </article>
      </li>
      <li className="movies-card">
        <article className="movies-card__content">
          <div className="movies-card__container">
            <Link target="_blank">
              <img
                src={movie2}
                alt='pic1'
                className="movies-card__image"
              />
            </Link>
          </div>
          <div className="movies-card__title-container">
            <Link
              className="movies-card__title"
              target="_blank"
            >
              33 слова о дизайне
            </Link>
              <p className="movies-card__duration">
                1ч42м
              </p>
          </div>
        </article>
      </li>
      <li className="movies-card">
        <article className="movies-card__content">
          <div className="movies-card__container">
            <Link target="_blank">
              <img
                src={movie3}
                alt='pic1'
                className="movies-card__image"
              />
            </Link>
          </div>
          <div className="movies-card__title-container">
            <Link
              className="movies-card__title"
              target="_blank"
            >
              33 слова о дизайне
            </Link>
              <p className="movies-card__duration">
                1ч42м
              </p>
          </div>
        </article>
      </li>
      <li className="movies-card">
        <article className="movies-card__content">
          <div className="movies-card__container">
            <Link target="_blank">
              <img
                src={movie4}
                alt='pic1'
                className="movies-card__image"
              />
            </Link>
          </div>
          <div className="movies-card__title-container">
            <Link
              className="movies-card__title"
              target="_blank"
            >
              33 слова о дизайне
            </Link>
              <p className="movies-card__duration">
                1ч42м
              </p>
          </div>
        </article>
      </li>
    </>
  );
}

export default MoviesCard;