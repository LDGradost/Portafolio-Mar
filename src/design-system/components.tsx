import { createContext, useContext, type CSSProperties, type ReactNode } from "react";
import { colX, spanW, GRID, FRAME } from "./grid";
import { ImageIcon } from "./icons";

export type Tone = "light" | "dark";
const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/* ---------- Grid overlay context ---------- */
export const GridContext = createContext(false);

function GridOverlay() {
  return (
    <div data-layer="Guides / 12-column grid" className="pointer-events-none absolute inset-0 z-50">
      {Array.from({ length: GRID.columns }, (_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full bg-[#e0533d]/8 outline outline-[#e0533d]/20"
          style={{ left: colX(i + 1), width: GRID.column }}
        />
      ))}
    </div>
  );
}

/* ---------- Frame ---------- */
const pageBg = { ivory: "bg-ivory", forest: "bg-forest", sand: "bg-sand" };

export function Page({
  id,
  name,
  background = "ivory",
  children,
}: {
  id: string;
  name: string;
  background?: keyof typeof pageBg;
  children: ReactNode;
}) {
  const showGrid = useContext(GridContext);
  return (
    <section
      id={id}
      data-frame={name}
      aria-label={name}
      className={cx("relative overflow-hidden", pageBg[background])}
      style={{ width: FRAME.width, height: FRAME.height }}
    >
      {children}
      {showGrid && <GridOverlay />}
    </section>
  );
}

/** Absolutely positioned block snapped to grid columns. */
export function Area({
  col = 1,
  span = 12,
  top,
  bottom,
  height,
  layer,
  className,
  style,
  children,
}: {
  col?: number;
  span?: number;
  top?: number;
  bottom?: number;
  height?: number;
  layer?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      data-layer={layer}
      className={cx("absolute", className)}
      style={{ left: colX(col), width: spanW(span), top, bottom, height, ...style }}
    >
      {children}
    </div>
  );
}

/* ---------- Typography ---------- */
export function SectionLabel({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <div data-component="SectionLabel" className="flex items-center gap-3">
      <span className="h-px w-7 bg-ochre" />
      <span
        className={cx(
          "text-[11.5px] font-medium uppercase tracking-[0.2em]",
          tone === "light" ? "text-charcoal" : "text-sage",
        )}
      >
        {children}
      </span>
    </div>
  );
}

export function Headline({
  children,
  size = 54,
  tone = "light",
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  size?: number;
  tone?: Tone;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      data-component="Headline"
      className={cx(
        "font-serif font-normal leading-[1.04] tracking-[-0.012em] text-balance",
        tone === "light" ? "text-charcoal" : "text-ivory",
        className,
      )}
      style={{ fontSize: size }}
    >
      {children}
    </Tag>
  );
}

export function Subhead({
  children,
  tone = "light",
  size = 24,
}: {
  children: ReactNode;
  tone?: Tone;
  size?: number;
}) {
  return (
    <p
      data-component="Subhead"
      className={cx(
        "font-light leading-[1.3] tracking-[-0.01em] text-pretty",
        tone === "light" ? "text-charcoal/75" : "text-sage",
      )}
      style={{ fontSize: size }}
    >
      {children}
    </p>
  );
}

export function Body({
  children,
  tone = "light",
  size = 15.5,
}: {
  children: ReactNode;
  tone?: Tone;
  size?: number;
}) {
  return (
    <div
      data-component="Body"
      className={cx(
        "space-y-3 leading-[1.6] text-pretty",
        tone === "light" ? "text-charcoal/80" : "text-ivory/75",
      )}
      style={{ fontSize: size }}
    >
      {children}
    </div>
  );
}

export function Caption({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      data-component="Caption"
      className={cx(
        "text-[11px] font-medium uppercase tracking-[0.16em]",
        tone === "light" ? "text-warmgrey" : "text-sage/80",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function PullQuote({
  children,
  tone = "light",
  size = 22,
}: {
  children: ReactNode;
  tone?: Tone;
  size?: number;
}) {
  return (
    <blockquote data-component="PullQuote" className="relative pl-7">
      <span
        className="absolute left-0 top-[0.05em] font-serif leading-none text-ochre"
        style={{ fontSize: size * 1.6 }}
      >
        “
      </span>
      <p
        className={cx(
          "font-serif italic leading-[1.3] text-pretty",
          tone === "light" ? "text-charcoal" : "text-ivory",
        )}
        style={{ fontSize: size }}
      >
        {children}
      </p>
    </blockquote>
  );
}

export function Rule({ tone = "light", className }: { tone?: Tone; className?: string }) {
  return (
    <div
      className={cx("h-px w-full", tone === "light" ? "bg-charcoal/15" : "bg-ivory/15", className)}
    />
  );
}

/* ---------- Image placeholder (replace with real photography / screenshots) ---------- */
export function ImagePlaceholder({
  label,
  ratio,
  figure,
  className,
  style,
  surface = "sand",
  src,
  alt,
  objectPosition = "center",
  fit = "cover",
}: {
  label: string;
  ratio: string;
  figure?: string;
  className?: string;
  style?: CSSProperties;
  surface?: "sand" | "ivory";
  /** When set, the real photograph replaces the placeholder artwork. */
  src?: string;
  alt?: string;
  objectPosition?: string;
  /** "contain" shows the whole image (e.g. storyboards) inside a padded frame. */
  fit?: "cover" | "contain";
}) {
  const corner = "absolute h-3.5 w-3.5 border-ochre/70";
  return (
    <figure
      data-component="ImagePlaceholder"
      data-replaceable="true"
      data-label={label}
      className={cx(
        "absolute overflow-hidden border border-charcoal/12",
        surface === "sand" ? "bg-sand" : "bg-ivory",
        className,
      )}
      style={style}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? label}
          className={cx(
            "absolute inset-0 h-full w-full",
            fit === "contain" ? "object-contain p-5" : "object-cover",
          )}
          style={{ objectPosition }}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_49.85%,rgba(37,43,42,0.06)_50%,transparent_50.15%)]" />
          <span className={cx(corner, "left-4 top-4 border-l border-t")} />
          <span className={cx(corner, "right-4 top-4 border-r border-t")} />
          <span className={cx(corner, "bottom-4 left-4 border-b border-l")} />
          <span className={cx(corner, "bottom-4 right-4 border-b border-r")} />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-ivory/70 text-warmgrey">
              <ImageIcon size={20} />
            </span>
            <span className="max-w-[300px] text-[11px] font-medium uppercase leading-[1.5] tracking-[0.18em] text-charcoal/70">
              {label}
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-warmgrey/80">
              {ratio} · Replace image
            </span>
          </div>
        </>
      )}
      {figure && (
        <figcaption
          className={cx(
            "absolute bottom-4 left-10 text-[10px] font-medium uppercase tracking-[0.18em]",
            src ? "bg-ivory/90 px-2.5 py-1 text-charcoal" : "text-warmgrey",
          )}
        >
          {figure}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------- Metric ---------- */
export function Metric({
  value,
  label,
  note,
  size = 80,
  tone = "light",
}: {
  value: ReactNode;
  label: ReactNode;
  note?: ReactNode;
  size?: number;
  tone?: Tone;
}) {
  return (
    <div data-component="Metric">
      <div
        className={cx(
          "font-serif leading-[0.9] tracking-[-0.02em] tabular-nums",
          tone === "light" ? "text-forest" : "text-ivory",
        )}
        style={{ fontSize: size }}
      >
        {value}
      </div>
      <div
        className={cx(
          "mt-3 text-[12px] font-medium uppercase tracking-[0.16em]",
          tone === "light" ? "text-charcoal" : "text-sage",
        )}
      >
        {label}
      </div>
      {note && <div className="mt-1.5 text-[11px] italic text-warmgrey">{note}</div>}
    </div>
  );
}

/* ---------- Timeline ---------- */
export function Timeline({
  items,
  tone = "light",
  highlightLast = false,
  className,
}: {
  items: { date: string; label: string }[];
  tone?: Tone;
  highlightLast?: boolean;
  className?: string;
}) {
  const line = tone === "light" ? "bg-charcoal/25" : "bg-ivory/25";
  return (
    <div data-component="Timeline" className={cx("relative", className)}>
      <ol
        className="relative grid"
        style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
      >
        {/* Inside the list so the rule follows any horizontal padding on the root */}
        <span aria-hidden className={cx("absolute left-0 right-0 top-[5px] h-px", line)} />
        {items.map((it, i) => {
          const hi = highlightLast && i === items.length - 1;
          return (
            <li key={it.date + it.label} data-layer={`Timeline / ${it.date}`}>
              <span
                className={cx(
                  "block h-[11px] w-[11px] rounded-full border",
                  hi
                    ? "border-ochre bg-ochre"
                    : tone === "light"
                      ? "border-forest bg-ivory"
                      : "border-ivory bg-forest",
                )}
              />
              <div
                className={cx(
                  "mt-3 text-[11px] font-semibold tracking-[0.16em]",
                  tone === "light" ? "text-charcoal" : "text-ivory",
                )}
              >
                {it.date}
              </div>
              <div
                className={cx("mt-1 text-[13px]", tone === "light" ? "text-warmgrey" : "text-sage")}
              >
                {it.label}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ---------- Page footer ---------- */
export function PageFooter({
  left = "Martha Valdez — Designing Human-Centred Futures",
  center,
  folio,
  tone = "light",
  col = 1,
  span = 12,
}: {
  left?: string;
  center?: string;
  folio?: string;
  tone?: Tone;
  col?: number;
  span?: number;
}) {
  const c = tone === "light" ? "text-warmgrey" : "text-sage/80";
  return (
    <Area
      col={col}
      span={span}
      bottom={26}
      layer="Page footer"
      className={cx(
        "flex items-baseline justify-between text-[10.5px] tracking-[0.14em] uppercase",
        c,
      )}
    >
      <span>{left}</span>
      {center && <span>{center}</span>}
      {folio && (
        <span
          className={cx(
            "font-serif text-[15px] normal-case tracking-normal",
            tone === "light" ? "text-charcoal" : "text-ivory",
          )}
        >
          {folio}
        </span>
      )}
    </Area>
  );
}

export const MIBANCO_FOOTER = "Case 01 — Mibanco / Reimagining Banking for Entrepreneurs";
