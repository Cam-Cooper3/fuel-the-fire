// frontend/src/components/HomePage.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Import custom SVG icons from assets directory
import utensilsIcon from '../assets/utensils.svg';
import offerIcon from '../assets/local_offer.svg';
import calendarIcon from '../assets/calendar.svg';
import stockMeals from '../assets/stock_meals.png';

// Define a custom component prop for the Hero Section image URL
interface HomePageProps {
  heroImageUrl?: string;
}

// Add style tag for custom Welcome Section text animation
const styles = `
  @keyframes highlight {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  .text-highlight {
    background: linear-gradient(to right, #E85B25 20%, #ff7e4a 40%, #ff7e4a 60%, #E85B25 80%);
    background-size: 200% auto;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    animation: highlight 8s linear infinite;
  }
`;

const HomePage = ({ heroImageUrl = stockMeals }: HomePageProps) => {
  return (
    <>
      <style>{styles}</style>
      {/* Hero Section Wrapper */}
      <div className="container mx-auto px-6 pt-8">
        <section 
          className="relative h-80 bg-cover bg-center text-white rounded-2xl overflow-hidden" 
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative h-full flex flex-col justify-center items-center text-center p-4">
            <div className="bg-white p-4 rounded-lg shadow-2xl w-full max-w-2xl">
              <div className="relative flex items-center">
                <svg className="absolute left-4 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input 
                  type="text"
                  placeholder="Enter your address for meal options"
                  className="w-full pl-12 pr-32 py-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-900"
                />
                <button className="absolute right-2 bg-primary text-white p-2 rounded-md hover:bg-opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4 text-highlight">Welcome to Fuel the Fire</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Our mission is to fuel your journey with intentional meals that balance flavor, macros, and convenience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
              <img src={utensilsIcon} alt="Meal Prep Icon" className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-6">Meal Prep Made Easy</h3>
              <Link to="/menu" className="mt-auto bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition">Menu</Link>
            </div>
            {/* Card 2 */}
            <div className="bg-white border rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
              <img src={offerIcon} alt="Weekly Specials Icon" className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-6">Weekly Specials</h3>
              <Link to="/specials" className="mt-auto bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition">Details</Link>
            </div>
            {/* Card 3 */}
            <div className="bg-white border rounded-lg shadow-lg p-8 text-center flex flex-col items-center">
              <img src={calendarIcon} alt="Subscription Plans Icon" className="h-12 w-12" />
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-6">Subscription Plans</h3>
              <Link to="/subscriptions" className="mt-auto bg-primary text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition">Details</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
