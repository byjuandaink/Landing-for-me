import { useTranslation } from '../../i18n/LanguageContext';
import { contact } from '../../utils/profileData';

export default function Footer() {
  const { t } = useTranslation();
  const link = 'font-mono text-xs uppercase tracking-widest transition-colors hover:text-crimson';

  return (
    <footer className="border-t border-white/10 bg-black py-8 text-sm text-white/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
        <p>© {new Date().getFullYear()} Juan David Rojas Tique. {t('footer.rights')}</p>
        <div className="flex gap-6">
          <a className={link} href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={link} href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
}