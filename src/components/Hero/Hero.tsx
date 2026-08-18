import { motion, type Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { profile } from '../../data/profile';
import './Hero.css';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Engineering background SVG with Parallax */}
      <motion.div 
        className="hero__bg" 
        aria-hidden="true"
        style={{ y: bgY, opacity }}
      >
        <svg className="hero__diagram" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Grid */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 40} x2="1200" y2={i * 40} stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="800" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
          ))}
          
          {/* Rotating Gear assembly top-right */}
          <g className="hero__anim-rotate-slow" style={{ transformOrigin: '950px 180px' }}>
            <circle cx="950" cy="180" r="60" stroke="rgba(2,60,72,0.3)" strokeWidth="1" fill="none" strokeDasharray="8 4" />
            <circle cx="950" cy="180" r="45" stroke="rgba(2,60,72,0.2)" strokeWidth="0.5" fill="none" />
            <path d="M 950 110 L 950 250 M 880 180 L 1020 180" stroke="rgba(2,60,72,0.15)" strokeWidth="0.5" />
          </g>

          {/* Dimension lines with pulse */}
          <g className="hero__anim-pulse">
            <line x1="100" y1="600" x2="400" y2="600" stroke="rgba(5,114,83,0.15)" strokeWidth="0.5" />
            <line x1="100" y1="595" x2="100" y2="605" stroke="rgba(5,114,83,0.15)" strokeWidth="0.5" />
            <line x1="400" y1="595" x2="400" y2="605" stroke="rgba(5,114,83,0.15)" strokeWidth="0.5" />
            <text x="250" y="595" fill="rgba(5,114,83,0.3)" fontSize="10" fontFamily="var(--font-mono)" textAnchor="middle">300mm</text>
          </g>

          {/* Coordinate system */}
          <line x1="80" y1="700" x2="140" y2="700" stroke="rgba(156,225,145,0.1)" strokeWidth="0.5" />
          <line x1="80" y1="700" x2="80" y2="640" stroke="rgba(156,225,145,0.1)" strokeWidth="0.5" />
          <text x="145" y="703" fill="rgba(156,225,145,0.2)" fontSize="8" fontFamily="var(--font-mono)">X</text>
          <text x="75" y="636" fill="rgba(156,225,145,0.2)" fontSize="8" fontFamily="var(--font-mono)">Y</text>
          
          {/* Shaft diagram right */}
          <g className="hero__anim-float">
            <line x1="1050" y1="400" x2="1050" y2="600" stroke="rgba(2,60,72,0.2)" strokeWidth="1.5" />
            <rect x="1035" y="450" width="30" height="10" rx="1" stroke="rgba(2,60,72,0.15)" strokeWidth="0.5" fill="none" />
            <rect x="1035" y="530" width="30" height="10" rx="1" stroke="rgba(2,60,72,0.15)" strokeWidth="0.5" fill="none" />
          </g>
          
          {/* Torque arrow */}
          <path className="hero__anim-draw" d="M800 300 A 40 40 0 0 1 840 340" stroke="rgba(249,130,30,0.2)" strokeWidth="1" fill="none" />
        </svg>
        {/* Radial gradients */}
        <div className="hero__gradient hero__gradient--teal" />
        <div className="hero__gradient hero__gradient--emerald" />
      </motion.div>

      <motion.div
        className="hero__content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero__content-left">
          {/* Top metadata */}
          <motion.div className="hero__meta" variants={itemVariants}>
            <span className="tech-label">MECHANICAL ENGINEERING</span>
            <span className="hero__meta-divider">/</span>
            <span className="tech-label">{profile.universityShort}</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 className="hero__name" variants={itemVariants}>
            <span className="hero__name-first">BIPROTIB</span>
            <span className="hero__name-last">HALDAR</span>
          </motion.h1>

          {/* Title */}
          <motion.p className="hero__title" variants={itemVariants}>
            {profile.title}
          </motion.p>

          {/* Description */}
          <motion.p className="hero__desc" variants={itemVariants}>
            {profile.tagline}
          </motion.p>

          {/* Alternate tagline */}
          <motion.p className="hero__alt-tag tech-label tech-label--lime" variants={itemVariants}>
            {profile.altTagline}
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={itemVariants}>
            <a href="#projects" className="hero__cta hero__cta--primary">
              <span>EXPLORE PROJECTS</span>
              <ArrowDown size={16} />
            </a>
            <a href={profile.cvUrl} className="hero__cta hero__cta--outline" target="_blank" rel="noopener noreferrer">
              <Download size={16} />
              <span>DOWNLOAD CV</span>
            </a>
            <a href="https://linkedin.com/in/biprotib-haldar" className="hero__cta hero__cta--outline" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedinIn size={18} />
            </a>
          </motion.div>
        </div>

        <div className="hero__content-right">
          <motion.div className="hero__image-container" variants={itemVariants}>
            <div className="hero__image-wrapper">
              <img src={profile.profileImageUrl} alt={profile.name} className="hero__image" />
              <div className="hero__image-overlay"></div>
              <div className="hero__image-frame">
                <span className="frame-corner top-left"></span>
                <span className="frame-corner top-right"></span>
                <span className="frame-corner bottom-left"></span>
                <span className="frame-corner bottom-right"></span>
              </div>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div className="hero__signature-wrapper" variants={itemVariants}>
            <img src="/sign.jpeg" alt="Biprotib Haldar Signature" className="hero__signature" />
          </motion.div>
        </div>

        {/* Status indicator */}
        {profile.availableForOpportunities && (
          <motion.div className="hero__status" variants={itemVariants}>
            <span className="hero__status-dot" />
            <span className="hero__status-text tech-label">{profile.statusText}</span>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          variants={itemVariants}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
