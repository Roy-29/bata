import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { toolchain } from '../../data/toolchain';
import './Toolchain.css';

export default function Toolchain() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="toolchain section" ref={ref} aria-label="Engineering Toolchain">
      <div className="toolchain__inner container">
        <motion.div
          className="toolchain__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="toolchain__title">THE ENGINEERING TOOLCHAIN</h2>
          <p className="toolchain__desc">A systematic approach from concept to optimization.</p>
        </motion.div>

        <div className="toolchain__flow">
          {toolchain.map((stage, index) => (
            <motion.div 
              key={stage.id}
              className="toolchain__stage"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="toolchain__node">
                <div className="toolchain__node-inner" />
              </div>
              
              <div className="toolchain__content">
                <h3 className="toolchain__stage-label tech-label tech-label--lime">{stage.label}</h3>
                <p className="toolchain__stage-desc">{stage.description}</p>
                
                {stage.tools.length > 0 && (
                  <div className="toolchain__tools">
                    {stage.tools.map(tool => (
                      <span key={tool} className="toolchain__tool">{tool}</span>
                    ))}
                  </div>
                )}
              </div>
              
              {index < toolchain.length - 1 && (
                <div className="toolchain__connector" aria-hidden="true">
                  <motion.div 
                    className="toolchain__connector-line"
                    initial={{ scaleY: 0 }}
                    animate={isVisible ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  />
                  <motion.div 
                    className="toolchain__connector-arrow"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.2, delay: 0.5 + (index * 0.1) }}
                  >
                    ↓
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
