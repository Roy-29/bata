import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { projects } from '../../data/projects';
import './FeaturedProject.css';

export default function FeaturedProject() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const project = projects.find((p) => p.featured)!;

  return (
    <section className="featured section" id="projects" ref={ref} aria-label="Featured Project">
      <div className="featured__inner container">
        <motion.div
          className="featured__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="tech-label tech-label--orange">FEATURED / CASE STUDY</span>
          <div className="featured__title-row">
            <span className="featured__code">{project.code}</span>
            <h2 className="featured__title">{project.title.toUpperCase()}</h2>
          </div>
          <p className="featured__date tech-label">{project.date}</p>
        </motion.div>

        <div className="featured__body">
          {/* Mechanical visualization */}
          <motion.div
            className="featured__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 500 400" fill="none" className="featured__diagram">
              {/* Main shaft */}
              <line x1="100" y1="200" x2="400" y2="200" stroke="var(--engineering-teal)" strokeWidth="2" className="featured__shaft" />

              {/* Motor/power source */}
              <rect x="40" y="170" width="60" height="60" rx="4" stroke="var(--emerald)" strokeWidth="1.5" fill="none" />
              <text x="70" y="165" textAnchor="middle" fill="var(--lime)" fontSize="7" fontFamily="var(--font-mono)">POWER</text>

              {/* Gear 1 */}
              <circle cx="160" cy="200" r="35" stroke="var(--lime)" strokeWidth="1" fill="none" className="featured__gear" />
              <circle cx="160" cy="200" r="25" stroke="rgba(156,225,145,0.3)" strokeWidth="0.5" fill="none" />
              <circle cx="160" cy="200" r="8" fill="rgba(156,225,145,0.15)" stroke="var(--lime)" strokeWidth="0.5" />
              {/* Gear teeth indicators */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                return (
                  <line
                    key={`t1-${i}`}
                    x1={160 + Math.cos(angle) * 33}
                    y1={200 + Math.sin(angle) * 33}
                    x2={160 + Math.cos(angle) * 38}
                    y2={200 + Math.sin(angle) * 38}
                    stroke="var(--lime)"
                    strokeWidth="1.5"
                  />
                );
              })}
              <text x="160" y="250" textAnchor="middle" fill="var(--muted)" fontSize="7" fontFamily="var(--font-mono)">SPUR GEAR</text>

              {/* Gear 2 (meshed) */}
              <circle cx="240" cy="200" r="28" stroke="var(--emerald)" strokeWidth="1" fill="none" className="featured__gear featured__gear--reverse" />
              <circle cx="240" cy="200" r="18" stroke="rgba(5,114,83,0.3)" strokeWidth="0.5" fill="none" />
              <circle cx="240" cy="200" r="6" fill="rgba(5,114,83,0.15)" stroke="var(--emerald)" strokeWidth="0.5" />
              {Array.from({ length: 10 }).map((_, i) => {
                const angle = (i * 36 * Math.PI) / 180;
                return (
                  <line
                    key={`t2-${i}`}
                    x1={240 + Math.cos(angle) * 26}
                    y1={200 + Math.sin(angle) * 26}
                    x2={240 + Math.cos(angle) * 31}
                    y2={200 + Math.sin(angle) * 31}
                    stroke="var(--emerald)"
                    strokeWidth="1.5"
                  />
                );
              })}

              {/* Bearing indicators */}
              <rect x="300" y="190" width="20" height="20" rx="2" stroke="var(--engineering-teal)" strokeWidth="1" fill="none" />
              <text x="310" y="185" textAnchor="middle" fill="var(--muted)" fontSize="6" fontFamily="var(--font-mono)">BEARING</text>

              {/* Output / cutting blade */}
              <circle cx="400" cy="200" r="30" stroke="var(--mechanical-orange)" strokeWidth="1" fill="none" />
              <line x1="375" y1="200" x2="425" y2="200" stroke="var(--mechanical-orange)" strokeWidth="1" />
              <line x1="400" y1="175" x2="400" y2="225" stroke="var(--mechanical-orange)" strokeWidth="1" />
              <text x="400" y="245" textAnchor="middle" fill="var(--mechanical-orange)" fontSize="7" fontFamily="var(--font-mono)">BLADE</text>

              {/* Dimension line */}
              <line x1="100" y1="290" x2="400" y2="290" stroke="rgba(156,225,145,0.15)" strokeWidth="0.5" />
              <line x1="100" y1="285" x2="100" y2="295" stroke="rgba(156,225,145,0.15)" strokeWidth="0.5" />
              <line x1="400" y1="285" x2="400" y2="295" stroke="rgba(156,225,145,0.15)" strokeWidth="0.5" />
              <text x="250" y="305" textAnchor="middle" fill="rgba(156,225,145,0.3)" fontSize="6" fontFamily="var(--font-mono)">POWER TRANSMISSION PATH</text>

              {/* Torque arrow */}
              <path d="M130 140 A 30 30 0 0 1 160 130" stroke="rgba(249,130,30,0.4)" strokeWidth="0.8" fill="none" />
              <text x="135" y="125" fill="rgba(249,130,30,0.5)" fontSize="6" fontFamily="var(--font-mono)">TORQUE</text>

              {/* Flow arrows */}
              <path d="M108 200 L118 195 L118 205 Z" fill="var(--engineering-teal)" opacity="0.6" />
              <path d="M270 200 L280 195 L280 205 Z" fill="var(--engineering-teal)" opacity="0.6" />
              <path d="M330 200 L340 195 L340 205 Z" fill="var(--engineering-teal)" opacity="0.6" />
            </svg>
          </motion.div>

          {/* Content */}
          <motion.div
            className="featured__content"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="featured__desc">{project.description}</p>

            <div className="featured__workflow">
              <span className="tech-label">WORKFLOW</span>
              <div className="featured__steps">
                {['DESIGN', 'CALCULATE', 'MODEL', 'BUILD'].map((step, i) => (
                  <span key={step} className="featured__step">
                    {i > 0 && <span className="featured__step-arrow">→</span>}
                    {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="featured__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="featured__tag">{tag}</span>
              ))}
            </div>

            <ul className="featured__details">
              {project.details.map((detail, i) => (
                <li key={i} className="featured__detail">
                  <span className="featured__detail-marker" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
