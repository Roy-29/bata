import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { toolchain } from '../../data/toolchain';
import { 
  Lightbulb, 
  Box, 
  Activity, 
  Wind, 
  Calculator, 
  Wrench, 
  TestTube, 
  Database, 
  RefreshCw 
} from 'lucide-react';
import './Toolchain.css';

const getStageIcon = (id: string) => {
  switch (id) {
    case 'idea': return <Lightbulb size={18} />;
    case 'cad': return <Box size={18} />;
    case 'analysis': return <Activity size={18} />;
    case 'simulation': return <Wind size={18} />;
    case 'calculation': return <Calculator size={18} />;
    case 'prototype': return <Wrench size={18} />;
    case 'test': return <TestTube size={18} />;
    case 'data': return <Database size={18} />;
    case 'iterate': return <RefreshCw size={18} />;
    default: return <Box size={18} />;
  }
};

export default function Toolchain() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="toolchain section" ref={ref} aria-label="Engineering Toolchain">
      {/* Background CAD grid */}
      <div className="toolchain__grid" aria-hidden="true" />
      
      <div className="toolchain__inner container">
        <motion.div
          className="toolchain__header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="toolchain__title">THE ENGINEERING TOOLCHAIN</h2>
          <div className="toolchain__title-decorator">
            <span className="toolchain__title-line" />
            <span className="toolchain__title-dot" />
            <span className="toolchain__title-line" />
          </div>
          <p className="toolchain__desc">A systematic approach from concept to optimization.</p>
        </motion.div>

        <div className="toolchain__flow">
          {toolchain.map((stage, index) => (
            <motion.div 
              key={stage.id}
              className="toolchain__stage"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="toolchain__node-wrapper">
                <div className="toolchain__node">
                  <div className="toolchain__node-icon">
                    {getStageIcon(stage.id)}
                  </div>
                  {/* Decorative rotating bracket */}
                  <svg className="toolchain__node-bracket" viewBox="0 0 100 100">
                    <path d="M 20 5 L 5 20 L 5 80 L 20 95" stroke="currentColor" fill="none" strokeWidth="2" />
                    <path d="M 80 5 L 95 20 L 95 80 L 80 95" stroke="currentColor" fill="none" strokeWidth="2" />
                  </svg>
                </div>
                
                {index < toolchain.length - 1 && (
                  <div className="toolchain__connector" aria-hidden="true">
                    <motion.div 
                      className="toolchain__connector-line"
                      initial={{ scaleY: 0 }}
                      animate={isVisible ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                    />
                    <div className="toolchain__connector-dots">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="toolchain__content">
                <div className="toolchain__stage-header">
                  <span className="toolchain__stage-num tech-label">0{index + 1}</span>
                  <h3 className="toolchain__stage-label tech-label tech-label--lime">{stage.label}</h3>
                </div>
                <p className="toolchain__stage-desc">{stage.description}</p>
                
                {stage.tools.length > 0 && (
                  <div className="toolchain__tools">
                    {stage.tools.map(tool => (
                      <span key={tool} className="toolchain__tool">
                        <span className="toolchain__tool-bracket">[</span>
                        {tool}
                        <span className="toolchain__tool-bracket">]</span>
                      </span>
                    ))}
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
