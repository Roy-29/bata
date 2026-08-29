import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { education } from '../../data/education';
import { BookOpen, GraduationCap } from 'lucide-react';
import './EducationTimeline.css';

export default function EducationTimeline() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="education section" id="education" ref={ref} aria-label="Education Timeline">
      <div className="education__inner container">
        <motion.div
          className="education__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="tech-label tech-label--lime">ACADEMIC BACKGROUND</span>
          <h2 className="education__title">EDUCATION</h2>
        </motion.div>

        <div className="education__timeline">
          <div className="education__line" aria-hidden="true" />
          
          {education.map((item, index) => (
            <motion.div 
              key={item.id}
              className={`education__item ${item.current ? 'education__item--current' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="education__node" aria-hidden="true">
                <div className="education__node-inner" />
              </div>
              
              <div className="education__content">
                <div className="education__meta">
                  <span className="education__period tech-label">[{item.period}]</span>
                  {item.current && <span className="education__badge tech-label tech-label--orange">CURRENT</span>}
                </div>
                
                <h3 className="education__degree">
                  <span className="education__icon">
                    {item.degree.includes('BSc') ? <GraduationCap size={18} /> : <BookOpen size={18} />}
                  </span>
                  {item.degree}
                </h3>
                <p className="education__institution">{item.institution}</p>
                
                {item.gpa && (
                  <div className="education__gpa-container">
                    <span className="tech-label">GPA_</span>
                    <span className="education__gpa-value">{item.gpa}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
