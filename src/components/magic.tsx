// Small ports of Magic UI components (magicui.design): ShimmerButton, BorderBeam, Marquee.
import type { CSSProperties, ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ShimmerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  shimmerColor?: string;
  background?: string;
  children: ReactNode;
};

export function ShimmerButton({ shimmerColor = '#ffffff', background = 'var(--color-red)', className, children, ...rest }: ShimmerProps) {
  return (
    <button
      style={{ '--spread': '90deg', '--shimmer-color': shimmerColor, '--radius': '999px', '--speed': '3s', '--cut': '0.1em', '--bg': background } as CSSProperties}
      className={clsx(
        'group relative z-0 flex min-h-[3.25rem] cursor-pointer items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-6 font-bold text-white [background:var(--bg)]',
        'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...rest}
    >
      <div className="-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]" />
      <div className="absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]" />
    </button>
  );
}

export function BorderBeam({ size = 220, duration = 9, colorFrom = '#ffc234', colorTo = '#fff1c7' }: { size?: number; duration?: number; colorFrom?: string; colorTo?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ '--size': size, '--duration': duration, '--color-from': colorFrom, '--color-to': colorTo } as CSSProperties}
      className={clsx(
        'pointer-events-none absolute inset-0 rounded-[inherit] [border:2px_solid_transparent]',
        '![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]',
        'after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]',
      )}
    />
  );
}

export function Marquee({ children, duration = '40s', gap = '1rem', className }: { children: ReactNode; duration?: string; gap?: string; className?: string }) {
  return (
    <div
      style={{ '--duration': duration, '--gap': gap } as CSSProperties}
      className={clsx('group flex overflow-hidden [gap:var(--gap)] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]', className)}
    >
      {[0, 1].map((i) => (
        <div key={i} aria-hidden={i === 1} className="flex shrink-0 animate-marquee justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">
          {children}
        </div>
      ))}
    </div>
  );
}
