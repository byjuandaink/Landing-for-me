import { useTranslation } from '@/i18n/LanguageContext';
import { heroStats } from '@/utils/profileData';
import profilePhoto from '@/assets/profile.jpg';
import '@/styles/components/Hero.css';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{t('hero.greeting')}</p>
          <h1 className="hero__name">{t('hero.name')}</h1>
          <p className="hero__role gradient-text">
            {t('hero.role')} {t('hero.stack')}
          </p>
          <p className="hero__tagline">{t('hero.tagline')}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#projects">{t('hero.ctaProjects')} →</a>
            <a className="btn btn--ghost" href="#contact">{t('hero.ctaContact')}</a>
          </div>
        </div>

        <div className="hero__photo">
          <img src={profilePhoto} alt={t('hero.name')} />
        </div>
      </div>

      <div className="container">
        <ul className="hero__stats">
          {heroStats.map((s) => (
            <li key={s.key} className="card hero__stat">
              <strong>{s.value}</strong>
              <span>{t(`hero.stats.${s.key}`)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}