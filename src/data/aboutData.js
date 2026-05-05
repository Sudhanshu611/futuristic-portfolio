// ============================================================
//  ABOUT DATA — edit this file to update your About section
//  No need to touch any component files.
// ============================================================

export const aboutData = {

  // ── Identity ─────────────────────────────────────────────
  name:     'Sudhanshu Singh',
  role:     'Aspiring ML Engineer',
  location: 'India',
  email:    'you@email.com',
  github:   'yourhandle',
  linkedin: 'yourhandle',          // optional — leave '' to hide
  degree:   'B.Tech — Computer Science',
  university: 'Your University',
  status:   'open to work',        // 'open to work' | 'employed' | 'freelancing'

  // ── Bio paragraphs ────────────────────────────────────────
  // Each string is one paragraph. Add/remove as needed.
  bio: [
    "I'm a student and aspiring ML engineer with a deep curiosity for how intelligent systems learn from data. My thinking sits at the crossroads of machine learning, quantitative finance, and systems design — where math meets real-world complexity.",
    "Building side projects, reading papers, and reverse-engineering everything I find interesting. Fascinated by gradient descent, market microstructure, and why transformers work so well.",
  ],

  // ── Highlighted words inside bio (rendered in accent color) ──
  // These words will be highlighted wherever they appear in bio text.
  highlights: [
    'ML engineer', 'machine learning', 'quantitative finance',
    'gradient descent', 'transformers',
  ],

  // ── Interest tags ─────────────────────────────────────────
  interests: [
    'deep learning',
    'quant finance',
    'NLP',
    'reinforcement learning',
    'time series',
    'stochastic calculus',
    'open source',
  ],

  // ── Stats (bottom counters) ───────────────────────────────
  stats: [
    { value: '12', unit: '+',  label: 'projects'     },
    { value: '3',  unit: 'k+', label: 'hours coded'  },
    { value: '47', unit: 'd',  label: 'streak'       },
  ],

  // ── Timeline ──────────────────────────────────────────────
  // Set active: true for current/ongoing entries.
  // Order: newest first.
  timeline: [
    {
      year:   '2024 — present',
      title:  'Self-directed ML Research',
      org:    'Independent',
      desc:   'Building models, reading arXiv papers, and working on open-source projects in ML and quant systems.',
      active: true,
    },
    {
      year:   '2022 — present',
      title:  'B.Tech — Computer Science',
      org:    'Your University',
      desc:   'Core CS fundamentals, algorithms, linear algebra, probability — building the mathematical foundation for ML.',
      active: true,
    },
    {
      year:   '2023',
      title:  'First ML Project',
      org:    'Personal project',
      desc:   "Built a stock price prediction model using LSTM networks. Learned more from what didn't work than what did.",
      active: false,
    },
    {
      year:   '2022',
      title:  'Discovered Quantitative Finance',
      org:    'Self-study',
      desc:   'Fell down the rabbit hole of options pricing, Black-Scholes, and why math runs financial markets.',
      active: false,
    },
  ],

  // ── Resume ────────────────────────────────────────────────
  resumeUrl: '/resume.pdf',   // drop your PDF in /public folder
}