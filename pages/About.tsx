
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();
      
      // Hero Animation
      tl.from(".about-hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
      })
      .from(".about-hero-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8");

      // Scroll reveals
      revealRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    }
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="bg-[#050505] text-[#F5F5F5] min-h-screen pt-32 pb-24 overflow-x-hidden selection:bg-[#bef264] selection:text-black">
      
      {/* Hero Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-32">
        <div className="max-w-4xl">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#bef264] mb-8 block">Our DNA</span>
          <h1 className="about-hero-title text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter leading-[0.85] mb-12">
            Pioneering the <br /> <span className="text-white/20">Future of Intent.</span>
          </h1>
          <p className="about-hero-sub text-xl md:text-3xl text-white/50 serif italic leading-relaxed max-w-3xl">
            marketing2026 isn't just a trend repository. It's a strategic intelligence layer designed to help agencies master the intelligence shift of the coming decade.
          </p>
        </div>
      </section>

      {/* Mission & Vision Bento */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-48 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div ref={addToRefs} className="bg-[#0D0D0D] border border-white/5 rounded-[4rem] p-12 md:p-20 flex flex-col justify-between group hover:border-[#bef264]/20 transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#bef264]/10 flex items-center justify-center text-[#bef264] mb-10 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-4xl font-black tracking-tight mb-6">The Mission</h3>
            <p className="text-lg text-white/40 leading-relaxed serif italic">
              To dismantle the complexity of rapid technological change and provide actionable, high-level intelligence that drives measurable ROI for elite digital agencies.
            </p>
          </div>
        </div>

        <div ref={addToRefs} className="bg-white text-black rounded-[4rem] p-12 md:p-20 flex flex-col justify-between group hover:shadow-[0_0_80px_rgba(190,242,100,0.15)] transition-all">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center text-black mb-10 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <h3 className="text-4xl font-black tracking-tight mb-6">The Vision</h3>
            <p className="text-lg text-black/50 leading-relaxed serif italic">
              A world where human creativity is amplified, not replaced, by AI—where marketing is synonymous with delivering authentic, hyper-relevant value at the micro-moment of need.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div ref={addToRefs} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[5rem] overflow-hidden border-[16px] border-[#0D0D0D] shadow-2xl bg-[#0D0D0D]">
              <img 
                src="https://tjrao.com.au/wp-content/uploads/2023/10/TJ-Rao-Profile.png" 
                className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-700"
                alt="TJ Rao"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#bef264] text-black p-8 rounded-[2rem] max-w-[240px] shadow-2xl">
              <p className="text-sm font-black uppercase tracking-widest mb-1">Founder</p>
              <p className="text-2xl font-black tracking-tight">TJ Rao</p>
            </div>
          </div>
          
          <div ref={addToRefs} className="lg:col-span-7 space-y-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#bef264]">The Visionary</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Intelligence Architect.</h2>
            <div className="space-y-6 text-xl text-white/40 leading-relaxed serif italic">
              <p>
                TJ Rao is a leading voice in the Australian digital ecosystem, renowned for bridging the deep technical gap between automated orchestration and high-level business strategy.
              </p>
              <p>
                With over a decade of experience analyzing tens of millions in ad spend, TJ founded marketing2026 to serve as a beacon for agencies navigating the transition from predictive analytics to prescriptive intelligence.
              </p>
            </div>
            <div className="pt-8 flex flex-wrap gap-8">
              <a href="https://tjrao.com.au" target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest text-white hover:text-[#bef264] transition-colors underline underline-offset-8">Visit Personal Domain</a>
              <a href="https://www.linkedin.com/in/tjrao96/" target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest text-white hover:text-[#bef264] transition-colors underline underline-offset-8">LinkedIn Insight</a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Loop */}
      <section className="bg-white text-black py-40 rounded-t-[6rem] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 gap-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 leading-[0.8]">Core Principles.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { 
                title: "Radical Relevance", 
                desc: "We prioritize the micro-moment. In 2026, generalism is the enemy of ROI.",
                icon: "🎯"
              },
              { 
                title: "Technological Soul", 
                desc: "We believe code is the modern brushstroke. Every campaign is a technical masterpiece.",
                icon: "💻"
              },
              { 
                title: "Ethical Foresight", 
                desc: "As we master AI, we guard the human bridge. Trust is our primary performance metric.",
                icon: "🛡️"
              }
            ].map((value, i) => (
              <div key={i} ref={addToRefs} className="group">
                <div className="text-6xl mb-10 group-hover:scale-125 transition-transform origin-left inline-block">
                  {value.icon}
                </div>
                <h3 className="text-3xl font-black tracking-tighter mb-6 text-zinc-900 leading-none">{value.title}</h3>
                <p className="text-lg text-zinc-500 leading-relaxed serif italic">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extreme CTA */}
      <section className="bg-[#050505] py-48 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] border border-white/5 rounded-[6rem] p-20 md:p-40 text-center relative group shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(190,242,100,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10">
            <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#bef264] mb-16 block">SECURE ADVANTAGE</span>
            <h2 className="text-7xl md:text-[140px] font-black tracking-tighter mb-20 leading-[0.8]">Join the Vision.</h2>
            <p className="text-2xl md:text-3xl text-white/30 mb-24 max-w-3xl mx-auto serif italic leading-tight">
              Ready to deploy 2026 strategies today? Let's build the intelligence layer together.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
               <Link to="/" className="bg-[#bef264] text-black font-black text-sm uppercase tracking-widest px-20 py-10 rounded-full hover:scale-105 transition-all shadow-[0_25px_80px_rgba(190,242,100,0.4)] block">Repository Home</Link>
               <button className="bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest px-20 py-10 rounded-full hover:bg-white hover:text-black transition-all">Request Partnership</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
