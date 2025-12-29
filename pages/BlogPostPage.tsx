
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, CATEGORIES } from '../constants';
import Breadcrumbs from '../components/Breadcrumbs';
import { marked } from 'marked';
import { FAQ as FAQType } from '../types';

const FAQAccordionItem: React.FC<{ faq: FAQType; index: number }> = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-10 flex items-center justify-between text-left group transition-all"
      >
        <h4 className={`text-2xl md:text-3xl font-black tracking-tight transition-colors ${isOpen ? 'text-[#bef264]' : 'text-white group-hover:text-[#bef264]'}`}>
          {faq.question}
        </h4>
        <div className={`shrink-0 ml-6 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-[#bef264] border-[#bef264] rotate-180' : 'group-hover:border-[#bef264]'}`}>
          <svg 
            className={`w-5 h-5 transition-colors ${isOpen ? 'text-black' : 'text-white/20 group-hover:text-[#bef264]'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div 
        ref={contentRef}
        style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="pb-10 pr-12">
          <p className="text-xl md:text-2xl text-white/40 leading-relaxed serif italic">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = BLOG_POSTS.find(b => b.id === id);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [toc, setToc] = useState<{id: string, text: string}[]>([]);
  const [toastVisible, setToastVisible] = useState(false);

  const category = CATEGORIES.find(c => c.id === blog?.categoryId);
  const author = blog?.author;

  const htmlContent = useMemo(() => {
    if (!blog) return '';
    return marked.parse(blog.content);
  }, [blog]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 2000);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // @ts-ignore
    const gsap = window.gsap;
    // @ts-ignore
    const ScrollTrigger = window.ScrollTrigger;

    if (gsap && ScrollTrigger && blog) {
      gsap.registerPlugin(ScrollTrigger);

      // Extract TOC from parsed HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent as string;
      const headers = tempDiv.querySelectorAll('h2, h3');
      const tocData = Array.from(headers).map((header, idx) => {
        const headerId = header.textContent?.toLowerCase().replace(/[^\w]+/g, '-') || `section-${idx}`;
        return {
          id: headerId,
          text: header.textContent || ''
        };
      });
      setToc(tocData);

      // Re-apply IDs to the actual rendered content for the ToC to work
      if (contentRef.current) {
        const renderedHeaders = contentRef.current.querySelectorAll('h2, h3, h4, h5');
        renderedHeaders.forEach((h, idx) => {
           const headerId = h.textContent?.toLowerCase().replace(/[^\w]+/g, '-') || `section-${idx}`;
           h.id = headerId;
        });
      }

      gsap.to(progressBarRef.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHeadingId(entry.target.id);
            }
          });
        },
        { rootMargin: '-10% 0% -70% 0%' }
      );

      const sections = document.querySelectorAll('article h2, article h3, #faq-section, #references-section');
      sections.forEach((section) => observer.observe(section));

      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll('p, h2, h3, h4, h5, blockquote, li, table, .extra-section');
        gsap.from(items, {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
          }
        });
      }

      return () => {
        observer.disconnect();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    }
  }, [id, blog, htmlContent]);

  if (!blog) {
    return (
      <div className="pt-32 px-12 text-center h-screen flex flex-col items-center justify-center bg-[#121212]">
        <h1 className="text-4xl font-black mb-4">Insight Not Found</h1>
        <Link to="/" className="text-[#bef264] underline">Return to Vision Board</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] text-[#F5F5F5] min-h-screen selection:bg-[#bef264] selection:text-black">
      <div 
        ref={progressBarRef}
        className="fixed top-0 left-0 w-full h-1 bg-[#bef264] origin-left z-[70] scale-x-0"
      ></div>

      <div className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-[#bef264] text-black px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl transition-all duration-300 pointer-events-none ${toastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        Link copied to clipboard
      </div>

      {/* Main Post Header */}
      <div className="pt-32 pb-12 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <Breadcrumbs items={[{ label: category?.name || 'Category', path: `/category/${blog.categoryId}` }]} />
        
        <div className="mt-8 mb-6 flex gap-4">
           <Link to={`/category/${blog.categoryId}`} className="text-[#bef264] text-[10px] font-black uppercase tracking-[0.4em] hover:opacity-80 transition-opacity underline underline-offset-8 decoration-[#bef264]/30">
             {category?.name}
           </Link>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[72px] font-black tracking-tighter leading-[0.9] mb-10 max-w-6xl">
          {blog.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/50 max-w-5xl leading-relaxed mb-12 serif italic">
          {blog.excerpt}
        </p>
      </div>

      {/* Hero Image */}
      <div className="px-6 lg:px-12 max-w-[1600px] mx-auto mb-24">
        <div className="aspect-[21/8] rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl">
          <img src={blog.imageUrl} className="w-full h-full object-cover" alt={blog.title} />
        </div>
      </div>

      {/* TWO COLUMN BODY */}
      <div className="px-6 lg:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 mb-40">
        
        {/* LEFT SIDEBAR: Table of Contents */}
        <aside className="lg:col-span-3 order-2 lg:order-1">
          <div className="space-y-12 sticky top-32">
            <div className="hidden lg:block border-l-2 border-white/5 pl-8 py-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#bef264] mb-10">Guide Navigation</h4>
              <nav className="flex flex-col gap-8">
                {toc.map((item) => (
                  <a 
                    key={item.id} 
                    href={`#${item.id}`}
                    className={`text-[14px] font-bold leading-tight transition-all hover:text-[#bef264] ${activeHeadingId === item.id ? 'text-[#bef264] translate-x-3' : 'text-white/20'}`}
                  >
                    {item.text}
                  </a>
                ))}
                {blog.faqs && blog.faqs.length > 0 && (
                  <a href="#faq-section" className={`text-[14px] font-bold leading-tight transition-all hover:text-[#bef264] ${activeHeadingId === 'faq-section' ? 'text-[#bef264] translate-x-3' : 'text-white/20'}`}>FAQ</a>
                )}
                {blog.references && blog.references.length > 0 && (
                  <a href="#references-section" className={`text-[14px] font-bold leading-tight transition-all hover:text-[#bef264] ${activeHeadingId === 'references-section' ? 'text-[#bef264] translate-x-3' : 'text-white/20'}`}>References</a>
                )}
              </nav>
            </div>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <main className="lg:col-span-9 order-1 lg:order-2">
          <article 
            ref={contentRef}
            className="prose prose-invert max-w-none text-[22px] md:text-[25px] leading-[1.8] text-[#D1D1D1] antialiased font-normal
              [&_h2]:!text-[#bef264] [&_h2]:font-[900] [&_h2]:text-[56px] [&_h2]:md:text-[76px] [&_h2]:mt-[12rem] [&_h2]:mb-[4.5rem] [&_h2]:tracking-tighter [&_h2]:leading-[0.85]
              [&_h3]:!text-[#bef264] [&_h3]:font-[900] [&_h3]:text-[40px] [&_h3]:md:text-[52px] [&_h3]:mt-[9rem] [&_h3]:mb-[3rem] [&_h3]:tracking-tight [&_h3]:leading-[0.9]
              [&_h4]:!text-[#bef264] [&_h4]:font-[900] [&_h4]:text-[32px] [&_h4]:md:text-[40px] [&_h4]:mt-[7rem] [&_h4]:mb-[2.5rem]
              [&_h5]:!text-[#bef264] [&_h5]:font-[900] [&_h5]:text-[26px] [&_h5]:md:text-[30px] [&_h5]:mt-[5rem] [&_h5]:mb-[2rem]
              prose-blockquote:italic prose-blockquote:border-l-[12px] prose-blockquote:border-l-[#bef264] prose-blockquote:bg-[#151515] prose-blockquote:px-14 prose-blockquote:py-20 prose-blockquote:rounded-r-[4rem] prose-blockquote:text-white prose-blockquote:text-3xl md:prose-blockquote:text-4xl prose-blockquote:my-24 prose-blockquote:shadow-2xl prose-blockquote:leading-[1.1] prose-blockquote:tracking-tighter
              prose-strong:text-white prose-strong:font-black
              prose-p:mb-12
              prose-li:mb-6 prose-li:marker:text-[#bef264] prose-ul:mb-20 prose-ol:mb-20
              prose-table:border-collapse prose-table:w-full prose-table:my-24 prose-th:bg-white/5 prose-th:p-8 prose-th:text-[#bef264] prose-th:font-black prose-td:p-8 prose-td:border prose-td:border-white/10
              print:text-black"
          >
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

            {/* FAQ SECTION (Accordion) */}
            {blog.faqs && blog.faqs.length > 0 && (
              <section id="faq-section" className="extra-section mt-40 pt-24 border-t border-white/5">
                <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter leading-none">Frequently Asked Questions.</h2>
                <div className="flex flex-col">
                  {blog.faqs.map((faq, i) => (
                    <FAQAccordionItem key={i} faq={faq} index={i} />
                  ))}
                </div>
              </section>
            )}

            {/* REFERENCES SECTION */}
            {blog.references && blog.references.length > 0 && (
              <section id="references-section" className="extra-section mt-40 pt-24 border-t border-white/5">
                <div className="bg-[#0D0D0D] border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg className="w-32 h-32 text-[#bef264]" fill="currentColor" viewBox="0 0 24 24"><path d="M14 17h3v2h-3v-2zm3-2h3v2h-3v-2zm3-2h3v2h-3v-2zm-3-2h3v2h-3v-2zm3-2h3v2h-3v-2zm-3-2h3v2h-3V5h-1v2h-3v2h3v2zm-3-2h3v2h-3V5h-1v2H7v2h3v2zm-3-2h3v2H7V5H6v2H3v2h3v2zM3 13h3v2H3v-2zm3 2h3v2H6v-2zm3 2h3v2H9v-2zm3 2h3v2h-3v-2z"></path></svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter leading-none relative z-10">Strategic Bibliography.</h2>
                  <ul className="space-y-8 list-none p-0 relative z-10">
                    {blog.references.map((ref, i) => (
                      <li key={i} className="flex gap-8 items-start group/ref">
                        <span className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#bef264] font-black text-sm group-hover/ref:bg-[#bef264] group-hover/ref:text-black transition-all">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          {ref.url ? (
                            <a 
                              href={ref.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-xl md:text-2xl text-white/50 hover:text-white transition-all underline underline-offset-8 decoration-[#bef264]/20 hover:decoration-[#bef264] inline-block mb-1"
                            >
                              {ref.title}
                            </a>
                          ) : (
                            <span className="text-xl md:text-2xl text-white/50">{ref.title}</span>
                          )}
                          <p className="text-xs font-black uppercase tracking-widest text-white/10 group-hover/ref:text-[#bef264]/40 transition-colors mt-2">Source Protocol Verified</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}
          </article>

          {/* Mini Author Section */}
          <div className="mt-40 bg-[#0A0A0A] border border-white/5 rounded-[4rem] p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
             <div className="relative group shrink-0">
               <img src={author?.avatar} className="w-32 h-32 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-[#bef264]/20 p-1" alt={author?.name} />
               <div className="absolute inset-0 rounded-full border border-[#bef264]/40 animate-pulse"></div>
             </div>
             <div className="flex-1 text-center md:text-left">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#bef264] mb-3 block">Expert Intelligence</span>
                <h4 className="text-3xl font-black mb-4">{author?.name}</h4>
                <p className="text-lg text-white/40 serif italic leading-relaxed mb-6">
                  {author?.bio}
                </p>
                <div className="flex justify-center md:justify-start gap-6">
                   <a href={author?.website} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest text-white hover:text-[#bef264] transition-colors underline underline-offset-8">Portfolio</a>
                   <a href={author?.socials?.linkedin} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest text-white hover:text-[#bef264] transition-colors underline underline-offset-8">LinkedIn</a>
                </div>
             </div>
          </div>

          {/* Social Share Footer strip */}
          <div className="mt-20 pt-16 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-4">
               {category && <span className="bg-white/5 border border-white/10 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-white/40">Domain: {category.name}</span>}
            </div>
            <button onClick={handleCopyLink} className="text-[11px] font-black uppercase tracking-widest flex items-center gap-3 text-white/40 hover:text-[#bef264] transition-all group">
               <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
               Share Strategy
            </button>
          </div>
        </main>
      </div>

      {/* Related Articles */}
      <section className="bg-white text-black py-48 rounded-t-[6rem] relative z-10 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-32 gap-8">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-zinc-900 leading-[0.8]">Related Articles.</h2>
            <Link to="/" className="text-sm font-black uppercase tracking-widest bg-black text-white px-12 py-6 rounded-full hover:bg-[#bef264] hover:text-black transition-all shadow-2xl">Return to Repository</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {BLOG_POSTS.filter(p => p.id !== id).slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group block">
                <div className="aspect-[16/9] rounded-[4rem] overflow-hidden bg-black mb-12 relative shadow-2xl">
                   <img src={post.imageUrl} className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110" alt={post.title} />
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
                   <div className="absolute bottom-10 right-10 w-16 h-16 bg-[#bef264] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-6 group-hover:translate-y-0 shadow-2xl">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                   </div>
                </div>
                <div className="flex gap-4 mb-8 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  <span className="text-zinc-600">{post.author?.name}</span>
                  <span className="text-zinc-200">•</span>
                  <span className="text-zinc-600">{post.readTime}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 text-zinc-900 group-hover:text-[#bef264] transition-colors leading-[0.95]">{post.title}</h3>
                <p className="text-lg text-zinc-500 line-clamp-2 leading-relaxed serif italic">{post.excerpt}</p>
              </Link>
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
            <h2 className="text-7xl md:text-[140px] font-black tracking-tighter mb-20 leading-[0.8]">Master 2026.</h2>
            <p className="text-2xl md:text-3xl text-white/30 mb-24 max-w-3xl mx-auto serif italic leading-tight">
              Our vision board empowers leaders to harness the coming intelligence shift.
            </p>
            <div className="flex flex-wrap justify-center gap-10">
               <button className="bg-[#bef264] text-black font-black text-sm uppercase tracking-widest px-20 py-10 rounded-full hover:scale-105 transition-all shadow-[0_25px_80px_rgba(190,242,100,0.4)]">Establish Domain</button>
               <button className="bg-white/5 border border-white/10 text-white font-black text-sm uppercase tracking-widest px-20 py-10 rounded-full hover:bg-white hover:text-black transition-all">Request Audit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
