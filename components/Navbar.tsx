
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, INITIAL_TRENDS } from '../constants';
import { Trend, Category } from '../types';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  // Search Logic
  const filteredCategories = searchQuery.length > 1 
    ? CATEGORIES.filter(cat => cat.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];
    
  const filteredTrends = searchQuery.length > 1
    ? INITIAL_TRENDS.filter(trend => 
        trend.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        trend.summary.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const hasResults = filteredCategories.length > 0 || filteredTrends.length > 0;

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    if (navRef.current && gsap) {
      // Faster, more intense entrance for the navbar
      gsap.from(navRef.current, {
        y: -60,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out'
      });
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    if (gsap && resultsRef.current && hasResults) {
      gsap.fromTo(resultsRef.current.children, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.03, ease: 'power2.out' }
      );
    }
  }, [hasResults, searchQuery]);

  const handleResultClick = (path: string) => {
    setSearchQuery('');
    setIsFocused(false);
    navigate(path);
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="accent-bg w-8 h-8 rounded-lg flex items-center justify-center text-black text-[10px] font-black">M26</span>
          marketing<span className="text-white/40">2026</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-[#bef264] transition-colors">Home</Link>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-[#bef264] transition-colors flex items-center gap-1">
              Categories
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className="absolute top-full -left-20 mt-2 w-[85vw] max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-3xl py-6 px-8 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform group-hover:translate-y-0 translate-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-1">
                {CATEGORIES.map(cat => (
                  <Link key={cat.id} to={`/category/${cat.id}`} className="flex items-center gap-3 px-4 py-3 text-sm rounded-xl hover:bg-[#bef264] hover:text-black transition-all group">
                    <span className="text-lg group-hover:scale-125 transition-transform">{cat.icon}</span>
                    <span className="font-semibold truncate">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/about" className="text-sm font-medium hover:text-[#bef264] transition-colors">About</Link>
        </div>
      </div>

      {/* Search Component */}
      <div className="relative flex-1 max-w-md mx-8 hidden md:block">
        <div className={`relative flex items-center bg-white/5 border rounded-full px-4 py-2 transition-all duration-300 ${isFocused ? 'border-[#bef264]/50 ring-2 ring-[#bef264]/10 bg-white/10' : 'border-white/10'}`}>
          <svg className={`w-4 h-4 mr-3 transition-colors ${isFocused ? 'text-[#bef264]' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search 27 marketing domains..."
            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-white/20 hover:text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {isFocused && searchQuery.length > 1 && (
          <div ref={resultsRef} className="absolute top-full left-0 mt-4 w-full bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 py-4 max-h-[70vh] overflow-y-auto">
            {!hasResults && (
              <div className="px-6 py-4 text-sm text-white/40 italic">No matching trends found for "{searchQuery}"</div>
            )}
            
            {filteredCategories.length > 0 && (
              <div className="mb-4">
                <div className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white/20">Categories</div>
                {filteredCategories.map(cat => (
                  <button 
                    key={cat.id} 
                    onClick={() => handleResultClick(`/category/${cat.id}`)}
                    className="w-full text-left px-6 py-3 hover:bg-[#bef264] group transition-colors flex items-center gap-3"
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform">{cat.icon}</span>
                    <span className="text-sm font-medium group-hover:text-black">{cat.name}</span>
                  </button>
                ))}
              </div>
            )}

            {filteredTrends.length > 0 && (
              <div>
                <div className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-white/20">Deep Dives</div>
                {filteredTrends.map(trend => (
                  <button 
                    key={trend.id} 
                    onClick={() => handleResultClick(`/trend/${trend.id}`)}
                    className="w-full text-left px-6 py-4 hover:bg-white/5 border-b border-white/5 last:border-0"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold text-[#bef264]">{trend.title}</h4>
                      <span className="text-[10px] text-white/20 uppercase font-bold">{trend.categoryId}</span>
                    </div>
                    <p className="text-xs text-white/40 line-clamp-1">{trend.summary}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full border border-white/10 hover:border-[#bef264] transition-all">
          Contact Us
        </button>
        <button className="accent-bg text-black text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 transition-transform">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
