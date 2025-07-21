// frontend/src/components/AuthPage.tsx

import React, { useState } from 'react';
import axios from 'axios';

// Define base URL for API
// Should match the address of FastAPI server
const API_URL = 'http://127.0.0.1:8000';

const AuthPage = () => {
  // State to toggle between Login and Register forms
  const [isLogin, setIsLogin] = useState(true);

  // State for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State for handling messages and errors
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/v1/users/register`, {
        full_name: fullName,
        email: email,
        password: password,
      });
      
      setMessage('Registration successful! Please log in.');
      setIsLogin(true); // Switch to login form after successful registration
      
    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Registration failed. Please try again.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    // FastAPI's OAuth2PasswordRequestForm expects form data, not JSON
    const formData = new URLSearchParams();
    formData.append('username', email);
    formData.append('password', password);

    try {
      const response = await axios.post(`${API_URL}/api/v1/users/login`, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      // Temporary success message
      // Save this token later (e.g., in localStorage or context)
      const token = response.data.access_token;
      setMessage(`Login successful! Token received.`);
      console.log('Access Token:', token);

    } catch (err: any) {
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'Login failed. Please check your credentials.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Fuel the Fire</h1>
          <p className="text-gray-600 mb-8">{isLogin ? 'Welcome back!' : 'Create your account'}</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full">
          <div className="mb-6">
            <div className="flex border-b">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-center font-semibold transition-colors ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-center font-semibold transition-colors ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'}`}
              >
                Register
              </button>
            </div>
          </div>

          {/* Display error or success message(s) */}
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{error}</div>}
          {message && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{message}</div>}

          <form onSubmit={isLogin ? handleLogin : handleRegister}>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
