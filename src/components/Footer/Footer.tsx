import { socialLinks } from '../../data/social';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Using 2026 based on CV dates if current year is earlier
  const displayYear = currentYear > 2026 ? currentYear : 2026;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__left">
          <span className="footer__name">BIPROTIB HALDAR</span>
          <span className="footer__tagline tech-label">MECHANICAL ENGINEERING × DESIGN × MOTION</span>
        </div>
        
        <div className="footer__center">
          <span className="footer__credit tech-label">
            DESIGNED &amp; BUILT BY <span className="footer__creator">SWAPNIL ROY</span>
          </span>
        </div>
        
        <div className="footer__right">
          <span className="footer__location">KUET • BANGLADESH</span>
          <span className="footer__copyright">© {displayYear} Biprotib Haldar</span>
          
          <div className="footer__socials">
            {socialLinks.filter(l => ['linkedin', 'x', 'facebook', 'instagram'].includes(l.id)).map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label={link.label}>
                <link.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
