import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserPreferencesProvider } from './contexts/UserPreferencesContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import BookReader from './pages/BookReader';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MyLibraryPage from './pages/MyLibraryPage';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider>
      <UserPreferencesProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:bookId" element={<BookReader />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/my-library" element={<MyLibraryPage />} />
              </Routes>
            </main>
            <Footer /> {/* 👈 Always render Footer here */}
          </div>
        </Router>
      </UserPreferencesProvider>
    </ThemeProvider>
  );
}


export default App;