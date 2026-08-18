import { useState, useEffect, useMemo } from 'react';
import { useStickyNav, useActiveSection } from '../../hooks';
import { profile } from '../../data/profile';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const navItems = [
  { id: 'engineering', label: 'ENGINEERING' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'motorsport', label: 'MOTORSPORT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Navigation() {
  const isScrolled = useStickyNav();
  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);
  const activeSection = useActiveSection(sectionIds);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav ${isScrolled ? 'nav--scrolled' : ''}`} role="banner">
      <nav className="nav__inner container" aria-label="Main navigation">
        <a href="#hero" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__logo-name">{profile.name.split(' ')[0].toUpperCase()}</span>
        </a>

        {/* Desktop nav */}
        <ul className="nav__links" role="list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="nav__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile menu */}
        <div className={`nav__mobile ${mobileOpen ? 'nav__mobile--open' : ''}`}>
          <ul className="nav__mobile-links" role="list">
            {navItems.map((item, i) => (
              <li key={item.id} style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms' }}>
                <button
                  className={`nav__mobile-link ${activeSection === item.id ? 'nav__mobile-link--active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="nav__mobile-link-index">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
