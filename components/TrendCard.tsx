
import React from 'react';
import { Link } from 'react-router-dom';
import { Trend } from '../types';

interface TrendCardProps {
  trend: Trend;
}

const TrendCard: React.FC<TrendCardProps> = ({ trend }) => {
  return (
    <Link 
      to={`/trend/${trend.id}`} 
      className="group block relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden hover:border-[#bef264]/30 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={trend.imageUrl} 
          alt={trend.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full">
            {trend.categoryId.replace('-', ' ')}
          </span>
          <span className="text-xs text-white/40">{trend.date}</span>
        </div>
        <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-[#bef264] transition-colors">
          {trend.title}
        </h3>
        <p className="text-white/60 line-clamp-2 text-sm">
          {trend.summary}
        </p>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="accent-bg w-10 h-10 rounded-full flex items-center justify-center text-black">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </div>
      </div>
    </Link>
  );
};

export default TrendCard;
