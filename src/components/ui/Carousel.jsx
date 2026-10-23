import { useEffect, useState } from 'react';

export default function Carousel({ slides, labels, interval = 10000 }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = (i) => setIndex((i + count) % count);

  useEffect(() => {
    if (count < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearTimeout(id);
  }, [index, count, interval]);

  return (
    <div>
      <div className="grid items-center gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-black">
          {slides.map((s, i) => (
            <div
              key={s.id}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-soft ${i === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {s.image ? (
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-contain"
                />
              ) : (
                <span className="absolute inset-0 grid place-items-center font-display text-8xl text-white/10">
                  {String(i + 1).padStart(2, '0')}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="grid">
          {slides.map((s, i) => {
            const active = i === index;
            return (
              <div
                key={s.id}
                aria-hidden={!active}
                className={`col-start-1 row-start-1 transition-all duration-700 ease-soft ${active
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0'
                  }`}
              >
                <span className="font-mono text-xs tracking-[0.3em] text-crimson">
                  {String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-3xl text-white md:text-5xl">{s.title}</h3>
                <p className="mt-4 text-white/70 md:text-lg">{s.description}</p>

                {s.tags && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded border border-white/15 px-2.5 py-1 font-mono text-[11px] text-white/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {s.url && (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={active ? 0 : -1}
                    className="mt-8 inline-block border-b border-crimson pb-1 font-mono text-xs uppercase tracking-[0.25em] text-white transition-colors hover:text-crimson"
                  >
                    {labels.cta} →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => go(i)}
              aria-label={`${labels.goTo} ${i + 1}`}
              className="py-3"
            >
              <span className="relative block h-0.5 w-8 overflow-hidden bg-white/20 md:w-14">
                {i === index && (
                  <span
                    key={index}
                    className="absolute inset-0 origin-left animate-progress bg-crimson motion-reduce:animate-none"
                    style={{ animationDuration: `${interval}ms` }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={labels.prev}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-crimson hover:bg-crimson"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={labels.next}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition duration-300 hover:border-crimson hover:bg-crimson"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}