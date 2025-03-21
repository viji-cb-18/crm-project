import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const token = localStorage.getItem('token');

  return (
    <div className="home-container">
      <h1>Welcome to CRM System</h1>
      <p>Manage your customers and business efficiently.</p>

      <div className="home-links">
        {!token ? (
          <>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
          </>
        ) : (
          <>
            <Link to="/dashboard"><button>Go to Dashboard</button></Link>
            <Link to="/customers"><button>View Customers</button></Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
