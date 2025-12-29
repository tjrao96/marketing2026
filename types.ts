
export enum CategoryId {
  DIGITAL_MARKETING = 'digital-marketing',
  DIGITAL_SALES = 'digital-sales',
  AI = 'artificial-intelligence',
  GROWTH = 'growth-marketing',
  SOCIAL_MEDIA = 'social-media',
  INFLUENCER = 'influencer-content',
  SOCIAL_ADS = 'social-ads',
  VIDEO = 'video-marketing',
  EMAIL = 'email-marketing',
  PROGRAMMATIC = 'programmatic-ads',
  ECOMMERCE = 'ecommerce',
  MARKETPLACES = 'marketplaces',
  CONTENT_MARKETING = 'content-marketing',
  ALLBOUND = 'allbound',
  GEO_SEO = 'geo-seo',
  CRO = 'cro',
  CRM = 'crm',
  AUTOMATION = 'marketing-automation',
  PPC_SEM = 'ppc-sem',
  DATA_SCIENCE_BI = 'data-science-bi',
  DATA_ANALYTICS = 'data-analytics',
  IT_DEV = 'it-development',
  PR_EVENTS = 'pr-events',
  BRANDING_UX = 'branding-ux',
  PODCASTING = 'podcasting',
  OTT_SERVICES = 'ott-services',
  DIGITAL_OOH = 'digital-ooh'
}

export interface Reference {
  title: string;
  url?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Trend {
  id: string;
  categoryId: CategoryId;
  title: string;
  summary: string;
  content: string;
  stats?: string;
  imageUrl: string;
  date: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface BlogPost {
  id: string;
  categoryId: CategoryId;
  title: string;
  excerpt: string;
  content: string;
  takeaways?: string[];
  references?: Reference[];
  faqs?: FAQ[];
  author?: {
    name: string;
    role: string;
    avatar: string;
    bio?: string;
    website?: string;
    socials?: {
      facebook?: string;
      x?: string;
      youtube?: string;
      instagram?: string;
      tiktok?: string;
      linkedin?: string;
    };
  };
  imageUrl: string;
  date: string;
  readTime: string;
}
