// ============================================================
//  SKILLS DATA — edit this file to update your Skills section
//  Structure: categories → skills[]
//  Proficiency levels: 'core' | 'proficient' | 'learning' | 'exploring'
// ============================================================

export const skillsData = {

  // ── Filter categories shown as buttons ──────────────────
  // id must match the `cat` field in groups below
  filters: [
    { id: 'all',   label: 'all'             },
    { id: 'ml',    label: 'machine learning' },
    { id: 'quant', label: 'quant / math'    },
    { id: 'dev',   label: 'development'     },
    { id: 'data',  label: 'data'            },
  ],

  // ── Skill groups ─────────────────────────────────────────
  // cat: must match a filter id above (controls visibility on filter click)
  // skills[].level: 'core' renders a brighter bar, others are dimmer
  groups: [
    {
      title: '// machine learning',
      cat:   'ml',
      skills: [
        { name: 'Python',                    pct: 90, level: 'core'      },
        { name: 'PyTorch',                   pct: 75, level: 'proficient' },
        { name: 'scikit-learn',              pct: 80, level: 'proficient' },
        { name: 'Transformers / HuggingFace',pct: 60, level: 'learning'   },
        { name: 'MLflow / experiment tracking', pct: 55, level: 'learning' },
      ],
    },
    {
      title: '// quant & math',
      cat:   'quant',
      skills: [
        { name: 'Linear Algebra',             pct: 85, level: 'core'      },
        { name: 'Probability & Statistics',   pct: 80, level: 'core'      },
        { name: 'NumPy / SciPy',              pct: 85, level: 'proficient' },
        { name: 'Time Series Analysis',       pct: 65, level: 'learning'   },
        { name: 'Options Pricing / Black-Scholes', pct: 50, level: 'exploring' },
      ],
    },
    {
      title: '// data engineering',
      cat:   'data',
      skills: [
        { name: 'Pandas',              pct: 88, level: 'core'      },
        { name: 'SQL',                 pct: 70, level: 'proficient' },
        { name: 'Matplotlib / Plotly', pct: 75, level: 'proficient' },
        { name: 'Web scraping / APIs', pct: 65, level: 'proficient' },
      ],
    },
    {
      title: '// development',
      cat:   'dev',
      skills: [
        { name: 'React / Vite',   pct: 70, level: 'proficient' },
        { name: 'Git / GitHub',   pct: 80, level: 'proficient' },
        { name: 'FastAPI / Flask',pct: 60, level: 'learning'   },
        { name: 'Docker',         pct: 45, level: 'exploring'  },
      ],
    },
  ],

  // ── Tools strip (bottom row — no proficiency bars) ──────
  tools: [
    'VS Code', 'Jupyter', 'Linux', 'GitHub Actions',
    'Weights & Biases', 'Notion', 'Obsidian',
    'arXiv', 'Kaggle', 'Google Colab',
  ],
}