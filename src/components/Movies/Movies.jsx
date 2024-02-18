import './Movies.css';
import Footer from '../Footer/Footer.jsx';
import SearchForm from '../Movies/SearchForm/SearchForm.jsx';
import MoviesCardList from './MoviesCardList/MoviesCardList.jsx';
import Header from '../Header/Header.jsx';

function Movies() {
  return (
    <>
      <Header />
      <main className="main">
        <SearchForm/>
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;