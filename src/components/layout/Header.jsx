import { useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import '../../styles/components/Header.css';

const links = ['about', 'skills', 'experience', 'projects', 'contact'];

export default function Header() {
  // Ajusta estos nombres a lo que exporte tu LanguageContext
  const { t, lang, setLang } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="header__logo">
          introducing<span>.me</span>
        </a>

        <nav className="header__nav" aria-label="Principal">
          {links.map((id) => (
            <a key={id} href={`#${id}`}>{t(`nav.${id}`)}</a>
          ))}
        </nav>

        <button
          type="button"
          className="header__lang"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          aria-label="Change language"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </header>
  );
}