import React from 'react';
import { Link } from 'react-router-dom';
//import './Navigation.css';

export const Navigation = () => {
  return (
    <div className="navigation-container">
      <Link to="/register" className="navigation-link">
        Register
      </Link>
      <Link to="/login" className="navigation-link">
        Log in
      </Link>
    </div>
  );
};