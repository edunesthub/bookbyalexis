import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import BookCard from '../components/BookCard';
import booksData from '../data/books.json';

const HomePage: React.FC = () => {
  const featuredBooks = booksData.filter(book => book.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                <Sparkles className="h-12 w-12 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Read My Books
              <span className="block text-amber-600 dark:text-amber-400">For Free</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to my personal library! I'm passionate about storytelling and believe that great books should be accessible to everyone. 
              Dive into worlds of fantasy, science fiction, and human connection—all completely free to read.
            </p>
            <Link
              to="/books"
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              Explore All Books
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Author Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Welcome, Fellow Reader
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm an independent author who believes in the power of storytelling to connect us across distances and differences. 
                My writing spans genres from mystical fantasy to thought-provoking science fiction, always with a focus on 
                the human experience at the heart of every tale.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                This is my gift to the reading community—stories crafted with love and shared freely. 
                I hope you find something here that resonates with you.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
              >
                Learn more about my journey
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Books
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Start your reading journey with these handpicked stories
            </p>
          </div>
          
          <div className="space-y-8">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} featured={true} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/books"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200"
            >
              View All Books
              <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;