import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          <Link to="/">Graxagram</Link>
        </h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-indigo-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="hover:text-indigo-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:text-indigo-600 transition-colors"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
