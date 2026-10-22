import { useTranslation } from '../../i18n/LanguageContext';
import { projects } from '../../utils/projectsData';
import { getImage } from '../../utils/imagesData';
import Panel from '../ui/Panel';
import Carousel from '../ui/Carousel';

export default function Projects() {
  const { t } = useTranslation();

  const slides = projects.map((p) => ({
    id: p.key,
    image: getImage(p.image),
    title: t(`projects.${p.key}.name`),
    description: t(`projects.${p.key}.description`),
    tags: p.tags,
    url: p.url,
  }));

  return (
    <Panel id="projects">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-crimson">
        {t('projects.eyebrow')}
      </p>
      <h2 className="mb-12 font-display text-4xl text-white md:text-6xl">
        {t('projects.title')}
      </h2>

      <Carousel
        slides={slides}
        labels={{
          prev: t('projects.prev'),
          next: t('projects.next'),
          goTo: t('projects.goTo'),
          cta: t('projects.viewProject'),
        }}
      />
    </Panel>
  );
}