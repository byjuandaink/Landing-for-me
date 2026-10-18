import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import es from './es.json';
import en from './en.json';

const dictionaries = { es, en };
const LanguageContext = createContext(null);

// Busca una clave tipo "hero.stats.years" dentro del JSON
const resolve = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'es');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key) => resolve(dictionaries[lang], key) ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation debe usarse dentro de <LanguageProvider>');
  return ctx;
}