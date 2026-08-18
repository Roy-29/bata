import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import './ResearchSection.css';

export default function ResearchSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="research section" ref={ref} aria-label="Research and Computation">
      <div className="research__inner container">
        <div className="research__grid">
          <motion.div
            className="research__content"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="tech-label tech-label--lime">ACADEMIC RESEARCH</span>
            <h2 className="research__title">WHERE MECHANICS MEETS COMPUTATION</h2>
            <p className="research__desc">
              Engineering today extends beyond physical constraints. My academic interests bridge traditional mechanical engineering with computational intelligence, exploring how programming, machine learning, and data-driven methods can solve complex engineering problems.
            </p>

            <div className="research__skills">
              <span className="tech-label">RESEARCH WORKFLOW</span>
              <ul className="research__workflow">
                <li>Literature Review</li>
                <li>Experimental Data Interpretation</li>
                <li>Research Paper Preparation & Formatting</li>
                <li>Technical Presentation</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="research__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
          >
            {/* Visual representing Mechanics -> Data */}
            <svg viewBox="0 0 400 400" className="research__diagram">
              <defs>
                <linearGradient id="data-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--engineering-teal)" />
                  <stop offset="100%" stopColor="var(--lime)" />
                </linearGradient>
              </defs>
              
              {/* Left side: Mechanical/CAD */}
              <g className="research__mech" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
                <circle cx="100" cy="200" r="60" strokeDasharray="4 4" />
                <rect x="70" y="170" width="60" height="60" />
                <line x1="40" y1="200" x2="160" y2="200" />
                <line x1="100" y1="140" x2="100" y2="260" />
              </g>

              {/* Center: Transformation lines */}
              <g stroke="rgba(156,225,145,0.2)" strokeWidth="1">
                <path d="M 170 170 C 200 170, 200 120, 230 120" strokeDasharray="2 4" />
                <path d="M 170 200 C 200 200, 200 200, 230 200" strokeDasharray="2 4" />
                <path d="M 170 230 C 200 230, 200 280, 230 280" strokeDasharray="2 4" />
              </g>

              {/* Right side: Data/Computation */}
              <g className="research__data" fill="url(#data-grad)">
                <circle cx="280" cy="120" r="4" />
                <circle cx="320" cy="90" r="6" />
                <circle cx="360" cy="140" r="5" />
                
                <circle cx="270" cy="200" r="7" />
                <circle cx="330" cy="220" r="8" />
                <circle cx="370" cy="190" r="4" />
                
                <circle cx="280" cy="280" r="5" />
                <circle cx="310" cy="320" r="9" />
                <circle cx="350" cy="270" r="6" />
                
                {/* Connecting mesh */}
                <path d="M 280 120 L 320 90 L 360 140 Z" stroke="rgba(156,225,145,0.3)" strokeWidth="0.5" fill="none" />
                <path d="M 270 200 L 330 220 L 370 190 Z" stroke="rgba(156,225,145,0.3)" strokeWidth="0.5" fill="none" />
                <path d="M 280 280 L 310 320 L 350 270 Z" stroke="rgba(156,225,145,0.3)" strokeWidth="0.5" fill="none" />
                <path d="M 280 120 L 270 200 L 280 280" stroke="rgba(156,225,145,0.15)" strokeWidth="0.5" fill="none" />
                <path d="M 320 90 L 330 220 L 310 320" stroke="rgba(156,225,145,0.15)" strokeWidth="0.5" fill="none" />
              </g>

              {/* Animated data particles */}
              <circle cx="100" cy="200" r="2" fill="var(--lime)" className="research__particle p1" />
              <circle cx="100" cy="200" r="2" fill="var(--lime)" className="research__particle p2" />
              <circle cx="100" cy="200" r="2" fill="var(--lime)" className="research__particle p3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
