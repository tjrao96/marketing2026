
import { Category, CategoryId, Trend, BlogPost } from './types';

const TJ_RAO_AUTHOR = {
  name: "TJ Rao",
  role: "Digital Visionary",
  avatar: "https://tjrao.com.au/wp-content/uploads/2023/10/TJ-Rao-Profile.png",
  bio: "TJ Rao is a leading voice in the Australian digital ecosystem, bridging the gap between high-level strategy and technical execution.",
  website: "https://tjrao.com.au",
  socials: {
    facebook: "https://www.facebook.com/tj.rao.re/",
    x: "https://x.com/tj_rao_re",
    youtube: "https://www.youtube.com/@TJ_Rao",
    instagram: "https://www.instagram.com/tj_rao",
    tiktok: "https://www.tiktok.com/@tj_rao",
    linkedin: "https://www.linkedin.com/in/tjrao96/"
  }
};

export const CATEGORIES: Category[] = [
  {
    id: CategoryId.DIGITAL_MARKETING,
    name: 'Digital Marketing',
    description: 'The overarching evolution of the digital ecosystem in 2026.',
    icon: '🎯',
    color: '#bef264'
  },
  {
    id: CategoryId.DIGITAL_SALES,
    name: 'Digital Sales',
    description: 'Modern sales techniques integrated with digital touchpoints.',
    icon: '💰',
    color: '#4ade80'
  },
  {
    id: CategoryId.AI,
    name: 'Artificial Intelligence',
    description: 'Generative AI and predictive modeling at the core of strategy.',
    icon: '🤖',
    color: '#38bdf8'
  },
  {
    id: CategoryId.GROWTH,
    name: 'Growth Marketing',
    description: 'Data-driven experimentation to scale businesses rapidly.',
    icon: '📈',
    color: '#2dd4bf'
  },
  {
    id: CategoryId.SOCIAL_MEDIA,
    name: 'Social Media',
    description: 'Community-led growth and decentralized social platforms.',
    icon: '📱',
    color: '#fb7185'
  },
  {
    id: CategoryId.INFLUENCER,
    name: 'Influencer & Content Creation',
    description: 'The creator economy and authentic brand partnerships.',
    icon: '✨',
    color: '#f472b6'
  },
  {
    id: CategoryId.SOCIAL_ADS,
    name: 'Social Ads',
    description: 'Paid strategies across emerging and established social networks.',
    icon: '📣',
    color: '#e879f9'
  },
  {
    id: CategoryId.VIDEO,
    name: 'Video Marketing',
    description: 'Short-form dominance and interactive spatial video content.',
    icon: '🎥',
    color: '#818cf8'
  },
  {
    id: CategoryId.EMAIL,
    name: 'Email Marketing',
    description: 'Hyper-personalized lifecycle messaging and automation.',
    icon: '📧',
    color: '#60a5fa'
  },
  {
    id: CategoryId.PROGRAMMATIC,
    name: 'Programmatic Advertising',
    description: 'Automated ad buying and real-time bidding infrastructure.',
    icon: '⚙️',
    color: '#22d3ee'
  },
  {
    id: CategoryId.ECOMMERCE,
    name: 'Ecommerce',
    description: 'Social commerce and highly personalized shopping experiences.',
    icon: '🛍️',
    color: '#fbbf24'
  },
  {
    id: CategoryId.MARKETPLACES,
    name: 'Marketplaces',
    description: 'Optimizing presence on Amazon, Etsy, and global niche marketplaces.',
    icon: '🏪',
    color: '#f59e0b'
  },
  {
    id: CategoryId.CONTENT_MARKETING,
    name: 'Content Marketing',
    description: 'Strategic value creation through storytelling and media.',
    icon: '✍️',
    color: '#f87171'
  },
  {
    id: CategoryId.ALLBOUND,
    name: 'Allbound Marketing',
    description: 'The convergence of inbound, outbound, and nearbound strategies.',
    icon: '🔄',
    color: '#a78bfa'
  },
  {
    id: CategoryId.GEO_SEO,
    name: 'GEO and SEO',
    description: 'Generative Engine Optimization and local visibility.',
    icon: '🌍',
    color: '#4ade80'
  },
  {
    id: CategoryId.CRO,
    name: 'CRO',
    description: 'Maximizing the percentage of visitors who take action.',
    icon: '🧪',
    color: '#fb923c'
  },
  {
    id: CategoryId.CRM,
    name: 'CRM',
    description: 'Deepening relationships through data and retention systems.',
    icon: '🤝',
    color: '#94a3b8'
  },
  {
    id: CategoryId.AUTOMATION,
    name: 'Marketing Automation',
    description: 'Scaling efficiency through intelligent workflow orchestration.',
    icon: '⚡',
    color: '#fde047'
  },
  {
    id: CategoryId.PPC_SEM,
    name: 'PPC and SEM',
    description: 'Search engine marketing and paid search innovations.',
    icon: '🔍',
    color: '#c084fc'
  },
  {
    id: CategoryId.DATA_SCIENCE_BI,
    name: 'Data Science & BI',
    description: 'Advanced analytics and business intelligence frameworks.',
    icon: '🔬',
    color: '#2dd4bf'
  },
  {
    id: CategoryId.DATA_ANALYTICS,
    name: 'Data Analytics',
    description: 'Measuring what matters in a cookie-less future.',
    icon: '📊',
    color: '#38bdf8'
  },
  {
    id: CategoryId.IT_DEV,
    name: 'IT and Development',
    description: 'The technical backbone of modern marketing stacks.',
    icon: '💻',
    color: '#475569'
  },
  {
    id: CategoryId.PR_EVENTS,
    name: 'PR, Comms & Events',
    description: 'Digital-first public relations and hybrid event strategies.',
    icon: '🎤',
    color: '#fb7185'
  },
  {
    id: CategoryId.BRANDING_UX,
    name: 'Branding & UX',
    description: 'Identity in the age of generative aesthetics and accessibility.',
    icon: '🎨',
    color: '#bef264'
  },
  {
    id: CategoryId.PODCASTING,
    name: 'Podcasting',
    description: 'Aural branding and the expansion of spoken word media.',
    icon: '🎙️',
    color: '#818cf8'
  },
  {
    id: CategoryId.OTT_SERVICES,
    name: 'OTT Services',
    description: 'Streaming platform marketing and connected TV (CTV) growth.',
    icon: '📺',
    color: '#60a5fa'
  },
  {
    id: CategoryId.DIGITAL_OOH,
    name: 'Digital OOH',
    description: 'Interactive digital billboards and spatial outdoor advertising.',
    icon: '🏙️',
    color: '#f472b6'
  }
];

