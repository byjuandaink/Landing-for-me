import { useTranslation } from '../i18n/LanguageContext';
import { skillGroups } from '../utils/skillsData';
import '../styles/Skills.css';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="section skills">
      <p className="eyebrow">{t('skills.eyebrow')}</p>
      <h2 className="skills__title">{t('skills.title')}</h2>
      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.key} className="skills__group">
            <h3 className="skills__group-title">{t(`skills.${group.key}`)}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
