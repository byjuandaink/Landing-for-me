import { useTranslation } from '../i18n/LanguageContext';
import '../styles/About.css';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section about">
      <p className="eyebrow">{t('about.eyebrow')}</p>
      <h2 className="about__title">{t('about.title')}</h2>
      <p className="about__bio">{t('about.bio')}</p>
      <p className="about__status">{t('about.status')}</p>
    </section>
  );
}
