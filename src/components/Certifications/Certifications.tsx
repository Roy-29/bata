import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { certifications } from '../../data/certifications';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="certifications section" ref={ref} aria-label="Certifications">
      <div className="certifications__inner container">
        <motion.div
          className="certifications__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="tech-label tech-label--lime">CREDENTIALS</span>
          <h2 className="certifications__title">CERTIFICATIONS</h2>
        </motion.div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <motion.article 
              key={cert.id}
              className="certifications__card"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="certifications__icon-wrapper">
                <Award size={24} className="certifications__icon" />
              </div>
              
              <div className="certifications__content">
                <div className="certifications__meta">
                  <span className="tech-label">{cert.issuer}</span>
                  {cert.date && (
                    <>
                      <span className="certifications__divider">/</span>
                      <span className="tech-label">{cert.date}</span>
                    </>
                  )}
                </div>
                
                <h3 className="certifications__card-title">{cert.title}</h3>
                <p className="certifications__category tech-label tech-label--orange">{cert.category}</p>
                
                {cert.modules && (
                  <ul className="certifications__modules">
                    {cert.modules.map((module, i) => (
                      <li key={i}>{module}</li>
                    ))}
                  </ul>
                )}
                
                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a 
                    href={cert.credentialUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certifications__link"
                  >
                    <span>VIEW CREDENTIAL</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
