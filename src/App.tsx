import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { FRAME } from "./design-system/grid";
import { frames, type Section } from "./pages";
import { projects } from "./content";

// Home goes to the cover; each project button goes to its section cover.
const navItems: { section: Section; label: string; target: string }[] = [
  { section: "home", label: "Home", target: "p01" },
  ...projects.map((p) => ({ section: p.key, label: p.name, target: `s-${p.key}` })),
];

function useActiveSection() {
  const [active, setActive] = useState<Section>("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.section as Section);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll<HTMLElement>("[data-section]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

function ScaledFrame({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="frame-wrap relative w-full overflow-hidden shadow-[0_1px_2px_rgba(37,43,42,0.08),0_12px_40px_-12px_rgba(37,43,42,0.18)]"
      style={{ aspectRatio: "16 / 9" }}
    >
      <div
        className="frame-inner absolute left-0 top-0 origin-top-left"
        style={{ width: FRAME.width, height: FRAME.height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const active = useActiveSection();
  return (
    <>
      <header className="no-print sticky top-0 z-10 border-b border-charcoal/10 bg-ivory/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1360px] items-center justify-between gap-6 px-6">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-[19px] text-charcoal">Martha A. Valdez</span>
            <span className="hidden text-[11px] uppercase tracking-[0.16em] text-warmgrey xl:inline">
              Designing Human-Centred Futures
            </span>
          </div>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
            {navItems.map((n) => (
              <a
                key={n.section}
                href={`#${n.target}-block`}
                aria-current={active === n.section ? "true" : undefined}
                className={`rounded-full px-3.5 py-1.5 text-[12.5px] tracking-[0.02em] transition-colors ${
                  active === n.section
                    ? "bg-forest text-ivory"
                    : "text-charcoal/70 hover:bg-sand hover:text-charcoal"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="print-root mx-auto flex max-w-[1360px] flex-col gap-14 px-6 py-12">
        {frames.map(({ id, name, section, Component }) => (
          <div
            key={id}
            id={`${id}-block`}
            data-section={section}
            className="frame-block scroll-mt-20"
          >
            <div className="no-print mb-3 text-[12px] text-charcoal/60">{name}</div>
            <ScaledFrame>
              <Component />
            </ScaledFrame>
          </div>
        ))}
      </main>
    </>
  );
}
