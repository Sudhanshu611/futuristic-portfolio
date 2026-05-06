export const skillsData = {
  filters: [
    { id: 'all',   label: 'all' },
    { id: 'dev',   label: 'full-stack development' },
    { id: 'lang',  label: 'programming languages' },
    { id: 'data',  label: 'databases & backend' },
    { id: 'tools', label: 'tools & devops' },
    { id: 'learn', label: 'learning / future ai-ml' },
  ],

  groups: [
    {
      title: '// programming languages',
      cat: 'lang',
      skills: [
        { name: 'Python',              pct: 72, level: 'proficient' },
        { name: 'JavaScript (ES6+)',   pct: 68, level: 'proficient' },
        { name: 'C',                 pct: 60, level: 'learning' },
        { name: 'C++',                 pct: 45, level: 'learning' },
        { name: 'SQL',                 pct: 58, level: 'proficient' },
      ],
    },

    {
      title: '// frontend development',
      cat: 'dev',
      skills: [
        { name: 'HTML5',               pct: 90, level: 'core' },
        { name: 'CSS3 / Tailwind',     pct: 86, level: 'core' },
        { name: 'Responsive Design',   pct: 82, level: 'core' },
        { name: 'React / Vite',        pct: 55, level: 'learning' },
        { name: 'DOM Manipulation',    pct: 75, level: 'proficient' },
      ],
    },

    {
      title: '// backend & databases',
      cat: 'data',
      skills: [
        { name: 'Node.js / Express',      pct: 70, level: 'proficient' },
        { name: 'REST APIs',              pct: 74, level: 'proficient' },
        { name: 'JWT Authentication',     pct: 58, level: 'learning' },
        { name: 'SQLite',                 pct: 68, level: 'proficient' },
        { name: 'PostgreSQL',             pct: 62, level: 'proficient' },
        { name: 'Database Design Basics', pct: 55, level: 'learning' },
      ],
    },

    {
      title: '// tools & devops',
      cat: 'tools',
      skills: [
        { name: 'Git / GitHub',       pct: 78, level: 'proficient' },
        { name: 'Vercel Deployment',  pct: 72, level: 'proficient' },
        { name: 'Postman',            pct: 75, level: 'proficient' },
        { name: 'Linux Terminal',     pct: 65, level: 'proficient' },
        { name: 'VS Code',            pct: 88, level: 'core' },
        { name: 'Docker',             pct: 15, level: 'exploring' },
      ],
    },

    {
      title: '// future ai / ml roadmap',
      cat: 'learn',
      skills: [
        { name: 'Probability & Statistics', pct: 42, level: 'learning' },
        { name: 'Calculus Basics',          pct: 35, level: 'learning' },
        { name: 'Machine Learning',         pct: 10, level: 'exploring' },
        { name: 'Data Structures & Algorithms', pct: 30, level: 'learning' },
      ],
    },
  ],

  tools: [
    'VS Code',
    'GitHub',
    'Postman',
    'Vercel',
    'Netlify',
    'Linux',
    'Notion',
    'Node.js',
    'Express',
    'SQLite',
    'PostgreSQL',
  ],
};