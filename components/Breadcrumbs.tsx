
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  // SEO Schema.org Markup
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.path ? `${window.location.origin}${item.path}` : undefined
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-8 no-print">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      <ol className="flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em]">
        <li className="flex items-center gap-3">
          <Link 
            to="/" 
            className="text-white/40 hover:text-[#bef264] transition-colors flex items-center gap-2"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <span className="text-white/10 select-none">/</span>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const hasPath = !!item.path;
          
          return (
            <li key={index} className="flex items-center gap-3">
              {hasPath ? (
                <Link 
                  to={item.path!} 
                  className="text-white/40 hover:text-[#bef264] transition-colors truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#bef264] truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-white/10 select-none">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
