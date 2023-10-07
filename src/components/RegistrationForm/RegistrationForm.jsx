import React from 'react';
import { useDispatch } from 'react-redux';
import {register} from 'Redux/auth/authActions'
import { NavLink } from 'react-router-dom';
import css from'./RegistrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.registrationFormWrapper}>
      <h1 >Registration</h1>
      <form onSubmit={handleRegistration} className={css.registrationForm}>
          <input
            type="text"
            autoComplete="given-name"
            name="name"
            required
            className={css.registrationFormInput}
            id="name"
            placeholder="Your Name"
            autoFocus
          />
          <input
            type="email"
            required
            className={css.registrationFormInput}
            id="email"
            placeholder="Email Address"
            name="email"
            autoComplete="email"
          />
          <input
            type="password"
            required
            className={css.registrationFormInput}
            name="password"
            placeholder="Password"
            id="password"
            autoComplete="new-password"
          />
        <button type="submit" className={css.registrationFormButton}>
          Register
        </button>  
          <NavLink to="/login" className={css.registrationFormLoginLink}>
            Already have an account? Sign in
          </NavLink>
      </form>
    </div>
  );
};

export default RegistrationForm;