
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-24 pb-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:col-span-4 gap-12 mb-24 md:grid-cols-4">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 tracking-tighter">Stay ahead of the curve.</h2>
          <p className="text-white/60 mb-8 max-w-md">The digital marketing landscape changes weekly. Subscribe to get our monthly deep dive into the marketing2026 predictions and strategy shifts.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex-1 focus:outline-none focus:border-[#bef264] transition-colors"
            />
            <button className="accent-bg text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Join
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Navigation</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-[#bef264] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#bef264] transition-colors">Trend Reports</a></li>
            <li><a href="#" className="hover:text-[#bef264] transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-[#bef264] transition-colors">Agency Tools</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white/40">Connect</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-[#bef264] transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#bef264] transition-colors">Twitter (X)</a></li>
            <li><a href="#" className="hover:text-[#bef264] transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-[#bef264] transition-colors">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
        <p>© 2026 marketing2026. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
