import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { profile } from '../../data/profile';
import './BrandStatement.css';

export default function BrandStatement() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="brand section" ref={ref}>
      <div className="brand__inner container">
        <motion.div
          className="brand__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="brand__text-container">
            <span className="tech-label tech-label--lime brand__label">ABOUT / PHILOSOPHY</span>
            <h2 className="brand__title">{profile.brandStatement.title}</h2>
            <div className="brand__divider" />
            <p className="brand__text">{profile.brandStatement.content}</p>
          </div>
        </motion.div>
        <div className="brand__accent" aria-hidden="true">
          <svg viewBox="0 0 200 400" fill="none">
            <line x1="100" y1="0" x2="100" y2="400" stroke="rgba(2,60,72,0.2)" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="30" stroke="rgba(5,114,83,0.15)" strokeWidth="0.5" fill="none" />
            <circle cx="100" cy="100" r="15" stroke="rgba(5,114,83,0.1)" strokeWidth="0.5" fill="none" />
            <rect x="85" y="200" width="30" height="60" rx="2" stroke="rgba(2,60,72,0.15)" strokeWidth="0.5" fill="none" />
            <line x1="70" y1="320" x2="130" y2="320" stroke="rgba(156,225,145,0.1)" strokeWidth="0.5" />
            <line x1="70" y1="315" x2="70" y2="325" stroke="rgba(156,225,145,0.1)" strokeWidth="0.5" />
            <line x1="130" y1="315" x2="130" y2="325" stroke="rgba(156,225,145,0.1)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
