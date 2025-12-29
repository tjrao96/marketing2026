
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, BLOG_POSTS, INITIAL_TRENDS } from '../constants';
import { CategoryId, Trend, BlogPost } from '../types';
import Breadcrumbs from '../components/Breadcrumbs';

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTag, setActiveTag] = useState<string>('All');
  const headerImageRef = useRef<HTMLImageElement>(null);
  const headerSectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const coreVisionRef = useRef<HTMLElement>(null);
  const intersectionSectionRef = useRef<HTMLElement>(null);
  
  const category = useMemo(() => 
    CATEGORIES.find(c => c.id === id), 
  [id]);

  const categoryTrends = useMemo(() => 
    INITIAL_TRENDS.filter(trend => trend.categoryId === id),
  [id]);

  const signpost = useMemo(() => {
    if (!category) return "";
    const themes: Record<string, string> = {
      [CategoryId.SOCIAL_MEDIA]: "Micro-Communities, Decentralization, and AI Agents.",
      [CategoryId.AI]: "Generative Interfaces, Neural Targeting, and Predictive UX.",
      [CategoryId.DIGITAL_MARKETING]: "Ecosystem Shifts, Algorithmic Resilience, and Omnichannel Flows.",
      [CategoryId.VIDEO]: "Spatial Storytelling, Interactive 3D, and Mixed Reality.",
      [CategoryId.ECOMMERCE]: "Zero-Party Data, Social Checkout, and Hyper-Personalization.",
      [CategoryId.GROWTH]: "Experimentation Loops, Viral Mechanics, and Scaling Economics.",
      [CategoryId.PODCASTING]: "Aural Identity, Immersive Narrative, and Voice Search Commerce."
    };
    return themes[category.id] || "Emerging Technologies, Strategic Shifts, and Market Resilience.";
  }, [category]);

  const lastUpdatedDate = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  }, []);

  const featuredTrend = useMemo((): Trend | null => {
    if (categoryTrends.length > 0) return categoryTrends[0];
    if (!category) return null;
    
    return {
      id: `synthetic-${category.id}`,
      categoryId: category.id as CategoryId,
      title: `The Future of ${category.name} in 2026`,
      summary: `Anticipating the strategic shifts and technological breakthroughs that will redefine ${category.name} in the coming 18 months.`,
      content: category.description,
      stats: 'Impact Forecast: High',
      imageUrl: `https://picsum.photos/seed/${category.id}-forecast/1200/800`,
      date: 'Jan 01, 2026'
    };
  }, [category, categoryTrends]);

  const remainingTrends = useMemo(() => {
    return categoryTrends.length > 0 ? categoryTrends.slice(1) : [];
  }, [categoryTrends]);

  const allCategoryBlogs = useMemo(() => 
    BLOG_POSTS.filter(post => post.categoryId === id),
  [id]);

  const featuredBlog = useMemo(() => {
    if (allCategoryBlogs.length === 0) return null;
    return allCategoryBlogs[0];
  }, [allCategoryBlogs]);

  const bentoBlogs = useMemo(() => 
    allCategoryBlogs.slice(1, 3),
  [allCategoryBlogs]);

  const relatedCategories = useMemo(() => {
    return CATEGORIES
      .filter(c => c.id !== id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [id]);

  const scrollToVision = () => {
    coreVisionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;

    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.getAll().forEach(t => t.kill());

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        tl.fromTo(chars, 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.01, ease: 'power4.out' }
        );
      }
      if (contentRef.current) {
        tl.from(contentRef.current.children, 
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' },
          "-=0.6"
        );
      }

      if (headerImageRef.current && headerSectionRef.current) {
        gsap.to(headerImageRef.current, {
          yPercent: 15,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: headerSectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      const revealItems = gsap.utils.toArray('.reveal-section');
      revealItems.forEach((item: any) => {
        gsap.fromTo(item, 
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              toggleActions: "play none none none",
            }
          }
        );
      });

      // Category Specific "Strategic Intersections" animations
      const nodes = gsap.utils.toArray('.intersection-node');
      nodes.forEach((node: any, i: number) => {
        const decor = node.querySelector('.node-decoration');
        
        switch (id) {
          case CategoryId.AI:
            // Pulsing "Neural" effect
            gsap.to(decor, {
              scale: 1.2,
              opacity: 0.8,
              duration: 1.5,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.2
            });
            break;
          case CategoryId.SOCIAL_MEDIA:
            // Floating "Orbit" effect
            gsap.to(decor, {
              y: -10,
              x: 5,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
              delay: i * 0.3
            });
            break;
          case CategoryId.VIDEO:
            // Glitchy "Scan" effect
            gsap.to(decor, {
              skewX: 10,
              opacity: 0.4,
              duration: 0.1,
              repeat: -1,
              repeatDelay: 2,
              yoyo: true,
              ease: "steps(1)"
            });
            break;
          case CategoryId.PODCASTING:
            // Scaling "Waveform" effect
            gsap.to(decor, {
              scaleY: 1.5,
              duration: 0.4,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: i * 0.1
            });
            break;
          case CategoryId.ECOMMERCE:
            // Rotating "Cart/Exchange" effect
            gsap.to(decor, {
              rotation: 360,
              duration: 8,
              repeat: -1,
              ease: "none"
            });
            break;
          default:
            // Subtle general float
            gsap.to(decor, {
              y: -8,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: i * 0.4
            });
        }
      });
    });

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimer);
    };
  }, [category, id]);

  if (!category) return (
    <div className="pt-32 text-center h-screen bg-[#121212] text-white flex flex-col items-center justify-center font-black uppercase tracking-widest">
      <h1 className="text-4xl font-black mb-4">Category Not Found</h1>
      <Link to="/" className="text-[#bef264] underline">Return Home</Link>
    </div>
  );

  return (
    <div className="bg-[#121212] text-[#F5F5F5] min-h-screen flex flex-col overflow-x-hidden">
      
      <section 
        ref={headerSectionRef} 
        className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 pb-32 border-b border-white/5 bg-[#0D0D0D]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(190,242,100,0.06)_0%,transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          <div className="lg:col-span-8 z-20" ref={contentRef}>
            <Breadcrumbs items={[{ label: category.name }]} />

            <div className="flex flex-wrap items-center gap-4 mb-10">
               <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#bef264] bg-[#bef264]/10 px-4 py-2 rounded-full border border-[#bef264]/20">
                  Forecast Strategy 2026
               </span>
               <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 bg-white/5 px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] animate-pulse"></span>
                  Last Updated: {lastUpdatedDate}
               </span>
            </div>

            <h1 ref={titleRef} className="text-7xl md:text-[110px] lg:text-[130px] font-black tracking-tighter leading-[0.85] mb-8 pr-4">
              {category.name.split(' ').map((word, wordIdx) => (
                <span key={wordIdx} className="inline-block mr-[0.2em] whitespace-nowrap py-1">
                   {word.split('').map((char, charIdx) => (
                    <span key={charIdx} className={`char inline-block ${wordIdx === 1 ? 'text-[#bef264]' : ''}`}>
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white/90 tracking-tight mb-12 max-w-4xl border-l-4 border-[#bef264] pl-8 leading-none">
              The 2026 Playbook: <span className="text-white/30">{signpost}</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12 items-start">
               <p className="text-lg md:text-xl text-white/40 serif italic leading-[1.6] max-w-xl">
                 {category.description}
               </p>
               <button 
                onClick={scrollToVision}
                className="group flex items-center gap-6 bg-white text-black font-black px-10 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] hover:bg-[#bef264] transition-all transform active:scale-95 shadow-2xl shrink-0"
               >
                 Read Executive Summary
                 <svg className="w-5 h-5 animate-bounce group-hover:animate-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
               </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block z-10">
             <div className="relative aspect-[3/4] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.6)] border border-white/10 group">
                <img 
                  ref={headerImageRef}
                  src={`https://picsum.photos/seed/${category.id}-strategy/1000/1400`} 
                  className="absolute inset-0 w-full h-[120%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                  alt={category.name} 
                />
             </div>
          </div>
        </div>
      </section>

      {featuredTrend && (
        <section ref={coreVisionRef} className="bg-white text-black py-32 relative overflow-hidden reveal-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 space-y-10">
                <div className="inline-flex items-center gap-3 bg-black text-white px-6 py-2 rounded-full">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#bef264]"></div>
                   <span className="text-[9px] font-black uppercase tracking-[0.4em]">The 2026 Shift</span>
                </div>
                
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-zinc-900">
                  {featuredTrend.title}
                </h2>
                
                <p className="text-xl md:text-2xl serif italic leading-relaxed text-black/60 max-w-xl">
                  "{featuredTrend.summary}"
                </p>
                
                <div className="flex flex-wrap items-center gap-8">
                  <Link to={`/trend/${featuredTrend.id}`} className="px-10 py-5 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#bef264] hover:text-black transition-all shadow-xl">
                    Expand Perspective
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative group rounded-[4rem] overflow-hidden border-[12px] border-black shadow-2xl bg-black">
                    <img 
                      src={featuredTrend.imageUrl} 
                      className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
                      alt={featuredTrend.title} 
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section ref={intersectionSectionRef} className="relative px-6 lg:px-12 py-32 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20 border-b border-white/5 pb-8 reveal-section">
           <div>
              <span className="text-[#bef264] text-[9px] font-black uppercase tracking-[0.5em] block mb-3 leading-none">Ecosystem Map</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">Strategic Intersections.</h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {remainingTrends.map((trend, i) => (
            <Link key={trend.id} to={`/trend/${trend.id}`} className="intersection-node p-10 bg-white/05 backdrop-blur-sm border border-white/5 rounded-[3rem] hover:border-[#bef264]/40 transition-all group relative overflow-hidden reveal-section">
              <div className="absolute top-10 right-10 pointer-events-none opacity-20 group-hover:opacity-60 transition-opacity">
                <div className="node-decoration w-8 h-8 rounded-full bg-[#bef264]/40 blur-md"></div>
              </div>
              <div className="text-5xl font-black mb-10 text-white/05 group-hover:text-[#bef264]/10 transition-colors leading-none">Node 0{i+2}</div>
              <h4 className="text-xl font-black leading-tight mb-6 group-hover:text-[#bef264] transition-colors">{trend.title}</h4>
              <p className="text-white/30 text-sm leading-relaxed line-clamp-3 mb-8">{trend.summary}</p>
              <div className="flex items-center gap-3">
                 <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]"></span>
                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">Active Insight</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {featuredBlog && (
        <section className="bg-white text-black py-32 reveal-section">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-20 leading-[0.85] text-zinc-900">Tactical Deep Dives.</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal-section">
              <Link to={`/blog/${featuredBlog.id}`} className="lg:col-span-8 bg-[#f5f5f5] rounded-[4rem] p-8 md:p-16 border border-black/5 hover:border-black/10 transition-all group overflow-hidden relative shadow-inner block">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex items-center gap-4 mb-12">
                     <span className="bg-black text-white text-[9px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full">Primary Intel</span>
                     <span className="text-black/30 text-[9px] font-black uppercase tracking-[0.2em]">{featuredBlog.readTime}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                       <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.85] group-hover:text-[#bef264] transition-colors text-zinc-800">
                         {featuredBlog.title}
                       </h3>
                       <p className="text-lg md:text-xl serif italic text-black/50 leading-relaxed">
                         {featuredBlog.excerpt}
                       </p>
                    </div>
                    <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl bg-black">
                       <img 
                        src={featuredBlog.imageUrl} 
                        className="w-full h-full object-cover brightness-110 grayscale group-hover:grayscale-0 transition-all duration-700" 
                        alt={featuredBlog.title} 
                       />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="lg:col-span-4 flex flex-col gap-8">
                {bentoBlogs.map((blog) => (
                  <Link key={blog.id} to={`/blog/${blog.id}`} className="flex-1 bg-[#f5f5f5] rounded-[3.5rem] p-8 border border-black/5 hover:border-black/10 transition-all group shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-black tracking-tight mb-4 leading-none group-hover:text-[#bef264] transition-colors text-zinc-800">{blog.title}</h4>
                      <p className="text-sm text-black/40 serif italic line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="bg-[#bef264] text-black rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden group mb-12 mx-6 lg:mx-12 reveal-section shadow-2xl">
        <div className="relative z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 block opacity-40">Interconnected ROI</span>
          <h2 className="text-6xl md:text-[100px] lg:text-[140px] font-black tracking-tighter mb-16 leading-[0.8] text-zinc-900">Domain Convergence.</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {relatedCategories.map(rel => (
              <Link 
                key={rel.id} 
                to={`/category/${rel.id}`}
                className="px-12 py-6 bg-black text-white rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:scale-105 transition-all shadow-2xl active:scale-95"
              >
                Analyze {rel.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
