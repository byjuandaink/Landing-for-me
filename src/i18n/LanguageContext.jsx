import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import es from './es.json';
import en from './en.json';

const dictionaries = { es, en };

const LanguageContext = createContext(null);

function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const t = useCallback(
    (key) => {
      const value = resolvePath(dictionaries[lang], key);
      if (value === undefined) {
        return key;
      }
      return value;
    },
    [lang]
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  }, []);

  const value = useMemo(() => ({ lang, t, toggleLang, setLang }), [lang, t, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation debe usarse dentro de un LanguageProvider');
  }
  return context;
}
