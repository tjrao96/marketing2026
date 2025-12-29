
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TrendDetail from './pages/TrendDetail';
import CategoryPage from './pages/CategoryPage';
import BlogPostPage from './pages/BlogPostPage';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-[#bef264] selection:text-black">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trend/:id" element={<TrendDetail />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
