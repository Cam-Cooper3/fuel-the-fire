// frontend/src/components/SharedLayout.tsx

import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Import assets
import logo from '../assets/fuel-the-fire-2.png';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';

const SharedLayout = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the homepage after logout
  };

  return (
    <div className="bg-gray-200 font-sans flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Fuel the Fire logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary">
              Fuel the Fire
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="#" className="py-2 px-3 text-gray-600 hover:text-primary transition">Weekly Menu</Link>
            <Link to="#" className="py-2 px-3 text-gray-600 hover:text-primary transition">Pricing</Link>
            <Link to="#" className="py-2 px-3 text-gray-600 hover:text-primary transition">About Us</Link>
            <Link to="#" className="py-2 px-3 text-gray-600 hover:text-primary transition">FAQ</Link>
          </div>
          <div className="flex items-center space-x-2">
            {token && user ? (
              // Show Account and Logout buttons if user is logged in
              <>
                <Link to="/account" className="py-2 px-4 text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition">
                  My Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              // Show Login and Register buttons if user is logged out
              <>
                <Link to="/auth" state={{ showLogin: true }} className="py-2 px-4 text-primary border border-primary rounded-md hover:bg-primary hover:text-white transition">
                  Login
                </Link>
                <Link to="/auth" state={{ showLogin: false }} className="py-2 px-4 bg-primary text-white rounded-md hover:bg-opacity-90 transition">
                  Register
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Main content area that will grow and push the footer down */}
      <main className="flex-grow">
        {/* The Outlet component renders the current page (e.g., HomePage or AuthPage) */}
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4">
                <a href="#" className="hover:underline text-sm">Customer Support</a>
                <a href="#" className="hover:underline text-sm">Accessibility</a>
                <a href="#" className="hover:underline text-sm">Terms & Conditions</a>
                <a href="#" className="hover:underline text-sm">Privacy Policy</a>
            </div>
            
            <div className="flex flex-col items-end mt-4 md:mt-0">
                <div className="flex space-x-4">
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <img src={instagramIcon} alt="Instagram" className="h-6 w-6" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition-opacity">
                        <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
                    </a>
                </div>
                <p className="text-sm mt-2">&copy; 2025 Fuel the Fire</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SharedLayout;
