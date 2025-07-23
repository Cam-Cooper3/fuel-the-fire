// frontend/src/components/AccountPage.tsx
// Display users' information

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to homepage after logout
  };

  if (!user) {
    return <div>Loading user data...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Account</h1>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-600">Full Name</label>
            <p className="text-lg text-gray-900">{user.full_name}</p>
          </div>
          <div className="border-t my-4"></div>
          <div>
            <label className="text-sm font-semibold text-gray-600">Email Address</label>
            <p className="text-lg text-gray-900">{user.email}</p>
          </div>
          <div className="border-t my-4"></div>
          <div>
            <label className="text-sm font-semibold text-gray-600">Phone Number</label>
            <p className="text-lg text-gray-900">{user.phone_number || 'Not provided'}</p>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={handleLogout}
            className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;