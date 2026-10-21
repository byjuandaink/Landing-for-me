import { useState } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { skills, concepts, skillCategories } from '../../utils/skillsData';
import Panel from '../ui/Panel';
import SkillCard from '../ui/SkillCard';

export default function Skills() {
  const { t } = useTranslation();
  const [active, setActive] = useState('all');

  const byCat = (list) =>
    active === 'all' ? list : list.filter((s) => s.category === active);

  const shownSkills = byCat(skills);
  const shownConcepts = byCat(concepts);

  return (
    <Panel id="skills">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-crimson">
        {t('skills.eyebrow')}
      </p>
      <h2 className="font-display text-4xl text-white md:text-6xl">{t('skills.title')}</h2>
      <p className="mt-4 max-w-xl text-white/70 md:text-lg">{t('skills.subtitle')}</p>

      <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
        {['all', ...skillCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border-b pb-1 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
              active === cat
                ? 'border-crimson text-white'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            {t(`skills.${cat}`)}
          </button>
        ))}
      </div>

      <ul
        key={active}
        className="mt-10 grid grid-cols-2 gap-4 xs:grid-cols-3 md:grid-cols-4 xl:grid-cols-6"
      >
        {shownSkills.map((s, i) => (
          <SkillCard key={s.name} {...s} delay={i * 50} />
        ))}
      </ul>

      {shownConcepts.length > 0 && (
        <ul className="mt-10 flex flex-wrap gap-2">
          {shownConcepts.map((c) => (
            <li
              key={c.name}
              className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/70 transition duration-300 hover:border-crimson hover:bg-crimson/10 hover:text-white"
            >
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </Panel>
  );
}