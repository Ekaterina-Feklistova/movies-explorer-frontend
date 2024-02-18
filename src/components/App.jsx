import './App.css';
import CurrentUserContext from '../context/CurrentUserContext.jsx';
import ErrorContext from '../context/ErrorContext.jsx';
import Preloader from './Preloader/Preloader.jsx';
import { Routes, Route } from 'react-router-dom'; 
import Main from "./Main/Main.jsx";
import Movies from './Movies/Movies.jsx';
import Register from './Register/Register.jsx';
import Login from './Login/Login.jsx';
import Profile from './Profile/Profile.jsx';
import NotFound from './NotFound/NotFound.jsx';
import { useState } from 'react';


function App() {
  
  return (
    <CurrentUserContext.Provider>
      <ErrorContext.Provider>
        <div className="body">
          <div className="page">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </ErrorContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
