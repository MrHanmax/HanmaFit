import { useEffect, useMemo, useState } from 'react';
import { schedule, waLink, type Block } from '../data/site';
import { useSourceCode } from './source';

const DAY_START = 7;
const DAY_END = 24;
const SPAN = DAY_END - DAY_START;
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function karachiNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Karachi', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '0';
  const day = DAYS.indexOf(get('weekday'));
  const hour = Number(get('hour')) % 24 + Number(get('minute')) / 60;
  return { day, hour };
}

function fmt(h: number) {
  if (h === 24) return '12 am';
  const hr = Math.floor(h);
  const min = Math.round((h - hr) * 60);
  const suffix = hr >= 12 ? 'pm' : 'am';
  const h12 = hr % 12 === 0 ? 12 : hr % 12;
  return min ? `${h12}:${String(min).padStart(2, '0')} ${suffix}` : `${h12} ${suffix}`;
}

const pct = (h: number) => `${((Math.max(DAY_START, Math.min(DAY_END, h)) - DAY_START) / SPAN) * 100}%`;

type Status = { open: boolean; headline: string; detail: string; women: boolean };

function statusFor(day: number, hour: number): Status {
  if (day === 0) return { open: false, headline: 'Closed on Sundays', detail: 'Back Monday at 7 am with Faisal.', women: false };
  const today = schedule.filter((b) => b.days.includes(day));
  const main = today.filter((b) => b.kind !== 'mma');
  const now = main.find((b) => hour >= b.start && hour < b.end);
  const mma = today.find((b) => b.kind === 'mma' && hour >= b.start && hour < b.end);
  if (now) {
    const coached = now.coach !== 'Front desk';
    const block = now.kind === 'women' ? 'Women only' : coached ? 'Coaches on the floor' : 'Open floor';
    return {
      open: true,
      women: now.kind === 'women',
      headline: `Open now. ${block}.`,
      detail: `${coached ? now.coach : 'Open floor'} until ${fmt(now.end)}${mma ? '. MMA class running with Owais.' : '.'}`,
    };
  }
  const next = main.find((b) => b.start > hour);
  if (next) return { open: false, women: false, headline: `Opens at ${fmt(next.start)}`, detail: `${next.label} with ${next.coach}.` };
  return { open: false, women: false, headline: 'Closed for tonight', detail: day === 6 ? 'Back Monday at 7 am.' : 'Back tomorrow at 7 am with Faisal.' };
}

