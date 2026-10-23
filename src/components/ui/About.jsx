import { useTranslation } from '../../i18n/LanguageContext';
import profilePhoto from '../../assets/profile.jpg';
import Panel from '../ui/Panel';

export default function About() {
  const { t } = useTranslation();

  return (
    <Panel id="about">
      <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
        <div className="group relative mx-auto w-full max-w-xs md:max-w-sm">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-crimson transition-transform duration-500 ease-soft group-hover:translate-x-2 group-hover:translate-y-2"
          />
          <img
            src={profilePhoto}
            alt={t('hero.name')}
            className="relative aspect-[4/5] w-full rounded-lg "
          />
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-crimson">
            {t('about.eyebrow')}
          </p>
          <h2 className="font-display text-4xl text-white md:text-6xl">
            {t('about.title')}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            {t('about.bio')}
          </p>

          <dl className="mt-10 grid gap-8 border-t border-white/10 pt-8 xs:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-crimson">
                {t('about.locationTitle')}
              </dt>
              <dd className="mt-2 text-white">{t('about.location')}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-crimson">
                {t('about.languagesTitle')}
              </dt>
              <dd className="mt-2 text-white">{t('about.langEs')}</dd>
              <dd className="text-white">{t('about.langEn')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Panel>
  );
}