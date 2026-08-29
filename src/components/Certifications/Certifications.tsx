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
          <div className="certifications__title-wrapper">
            <span className="certifications__title-decoration" />
            <h2 className="certifications__title">CERTIFICATIONS</h2>
            <span className="certifications__title-decoration" />
          </div>
          <p className="certifications__desc tech-label tech-label--lime">VERIFIED_CREDENTIALS</p>
        </motion.div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <motion.article 
              key={cert.id}
              className="certifications__card"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Mechanical Border Frame */}
              <svg className="certifications__card-frame" width="100%" height="100%">
                <path d="M 0 15 L 15 0 L 100% 0 L 100% 100% L 0 100% Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="certifications__card-inner">
                {/* Security Strip / Barcode */}
                <div className="certifications__security-strip" aria-hidden="true" />
                
                <div className="certifications__card-body">
                  <div className="certifications__icon-wrapper">
                    <Award size={20} className="certifications__icon" />
                  </div>
                  
                  <div className="certifications__content">
                    <div className="certifications__meta">
                      <span className="certifications__issuer">{cert.issuer}</span>
                      {cert.date && (
                        <>
                          <span className="certifications__divider"></span>
                          <span className="certifications__date">{cert.date}</span>
                        </>
                      )}
                    </div>
                    
                    <h3 className="certifications__card-title">{cert.title}</h3>
                    <p className="certifications__category tech-label tech-label--orange">{cert.category}</p>
                    
                    {cert.modules && (
                      <ul className="certifications__modules">
                        {cert.modules.map((module, i) => (
                          <li key={i}>
                            <span className="certifications__module-bullet">+</span>
                            {module}
                          </li>
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
                        <span className="certifications__link-text">VIEW CREDENTIAL</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
