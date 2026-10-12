import { useEffect, useRef } from 'react';
import { coaches, img, type Coach } from '../data/site';

// Coaches strip: drifts on its own like a marquee, but it is a real scroller,
// so people can swipe it on a phone or use the arrows. Touch, hover or focus pauses it;
// it picks up again a few seconds later. No drift for reduced motion.
const SPEED = 28; // px per second

function Card({ c, hidden }: { c: Coach; hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex w-[17rem] shrink-0 items-center gap-4 rounded-[2px] border border-line bg-raised p-3 pr-5 sm:w-[18rem]">
      {c.photo ? (
        <img src={img(c.photo)} alt={hidden ? '' : c.name} loading="lazy" draggable={false} className="h-20 w-16 shrink-0 rounded-[2px] object-cover" />
      ) : (
        <div className="flex h-20 w-16 shrink-0 items-center justify-center rounded-[2px] border border-line bg-ink text-2xl text-gold" aria-hidden="true">
          {c.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-lg font-semibold leading-tight">{c.name}</p>
        <p className="text-sm leading-tight text-muted">{c.role}</p>
        {c.cert && <p className="mt-0.5 text-xs leading-tight text-cream/80">{c.cert}</p>}
        {c.hours && <p className="cond mt-1.5 text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-gold">{c.hours}</p>}
      </div>
    </div>
  );
}

export default function CoachStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const api = useRef<{ nudge: (dir: 1 | -1) => void }>({ nudge: () => {} });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, last = performance.now(), pos = 0, paused = false, visible = true;
    let resumeT: number | undefined;
    const half = () => el.scrollWidth / 2;

    const wrap = () => {
      const h = half();
      if (el.scrollLeft >= h) el.scrollLeft -= h;
      else if (el.scrollLeft <= 0 && paused) el.scrollLeft += h;
    };
    const pause = () => { paused = true; window.clearTimeout(resumeT); };
    const resume = (ms = 2500) => {
      window.clearTimeout(resumeT);
      resumeT = window.setTimeout(() => { wrap(); pos = el.scrollLeft; last = performance.now(); paused = false; }, ms);
    };
    const tick = (t: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(64, t - last);
      last = t;
      if (paused || !visible || still) return;
      pos += (SPEED * dt) / 1000;
      if (pos >= half()) pos -= half();
      el.scrollLeft = pos;
    };
    raf = requestAnimationFrame(tick);

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(el);

    const onEnter = (e: PointerEvent) => { if (e.pointerType === 'mouse') pause(); };
    const onLeave = (e: PointerEvent) => { if (e.pointerType === 'mouse') resume(600); };
    const onTouch = () => pause();
    const onTouchEnd = () => resume(3000);
    const onWheel = () => { pause(); resume(2500); };
    const onScroll = () => { if (paused) wrap(); };
    el.addEventListener('pointerenter', onEnter);
    el.addEventListener('pointerleave', onLeave);
    el.addEventListener('touchstart', onTouch, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', () => resume(1500));

    api.current.nudge = (dir) => {
      pause();
      el.scrollBy({ left: dir * 300, behavior: still ? 'auto' : 'smooth' });
      resume(3500);
    };

    return () => {
      cancelAnimationFrame(raf); io.disconnect(); window.clearTimeout(resumeT);
      el.removeEventListener('pointerenter', onEnter);
      el.removeEventListener('pointerleave', onLeave);
      el.removeEventListener('touchstart', onTouch);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  const arrow = 'flex h-11 w-11 items-center justify-center rounded-[2px] border border-line text-cream transition-colors hover:border-gold hover:text-gold';
  return (
    <div>
      <div ref={ref} className="no-scrollbar fade-x flex gap-3 overflow-x-auto overscroll-x-contain px-4 md:px-[2.625rem]" role="region" aria-label="Hanma coaches, swipe to see more" tabIndex={0}>
        {coaches.map((c) => <Card key={c.name} c={c} />)}
        {coaches.map((c) => <Card key={`${c.name}-2`} c={c} hidden />)}
      </div>
      <div className="wrap mt-5 flex items-center justify-between gap-4">
        <p className="cond text-[0.85rem] font-semibold uppercase tracking-[0.14em] text-muted">Swipe to see every coach</p>
        <div className="flex gap-2">
          <button type="button" className={arrow} onClick={() => api.current.nudge(-1)} aria-label="Previous coaches">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" className={arrow} onClick={() => api.current.nudge(1)} aria-label="Next coaches">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
