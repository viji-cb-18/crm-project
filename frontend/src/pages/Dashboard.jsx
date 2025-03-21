import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/dashboard') 
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error('Error fetching dashboard data:', err);
        alert('Access denied to dashboard.');
      });
  }, []);

  return (
    <div className="page-container">
      <h2>Dashboard</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
