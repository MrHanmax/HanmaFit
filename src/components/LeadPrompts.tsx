import { useEffect, useRef, useState } from 'react';
import TrialForm from './TrialForm';

// Free session pop up: opens once per visit, 7.5 seconds after the page loads.
// Skipped on the contact page and while the visitor is already filling in the trial form.
const KEY = 'hanma_prompt_seen';
const DELAY_MS = 7500;

function seen() { try { return sessionStorage.getItem(KEY) === '1'; } catch { return false; } }
function markSeen() { try { sessionStorage.setItem(KEY, '1'); } catch { /* storage blocked */ } }
function track(name: string) { window.gtag?.('event', name, { prompt: 'timed_popup' }); }

export default function LeadPrompts() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (seen() || location.pathname.startsWith('/contact')) return;
    const t = window.setTimeout(() => {
      const busy = document.activeElement?.closest('#trial, dialog');
      if (busy || seen()) return;
      markSeen(); setOpen(true); track('lead_prompt_shown');
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [open]);

  const close = () => { track('lead_prompt_closed'); dialog.current?.close(); setOpen(false); };

  if (!open) return null;
  return (
    <dialog
      ref={dialog}
      onCancel={close}
      onClick={(e) => { if (e.target === dialog.current) close(); }}
      className="m-0 mt-auto w-full max-w-none bg-transparent p-0 backdrop:bg-ink/80 sm:m-auto sm:w-[min(34rem,calc(100vw-2rem))]"
      aria-label="Book a free session"
      style={{ maxHeight: '92dvh' }}
    >
      <div className="relative max-h-[92dvh] overflow-y-auto">
        <div className="border border-line bg-raised p-6 text-cream">
          <p className="eyebrow">First session free</p>
          <p className="rule-under mt-3 font-[family-name:var(--font-serif)] text-4xl leading-none">Train With a Coach This Week</p>
          <p className="mt-4 text-muted">Three taps and we confirm a time on WhatsApp. No payment, no pressure.</p>
        </div>
        <TrialForm />
        <button onClick={close} className="cond absolute right-3 top-3 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-cream" aria-label="Close">Close</button>
      </div>
    </dialog>
  );
}
