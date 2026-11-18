import type { CSSProperties, ReactNode } from "react";
import { ChartIcon, DocumentIcon, ImageIcon } from "./icons";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

const icons = { image: ImageIcon, document: DocumentIcon, chart: ChartIcon };

/**
 * Replaceable frame for an authentic project artifact. `style` positions the frame itself;
 * the caption sits below it so inserting an image never changes the surrounding layout.
 */
export function EvidenceFrame({
  layer,
  label,
  caption,
  note,
  index,
  icon = "document",
  style,
  captionIndent = 0,
  compact = false,
  tone = "light",
}: {
  layer: string;
  label: string;
  caption: ReactNode;
  note?: ReactNode;
  index?: string;
  icon?: keyof typeof icons;
  style: CSSProperties;
  captionIndent?: number;
  compact?: boolean;
  tone?: "light" | "dark";
}) {
  const Icon = icons[icon];
  return (
    <figure
      data-layer={layer}
      data-component="EvidenceFrame"
      data-replaceable="true"
      data-label={label}
      className="absolute"
      style={style}
    >
      <div
        data-layer={`${layer} / Image frame`}
        className="absolute inset-0 overflow-hidden border border-sage bg-[#E6E2DA]"
      >
        <div
          className={cx(
            "absolute border border-dashed border-sage/70",
            compact ? "inset-3" : "inset-6",
          )}
        />
        <div
          className={cx(
            "absolute inset-0 flex flex-col items-center justify-center text-center",
            compact ? "gap-2 px-6" : "gap-3.5 px-12",
          )}
        >
          <span
            className={cx(
              "flex items-center justify-center rounded-full border border-sage bg-ivory/80 text-warmgrey",
              compact ? "h-8 w-8" : "h-11 w-11",
            )}
          >
            <Icon size={compact ? 16 : 20} />
          </span>
          <span
            className={cx(
              "max-w-[420px] font-medium uppercase tracking-[0.18em] text-charcoal/75",
              compact ? "text-[10px] leading-[1.45]" : "text-[11.5px] leading-[1.55]",
            )}
          >
            {label}
          </span>
          {!compact && (
            <span className="text-[10px] uppercase tracking-[0.16em] text-warmgrey/80">
              Original artifact · Replace image
            </span>
          )}
        </div>
      </div>
      <figcaption
        className={cx(
          "absolute left-0 right-0 top-full mt-2.5 text-[11.5px] leading-[1.45]",
          tone === "light" ? "text-warmgrey" : "text-sage",
        )}
        style={{ paddingLeft: captionIndent }}
      >
        {index && <span className="mr-2 font-serif text-[13px] text-ochre">{index}</span>}
        {caption}
        {note && <span className="mt-0.5 block text-[10.5px] italic opacity-80">{note}</span>}
      </figcaption>
    </figure>
  );
}

/** Values in square brackets render as visibly pending fields. */
export function PendingValue({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-dashed border-ochre/80 bg-ivory/60 px-2 py-0.5 text-[10.5px] font-semibold tracking-[0.1em] text-[#8a6a3d]">
      <span className="h-1.5 w-1.5 rounded-full bg-ochre" />
      {children}
    </span>
  );
}

export function PendingModule({
  layer,
  label,
  status = "Pending",
  fields,
  footnote,
  style,
  className,
}: {
  layer: string;
  label: string;
  status?: string;
  fields: { label: string; value: string }[];
  footnote?: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      data-layer={layer}
      data-component="PendingModule"
      className={cx("absolute border border-sage bg-sand", className)}
      style={style}
    >
      <div className="flex items-center justify-between border-b border-sage/70 px-5 py-3.5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal">
          {label}
        </span>
        <span className="text-[10px] uppercase tracking-[0.16em] text-[#8a6a3d]">{status}</span>
      </div>
      <dl className="px-5">
        {fields.map((f) => (
          <div
            key={f.label}
            data-layer={`Field / ${f.label}`}
            className="border-b border-charcoal/10 py-2.5 last:border-b-0"
          >
            <dt className="text-[12px] leading-[1.35] text-charcoal/80">{f.label}</dt>
            <dd className="mt-1.5">
              {f.value.startsWith("[") ? (
                <PendingValue>{f.value}</PendingValue>
              ) : (
                <span className="text-[12.5px] font-semibold leading-[1.4] text-forest">
                  {f.value}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      {footnote && (
        <div className="border-t border-sage/70 px-5 py-3 text-[10.5px] italic leading-[1.45] text-warmgrey">
          {footnote}
        </div>
      )}
    </div>
  );
}

/** Horizontal sequence of numbered diagram nodes with directional chevrons. */
export function FlowSteps({
  steps,
  tone = "light",
  highlightLast = false,
}: {
  steps: string[];
  tone?: "light" | "dark";
  highlightLast?: boolean;
}) {
  const n = steps.length;
  const light = tone === "light";
  return (
    <div
      data-component="FlowSteps"
      className="relative grid"
      style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
    >
      <div
        className={cx("absolute top-[14px] h-px", light ? "bg-charcoal/30" : "bg-ivory/30")}
        style={{ left: 14, right: `calc(${100 / n}% - 14px)` }}
      />
      {steps.slice(0, -1).map((s, i) => (
        <svg
          key={`chev-${s}`}
          viewBox="0 0 8 10"
          width={7}
          height={9}
          className={cx("absolute top-[10px]", light ? "text-charcoal/50" : "text-ivory/50")}
          style={{ left: `calc(${((i + 0.5) / n) * 100}% + 11px)` }}
        >
          <path d="M1 1l5 4-5 4" fill="none" stroke="currentColor" strokeWidth={1.2} />
        </svg>
      ))}
      {steps.map((s, i) => {
        const hi = highlightLast && i === n - 1;
        return (
          <div
            key={s}
            data-component="DiagramNode"
            data-layer={`Step / ${s}`}
            className="relative pr-3"
          >
            <span
              className={cx(
                "flex h-7 w-7 items-center justify-center rounded-full border font-serif text-[12px]",
                hi
                  ? "border-ochre bg-ochre text-ivory"
                  : light
                    ? "border-forest bg-ivory text-forest"
                    : "border-ivory bg-forest text-ivory",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              className={cx(
                "mt-3 text-[11.5px] font-medium uppercase leading-[1.35] tracking-[0.14em]",
                hi ? "text-[#8a6a3d]" : light ? "text-charcoal" : "text-ivory",
              )}
            >
              {s}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export const CASE02_FOOTER = "Case 02 — Digital Banker / Making Human-Centred AI Measurable";
export const CASE03_FOOTER = "Case 03 — Behavioral Design / Creating Safer Reporting Pathways";
export const CASE04_FOOTER =
  "Case 04 — Alimarket / Designing Autonomy Across a Distribution Ecosystem";
