import { useState } from 'react';

export default function SkillCard({ name, icon, mono, delay = 0 }) {
  const [failed, setFailed] = useState(false);

  return (
    <li
      style={{ animationDelay: `${delay}ms` }}
      className="group animate-pop motion-reduce:animate-none"
    >
      <div className="flex h-full flex-col items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-6 transition duration-300 ease-soft hover:-translate-y-2 hover:border-crimson hover:bg-crimson/10 hover:shadow-[0_18px_40px_-12px_rgba(220,20,60,0.45)]">
        {icon && !failed ? (
          <img
            src={icon}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
            className={`h-12 w-12 object-contain opacity-80 grayscale transition duration-300 ease-soft group-hover:-rotate-6 group-hover:scale-125 group-hover:opacity-100 group-hover:grayscale-0 ${
              mono ? 'brightness-0 invert' : ''
            }`}
          />
        ) : (
          <span className="grid h-12 w-12 place-items-center rounded-md border border-crimson/50 font-mono text-sm text-crimson transition duration-300 ease-soft group-hover:scale-125 group-hover:bg-crimson group-hover:text-white">
            {name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span className="text-center font-mono text-xs uppercase tracking-widest text-white/70 transition-colors group-hover:text-white">
          {name}
        </span>
      </div>
    </li>
  );
}