export default function FloorNow() {
  const [now, setNow] = useState<{ day: number; hour: number } | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const code = useSourceCode();

  useEffect(() => {
    setNow(karachiNow());
    const t = setInterval(() => setNow(karachiNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  const day = picked ?? (now?.day === 0 ? 1 : now?.day ?? 1);
  const isToday = now !== null && day === now.day;
  const blocks = useMemo(() => schedule.filter((b) => b.days.includes(day)), [day]);
  const main = blocks.filter((b) => b.kind !== 'mma' && b.id !== 'open-late');
  const mma = blocks.find((b) => b.kind === 'mma');
  const status = now ? statusFor(now.day, now.hour) : null;

  const bar = (b: Block) => {
    const active = isToday && now && now.hour >= b.start && now.hour < b.end;
    const tone = b.kind === 'women' ? 'bg-plum text-white' : b.kind === 'mma' ? 'bg-red text-white' : 'bg-chalk text-iron';
    return (
      <div
        key={b.id}
        className={`absolute top-0 bottom-0 flex items-center overflow-hidden rounded-md px-2 text-[0.72rem] font-semibold leading-tight ${tone} ${active ? 'ring-2 ring-white ring-offset-2 ring-offset-iron' : ''}`}
        style={{ left: pct(b.start), width: `calc(${pct(b.end)} - ${pct(b.start)} - 3px)` }}
        title={`${b.label}, ${fmt(b.start)} to ${fmt(b.end)}, ${b.coach}`}
      >
        <span className="hidden truncate sm:inline">{b.coach}</span>
      </div>
    );
  };

  return (
    <section aria-label="Today at Hanma" className="relative rounded-[1.75rem] bg-iron p-5 text-chalk shadow-[0_30px_60px_-30px_rgba(29,38,50,.6)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div aria-live="polite">
          <p className="flex items-center gap-2 text-sm text-chalk/70">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${status?.open ? 'bg-[#3ddc84] shadow-[0_0_0_4px_rgba(61,220,132,.2)]' : 'bg-chalk/40'}`} />
            {now ? `${DAYS_LONG[now.day]}, ${fmt(Math.floor(now.hour * 60) / 60)} in Karachi` : 'Studio hours'}
          </p>
          <p className="mt-2 font-display text-[2rem] leading-none font-extrabold sm:text-[2.4rem]">
            {status ? status.headline : 'Coached all day, Monday to Saturday'}
          </p>
          <p className={`mt-2 ${status?.women ? 'text-plum-soft' : 'text-chalk/75'}`}>{status ? status.detail : 'Morning, women only and evening sessions.'}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-1 overflow-x-auto" role="tablist" aria-label="Pick a day">
        {[1, 2, 3, 4, 5, 6].map((d) => (
          <button
            key={d}
            role="tab"
            aria-selected={d === day}
            onClick={() => setPicked(d)}
            className={`min-h-9 rounded-full px-3 text-sm font-semibold transition-colors ${d === day ? 'bg-chalk text-iron' : 'text-chalk/70 hover:text-chalk'}`}
          >
            {DAYS[d]}
          </button>
        ))}
      </div>

      <div className="relative mt-4">
        <div className="relative h-10">{main.map(bar)}</div>
        {mma && <div className="relative mt-1.5 h-7">{bar(mma)}</div>}
        {isToday && now && now.hour >= DAY_START && (
          <div className="pointer-events-none absolute -top-2 -bottom-2 w-0.5 bg-[#3ddc84]" style={{ left: pct(now.hour) }} aria-hidden="true">
            <span className="absolute -top-1 -left-[3px] h-2 w-2 rounded-full bg-[#3ddc84]" />
          </div>
        )}
        <div className="mt-2 flex justify-between text-[0.7rem] text-chalk/50 tabular-nums" aria-hidden="true">
          {[7, 11, 13, 17, 21, 24].map((h) => <span key={h}>{fmt(h)}</span>)}
        </div>
      </div>

      <ul className="mt-5 grid gap-y-1.5 text-sm">
        {[
          { key: 'm', kind: 'coed', time: '7 to 11 am', who: 'Faisal' },
          { key: 'w', kind: 'women', time: '1 to 5 pm', who: 'Women only, Samina' },
          { key: 'e', kind: 'coed', time: '5 to 10 pm', who: 'Rafi' },
          { key: 'k', kind: 'coed', time: '7 to 11:30 pm', who: 'Khubaib' },
          ...(mma ? [{ key: 'x', kind: 'mma', time: '9 to 10:30 pm', who: 'MMA class, Owais' }] : []),
        ].map((r) => (
          <li key={r.key} className="flex items-center gap-3 text-chalk/80">
            <span className={`h-3 w-3 shrink-0 rounded-sm ${r.kind === 'women' ? 'bg-plum' : r.kind === 'mma' ? 'bg-red' : 'bg-chalk'}`} aria-hidden="true" />
            <span className="w-28 shrink-0 tabular-nums text-chalk">{r.time}</span>
            <span>{r.who}</span>
          </li>
        ))}
      </ul>

      <a
        href={waLink(`Hi Hanma, I would like to book a free session on ${DAYS_LONG[day]}`, code)}
        data-wa
        data-track="floor_book_day"
        className="btn btn-wa mt-6 w-full"
      >
        Book a free session on {DAYS_LONG[day]}
      </a>
    </section>
  );
}
