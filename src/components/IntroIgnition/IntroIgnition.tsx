import { useState, useEffect } from 'react';
import { useReducedMotion } from '../../hooks';
import './IntroIgnition.css';

interface Props {
  onComplete: () => void;
}

const TERMINAL_LINES = [
  '[SYS] BOOT SEQUENCE INITIATED...',
  '[SYS] LOADING KERNEL... OK',
  '[ENG] CALIBRATING SENSORS... OK',
  '[ENG] CHECKING TELEMETRY BUS... ONLINE',
  '[SYS] MOUNTING ENGINEERING PROFILES... OK',
];

const TELEMETRY_TARGETS = [
  { label: 'POWERTRAIN', value: 'NOMINAL' },
  { label: 'RPM_LIMIT', value: '12,500' },
  { label: 'BHP_MAX', value: '640.2' },
  { label: 'THERMAL', value: 'OPTIMAL' },
  { label: 'AERO_CFD', value: 'LOCKED' }
];

export default function IntroIgnition({ onComplete }: Props) {
  const [phase, setPhase] = useState(0);
  const [terminalText, setTerminalText] = useState<string[]>([]);
  const [telemetry, setTelemetry] = useState(TELEMETRY_TARGETS.map(t => ({ ...t, current: '...' })));
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }

    // Phase 1: Terminal Boot (0 - 1500ms)
    TERMINAL_LINES.forEach((line, index) => {
      setTimeout(() => {
        setTerminalText(prev => [...prev, line]);
      }, 200 + index * 200);
    });

    // Phase 2: Title and CAD Model (1500ms)
    const phase2Timer = setTimeout(() => setPhase(2), 1500);

    // Data Scramble Effect (1500ms - 2800ms)
    let scrambleInterval: ReturnType<typeof setInterval>;
    const startScramble = setTimeout(() => {
      let ticks = 0;
      scrambleInterval = setInterval(() => {
        ticks++;
        setTelemetry(prev => prev.map((item) => {
          // Lock in values sequentially
          if (ticks > 15 && item.label === 'POWERTRAIN') return { ...item, current: item.value };
          if (ticks > 25 && item.label === 'RPM_LIMIT') return { ...item, current: item.value };
          if (ticks > 35 && item.label === 'BHP_MAX') return { ...item, current: item.value };
          if (ticks > 45) return { ...item, current: item.value };
          
          // Random characters while scrambling
          const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*';
          let randomStr = '';
          for (let i = 0; i < item.value.length; i++) {
            randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          return { ...item, current: randomStr };
        }));
        
        if (ticks > 50) clearInterval(scrambleInterval);
      }, 30);
    }, 1500);

    // Phase 3: Ignition Flash and Shake (3200ms)
    const phase3Timer = setTimeout(() => setPhase(3), 3200);

    // Phase 4: Exit Transition (4000ms)
    const phase4Timer = setTimeout(() => setPhase(4), 4000);

    // Complete (4600ms)
    const completeTimer = setTimeout(() => onComplete(), 4600);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(startScramble);
      clearInterval(scrambleInterval);
      clearTimeout(phase3Timer);
      clearTimeout(phase4Timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div className={`ignition ${phase >= 4 ? 'ignition--exit' : ''} ${phase === 3 ? 'ignition--shake' : ''}`} aria-hidden="true">
      <button className="ignition__skip" onClick={onComplete} aria-label="Skip intro">
        [ SKIP_BOOT ]
      </button>

      {/* Grid background */}
      <div className="ignition__grid" />
      <div className="ignition__vignette" />

      {/* Phase 1: Terminal */}
      <div className={`ignition__terminal ${phase >= 2 ? 'ignition__terminal--fade' : ''}`}>
        {terminalText.map((line, i) => (
          <div key={i} className="ignition__terminal-line">{line}</div>
        ))}
        {phase < 2 && <div className="ignition__terminal-cursor" />}
      </div>

      {/* Phase 2: Title and Dashboard */}
      <div className={`ignition__main ${phase >= 2 ? 'active' : ''}`}>
        
        <div className="ignition__brand">
          <h1 className={`ignition__title ${phase >= 2 ? 'glitch' : ''}`} data-text="BIPROTIB HALDAR">
            BIPROTIB HALDAR
          </h1>
          <span className="ignition__subtitle tech-label">MECHANICAL ENGINEERING // KUET</span>
        </div>

        <div className="ignition__dashboard">
          <div className="ignition__car-wireframe">
            <svg viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wireframe Silhouette */}
              <path
                d="M50 85 L70 85 L85 65 L130 55 L180 50 L240 48 L300 50 L330 55 L350 65 L370 75 L370 85 L350 85"
                stroke="var(--engineering-teal)"
                strokeWidth="1.5"
                fill="none"
                className={`ignition__svg-draw ${phase >= 2 ? 'active' : ''}`}
                style={{ animationDelay: '0.2s' }}
              />
              <path
                d="M55 60 L40 50 L60 52" 
                stroke="var(--engineering-teal)" 
                strokeWidth="1.5" 
                fill="none"
                className={`ignition__svg-draw ${phase >= 2 ? 'active' : ''}`}
                style={{ animationDelay: '0.4s' }}
              />
              <path 
                d="M355 55 L375 40 L380 42 L360 55" 
                stroke="var(--engineering-teal)" 
                strokeWidth="1.5" 
                fill="none"
                className={`ignition__svg-draw ${phase >= 2 ? 'active' : ''}`}
                style={{ animationDelay: '0.6s' }}
              />
              
              {/* Wheels */}
              <circle cx="95" cy="88" r="14" stroke="var(--engineering-teal)" strokeWidth="1.5" fill="none" className={`ignition__svg-draw ${phase >= 2 ? 'active' : ''}`} style={{ animationDelay: '0.8s' }} />
              <circle cx="95" cy="88" r="4" fill="var(--engineering-teal)" className={`ignition__fade-in ${phase >= 2 ? 'active' : ''}`} style={{ animationDelay: '1.2s' }} />
              
              <circle cx="340" cy="88" r="14" stroke="var(--engineering-teal)" strokeWidth="1.5" fill="none" className={`ignition__svg-draw ${phase >= 2 ? 'active' : ''}`} style={{ animationDelay: '0.8s' }} />
              <circle cx="340" cy="88" r="4" fill="var(--engineering-teal)" className={`ignition__fade-in ${phase >= 2 ? 'active' : ''}`} style={{ animationDelay: '1.2s' }} />
              
              {/* Tech Accents */}
              <line x1="20" y1="70" x2="380" y2="70" stroke="var(--glass-border)" strokeWidth="1" strokeDasharray="6 6" className={`ignition__fade-in ${phase >= 2 ? 'active' : ''}`} style={{ animationDelay: '1.5s' }} />
            </svg>
          </div>

          <div className="ignition__telemetry">
            {telemetry.map((item) => (
              <div key={item.label} className="ignition__telemetry-item">
                <span className="ignition__telemetry-label">{item.label}</span>
                <span className={`ignition__telemetry-value ${item.current === item.value ? 'locked' : 'scrambling'}`}>
                  {item.current}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 3: Ignition Flash */}
      <div className={`ignition__flash ${phase >= 3 ? 'active' : ''}`}>
        <div className="ignition__flash-text glitch" data-text="IGNITION">IGNITION</div>
        <div className="ignition__energy-ring" />
        <div className="ignition__screen-whiteout" />
      </div>

    </div>
  );
}
