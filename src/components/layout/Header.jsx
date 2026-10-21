import { useEffect, useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';

const links = ['about', 'skills', 'experience', 'projects', 'contact'];

export default function Header() {
  const { t, lang, setLang } = useTranslation();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);    

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)  ;
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const btn =
    'font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors hover:text-crimson';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-6 md:h-20 md:px-12">
          <button type="button" className={`${btn} justify-self-start`} onClick={() => setOpen(true)} aria-expanded={open}>
            {t('nav.menu')}
          </button>

          <a href="#top" className="justify-self-center font-display text-xl text-white md:text-2xl">
            introducing<span className="text-crimson">.me</span>
          </a>

          <button type="button" className={`${btn} justify-self-end`} onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label="Change language">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] flex flex-col bg-ink transition-all duration-500 ease-soft ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center px-6 md:h-20 md:px-12">
          <button type="button" className={btn} onClick={() => setOpen(false)}>
            ✕ {t('nav.close')}
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-6">
          {links.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-white transition-colors hover:text-crimson xs:text-5xl md:text-7xl"
            >
              {t(`nav.${id}`)}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}