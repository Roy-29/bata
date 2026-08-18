import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import './MotorsportSection.css';

export default function MotorsportSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="motorsport section" id="motorsport" ref={ref} aria-label="Motorsport Experience">
      <div className="motorsport__inner container">
        <motion.div
          className="motorsport__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="motorsport__title">POWERTRAIN / KILO FLIGHT</h2>
          <span className="motorsport__role tech-label tech-label--orange">SENIOR EXECUTIVE, MECHANICAL POWERTRAIN</span>
          <span className="motorsport__date tech-label">JUL 2024 – CURRENT</span>
        </motion.div>

        <div className="motorsport__content">
          <motion.div
            className="motorsport__visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
          >
            {/* Cinematic dark racing visual with telemetry */}
            <div className="motorsport__telemetry-ui">
              <div className="motorsport__telemetry-line">
                <span>SYSTEM STATUS</span>
                <span className="motorsport__telemetry-val">ACTIVE</span>
              </div>
              <div className="motorsport__telemetry-line">
                <span>MODE</span>
                <span className="motorsport__telemetry-val">ENGINEERING</span>
              </div>
              <div className="motorsport__telemetry-line">
                <span>ANALYSIS</span>
                <span className="motorsport__telemetry-val">PERFORMANCE</span>
              </div>
            </div>

            <svg viewBox="0 0 800 400" className="motorsport__svg" fill="none">
              {/* Grid overlay */}
              <pattern id="motorsport-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              </pattern>
              <rect width="800" height="400" fill="url(#motorsport-grid)" />
              
              {/* Stylized race car wireframe */}
              <path d="M100 280 L200 280 L250 220 L400 180 L550 170 L700 210 L750 250 L750 280 L650 280" stroke="var(--engineering-teal)" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M550 170 L600 120 L750 150" stroke="var(--engineering-teal)" strokeWidth="1" />
              
              {/* Wheels */}
              <circle cx="200" cy="280" r="40" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />
              <circle cx="650" cy="280" r="40" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />

              {/* Data lines moving */}
              <path d="M0 100 L300 100 L400 200 L800 200" stroke="var(--mechanical-orange)" strokeWidth="1" opacity="0.3" className="motorsport__data-line" />
              <path d="M0 350 L200 350 L300 300 L800 300" stroke="var(--lime)" strokeWidth="1" opacity="0.2" className="motorsport__data-line motorsport__data-line--delayed" />

              {/* Focus points */}
              <circle cx="400" cy="180" r="4" fill="var(--mechanical-orange)" />
              <circle cx="400" cy="180" r="12" stroke="var(--mechanical-orange)" strokeWidth="1" fill="none" className="motorsport__pulse" />
              <text x="400" y="160" textAnchor="middle" fill="var(--mechanical-orange)" fontSize="10" fontFamily="var(--font-mono)">CG FOCUS</text>
            </svg>
          </motion.div>

          <motion.div
            className="motorsport__desc"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p>
              Leading mechanical powertrain design and development for Formula Student racing vehicles. Focus areas include optimizing vehicle performance, ensuring powertrain reliability, and improving manufacturability.
            </p>
            <div className="motorsport__tags">
              {['Powertrain Design', 'Analysis', 'Development', 'Vehicle Performance', 'Reliability', 'Component Selection'].map(tag => (
                <span key={tag} className="motorsport__tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
