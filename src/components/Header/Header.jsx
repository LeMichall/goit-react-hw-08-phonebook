import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/auth/authActions';
import css from './Header.module.css'

const Header = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  return (
    <header>
        <div className={css.headerWrapper}>
      <nav>
        <ul className={css.headerList}>
          <li>
            <Link className={css.headerListLink} to="/"><h2>Phonebook</h2></Link>
          </li>
          <li>
            <Link className={css.headerListLink} to="/">Home</Link>
          </li>
          {isLoggedIn && (
            <li > 
              <Link className={css.headerListLink} to="/contacts">Contacts</Link>
            </li>
          )}
        </ul>
      </nav></div>
      <div className={css.headerWrapper}>
        {isLoggedIn ? (
          <>
            <p className={css.headerUsername}>Welcome, {user.name}</p>
            <button className={css.headerButton} onClick={() => dispatch(logOut())}>Log out</button>
          </>
        ) : (
          <nav>
            <ul className={css.headerList}>
              <li >
                <Link className={css.headerListLink} to="/login">Login</Link>
              </li>
              <li>
                <Link className={css.headerListLink} to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;