import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('/customers') 
      .then((res) => setCustomers(res.data))
      .catch((err) => {
        console.error('Error fetching customers:', err);
        alert('Access denied or failed to fetch customers.');
      });
  }, []);

  return (
    <div className="page-container">
      <h2>Customers List</h2>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id}>
              <strong>{customer.name}</strong> - {customer.email} - {customer.phone}
            </li>
          ))}
        </ul>
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  );
};

export default Customers;
