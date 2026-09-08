import { useTranslation } from '../i18n/LanguageContext';
import '../styles/Footer.css';

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:juanhonrrajmw@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-david-rojas-tique-3436311b0/' },
  { label: 'GitHub', href: 'https://github.com/byjuandaink' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__links">
        {SOCIAL_LINKS.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <p className="footer__meta">
        © {year} Juan David Rojas Tique — {t('footer.rights')} · {t('footer.builtWith')}
      </p>
    </footer>
  );
}
