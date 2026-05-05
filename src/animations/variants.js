/* ── Framer Motion reusable variants ── */

export const fadeInUp = {
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0  },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export const fadeIn = {
  initial:  { opacity: 0 },
  animate:  { opacity: 1 },
  transition: { duration: 0.5 },
}

export const slideInRight = {
  initial:  { opacity: 0, x: 24 },
  animate:  { opacity: 1, x: 0  },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const scaleIn = {
  initial:  { opacity: 0, scale: 0.94 },
  animate:  { opacity: 1, scale: 1    },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
}