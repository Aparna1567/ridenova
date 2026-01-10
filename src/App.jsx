// App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

import Home from './pages/Home/Home';
import Cars from './pages/Cars/Cars';
import CarDetail from './pages/CarDetail/CarDetail';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Contact from './pages/Contact/Contact';

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
  const location = useLocation(); // Added useLocation hook
  const authToken = localStorage.getItem('authToken');
  
  if (!authToken) {
    // Pass only the path string instead of location object
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  
  return children;
};

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Show/hide button on scroll
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route 
          path="/cars/:id" 
          element={
            <ProtectedRoute>
              <CarDetail />
            </ProtectedRoute>
          } 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {showButton && (
        <button
          onClick={scrollUp}
          className="fixed cursor-pointer bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg transition-colors focus:outline-none"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default App;