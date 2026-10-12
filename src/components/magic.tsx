// Marquee, ported from Magic UI (magicui.design). Pauses on hover, stops for reduced motion.
import type { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

export function Marquee({ children, duration = '40s', gap = '1rem', className }: { children: ReactNode; duration?: string; gap?: string; className?: string }) {
  return (
    <div style={{ '--duration': duration, '--gap': gap } as CSSProperties} className={clsx('group flex overflow-hidden [gap:var(--gap)]', className)}>
      {[0, 1].map((i) => (
        <div key={i} aria-hidden={i === 1} className="flex shrink-0 animate-marquee justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">
          {children}
        </div>
      ))}
    </div>
  );
}
