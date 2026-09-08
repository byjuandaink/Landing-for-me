import { useTranslation } from '../i18n/LanguageContext';
import '../styles/Header.css';

export default function Header() {
  const { t, lang, toggleLang } = useTranslation();

  return (
    <header className="header">
      <a className="header__brand" href="#top">JR.</a>
      <nav className="header__nav">
        <a href="#about">{t('nav.about')}</a>
        <a href="#skills">{t('nav.skills')}</a>
        <a href="#projects">{t('nav.projects')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
      <button className="header__lang" onClick={toggleLang} aria-label="Cambiar idioma / Switch language">
        {lang === 'es' ? 'EN' : 'ES'}
      </button>
    </header>
  );
}
