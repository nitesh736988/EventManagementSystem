import React from 'react';
import { useState } from 'react';
import './CSS/index.css';
import Festivo from '../../assets/festivo.png';
import users from '../../data/users.json'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Find user in JSON data
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          // Login successful
          console.log('Login successful', user);
          // Store user data (in a real app, you would get a token from backend)
          localStorage.setItem('user', JSON.stringify(user));
          // Redirect or update state as needed
          window.location.href = '/Dasboard'; // Simple redirect
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        console.log('Login error:', err?.response?.data || err.message  || err);
        setError('Login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1000); // Simulate network delay
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={Festivo} alt="Festivo Logo" className="logo" />
      </div>
      <div className="container-data">
        <div className="heading">
          <h2>Welcome Back!</h2>
          <p>Please login to your account</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              required 
            />
          </div>         
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;