import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Bookmark, BookmarkCheck } from 'lucide-react';
import { useUserPreferences } from '../contexts/UserPreferencesContext';

interface Book {
  id: string;
  title: string;
  description: string;
  genre: string;
  coverImage: string;
  publishedDate: string;
  featured: boolean;
}

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({ book, featured = false }) => {
  const { getLastReadChapter, isBookSaved, toggleSavedBook } = useUserPreferences();
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const lastChapter = getLastReadChapter(book.id);
  const hasProgress = lastChapter > 0;
  const saved = isBookSaved(book.id);
  const readingUrl = hasProgress ? `/books/${book.id}?chapter=${lastChapter}` : `/books/${book.id}`;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
      featured ? 'md:flex' : ''
    }`}>
      <div className={`${featured ? 'md:w-1/3' : ''} relative overflow-hidden`}>
        <img
          src={book.coverImage}
          alt={`Cover of ${book.title}`}
          className={`w-full ${featured ? 'h-48 md:h-full' : 'h-64'} object-cover group-hover:scale-105 transition-transform duration-300`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSavedBook(book.id);
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          aria-label={saved ? 'Remove from library' : 'Save to library'}
        >
          {saved ? <BookmarkCheck className="h-5 w-5 text-amber-600" /> : <Bookmark className="h-5 w-5 text-gray-600 dark:text-gray-400" />}
        </button>
      </div>
      
      <div className={`p-6 ${featured ? 'md:w-2/3 md:flex md:flex-col md:justify-between' : ''}`}>
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              <Tag className="w-3 h-3 mr-1" />
              {book.genre}
            </span>
            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(book.publishedDate)}
            </span>
          </div>
          
          <h3 className={`font-bold text-gray-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {book.title}
          </h3>
          
          <p className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${
            featured ? 'text-base' : 'text-sm'
          }`}>
            {book.description}
          </p>
          
          {hasProgress && (
            <p className="text-xs text-amber-600 dark:text-amber-400 mb-4 font-medium">
              Continue from Chapter {lastChapter + 1}
            </p>
          )}
        </div>
        
        <Link
          to={readingUrl}
          className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
        >
          {hasProgress ? 'Continue Reading' : 'Read Now'}
        </Link>
      </div>
    </div>
  );
};

export default BookCard;