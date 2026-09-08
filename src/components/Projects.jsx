import { useTranslation } from '../i18n/LanguageContext';
import { projects } from '../utils/projectsData';
import '../styles/Projects.css';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section projects">
      <p className="eyebrow">{t('projects.eyebrow')}</p>
      <h2 className="projects__title">{t('projects.title')}</h2>
      <div className="projects__list">
        {projects.map((project) => (
          <article key={project.key} className="project-card">
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-card__tag">{tag}</span>
              ))}
            </div>
            <h3 className="project-card__name">{t(`projects.${project.key}.name`)}</h3>
            <p className="project-card__description">{t(`projects.${project.key}.description`)}</p>
            <a className="project-card__link" href={project.url} target="_blank" rel="noopener noreferrer">
              {t('projects.viewProject')} ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
