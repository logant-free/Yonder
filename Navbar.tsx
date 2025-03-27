import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Yonder</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <MessageCircle className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;