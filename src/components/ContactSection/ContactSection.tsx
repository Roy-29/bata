import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { socialLinks } from '../../data/social';
import './ContactSection.css';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="contact section" id="contact" ref={ref} aria-label="Contact">
      <div className="contact__inner container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="tech-label tech-label--orange">FINAL PHASE / INITIATE</span>
          <h2 className="contact__title">
            LET'S BUILD SOMETHING<br />THAT <span className="text-gradient-orange">MOVES.</span>
          </h2>
          <p className="contact__desc">
            For engineering collaboration, projects, research, or professional opportunities.
          </p>

          <div className="contact__grid">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
              >
                <div className="contact__link-icon">
                  <link.icon size={20} />
                </div>
                <div className="contact__link-info">
                  <span className="contact__link-label tech-label">{link.label}</span>
                  <span className="contact__link-display">{link.display}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="contact__final-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="contact__cta-words">
              <span>ENGINEER.</span>
              <span>ANALYZE.</span>
              <span>BUILD.</span>
              <span className="text-gradient-orange">MOVE.</span>
            </div>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=biprotibhaldar@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact__cta-btn"
            >
              [ GET IN TOUCH ]
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
