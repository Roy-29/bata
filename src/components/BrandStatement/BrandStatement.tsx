import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks';
import { profile } from '../../data/profile';
import './BrandStatement.css';

const generateTarget = () => Math.floor(Math.random() * 60) + 20;

export default function BrandStatement() {
  const { ref, isVisible } = useScrollReveal();
  
  const [targets] = useState({ tq: generateTarget(), pr: generateTarget(), rpm: generateTarget() });
  const [values, setValues] = useState({ tq: 0, pr: 0, rpm: 0 });
  const [status, setStatus] = useState<'calibrating' | 'fetching' | 'unlocked'>('calibrating');
  const [fact, setFact] = useState('');
  
  const tolerance = 5;

  useEffect(() => {
    if (status !== 'calibrating') return;
    
    const isTqAligned = Math.abs(values.tq - targets.tq) <= tolerance;
    const isPrAligned = Math.abs(values.pr - targets.pr) <= tolerance;
    const isRpmAligned = Math.abs(values.rpm - targets.rpm) <= tolerance;
    
    if (isTqAligned && isPrAligned && isRpmAligned) {
      setStatus('fetching');
      fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
        .then(res => res.json())
        .then(data => {
          setFact(data.text);
          setStatus('unlocked');
        })
        .catch(() => {
          setFact("Mechanical systems are prone to entropy. (API Error)");
          setStatus('unlocked');
        });
    }
  }, [values, targets, status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: parseInt(value, 10) }));
  };

  const getAccuracyColor = (val: number, target: number) => {
    const diff = Math.abs(val - target);
    if (diff <= tolerance) return 'var(--lime)';
    if (diff <= 20) return 'var(--mechanical-orange)';
    return 'var(--muted)';
  };

  const getOverallAccuracy = () => {
    // Initial values are 0, so initial distance is the target itself.
    // Calculate accuracy based on how much of that initial distance has been covered.
    const accTq = Math.max(0, 1 - (Math.abs(values.tq - targets.tq) / targets.tq));
    const accPr = Math.max(0, 1 - (Math.abs(values.pr - targets.pr) / targets.pr));
    const accRpm = Math.max(0, 1 - (Math.abs(values.rpm - targets.rpm) / targets.rpm));
    const avg = (accTq + accPr + accRpm) / 3;
    return (avg * 100).toFixed(1);
  };

  return (
    <section className="brand section" ref={ref}>
      <div className="brand__inner container">
        <motion.div
          className="brand__content"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="brand__text-container">
            <span className="tech-label tech-label--lime brand__label">ABOUT / PHILOSOPHY</span>
            <h2 className="brand__title">{profile.brandStatement.title}</h2>
            <div className="brand__divider" />
            <p className="brand__text">{profile.brandStatement.content}</p>
          </div>
        </motion.div>

        <motion.div 
          className="brand__visual"
          initial={{ opacity: 0, x: 40 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={`brand__visual-card glass ${status === 'unlocked' ? 'brand__visual-card--unlocked' : ''}`}>
            <div className="brand__visual-header">
              <span className={`tech-label ${status === 'unlocked' ? 'tech-label--lime' : 'tech-label--orange'}`}>
                {status === 'unlocked' ? 'SYS.CORE // CALIBRATED' : 'SYS.CORE // CALIBRATING...'}
              </span>
              <div className="brand__visual-dot" style={{ backgroundColor: status === 'unlocked' ? 'var(--lime)' : 'var(--mechanical-orange)', boxShadow: `0 0 10px ${status === 'unlocked' ? 'var(--lime)' : 'var(--mechanical-orange)'}` }} />
            </div>
            
            <div className="brand__visual-body">
              <div className="brand__stat">
                <span className={`brand__stat-value ${status === 'unlocked' ? 'text-gradient' : 'text-gradient-orange'}`}>
                  {status === 'unlocked' ? '100.0%' : `${getOverallAccuracy()}%`}
                </span>
                <span className="brand__stat-label">SYSTEM SYNC</span>
              </div>
            </div>

            {status === 'unlocked' ? (
              <motion.div 
                className="brand__game-reward"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="brand__reward-text">"{fact}"</p>
                <button className="brand__reward-reset" onClick={() => {
                  setValues({ tq: 0, pr: 0, rpm: 0 });
                  setStatus('calibrating');
                }}>[ RECALIBRATE ]</button>
              </motion.div>
            ) : (
              <div className="brand__game-controls">
                <p className="brand__game-instruction">Drag the sliders to find the hidden targets. Values will turn neon green when perfectly aligned.</p>
                
                <div className="brand__slider-group">
                  <div className="brand__slider-labels">
                    <span className="tech-label">TORQUE</span>
                    <span className="tech-label" style={{ color: getAccuracyColor(values.tq, targets.tq) }}>{values.tq} N·m</span>
                  </div>
                  <input type="range" name="tq" min="0" max="100" value={values.tq} onChange={handleChange} className="brand__slider" disabled={status === 'fetching'} title="Drag to adjust Torque" />
                </div>

                <div className="brand__slider-group">
                  <div className="brand__slider-labels">
                    <span className="tech-label">PRESSURE</span>
                    <span className="tech-label" style={{ color: getAccuracyColor(values.pr, targets.pr) }}>{values.pr} kPa</span>
                  </div>
                  <input type="range" name="pr" min="0" max="100" value={values.pr} onChange={handleChange} className="brand__slider" disabled={status === 'fetching'} title="Drag to adjust Pressure" />
                </div>

                <div className="brand__slider-group">
                  <div className="brand__slider-labels">
                    <span className="tech-label">RPM</span>
                    <span className="tech-label" style={{ color: getAccuracyColor(values.rpm, targets.rpm) }}>{values.rpm}k</span>
                  </div>
                  <input type="range" name="rpm" min="0" max="100" value={values.rpm} onChange={handleChange} className="brand__slider" disabled={status === 'fetching'} title="Drag to adjust RPM" />
                </div>
              </div>
            )}
            
            <div className="brand__visual-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
