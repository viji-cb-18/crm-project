import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthRoute from './components/AuthRoute';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="/customers" element={<AuthRoute><Customers /></AuthRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

