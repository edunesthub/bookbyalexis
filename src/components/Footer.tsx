import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-100 dark:bg-[#1f2937] text-sm text-gray-700 dark:text-gray-300 border-t border-amber-600/20">
    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Brand */}
      <div className="flex items-center space-x-2">
        <BookOpen className="h-5 w-5 text-amber-500" />
        <span className="font-semibold text-gray-900 dark:text-white">Books by Alexis</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()}
        </span>
      </div>

      {/* Links */}
      <div className="flex items-center space-x-5">
        <Link
          to="/about"
          className="hover:text-amber-500 dark:hover:text-amber-400 transition"
        >
          About
        </Link>
        <Link
          to="/books"
          className="hover:text-amber-500 dark:hover:text-amber-400 transition"
        >
          Books
        </Link>
        <Link
          to="/contact"
          className="hover:text-amber-500 dark:hover:text-amber-400 transition"
        >
          Contact
        </Link>
      </div>
    </div>

    <div className="text-center text-xs text-gray-600 dark:text-white py-2 italic">
      “Keep reading, keep growing.” <span className="mx-1">|</span> Made with{' '}
      <span className="text-amber-500 animate-pulse">♥</span> by Alexis
    </div>
  </footer>
);

export default Footer;
