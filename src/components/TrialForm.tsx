import { useState, type FormEvent } from 'react';
import { waLink } from '../data/site';
import { getSource } from './source';

const GOALS = ['Lose fat', 'Get stronger', 'Women only sessions', 'Learn MMA', 'Train around an injury', 'Not sure yet'];
const TIMES = [
  { id: 'Morning', label: 'Morning', hint: '7 am to 11 am' },
  { id: 'Afternoon, women only', label: 'Afternoon', hint: 'Women only, Mon to Fri, 1 to 5 pm' },
  { id: 'Evening', label: 'Evening', hint: '5 pm to 12 am' },
];

declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

/** Accepts 0300 1234567, 3001234567, 92300..., +92 300... Returns 923001234567 or null. */
function normalisePk(raw: string): string | null {
  let d = raw.replace(/\D/g, '');
  if (d.startsWith('0092')) d = d.slice(2);
  if (d.startsWith('92')) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  return /^3\d{9}$/.test(d) ? `92${d}` : null;
}

export default function TrialForm({ defaultGoal }: { defaultGoal?: string }) {
  const [step, setStep] = useState(defaultGoal ? 1 : 0);
  const [goal, setGoal] = useState(defaultGoal ?? '');
  const [time, setTime] = useState(defaultGoal === 'Women only sessions' ? 'Afternoon, women only' : '');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');

  const pickGoal = (g: string) => {
    setGoal(g);
    if (g === 'Women only sessions') setTime('Afternoon, women only');
    setStep(1);
  };

  const message = () =>
    `Hi Hanma, I am ${name.trim() || 'interested'}. I would like a free session. Goal: ${goal}. Best time: ${time}.`;

  // Desk hours: Humaira replies on WhatsApp from 7 am to 10:30 pm, Karachi time.
  const deskOpen = () => {
    const p = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: false }).formatToParts(new Date());
    const h = Number(p.find((x) => x.type === 'hour')?.value ?? 0) % 24 + Number(p.find((x) => x.type === 'minute')?.value ?? 0) / 60;
    return h >= 7 && h < 22.5;
  };

  function submit(e: FormEvent) {
    e.preventDefault();
    const number = normalisePk(phone);
    if (!name.trim()) return setError('Enter your name so your coach knows who to expect.');
    if (!number) return setError('Enter your WhatsApp number, for example 0300 1234567.');
    setError('');
    setState('sending');
    const src = getSource();
    const code = src.code || 'WEB';
    const body = new URLSearchParams({
      'form-name': 'trial',
      name: name.trim(),
      whatsapp: number,
      goal,
      time,
      source: code,
      utm_source: src.utm_source ?? '',
      utm_campaign: src.utm_campaign ?? '',
      gclid: src.gclid ?? '',
      landing: src.landing ?? location.pathname,
    });
    // Save the lead as a backup (Netlify Forms, then Brevo), even if the visitor never presses send in WhatsApp.
    try {
      fetch('/', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() }).catch(() => {});
    } catch { /* the WhatsApp step still gets the lead through */ }
    window.gtag?.('event', 'generate_lead', { form_name: 'trial', goal, time, source_code: code, transport_type: 'beacon' });
    window.gtag?.('event', 'whatsapp_click', { link_id: 'form_submit', source_code: code, transport_type: 'beacon' });
    setState('done');
    // Straight into WhatsApp with the details typed out, so Humaira can reply at once.
    const href = waLink(message(), code);
    window.setTimeout(() => { window.location.href = href; }, 350);
  }

  const chip = (selected: boolean) =>
    `min-h-12 rounded-[2px] border px-4 py-3 text-left font-semibold transition-colors ${selected ? 'border-ink bg-ink text-paper' : 'border-rule bg-paper text-ink hover:border-ink'}`;

  if (state === 'done') {
    const src = getSource();
    return (
      <div className="paper rounded-[2px] border border-rule bg-card p-6 text-ink sm:p-8" role="status">
        <p className="eyebrow">Opening WhatsApp</p>
        <p className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-medium leading-none">Press Send, {name.trim().split(' ')[0]}.</p>
        <p className="mt-3 text-ink-soft">
          Your details are typed out in WhatsApp. Press send and Humaira at the front desk will reply to book your time.
          {deskOpen() ? ' She is at the desk now.' : ' The desk replies from 7 am to 10:30 pm, so she will message you first thing.'}
        </p>
        <a className="btn btn-gold mt-6 w-full" href={waLink(message(), src.code || 'WEB')} data-wa data-track="form_success_whatsapp">
          WhatsApp did not open? Tap here
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="paper rounded-[2px] border border-rule bg-card p-6 text-ink sm:p-8" aria-label="Book a free session">
      <ol className="mb-6 flex gap-1.5" aria-label={`Step ${step + 1} of 3`}>
        {[0, 1, 2].map((i) => (
          <li key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? 'bg-gold' : 'bg-rule'}`} />
        ))}
      </ol>

      {step === 0 && (
        <fieldset>
          <legend className="font-[family-name:var(--font-serif)] text-3xl font-medium leading-tight">What Do You Want From Training?</legend>
          <div className="mt-5 grid grid-cols-2 gap-2">
            {GOALS.map((g) => (
              <button type="button" key={g} onClick={() => pickGoal(g)} className={chip(goal === g)} aria-pressed={goal === g}>{g}</button>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend className="font-[family-name:var(--font-serif)] text-3xl font-medium leading-tight">When Can You Usually Train?</legend>
          <div className="mt-5 grid gap-2">
            {TIMES.map((t) => (
              <button type="button" key={t.id} onClick={() => { setTime(t.id); setStep(2); }} className={chip(time === t.id) + ' flex items-baseline justify-between gap-3'} aria-pressed={time === t.id}>
                <span>{t.label}</span>
                <span className={`text-sm font-medium ${time === t.id ? 'text-paper/70' : 'text-stone'}`}>{t.hint}</span>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setStep(0)} className="mt-4 text-sm font-semibold text-stone underline underline-offset-4">Change goal</button>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend className="font-[family-name:var(--font-serif)] text-3xl font-medium leading-tight">Where Should We Confirm Your Session?</legend>
          <p className="mt-2 text-sm text-stone">{goal} · {time}. <button type="button" className="font-semibold underline underline-offset-4" onClick={() => setStep(1)}>Change</button></p>
          <label className="mt-5 block">
            <span className="text-sm font-semibold">Your name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" className="mt-1.5 block w-full rounded-[2px] border border-rule bg-paper px-4 py-3.5 text-ink focus:border-ink focus:outline-none" />
          </label>
          <label className="mt-4 block">
            <span className="text-sm font-semibold">WhatsApp number</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" placeholder="0300 1234567" className="mt-1.5 block w-full rounded-[2px] border border-rule bg-paper px-4 py-3.5 text-ink focus:border-ink focus:outline-none" />
          </label>
          {error && <p className="mt-3 text-sm font-semibold text-[#9b1c1c]" role="alert">{error}</p>}
          <button type="submit" disabled={state === 'sending'} className="btn btn-gold mt-6 w-full disabled:opacity-60">
            {state === 'sending' ? 'Opening WhatsApp' : 'Book on WhatsApp'}
          </button>
          <p className="mt-3 text-xs text-stone">This opens WhatsApp with your details ready to send. We only use your number to arrange your session.</p>
        </fieldset>
      )}
    </form>
  );
}
