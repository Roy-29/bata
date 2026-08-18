import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { domains } from '../../data/domains';
import { Cog, BarChart3, Flag, Code2, Wrench } from 'lucide-react';
import './EngineeringDomains.css';

const iconMap: Record<string, React.ReactNode> = {
  gear: <Cog size={28} />,
  simulation: <BarChart3 size={28} />,
  motorsport: <Flag size={28} />,
  code: <Code2 size={28} />,
  manufacturing: <Wrench size={28} />,
};

export default function EngineeringDomains() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="domains section" id="engineering" ref={ref} aria-label="Engineering Domains">
      <div className="domains__inner container">
        <motion.div
          className="domains__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="tech-label tech-label--lime">CORE / DISCIPLINES</span>
          <h2 className="domains__title">ENGINEERING DOMAINS</h2>
        </motion.div>

        <div className="domains__grid">
          {domains.map((domain, i) => (
            <motion.article
              key={domain.id}
              className={`domains__card domains__card--${domain.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              data-cursor-hover
            >
              <div className="domains__card-top">
                <div className="domains__icon">{iconMap[domain.icon]}</div>
                <span className="domains__subtitle tech-label">{domain.subtitle}</span>
              </div>
              <h3 className="domains__card-title">{domain.title}</h3>
              <p className="domains__card-desc">{domain.description}</p>
              <div className="domains__tools">
                {domain.tools.map((tool) => (
                  <span key={tool} className="domains__tool">{tool}</span>
                ))}
              </div>
              <div className="domains__card-line" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
