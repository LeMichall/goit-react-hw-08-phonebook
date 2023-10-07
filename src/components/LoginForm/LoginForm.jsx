import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/authActions';
import { NavLink } from 'react-router-dom';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <div className={css.loginWrapper}>
        <h1 className={css.loginTitle}>Login to your account</h1>
        <form className={css.loginForm} onSubmit={handleLogin}>
          <input
            type="text"
            required
            className={css.loginInput}
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <input
            type="password"
            required
            className={css.loginInput}
            name="password"
            placeholder="Password"
            id="password"
            autoComplete="current-password"
          />
          <button type="submit" className={css.loginButton}>
            Login
          </button>
         <NavLink className={css.loginRegisterLink} to="/register">    Don't have an account? Sign Up</NavLink> 
        </form>
      </div>
    
  );
};

export default LoginForm;

