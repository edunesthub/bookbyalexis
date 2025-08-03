import React, { createContext, useContext, useEffect, useState } from 'react';

interface UserPreferencesContextType {
  lastReadChapters: Record<string, number>;
  savedBooks: string[];
  updateLastReadChapter: (bookId: string, chapter: number) => void;
  toggleSavedBook: (bookId: string) => void;
  isBookSaved: (bookId: string) => boolean;
  getLastReadChapter: (bookId: string) => number;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};

interface UserPreferencesProviderProps {
  children: React.ReactNode;
}

export const UserPreferencesProvider: React.FC<UserPreferencesProviderProps> = ({ children }) => {
  const [lastReadChapters, setLastReadChapters] = useState<Record<string, number>>({});
  const [savedBooks, setSavedBooks] = useState<string[]>([]);

  // Load preferences from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedChapters = localStorage.getItem('lastReadChapters');
      const savedBooksData = localStorage.getItem('savedBooks');
      
      if (savedChapters) {
        try {
          setLastReadChapters(JSON.parse(savedChapters));
        } catch (error) {
          console.error('Error parsing saved chapters:', error);
        }
      }
      
      if (savedBooksData) {
        try {
          setSavedBooks(JSON.parse(savedBooksData));
        } catch (error) {
          console.error('Error parsing saved books:', error);
        }
      }
    }
  }, []);

  // Save to localStorage whenever preferences change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastReadChapters', JSON.stringify(lastReadChapters));
    }
  }, [lastReadChapters]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    }
  }, [savedBooks]);

  const updateLastReadChapter = (bookId: string, chapter: number) => {
    setLastReadChapters(prev => ({
      ...prev,
      [bookId]: chapter
    }));
  };

  const toggleSavedBook = (bookId: string) => {
    setSavedBooks(prev => {
      if (prev.includes(bookId)) {
        return prev.filter(id => id !== bookId);
      } else {
        return [...prev, bookId];
      }
    });
  };

  const isBookSaved = (bookId: string) => {
    return savedBooks.includes(bookId);
  };

  const getLastReadChapter = (bookId: string) => {
    return lastReadChapters[bookId] || 0;
  };

  return (
    <UserPreferencesContext.Provider value={{
      lastReadChapters,
      savedBooks,
      updateLastReadChapter,
      toggleSavedBook,
      isBookSaved,
      getLastReadChapter,
    }}>
      {children}
    </UserPreferencesContext.Provider>
  );
};