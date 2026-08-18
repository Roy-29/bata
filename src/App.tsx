import { useState, useEffect } from 'react';
import IntroIgnition from './components/IntroIgnition/IntroIgnition';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import BrandStatement from './components/BrandStatement/BrandStatement';
import EngineeringDomains from './components/EngineeringDomains/EngineeringDomains';
import FeaturedProject from './components/FeaturedProject/FeaturedProject';
import MotorsportSection from './components/MotorsportSection/MotorsportSection';
import PowertrainVisualization from './components/PowertrainVisualization/PowertrainVisualization';
import SkillsMatrix from './components/SkillsMatrix/SkillsMatrix';
import Toolchain from './components/Toolchain/Toolchain';
import EducationTimeline from './components/EducationTimeline/EducationTimeline';
import Certifications from './components/Certifications/Certifications';
import ResearchSection from './components/ResearchSection/ResearchSection';
import PersonalSection from './components/PersonalSection/PersonalSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import DynamicBackground from './components/DynamicBackground/DynamicBackground';
import { useReducedMotion } from './hooks';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setIntroComplete(true);
    }
  }, [prefersReduced]);

  return (
    <>
      <DynamicBackground />
      <CustomCursor />
      
      {!introComplete && (
        <IntroIgnition onComplete={() => setIntroComplete(true)} />
      )}

      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navigation />
        <main>
          <Hero />
          <BrandStatement />
          <EngineeringDomains />
          <FeaturedProject />
          <MotorsportSection />
          <PowertrainVisualization />
          <SkillsMatrix />
          <Toolchain />
          <EducationTimeline />
          <Certifications />
          <ResearchSection />
          <PersonalSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