export const INITIAL_TRENDS: Trend[] = [
  {
    id: 'ai-personalization-2026',
    categoryId: CategoryId.AI,
    title: 'Hyper-Individualized UX through Generative UI',
    summary: 'Interfaces that adapt in real-time based on user intent and psychological profile.',
    content: 'By 2026, static websites will be a thing of the past. GenUI (Generative User Interface) will craft unique landing pages for every visitor based on their historical behavior and real-time biometric sentiment analysis.',
    stats: '84% of consumers expect interfaces to anticipate their needs.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    date: 'Jan 12, 2026'
  },
  {
    id: 'social-communities-2026',
    categoryId: CategoryId.SOCIAL_MEDIA,
    title: 'The Rise of "Micro-Neighborhood" Communities',
    summary: 'Users are migrating from massive public squares to small, high-trust niche groups.',
    content: 'Social media strategy is shifting from broadcasting to "netcasting". Brands must now participate in thousands of small, private Discord or Telegram-style clusters rather than one large Instagram page.',
    stats: 'Micro-communities see 5x higher engagement than broad followings.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200',
    date: 'Jan 15, 2026'
  },
  {
    id: 'video-spatial-2026',
    categoryId: CategoryId.VIDEO,
    title: 'Spatial Video Ads for Mixed Reality',
    summary: 'As headsets become mainstream, video marketing goes 3D.',
    content: 'Standard 2D video is evolving. Marketers are creating "spatial spots" that allow users to walk through an ad in 3D space using AR/VR devices.',
    stats: 'Spatial ads boast a 40% higher brand recall rate.',
    imageUrl: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200',
    date: 'Jan 20, 2026'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: `blog-abm-2-0`,
    categoryId: CategoryId.AUTOMATION,
    title: `From Static Lists to Living Account Tiers: What I Learned Investigating the "ABM 2.0" Operating Model`,
    author: TJ_RAO_AUTHOR,
    excerpt: `Investigation into the friction points of traditional ABM and the discovery of a new operating model that shifts from static spreadsheets to dynamic, signal-led living tiers.`,
    takeaways: [
      "Shift from static Target Account Lists to 'Living Account Tiers' driven by real-time intent signals.",
      "Implement 'Score Decay' to prevent database bloat and ensure sales focuses on recently active leads.",
      "Adopt a 'Listen, Process, Activate' architecture using tools like n8n or Make for automated orchestration."
    ],
    references: [
      { title: "The 95:5 Rule in B2B Marketing", url: "https://www.marketingweek.com/b2b-95-5-rule/" },
      { title: "Intent Data and the Future of ABM", url: "https://www.forrester.com/blogs/intent-data-the-holy-grail-of-abm/" },
      { title: "Predictive Analytics for Lead Scoring", url: "https://hbr.org/2014/10/predictive-analytics-is-for-marketers-too" }
    ],
    faqs: [
      { question: "How often should score decay be calculated?", answer: "For most B2B cycles, a weekly recalculation is standard. High-velocity markets might require daily updates to ensure Tier 1 remains truly active." },
      { question: "What tools are best for building living tiers?", answer: "n8n and Make are excellent for orchestration. You'll need an intent data provider (like 6sense or Demandbase) and a CRM like HubSpot or GoHighLevel to act as the destination." },
      { question: "Can ABM 2.0 work for small businesses?", answer: "Yes, though the signal volume will be lower. The principle of signal-led prioritization actually saves smaller teams time by ensuring they only focus on high-intent accounts." }
    ],
    content: `
I’ve been going down a rabbit hole lately.

As someone who spends a lot of time thinking about systems, **automation**, and how to make technology work for business operations, I started noticing a recurring friction point in how B2B companies handle their "dream clients."

We all know the standard advice: build a **Target Account List (TAL)**, pick your top 100 ideal companies, and go after them.

But in practice, I’ve observed that this often falls flat. Sales teams complain the leads are cold. Marketing shouts that the leads fit the profile perfectly. And somewhere in the middle, the data sits in a spreadsheet, slowly going stale.

So, I started digging into **why this happens** and what the smartest technical marketers are doing differently. I wanted to understand the mechanics of modern **Account-Based Marketing (ABM)**. What I found is a completely different operating model—one that shifts from static lists to something called **"Living Account Tiers."**

Here is what I discovered about this new "ABM 2.0" framework, how it solves the **latency problem**, and the exact technical architecture required to build it.

### The Core Conflict: Spreadsheet Latency vs. Buyer Velocity

The first thing I learned is that the failure of traditional ABM isn't usually a content problem or a sales skill problem. **It’s a data latency problem.**

In the traditional model (let's call it ABM 1.0), we create a static artifact: a list. We export a CSV from a database, filter for "Software companies with >50 employees," and hand it to sales. But here is the fascinating/scary statistic I found during my research:

> At any given time, **95% of your buyers are out-of-market**, while only 5% are actively looking to buy. [1]

The problem with a static list is that it captures a moment in time. The day after you publish that list, it starts dying.
*   **Company A** (on your list) might suffer a budget freeze the next morning.
*   **Company B** (not on your list) might raise a Series B funding round and suddenly enter the market.

Because the list is static, your team ends up spamming the 95% who don't care and missing the 5% who are ready to buy right now. The "Reporter" in me sees this as a massive **efficiency gap**. The market moves at high velocity, but our spreadsheets are stuck in place.

The solution I found is a shift in mindset: **Stop treating your Target Account List as a Noun ("The List") and start treating it as a Verb ("The Queue").**

### The Discovery: The "Living Tier" Framework

So, if static lists are dead, what replaces them? The research points to a dynamic structure called **"Living Account Tiers."**

Instead of manually assigning a company to "Tier 1" because we hope they are a good fit, accounts move themselves in and out of tiers based on data. It’s an **automated sorting hat**. I mapped out the definitions I found, and they look like this:

#### Tier 1: The "Strike Zone" (Active)
This was the biggest unlock for me. Tier 1 isn't just "big companies we like." In this model, an account is only allowed in Tier 1 if they are showing **high intent signals** *right now*.
*   **The Criteria:** They match your Ideal Customer Profile (ICP) **AND** they have a high intent score (e.g., >80/100).
*   **The Behavior:** They are visiting your **pricing page**, they are connected to a decision-maker, or they are reading your technical documentation. [2]

#### Tier 2: The "Aware" Layer (Warm)
These accounts fit the profile, and they are looking around, but they aren't ready for a sales call yet.
*   **The Criteria:** High ICP fit + Moderate engagement.
*   **The Behavior:** They might be reading comparison articles on G2, downloading a whitepaper, or—and this is key—they used to be Tier 1 but have cooled off (more on **"decay"** later). [3]

#### Tier 3: The "Monitor" Layer (Cold)
This is where most of that static list actually belongs.
*   **The Criteria:** They are a perfect firmographic fit (right industry, right size), but they have shown zero engagement in the last 90 days.
*   **The Strategy:** You don't call them. You don't email them manually. You let **low-cost brand awareness ads** run in the background until they wake up and move themselves to Tier 2.

#### The Graveyard
I loved this concept. These are accounts that are **disqualified**—maybe they merged, went bankrupt, or gave a hard "No." They are systematically removed from all views so they don't clog the system.

### The Fuel: The "Signal Stack"

For this system to work, it needs fuel. You can't just guess who is "Active." I looked into what kind of data is actually powering these living tiers. It turns out, you need to layer three specific types of signals. [4]

As I looked at this, I realized how relevant this is for those of us in **PropTech or SaaS**, where we have access to so much digital data.

**1. The Technographic Signal ("The Stack")**
This is about *capability*.
*   **What I found:** You can track when a target account installs a specific technology. For example, if you are selling a sophisticated data tool, you might watch for when a company installs **"Segment"** or **"Snowflake."**
*   **Why it matters:** It signals **maturity**. They have installed the plumbing that makes them ready for your product.
*   **Sources:** Tools like BuiltWith or Wappalyzer.

**2. The Firmographic Signal ("The Money")**
This is about *capacity*.
*   **What I found:** This is the standard stuff—revenue, employee count, location. But the "living" version looks for **changes**. Did they just hire a new VP of Marketing? Did they just announce a funding round?
*   **Why it matters:** A funding round is a proxy for **budget availability**. A new executive hire is a proxy for a change in strategy.
*   **Sources:** LinkedIn Sales Navigator, Crunchbase.

**3. The Behavioral Signal ("The Intent")**
This is about *interest*.
*   **What I found:** This is the most critical layer. It’s not just "did they visit the website?" It’s **"what did they look at?"**
*   **The nuance:** Visiting a blog post is low intent. Visiting the **API Documentation** or the **Pricing Page** is high intent. That distinction is vital for the scoring model. [6]

### The Engine: Scoring and The "Decay" Mechanism

This was the most technical and arguably the most important part of my research. I’ve built lead scoring models before, but I found a flaw in almost all of them: **The scores only go up.**

If a prospect clicks an email today, they get +10 points. If they visit the site next week, +10 points. Eventually, every account looks like a "Tier 1" account just because they’ve been in the database for two years.

The "Reporter" takeaway here is the concept of **Score Decay**.

#### The Missing Variable: Time
To keep a tier "living," you have to punish **inactivity**. I found that the best operating models implement a decay logic. [7]

*   **The Logic:** If \`Last_Activity_Date\` > 30 days, reduce \`Account_Score\` by 25%.
*   **The Result:** If a Tier 1 account stops engaging, their score drops. They automatically **demote themselves** to Tier 2.

This solves the sales team's biggest complaint. When they look at their "Tier 1" view, they know everyone in that list has done something relevant **recently**. The list cleans itself.

#### A Scoring Example I Uncovered
I found a simple heuristic for how to weight these actions:

| Action | Points | Signal Type |
| :--- | :--- | :--- |
| **Technographic Match** | **+50** | Baseline (Must have) |
| **Pricing Page Visit** | **+20** | High Intent |
| **Email Click** | **+10** | Moderate Intent |
| **Blog Visit** | **+5** | Low Intent |

If an account hits **80 points**, they enter the "Strike Zone." If they do nothing for a month, the decay kicks in, drops them to 60 points, and they fall back to "Aware."

### The Architecture: How to Actually Build This

For those of us who love tools like **n8n, Make, or GoHighLevel (GHL)**, this is where it gets fun. I mapped out what the orchestration architecture looks like based on the "ABM 2.0" principles. [8]

It’s effectively a loop consisting of three stages: **Ingest, Process, Activate.**

**1. Ingest (The Listener)**
You need a central place to catch the signals.
*   **The Setup:** You set up a Webhook in **n8n** that listens for events.
*   **The Inputs:** It catches a "Form Submit" from your website, a "Funding Alert" from Crunchbase, or a "High Intent" spike from a provider like 6sense.

**2. Process (The Brain)**
This is where the logic lives. You don't want to just pass data to sales; you want to **interpret it**.
*   **The Logic:** The workflow calculates the new score. It checks: \`Is Score > 80?\` AND \`Is current Tier != 1?\`
*   **The Decision:** If yes, trigger a **"Promote" workflow**.

**3. Activate (The Hands)**
This is the execution layer. The research emphasized that different tiers get different treatments.

*   **If Promoted to Tier 1:**
    *   **CRM:** Update the field in GHL/Rex to **"Active."**
    *   **Sales:** Send a Slack alert: *"🔥 [Account Name] is Hot. Checked Pricing Page."*
    *   **Ads:** Add them to a "Tier 1" LinkedIn Matched Audience (high budget).

*   **If Demoted to Tier 2:**
    *   **Ads:** Remove from the expensive ad audience.
    *   **Nurture:** Add to a long-term email drip sequence that educates them until they are ready to come back.

### My Takeaway: Why This Resonates

Reading through all this research, I realized something about my own struggles with operations and product management. We often try to solve problems by adding more—more leads, more calls, more data.

But this ABM 2.0 model suggests that the secret isn't "more." **It’s timing.**

It’s about respecting the fact that buyers have their own timeline, not ours. By building a system that **listens to their behavior** and adjusts automatically—promoting them when they are hot and leaving them alone when they are cold—we aren't just saving time for our sales teams. We are building a more respectful, intelligent way to do business.

I know I’ve struggled with systems that become bloated and outdated the moment they are built. This "living" approach feels like the **antidote**. It forces the system to stay current, so I don't have to constantly micromanage it.

I’m going to be experimenting with building some of these **"Decay" workflows in n8n** over the next few weeks to see if I can replicate this logic. If you found this breakdown helpful and want to see how the actual automation comes together, make sure to follow along. I’ll be sharing the blueprints as I build them.
    `,
    imageUrl: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200`,
    date: 'Feb 15, 2026',
    readTime: '12 min read'
  },
  ...CATEGORIES.flatMap(cat => [
    {
      id: `blog-${cat.id}-1`,
      categoryId: cat.id,
      title: `The 2026 ${cat.name} Strategic Manifesto`,
      author: TJ_RAO_AUTHOR,
      excerpt: `A deep dive into how ${cat.name} is evolving with the latest technological shifts and consumer behavior patterns.`,
      takeaways: [
        "Generative UI will replace static landing pages by Q3 2026.",
        "Privacy-first measurement protocols are no longer optional.",
        "Algorithm resilience depends on community-led signal growth."
      ],
      content: `
## The Paradigm Shift

As we approach 2026, the traditional boundaries of **${cat.name}** are dissolving. We are no longer operating in a world of segmented channels; we are operating in a world of **continuous experience**. The integration of Generative AI and real-time data processing has fundamentally altered the ROI equation for modern agencies.

### The End of Generic Outreach

Static messaging is a relic of the past. In 2026, your strategy must be as dynamic as the users you target. This means leveraging **predictive modeling** not just for when a user might buy, but for the specific emotional state they inhabit during the interaction.

> "The brands that win in 2026 will not be the loudest, but the most relevant at the exact micro-moment of intent."

### Key Pillars of Success

*   **Hyper-Personalization at Scale:** Utilizing neural networks to customize creative assets in real-time.
*   **Privacy-First Measurement:** Moving beyond cookies to zero-party data and aggregate performance signals.
*   **Ethical Automation:** Ensuring that as we automate workflows, we maintain the "human bridge" that builds authentic brand trust.

Implementing these shifts requires a total overhaul of the **technical stack**. We are moving from a 'stack of tools' to a 'unified intelligence layer'. If your agency isn't planning this migration now, the gap by 2026 will be insurmountable.
      `,
      imageUrl: `https://picsum.photos/seed/${cat.id}-1/1200/800`,
      date: 'Oct 24, 2025',
      readTime: '5 min read'
    },
    {
      id: `blog-${cat.id}-2`,
      categoryId: cat.id,
      title: `Reinventing ${cat.name} for the AI Era`,
      author: TJ_RAO_AUTHOR,
      excerpt: `Exploring the critical strategies your agency needs to implement today to stay ahead in ${cat.name}.`,
      takeaways: [
        "Prescriptive intelligence is the successor to predictive analytics.",
        "Marketing to AI agents is the new search engine optimization.",
        "Intelligence overlays will become the standard browser interface."
      ],
      content: `
## The Intelligence Overlay

AI isn't just a tool; it's the environment. In the realm of **${cat.name}**, this translates to a proactive posture rather than a reactive one. **Predictive analytics** has matured into **prescriptive intelligence**—telling you not just what will happen, but exactly what steps to take to optimize outcomes.

We've analyzed over 500 campaigns leading into the 2026 forecast, and one trend is undeniable: **agents are becoming the primary consumers**. We are no longer just marketing to humans; we are marketing to the AI agents humans use to manage their digital lives.
      `,
      imageUrl: `https://picsum.photos/seed/${cat.id}-2/1200/800`,
      date: 'Nov 12, 2025',
      readTime: '8 min read'
    },
    {
      id: `blog-${cat.id}-3`,
      categoryId: cat.id,
      title: `${cat.name} in 2026: 3 Bold Predictions`,
      author: TJ_RAO_AUTHOR,
      excerpt: `Industry leaders weigh in on the top 3 trends that will define ${cat.name} in the coming year.`,
      takeaways: [
        "90% of creative volume will be automated production.",
        "Headless content stores will decouple storytelling from platforms.",
        "Lifetime brand trust scores will replace click-through rates."
      ],
      content: `
## 1. The Autonomous Agency

Creative production for **${cat.name}** will be **90% automated** by volume, while the remaining 10%—the high-level strategic vision—will command 90% of the value. The agency of 2026 looks more like a software house with a storytelling soul.

## 2. Decoupled Content

Content will no longer be tied to specific platforms. It will exist in a **'headless'** state, ready to be reformatted by AI to fit any display context—from a smartwatch to a spatial headset.

## 3. Trust Metrics

Traditional metrics like CTR will be replaced by **'Trust Scores'**. How much did this interaction increase the lifetime brand equity? That's the only number that will matter in 2026.
      `,
      imageUrl: `https://picsum.photos/seed/${cat.id}-3/1200/800`,
      date: 'Dec 05, 2025',
      readTime: '6 min read'
    }
  ])
];
