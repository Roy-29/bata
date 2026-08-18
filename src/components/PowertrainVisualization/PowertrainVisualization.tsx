import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './PowertrainVisualization.css';

const steps = [
  { id: 'power', label: 'POWER', desc: 'Combustion / Motor' },
  { id: 'transmission', label: 'TRANSMISSION', desc: 'Gear Reduction' },
  { id: 'shaft', label: 'SHAFT', desc: 'Torque Transfer' },
  { id: 'drive', label: 'DRIVE', desc: 'Differential' },
  { id: 'wheels', label: 'WHEELS', desc: 'Traction' },
];

export default function PowertrainVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate active step based on scroll
  useEffect(() => {
    return smoothProgress.onChange((v) => {
      // Map 0-1 to 0-4 steps
      const step = Math.min(Math.floor(v * steps.length), steps.length - 1);
      setActiveStep(Math.max(0, step));
    });
  }, [smoothProgress]);

  // Transform values for the SVG flow line
  const flowPathLength = useTransform(smoothProgress, [0, 1], [0, 1000]);

  return (
    <section className="powertrain section" ref={containerRef} aria-label="Powertrain Visualization">
      <div className="powertrain__inner container">
        <div className="powertrain__header">
          <span className="tech-label tech-label--lime">INTERACTIVE SYSTEM</span>
          <h3 className="powertrain__title">POWERTRAIN DYNAMICS</h3>
        </div>

        <div className="powertrain__grid">
          {/* Steps List */}
          <div className="powertrain__steps">
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={`powertrain__step ${i === activeStep ? 'powertrain__step--active' : ''} ${i < activeStep ? 'powertrain__step--past' : ''}`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className="powertrain__step-marker">
                  <div className="powertrain__step-dot" />
                  {i < steps.length - 1 && <div className="powertrain__step-line" />}
                </div>
                <div className="powertrain__step-content">
                  <h4 className="powertrain__step-label">{step.label}</h4>
                  <p className="powertrain__step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive SVG Visualization */}
          <div className="powertrain__visual">
            <svg viewBox="0 0 800 600" className="powertrain__svg">
              <defs>
                <linearGradient id="power-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--lime)" />
                  <stop offset="100%" stopColor="var(--mechanical-orange)" />
                </linearGradient>
              </defs>

              {/* Base diagram layers (faded) */}
              <g className="powertrain__base" opacity="0.3">
                {/* Engine block */}
                <path d="M 100 200 L 250 200 L 280 250 L 250 300 L 100 300 Z" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />
                {/* Transmission */}
                <rect x="290" y="220" width="120" height="60" rx="5" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />
                {/* Shaft */}
                <line x1="410" y1="250" x2="600" y2="250" stroke="var(--engineering-teal)" strokeWidth="4" />
                {/* Diff */}
                <circle cx="630" cy="250" r="30" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />
                {/* Axles */}
                <line x1="630" y1="150" x2="630" y2="350" stroke="var(--engineering-teal)" strokeWidth="4" />
                {/* Wheels */}
                <rect x="610" y="100" width="40" height="80" rx="10" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />
                <rect x="610" y="320" width="40" height="80" rx="10" stroke="var(--engineering-teal)" strokeWidth="2" fill="none" />
              </g>

              {/* Active Layers based on activeStep */}
              <g className={`powertrain__layer ${activeStep >= 0 ? 'active' : ''}`}>
                <path d="M 100 200 L 250 200 L 280 250 L 250 300 L 100 300 Z" fill="rgba(156,225,145,0.1)" stroke="var(--lime)" strokeWidth="2" />
                <circle cx="190" cy="250" r="20" fill="var(--lime)" className="powertrain__spin" />
              </g>

              <g className={`powertrain__layer ${activeStep >= 1 ? 'active' : ''}`}>
                <rect x="290" y="220" width="120" height="60" rx="5" fill="rgba(156,225,145,0.1)" stroke="var(--lime)" strokeWidth="2" />
                {/* Transmission gears */}
                <circle cx="330" cy="250" r="15" stroke="var(--lime)" strokeWidth="2" fill="none" className="powertrain__spin" />
                <circle cx="370" cy="250" r="20" stroke="var(--lime)" strokeWidth="2" fill="none" className="powertrain__spin-reverse" />
              </g>

              <g className={`powertrain__layer ${activeStep >= 2 ? 'active' : ''}`}>
                <line x1="410" y1="250" x2="600" y2="250" stroke="var(--lime)" strokeWidth="4" />
                <path d="M 450 230 C 500 230, 500 270, 550 270" stroke="var(--lime)" strokeWidth="1" strokeDasharray="5 5" fill="none" className="powertrain__flow" />
              </g>

              <g className={`powertrain__layer ${activeStep >= 3 ? 'active' : ''}`}>
                <circle cx="630" cy="250" r="30" fill="rgba(249,130,30,0.1)" stroke="var(--mechanical-orange)" strokeWidth="2" />
                <path d="M 615 250 L 645 250 M 630 235 L 630 265" stroke="var(--mechanical-orange)" strokeWidth="2" className="powertrain__spin" />
              </g>

              <g className={`powertrain__layer ${activeStep >= 4 ? 'active' : ''}`}>
                <line x1="630" y1="150" x2="630" y2="350" stroke="var(--mechanical-orange)" strokeWidth="4" />
                <rect x="610" y="100" width="40" height="80" rx="10" fill="rgba(249,130,30,0.2)" stroke="var(--mechanical-orange)" strokeWidth="2" />
                <rect x="610" y="320" width="40" height="80" rx="10" fill="rgba(249,130,30,0.2)" stroke="var(--mechanical-orange)" strokeWidth="2" />
                {/* Motion lines */}
                <line x1="660" y1="120" x2="680" y2="120" stroke="var(--mechanical-orange)" strokeWidth="2" className="powertrain__flow" />
                <line x1="660" y1="160" x2="680" y2="160" stroke="var(--mechanical-orange)" strokeWidth="2" className="powertrain__flow" />
                <line x1="660" y1="340" x2="680" y2="340" stroke="var(--mechanical-orange)" strokeWidth="2" className="powertrain__flow" />
                <line x1="660" y1="380" x2="680" y2="380" stroke="var(--mechanical-orange)" strokeWidth="2" className="powertrain__flow" />
              </g>

              {/* Dynamic Path drawing across the whole system */}
              <motion.path 
                d="M 190 250 L 290 250 L 410 250 L 630 250 L 630 140"
                stroke="url(#power-grad)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 1000,
                  strokeDashoffset: useTransform(flowPathLength, v => 1000 - v)
                }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
