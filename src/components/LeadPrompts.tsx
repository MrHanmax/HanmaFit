import { useEffect, useRef, useState } from 'react';
import TrialForm from './TrialForm';
import { waLink } from '../data/site';
import { useSourceCode } from './source';

// Two gentle lead prompts, each shown at most once per visit:
// desktop: when the pointer leaves the top of the window after a few seconds on the page
// mobile: a small card that slides up once the visitor has scrolled past the programmes
const KEY = 'hanma_prompt_seen';

function seen() { try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; } }
function markSeen() { try { sessionStorage.setItem(KEY, '1'); } catch { /* storage blocked */ } }
function track(name: string, kind: string) { window.gtag?.('event', name, { prompt: kind }); }

export default function LeadPrompts() {
  const [mode, setMode] = useState<'none' | 'modal' | 'card'>('none');
  const dialog = useRef<HTMLDialogElement>(null);
  const code = useSourceCode();

  useEffect(() => {
    if (seen() || location.pathname.startsWith('/contact')) return;
    const desktop = window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
    const start = Date.now();

    if (desktop) {
      const onOut = (e: MouseEvent) => {
        if (e.relatedTarget || e.clientY > 0 || Date.now() - start < 6000 || seen()) return;
        markSeen(); setMode('modal'); track('lead_prompt_shown', 'exit');
        document.removeEventListener('mouseout', onOut);
      };
      document.addEventListener('mouseout', onOut);
      return () => document.removeEventListener('mouseout', onOut);
    }

    const onScroll = () => {
      const depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      const trial = document.getElementById('trial')?.getBoundingClientRect();
      const trialVisible = trial ? trial.top < window.innerHeight && trial.bottom > 0 : false;
      if (depth > 0.45 && !trialVisible && !seen()) {
        markSeen(); setMode('card'); track('lead_prompt_shown', 'slide_up');
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mode === 'modal' && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [mode]);

  const close = (kind: string) => { track('lead_prompt_closed', kind); dialog.current?.close(); setMode('none'); };

  if (mode === 'modal') {
    return (
      <dialog
        ref={dialog}
        onCancel={() => close('exit')}
        onClick={(e) => { if (e.target === dialog.current) close('exit'); }}
        className="m-auto w-[min(34rem,calc(100vw-2rem))] bg-transparent p-0 backdrop:bg-ink/80"
        aria-label="Book a free session"
      >
        <div className="relative">
          <div className="border border-line bg-raised p-6 text-cream">
            <p className="eyebrow">Before you go</p>
            <p className="rule-under mt-3 font-[family-name:var(--font-serif)] text-4xl leading-none">Your First Session Is Free</p>
            <p className="mt-4 text-muted">Three taps and we confirm a time on WhatsApp. No payment, no pressure.</p>
          </div>
          <TrialForm />
          <button onClick={() => close('exit')} className="cond absolute right-3 top-3 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-cream" aria-label="Close">Close</button>
        </div>
      </dialog>
    );
  }

  if (mode === 'card') {
    return (
      <div role="dialog" aria-label="Book a free session" className="fixed inset-x-3 z-30 border border-line bg-raised p-4 text-cream lg:hidden" style={{ bottom: 'calc(5.25rem + env(safe-area-inset-bottom))' }}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">First session free</p>
            <p className="mt-2 text-muted">Pick a goal and a time, and we confirm on WhatsApp.</p>
          </div>
          <button onClick={() => close('slide_up')} className="cond -mr-1 -mt-1 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted" aria-label="Close">Close</button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <a href="#trial" onClick={() => { track('lead_prompt_clicked', 'form'); setMode('none'); }} className="btn btn-gold !min-h-11 !px-3 text-sm">Book in 3 Taps</a>
          <a href={waLink('Hi Hanma, I would like to book a free session', code)} data-wa onClick={() => { track('lead_prompt_clicked', 'whatsapp'); setMode('none'); }} className="btn btn-line !min-h-11 !px-3 text-sm">WhatsApp</a>
        </div>
      </div>
    );
  }
  return null;
}
