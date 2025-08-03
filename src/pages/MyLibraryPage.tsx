import React from 'react';
import { BookOpen, Heart } from 'lucide-react';
import BookCard from '../components/BookCard';
import booksData from '../data/books.json';
import { useUserPreferences } from '../contexts/UserPreferencesContext';

const MyLibraryPage: React.FC = () => {
  const { savedBooks } = useUserPreferences();
  
  const savedBooksData = booksData.filter(book => savedBooks.includes(book.id));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
              <Heart className="h-12 w-12 text-amber-600 dark:text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Library
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your personal collection of saved books. Pick up where you left off or discover something new.
          </p>
        </div>

        {/* Saved Books */}
        {savedBooksData.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400">
                {savedBooksData.length} {savedBooksData.length === 1 ? 'book' : 'books'} in your library
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savedBooksData.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
              Your library is empty
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start building your personal collection by saving books you want to read or return to later.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                How to save books:
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Look for the bookmark icon on any book card or while reading. Click it to add books to your personal library.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLibraryPage;