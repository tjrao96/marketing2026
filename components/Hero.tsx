
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    if (gsap && containerRef.current && textRef.current) {
      const tl = gsap.timeline();
      tl.from(textRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      })
      .from('.hero-circle', {
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: 'elastic.out(1, 0.3)'
      }, "-=0.5");
    }
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 flex items-center overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#bef264]/10 rounded-full blur-[120px] hero-circle pointer-events-none -z-10"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] hero-circle pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div ref={textRef} className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-extrabold leading-[0.9] tracking-tighter mb-8">
            WHERE <br />
            <span className="gradient-text">IDEAS</span> COME <br />
            TO LIFE.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl serif italic">
            Navigating the intersection of creativity, technology, and 2026 digital marketing trends.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="accent-bg text-black font-bold py-5 px-10 rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform">
              Explore 2026 Trends
            </button>
            <button className="border border-white/20 text-white font-bold py-5 px-10 rounded-full text-sm uppercase tracking-widest hover:border-white transition-all">
              Watch Vision Reel
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6">
        <div className="flex -space-x-3">
          {[1,2,3,4].map(i => (
            <img key={i} src={`https://picsum.photos/seed/${i+100}/100/100`} className="w-12 h-12 rounded-full border-2 border-black" alt="Expert" />
          ))}
        </div>
        <div className="text-sm">
          <p className="font-bold">1.2k+ Marketers</p>
          <p className="text-white/40">Joined the 2026 vision board</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
