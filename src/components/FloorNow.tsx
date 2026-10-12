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
  const floor = today.filter((b) => b.track === 'floor');
  const now = floor.find((b) => hour >= b.start && hour < b.end);
  const cls = today.find((b) => b.track === 'room' && hour >= b.start && hour < b.end);
  if (now) {
    const coached = now.coach !== 'Open floor';
    const what = now.kind === 'women' ? 'Women only' : coached ? 'Coaches on the floor' : 'Open floor';
    const who = coached ? now.coach : 'Front desk on site';
    return {
      open: true,
      women: now.kind === 'women',
      headline: `Open now. ${what}.`,
      detail: `${who} until ${fmt(now.end)}.${cls ? ` ${cls.label} with ${cls.coach} in the class room.` : ''}`,
    };
  }
  const next = floor.find((b) => b.start > hour);
  if (next) return { open: false, women: false, headline: `Opens at ${fmt(next.start)}`, detail: next.coach === 'Open floor' ? `${next.label}, front desk on site.` : `${next.label} with ${next.coach}.` };
  return { open: false, women: false, headline: 'Closed for tonight', detail: day === 6 ? 'Back Monday at 7 am with Faisal.' : day === 5 ? 'Back tomorrow at 7 am, open floor.' : 'Back tomorrow at 7 am with Faisal.' };
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
  const floor = blocks.filter((b) => b.track === 'floor' && b.id !== 'open-late');
  const room = blocks.filter((b) => b.track === 'room');
  const status = now ? statusFor(now.day, now.hour) : null;

  const bar = (b: Block) => {
    const active = isToday && now && now.hour >= b.start && now.hour < b.end;
    const open = b.coach === 'Open floor';
    const tone = b.kind === 'women' ? (open ? 'border border-gold text-gold bg-ink' : 'bg-gold text-ink') : b.track === 'room' ? 'border border-gold text-gold bg-ink' : open ? 'border border-cream/40 text-muted bg-ink' : 'bg-cream/85 text-ink';
    return (
      <div
        key={b.id}
        className={`absolute top-0 bottom-0 flex items-center overflow-hidden rounded-[2px] px-2 text-[0.72rem] font-semibold leading-tight ${tone} ${active ? 'outline outline-2 outline-offset-2 outline-cream' : ''}`}
        style={{ left: pct(b.start), width: `calc(${pct(b.end)} - ${pct(b.start)} - 3px)` }}
        title={`${b.label}, ${fmt(b.start)} to ${fmt(b.end)}, ${b.coach}`}
      >
        <span className="hidden truncate sm:inline">{b.coach === 'Open floor' ? 'Open' : b.coach}</span>
      </div>
    );
  };

  return (
    <section aria-label="Today at Hanma" className="relative rounded-[2px] border border-line bg-ink/90 p-5 text-cream sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div aria-live="polite">
          <p className="flex items-center gap-2 cond text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-gold">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${status?.open ? 'bg-gold' : 'bg-muted/50'}`} />
            {now ? `${DAYS_LONG[now.day]}, ${fmt(Math.floor(now.hour * 60) / 60)} in Karachi` : 'Studio hours'}
          </p>
          <p className="mt-3 text-[2.1rem] font-semibold leading-none sm:text-[2.5rem]">
            {status ? status.headline : 'Coached Monday to Friday'}
          </p>
          <p className={`mt-2 ${status?.women ? 'text-gold' : 'text-muted'}`}>{status ? status.detail : 'Morning, women only and evening sessions.'}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-1 overflow-x-auto" role="tablist" aria-label="Pick a day">
        {[1, 2, 3, 4, 5, 6].map((d) => (
          <button
            key={d}
            role="tab"
            aria-selected={d === day}
            onClick={() => setPicked(d)}
            className={`min-h-9 rounded-[2px] px-3 text-sm font-semibold uppercase tracking-[0.15em] transition-colors ${d === day ? 'bg-cream text-ink' : 'text-muted hover:text-cream'}`}
          >
            {DAYS[d]}
          </button>
        ))}
      </div>

      <div className="relative mt-4">
        <div className="relative h-10">{floor.map(bar)}</div>
        {room.length > 0 && <div className="relative mt-1.5 h-7">{room.map(bar)}</div>}
        {isToday && now && now.hour >= DAY_START && (
          <div className="pointer-events-none absolute -top-2 -bottom-2 w-0.5 bg-gold" style={{ left: pct(now.hour) }} aria-hidden="true">
            <span className="absolute -top-1 -left-[3px] h-2 w-2 rounded-full bg-gold" />
          </div>
        )}
        <div className="mt-2 flex justify-between text-[0.75rem] text-muted tabular-nums" aria-hidden="true">
          {[7, 11, 13, 17, 21, 24].map((h) => <span key={h}>{fmt(h)}</span>)}
        </div>
      </div>

      <ul className="mt-5 grid gap-y-1.5 text-sm">
        {(day === 6
          ? [
              { key: 's1', kind: 'open', time: '7 to 11 am', who: 'Open floor' },
              { key: 's2', kind: 'women-open', time: '1 to 5 pm', who: 'Women only, open floor' },
              { key: 's3', kind: 'open', time: '5 pm to 12 am', who: 'Open floor, Khubaib in for a short session' },
            ]
          : [
              { key: 'm', kind: 'coed', time: '7 to 11 am', who: 'Faisal' },
              { key: 'w', kind: 'women', time: '1 to 5 pm', who: 'Women only, Samina' },
              { key: 'e', kind: 'coed', time: '5 to 10 pm', who: 'Rafi' },
              { key: 'k', kind: 'coed', time: '7 to 11:30 pm', who: 'Khubaib' },
              { key: 'c', kind: 'room', time: '5 to 6 pm', who: 'Aerobics class, coed, Samina' },
            ]
        ).concat(room.some((r) => r.kind === 'mma') ? [{ key: 'x', kind: 'room', time: '9 to 10:30 pm', who: 'MMA class, Owais' }] : []).map((r) => (
          <li key={r.key} className="flex items-center gap-3 text-muted">
            <span className={`h-3 w-3 shrink-0 rounded-[2px] ${r.kind === 'women' ? 'bg-gold' : r.kind === 'room' || r.kind === 'women-open' ? 'border border-gold' : r.kind === 'open' ? 'border border-cream/40' : 'bg-cream/85'}`} aria-hidden="true" />
            <span className="w-28 shrink-0 tabular-nums text-cream">{r.time}</span>
            <span>{r.who}</span>
          </li>
        ))}
      </ul>

      <a
        href={waLink(`Hi Hanma, I would like to book a free session on ${DAYS_LONG[day]}`, code)}
        data-wa
        data-track="floor_book_day"
        className="btn btn-gold mt-6 w-full"
      >
        Book a Free Session on {DAYS_LONG[day]}
      </a>
    </section>
  );
}
