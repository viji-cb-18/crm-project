import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/customers">Customers</Link> | 
      <Link to="/dashboard">Dashboard</Link> | 
      {!token ? (
        <>
          <Link to="/signup">Signup</Link>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
