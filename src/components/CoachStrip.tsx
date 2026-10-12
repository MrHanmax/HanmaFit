import { coaches, img } from '../data/site';
import { Marquee } from './magic';

export default function CoachStrip() {
  return (
    <Marquee duration="55s" gap="1rem">
      {coaches.map((c) => (
        <div key={c.name} className="flex w-[17rem] shrink-0 items-center gap-4 rounded-2xl bg-chalk p-3 pr-5">
          {c.photo ? (
            <img src={img(c.photo)} alt={c.name} loading="lazy" className="h-16 w-16 shrink-0 rounded-xl object-cover" />
          ) : (
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-iron font-display text-2xl font-extrabold text-chalk" aria-hidden="true">
              {c.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
            </div>
          )}
          <div className="min-w-0">
            <p className="font-semibold leading-tight">{c.name}</p>
            <p className="text-sm text-steel leading-tight">{c.role}</p>
            {c.hours && <p className="mt-1 text-xs text-steel">{c.hours}</p>}
          </div>
        </div>
      ))}
    </Marquee>
  );
}
