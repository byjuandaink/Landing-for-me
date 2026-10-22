import { useTranslation } from '@/i18n/LanguageContext';
import { images } from '@/utils/imagesData';
import Panel from '@/components/ui/Panel';
  
export default function Hero() {
  const { t } = useTranslation();

  return (
    <Panel id="top" image={images.hero}>
      <div className="flex flex-col items-center text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-crimson xs:text-sm">
          {t('hero.greeting')}
        </p>

        <h1 className="font-display text-5xl font-medium leading-none tracking-tight text-white xs:text-6xl md:text-8xl xl:text-9xl">
          {t('hero.name')}
        </h1>

        <p className="mt-6 font-display text-xl text-white/90 md:text-3xl">
          {t('hero.role')} · {t('hero.stack')}
        </p>

        <p className="mt-6 max-w-xl text-base text-white/70 md:text-lg">
          {t('hero.tagline')}
        </p>

        <a
          href="#projects"
          className="mt-10 border-b border-crimson pb-1 font-mono text-xs uppercase tracking-[0.25em] text-white transition-colors hover:text-crimson"
        >
          {t('hero.ctaProjects')} →
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-10 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/60">
          {t('hero.scroll')}
        </span>
        <span className="h-12 w-px animate-pulse bg-gradient-to-b from-crimson to-transparent" />
      </div>
    </Panel>
  );
}