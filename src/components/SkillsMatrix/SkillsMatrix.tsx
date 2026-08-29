import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { skills, skillFilters, categoryLabels, type SkillFilter, type Skill } from '../../data/skills';
import './SkillsMatrix.css';

export default function SkillsMatrix() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [activeFilter, setActiveFilter] = useState<SkillFilter>('all');

  const [isExpanded, setIsExpanded] = useState(false);
  const INITIAL_LIMIT = 6;

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => skill.filters.includes(activeFilter));
  }, [activeFilter]);

  const groupedSkills = useMemo(() => {
    return {
      software: filteredSkills.filter(s => s.category === 'software'),
      engineering: filteredSkills.filter(s => s.category === 'engineering'),
      soft: filteredSkills.filter(s => s.category === 'soft'),
    };
  }, [filteredSkills]);

  return (
    <section className="skills section" id="skills" ref={ref} aria-label="Skills Matrix">
      <div className="skills__inner container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="tech-label tech-label--lime">CAPABILITIES / TOOLSET</span>
          <h2 className="skills__title">SKILLS MATRIX</h2>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="skills__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {skillFilters.map(filter => (
            <button
              key={filter.key}
              className={`skills__filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter.key);
                setIsExpanded(true); // Auto-expand when filtering to see results
              }}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Matrix Grid */}
        <div className="skills__matrix">
          {(['software', 'engineering', 'soft'] as const).map((category, catIndex) => {
            const categorySkills = groupedSkills[category];
            if (categorySkills.length === 0) return null;

            const visibleSkills = isExpanded ? categorySkills : categorySkills.slice(0, INITIAL_LIMIT);

            return (
              <motion.div 
                key={category}
                className="skills__category-col"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (catIndex * 0.1) }}
              >
                <h3 className="skills__category-title tech-label">{categoryLabels[category]}</h3>
                <div className="skills__list">
                  <AnimatePresence mode="popLayout">
                    {visibleSkills.map((skill: Skill, index: number) => (
                      <motion.div
                        key={skill.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, delay: index * 0.02 }}
                        className={`skills__chip skills__chip--${category}`}
                      >
                        <span className="skills__chip-icon">{skill.icon}</span>
                        {skill.name}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Expand Button */}
        <motion.div 
          className="skills__expand-container"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button 
            className="skills__expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '[ COLLAPSE MATRIX ]' : '[ EXPAND MATRIX ]'}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
