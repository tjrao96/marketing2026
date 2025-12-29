
import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import { INITIAL_TRENDS, CATEGORIES } from '../constants';
import TrendCard from '../components/TrendCard';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;
    
    if (gsap && ScrollTrigger && sectionsRef.current) {
      const cards = gsap.utils.toArray('.trend-card-item');
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }
  }, []);

  return (
    <main className="bg-[#050505]">
      <Hero />
      
      <div ref={sectionsRef} className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Latest Insights</h2>
            <p className="text-white/60 max-w-lg">
              Fresh predictions and strategic frameworks analyzed by our digital intelligence engine for 2026.
            </p>
          </div>
          <Link to="/categories" className="text-sm font-bold uppercase tracking-widest text-[#bef264] border-b-2 border-[#bef264]/20 pb-1 hover:border-[#bef264] transition-all">
            View All Trends
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INITIAL_TRENDS.map((trend) => (
            <div key={trend.id} className="trend-card-item">
              <TrendCard trend={trend} />
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white text-black py-24 px-6 lg:px-12 rounded-[4rem] md:rounded-[8rem] mx-4 my-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.95] text-zinc-900">
              EMPOWERING <br /> THE NEXT <br /> GENERATION.
            </h2>
            <p className="text-xl text-black/70 mb-12 max-w-md serif">
              We provide the blueprint for digital agencies and creative studios to dominate the 2026 landscape.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-4xl font-extrabold mb-1">12+</p>
                <p className="text-sm uppercase font-bold text-black/40">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-1">45M+</p>
                <p className="text-sm uppercase font-bold text-black/40">Ad Spend Analyzed</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/agency/800/1000" className="rounded-3xl shadow-2xl" alt="Agency life" />
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-2xl max-w-xs shadow-2xl">
              <p className="text-lg font-bold mb-2">"marketing2026 is our go-to for foresight."</p>
              <p className="text-sm text-white/60">— Sarah Chen, CTO at CreativeFlow</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-16 text-center">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-[#bef264]/40 transition-all group text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">{cat.icon}</div>
              <h4 className="font-bold text-sm tracking-tight">{cat.name}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
