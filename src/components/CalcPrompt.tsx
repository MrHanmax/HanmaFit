import { useEffect, useRef, useState } from 'react';

// "Before you go" offer of the free calorie calculator, once per visit.
// Desktop: when the pointer leaves through the top of the window (heading for
// the tabs or the back button). Phones have no such signal, so a small card
// slides up when the visitor scrolls back up quickly after reading half the
// page; it never covers the page, so it stays within Google's rules for
// mobile pop ups.
// Skipped on the calculator and contact pages, after the visitor has messaged
// or booked, and while the free session pop up is open.
const KEY = 'hanma_calc_prompt';
const MIN_MS = 8000;

function flag(k: string) { try { return sessionStorage.getItem(k) === '1'; } catch { return true; } }
function setFlag(k: string) { try { sessionStorage.setItem(k, '1'); } catch { /* storage blocked */ } }
function track(name: string, trigger: string) { window.gtag?.('event', name, { prompt: 'calculator', trigger }); }

export default function CalcPrompt() {
  const [mode, setMode] = useState<'' | 'dialog' | 'card'>('');
  const trigger = useRef('');
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/calculator') || path.startsWith('/contact') || flag(KEY)) return;
    const start = Date.now();
    const ready = () => Date.now() - start > MIN_MS && !flag(KEY) && !flag('hanma_lead') && !document.querySelector('dialog[open]');
    const show = (m: 'dialog' | 'card', why: string) => {
      if (!ready()) return;
      setFlag(KEY); trigger.current = why; setMode(m); track('calc_prompt_shown', why);
      cleanup();
    };

    const onLeave = (e: MouseEvent) => { if (!e.relatedTarget && e.clientY <= 0) show('dialog', 'exit'); };
    let deepest = 0, recent: [number, number][] = [];
    const onScroll = () => {
      const y = window.scrollY, t = Date.now();
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height > 0) deepest = Math.max(deepest, y / height);
      // A fast flick back up after reading half the page reads as leaving:
      // more than 500 px upward within the last 700 ms.
      recent = recent.filter(([at]) => t - at < 700); recent.push([t, y]);
      const top = Math.max(...recent.map(([, ry]) => ry));
      if (deepest > 0.5 && top - y > 500) show('card', 'scroll_up');
    };
    const fine = window.matchMedia?.('(pointer: fine)').matches;
    if (fine) document.addEventListener('mouseout', onLeave);
    else window.addEventListener('scroll', onScroll, { passive: true });
    function cleanup() { document.removeEventListener('mouseout', onLeave); window.removeEventListener('scroll', onScroll); }
    return cleanup;
  }, []);

  useEffect(() => {
    if (mode === 'dialog' && dialog.current && !dialog.current.open) dialog.current.showModal();
  }, [mode]);

  const close = () => { track('calc_prompt_closed', trigger.current); dialog.current?.close(); setMode(''); };
  const go = () => track('calc_prompt_click', trigger.current);

  const body = (compact: boolean) => (
    <>
      <p className="eyebrow">Before you go</p>
      <p className={`font-[family-name:var(--font-serif)] leading-none ${compact ? 'mt-2 text-3xl' : 'mt-3 text-4xl'}`}>Free Calorie Calculator</p>
      <p className={compact ? 'mt-2 text-sm text-muted' : 'mt-4 text-muted'}>
        {compact ? 'Your calories and protein, from your own steps and training. Two minutes.'
          : 'Your maintenance calories, protein and a week by week plan, worked out from your own steps and training. Two minutes, no sign up.'}
      </p>
      <a className={`btn btn-gold w-full ${compact ? 'mt-4' : 'mt-6'}`} href="/calculator" onClick={go} data-track="calc_prompt">Work Out My Calories</a>
    </>
  );

  if (mode === 'card') return (
    <div role="dialog" aria-label="Free calorie calculator"
      className="fixed inset-x-3 z-50 border border-line bg-raised p-4 text-cream lg:hidden"
      style={{ bottom: 'calc(5.5rem + env(safe-area-inset-bottom))' }}>
      {body(true)}
      <button onClick={close} className="cond absolute right-2 top-2 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-cream" aria-label="Close">Close</button>
    </div>
  );
  if (mode !== 'dialog') return null;
  return (
    <dialog ref={dialog} onCancel={close} onClick={(e) => { if (e.target === dialog.current) close(); }}
      className="m-auto w-[min(30rem,calc(100vw-2rem))] bg-transparent p-0 backdrop:bg-ink/80" aria-label="Free calorie calculator">
      <div className="relative border border-line bg-raised p-6 text-cream sm:p-8">
        {body(false)}
        <button onClick={close} className="cond absolute right-3 top-3 px-2 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-muted hover:text-cream" aria-label="Close">Close</button>
      </div>
    </dialog>
  );
}
