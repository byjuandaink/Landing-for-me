import { useTranslation } from '../i18n/LanguageContext';
import profilePhoto from '../assets/profile.jpg';
import '../styles/Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <p className="eyebrow">{t('hero.greeting')}</p>
        <h1 className="hero__role">{t('hero.name')}</h1>
        <p className="hero__role">{t('hero.role')}</p>
        <p className="hero__tagline">{t('hero.tagline')}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">{t('hero.ctaProjects')}</a>
          <a className="btn btn--ghost" href="#contact">{t('hero.ctaContact')}</a>
        </div>
      </div>
      <div className="hero__photo">
        <img src={profilePhoto} alt={t('hero.name')} />
      </div>
    </section>
  );
}
