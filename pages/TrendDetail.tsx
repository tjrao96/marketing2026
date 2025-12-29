
import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_TRENDS, CATEGORIES } from '../constants';
import { getGeminiInsights } from '../services/geminiService';
import Breadcrumbs from '../components/Breadcrumbs';

const TrendDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const trend = INITIAL_TRENDS.find(t => t.id === id);
  const [aiInsights, setAiInsights] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const category = useMemo(() => 
    CATEGORIES.find(c => c.id === trend?.categoryId),
  [trend]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (trend) {
      setLoading(true);
      getGeminiInsights(trend.title).then(insights => {
        setAiInsights(insights);
        setLoading(false);
      });
    }
  }, [trend]);

  if (!trend) return <div className="pt-32 px-12 text-center h-screen bg-[#121212] text-white flex items-center justify-center font-black uppercase tracking-widest">Trend not found</div>;

  return (
    <div className="pt-32 pb-24 bg-[#121212] text-[#F5F5F5] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <Breadcrumbs 
          items={[
            { label: category?.name || 'Category', path: `/category/${trend.categoryId}` },
            { label: trend.title }
          ]} 
        />
        
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="accent-bg text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
              {trend.categoryId.replace('-', ' ')}
            </span>
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">{trend.date}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter mb-8 leading-[0.85]">
            {trend.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/40 serif italic max-w-3xl leading-relaxed">
            {trend.summary}
          </p>
        </div>

        <div className="rounded-[3rem] overflow-hidden mb-16 aspect-[21/9] shadow-2xl border border-white/5">
          <img src={trend.imageUrl} className="w-full h-full object-cover grayscale brightness-90" alt={trend.title} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-[1.8] text-white/80 font-normal">{trend.content}</p>
              <div className="h-px bg-white/10 my-12" />
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">AI Deep Dive Analysis</h3>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] bg-[#bef264]/10 text-[#bef264] px-3 py-1 rounded-full border border-[#bef264]/20">Verified 2026 Prediction</span>
              </div>
              {loading ? (
                <div className="flex items-center gap-3 text-white/40 animate-pulse bg-white/5 p-12 rounded-[2rem] border border-white/5 italic">
                  <div className="w-2 h-2 rounded-full bg-[#bef264]"></div>
                  Synthesizing neural insights...
                </div>
              ) : (
                <div className="bg-[#0D0D0D] border border-white/5 p-10 rounded-[3rem] text-white/70 leading-[1.7] whitespace-pre-wrap serif text-xl italic shadow-inner">
                  {aiInsights}
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-[#bef264] text-black p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(190,242,100,0.2)]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-40">Impact Forecast</h4>
              <p className="text-4xl font-black tracking-tighter leading-[0.85] mb-4">Strategic Shift</p>
              <p className="text-xs font-bold uppercase tracking-widest leading-relaxed">{trend.stats}</p>
            </div>

            <div className="bg-[#0D0D0D] border border-white/10 p-10 rounded-[2.5rem]">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-white/20">Related Dimensions</h4>
              <div className="flex flex-wrap gap-3">
                {['Hyper-Targeting', 'Gen-AI UX', 'Zero-Party Data', 'Neural Marketing'].map(tag => (
                  <span key={tag} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white/30 hover:border-[#bef264]/40 hover:text-[#bef264] transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendDetail;
