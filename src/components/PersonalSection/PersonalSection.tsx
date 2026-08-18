import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import './PersonalSection.css';

const interests = [
  'Reading Books',
  'Comics & Classics',
  'Watching Web Series',
  'Storytelling',
  'Analyzing Characters & Perspectives',
  'Continuous Learning',
  'Engineering Innovation'
];

export default function PersonalSection() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section className="personal section" id="about" ref={ref} aria-label="Personal Interests">
      <div className="personal__inner container">
        <motion.div
          className="personal__content"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="personal__title">BEYOND THE MACHINE</h2>
          
          <div className="personal__divider" aria-hidden="true">
            <span className="personal__divider-dot" />
            <span className="personal__divider-line" />
            <span className="personal__divider-dot" />
          </div>

          <p className="personal__desc">
            Engineering is driven by curiosity, and that curiosity extends beyond technical systems. Exploring different narratives, perspectives, and stories provides a broader context for innovation and problem-solving.
          </p>

          <div className="personal__tags">
            {interests.map((interest, i) => (
              <motion.span 
                key={interest} 
                className="personal__tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
