import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, Tag, Bookmark, BookmarkCheck } from 'lucide-react';
import booksData from '../data/books.json';
import { useUserPreferences } from '../contexts/UserPreferencesContext';

const BookReader: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { updateLastReadChapter, isBookSaved, toggleSavedBook } = useUserPreferences();

  const initialChapter = parseInt(searchParams.get('chapter') || '0', 10);
  const [currentChapter, setCurrentChapter] = useState(0);

  const book = booksData.find(b => b.id === bookId);
  const saved = isBookSaved(bookId || '');

  useEffect(() => {
    setCurrentChapter(initialChapter);
  }, [initialChapter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (bookId) {
      updateLastReadChapter(bookId, currentChapter);
    }
  }, [currentChapter]);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Book not found
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const chapters = book.content.chapters;
  const currentChapterData = chapters[currentChapter];

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {book.title}
                </h1>
                <button
                  onClick={() => toggleSavedBook(book.id)}
                  className="ml-4 p-2 text-gray-500 hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 transition-colors"
                  aria-label={saved ? 'Remove from library' : 'Save to library'}
                >
                  {saved ? <BookmarkCheck className="h-6 w-6" /> : <Bookmark className="h-6 w-6" />}
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="inline-flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {book.genre}
                </span>
                <span className="inline-flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(book.publishedDate)}
                </span>
              </div>
              {saved && (
                <p className="text-sm text-amber-600 dark:text-amber-400 mt-2 font-medium">
                  ✓ Saved to your library
                </p>
              )}
            </div>

            {/* Top Chapter Navigation */}
            {chapters.length > 1 && (
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <button
                  onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                  disabled={currentChapter === 0}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[100px] text-center">
                  Chapter {currentChapter + 1} of {chapters.length}
                </span>
                <button
                  onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                  disabled={currentChapter === chapters.length - 1}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reading Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {currentChapterData.title}
          </h2>
          <div className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg space-y-6">
            {currentChapterData.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        {/* Bottom Chapter Navigation */}
        {chapters.length > 1 && (
          <div className="flex flex-wrap justify-between items-center gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="flex items-center px-5 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium"
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Previous
            </button>

            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium text-center min-w-[80px]">
              {currentChapter + 1} / {chapters.length}
            </span>

            <button
              onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
              disabled={currentChapter === chapters.length - 1}
              className="flex items-center px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors font-medium"
            >
              Next
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookReader;
