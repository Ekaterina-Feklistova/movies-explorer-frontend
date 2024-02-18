import './Navigation.css';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div className="navigation">
        <nav className="navigation__movies">
            <>
              <NavLink
                className="navigation__navlink"
                to="/movies"
              >
                Фильмы
              </NavLink>
              <NavLink
                className="navigation__navlink"
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </>
          
        </nav>
      </div>
    </>
  );
}
