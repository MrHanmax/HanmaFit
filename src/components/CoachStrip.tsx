import { coaches, img } from '../data/site';
import { Marquee } from './magic';

export default function CoachStrip() {
  return (
    <Marquee duration="60s" gap="0.75rem">
      {coaches.map((c) => (
        <div key={c.name} className="flex w-[18rem] shrink-0 items-center gap-4 rounded-[2px] border border-line bg-raised p-3 pr-5">
          {c.photo ? (
            <img src={img(c.photo)} alt={c.name} loading="lazy" className="h-20 w-16 shrink-0 rounded-[2px] object-cover" />
          ) : (
            <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-[2px] border border-line bg-ink text-2xl italic text-gold" aria-hidden="true">
              {c.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
          )}
          <div className="min-w-0">
            <p className="text-lg font-semibold leading-tight">{c.name}</p>
            <p className="text-sm italic leading-tight text-muted">{c.role}</p>
            {c.hours && <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold">{c.hours}</p>}
          </div>
        </div>
      ))}
    </Marquee>
  );
}
