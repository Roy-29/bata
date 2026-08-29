import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { Book, Film, Tv, PenTool, Users, Zap, Wrench } from 'lucide-react';
import './PersonalSection.css';

const interests = [
  { label: 'Reading Books', icon: <Book size={16} /> },
  { label: 'Comics & Classics', icon: <Film size={16} /> },
  { label: 'Watching Web Series', icon: <Tv size={16} /> },
  { label: 'Storytelling', icon: <PenTool size={16} /> },
  { label: 'Analyzing Characters & Perspectives', icon: <Users size={16} /> },
  { label: 'Continuous Learning', icon: <Zap size={16} /> },
  { label: 'Engineering Innovation', icon: <Wrench size={16} /> }
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
          <div className="personal__terminal">
            {/* Terminal Header Decoration */}
            <div className="personal__terminal-header">
              <span className="personal__terminal-dot" />
              <span className="personal__terminal-dot" />
              <span className="personal__terminal-dot" />
              <span className="personal__terminal-sys">SYS_LOG_HUMAN_ELEMENT</span>
            </div>

            <div className="personal__terminal-body">
              <h2 className="personal__title">BEYOND THE MACHINE</h2>
              
              <div className="personal__divider" aria-hidden="true">
                <span className="personal__divider-dot" />
                <span className="personal__divider-line" />
                <span className="personal__divider-dot" />
              </div>

              <p className="personal__desc">
                Engineering is driven by curiosity, and that curiosity extends beyond technical systems. 
                Exploring different narratives, perspectives, and stories provides a broader context for innovation and problem-solving.
              </p>

              <div className="personal__tags">
                {interests.map((interest, i) => (
                  <motion.div 
                    key={interest.label} 
                    className="personal__tag"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + (i * 0.05), type: 'spring' }}
                    whileHover={{ y: -3, scale: 1.05 }}
                  >
                    <span className="personal__tag-icon">{interest.icon}</span>
                    <span className="personal__tag-label">{interest.label}</span>
                    
                    {/* Decorative corner brackets */}
                    <div className="personal__tag-brackets" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Corner decorations for terminal */}
            <svg className="personal__terminal-frame" width="100%" height="100%" aria-hidden="true">
              <path className="frame-line" d="M 0 20 L 0 0 L 20 0" fill="none" />
              <path className="frame-line" d="M 100% 20 L 100% 0 L calc(100% - 20px) 0" fill="none" />
              <path className="frame-line" d="M 0 calc(100% - 20px) L 0 100% L 20 100%" fill="none" />
              <path className="frame-line" d="M 100% calc(100% - 20px) L 100% 100% L calc(100% - 20px) 100%" fill="none" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
