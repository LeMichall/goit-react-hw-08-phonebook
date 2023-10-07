import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import css from './HomePage.module.css'

const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.homePageWrapper}>
      <div>
        <h1>Hi!</h1>
        <p>
          Here you can create and store your contacts. Lets start with making an account or login if u already have one.
        </p>
        {!isLoggedIn && (
          <div className={css.homePageLinks}>
            <button type='button' className={css.homePageButton}>
            <Link to="/register" className={css.homePageLink}>
              Register
            </Link>
            </button>
            <button type='button' className={css.homePageButton}>
            <Link to="/login" className={css.homePageLink}>
              Log in
            </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;