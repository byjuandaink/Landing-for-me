import { useTranslation } from '../../i18n/LanguageContext';
import { contact } from '../../utils/profileData';
import '../../styles/components/Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Juan David Rojas Tique. {t('footer.rights')}</p>
        <div className="footer__links">
          <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
}