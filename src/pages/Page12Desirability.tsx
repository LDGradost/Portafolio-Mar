import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE02_FOOTER } from "../design-system/evidence";
import { spanW } from "../design-system/grid";

const SCALE = 20;
const scores = [
  { label: "Initial concept", value: 12, fill: "bg-sage" },
  { label: "After iterations", value: 16, fill: "bg-forest" },
];
const dimensions = [
  "Intention to use",
  "Perceived usefulness",
  "Conversational appropriateness",
  "Trust",
];

const simpleCriteria = [
  {
    n: "2",
    title: "Perceived usefulness",
    prompt: "“How useful would this solution be in addressing your need?”",
  },
  {
    n: "3",
    title: "Conversational fit",
    prompt: "“Should this be solved through a conversation?”",
  },
  { n: "4", title: "Trust in the solution", prompt: "“How much do you trust this solution?”" },
];

const trafficLight = [
  {
    score: "15–20",
    decision: "GREEN · ADVANCE",
    box: "border-[#2D5F4C]/60 bg-[#EAF1EE]",
    badge: "bg-[#2D5F4C]",
    text: "text-[#234C3C]",
    icon: "advance" as const,
  },
  {
    score: "10–14",
    decision: "AMBER · ITERATE",
    box: "border-[#C49A62]/85 bg-[#FAF3E5]",
    badge: "bg-[#B88635]",
    text: "text-[#845E21]",
    icon: "iterate" as const,
  },
  {
    score: "Below 10",
    decision: "RED · REFRAME",
    box: "border-[#A84432]/65 bg-[#F8EAE7]",
    badge: "bg-[#A84432]",
    text: "text-[#8A3425]",
    icon: "reframe" as const,
  },
];

function DecisionIcon({ kind }: { kind: "advance" | "iterate" | "reframe" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={15}
      height={15}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {kind === "advance" && <path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" />}
      {kind === "iterate" && (
        <>
          <path d="M12.5 7.5A4.5 4.5 0 1 1 11 4.2" />
          <path d="M11 2.2v2.3H8.7" />
        </>
      )}
      {kind === "reframe" && <path d="M11.5 11.5 4.5 4.5M4.5 9.5v-5h5" />}
    </svg>
  );
}

export default function Page12Desirability() {
  return (
    <Page id="p12" name="12 — Banquero Digital: Desirability Traffic-Light Framework">
      <Area col={1} span={8} top={64} layer="SLIDE_12_REAL_DESIRABILITY_FRAMEWORK_PLACEHOLDER">
        <div
          className="flex flex-col justify-between"
          style={{ width: spanW(8) - 24, height: 660 }}
        >
          <div>
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ochre">
              Evaluation instrument · 0–20 scale
            </div>
            <h3 className="mt-1 font-serif text-[28px] leading-tight text-forest">
              Desirability Traffic-Light Framework
            </h3>
          </div>

          <div className="space-y-2.5">
            {/* Criterion 1 with OR split */}
            <div className="grid grid-cols-[216px_1fr] items-stretch gap-4 rounded-[4px] border border-sage/80 bg-sand/75 p-3.5">
              <div className="flex flex-col justify-center border-r border-charcoal/12 pr-3">
                <div className="text-[13px] font-semibold leading-[1.3] text-forest">
                  1. Intention to use / behavior
                </div>
                <p className="mt-1.5 text-[11px] leading-[1.35] text-charcoal/75">
                  Depending on maturity — alternatives, not added together.
                </p>
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2.5">
                <div className="h-full rounded-[3px] border border-charcoal/12 bg-white/90 px-3 py-2.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.08em] text-forest">
                      Concept exploration
                    </span>
                    <span className="shrink-0 text-[9.5px] font-semibold text-ochre">
                      Rating: 1–5
                    </span>
                  </div>
                  <div className="mt-0.5 text-[10.5px] text-charcoal/70">
                    User evaluates the idea
                  </div>
                  <div className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-forest">
                    Ask: Intention to use
                  </div>
                  <div className="mt-0.5 text-[11px] italic leading-[1.3] text-charcoal">
                    “If this solution existed today, would you use it?”
                  </div>
                </div>

                <span className="text-[10.5px] font-semibold tracking-[0.1em] text-forest">OR</span>

                <div className="h-full rounded-[3px] border border-charcoal/12 bg-white/90 px-3 py-2.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.08em] text-forest">
                      Prototyped concept
                    </span>
                    <span className="shrink-0 text-[9.5px] font-semibold text-ochre">
                      Rating: 1–5
                    </span>
                  </div>
                  <div className="mt-0.5 text-[10.5px] text-charcoal/70">
                    User experiences the solution
                  </div>
                  <div className="mt-2 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-forest">
                    Observe: Observable behavior
                  </div>
                  <div className="mt-0.5 text-[11px] italic leading-[1.3] text-charcoal">
                    “How does the user interact with the solution?”
                  </div>
                </div>
              </div>
            </div>

            {/* Criteria 2–4 */}
            {simpleCriteria.map((c) => (
              <div
                key={c.n}
                className="grid grid-cols-[216px_1fr] items-center gap-4 rounded-[4px] border border-sage/80 bg-sand/75 px-3.5 py-3"
              >
                <div className="border-r border-charcoal/12 pr-3">
                  <div className="text-[13px] font-semibold leading-[1.3] text-forest">
                    {c.n}. {c.title}
                  </div>
                  <div className="mt-0.5 text-[10.5px] font-medium text-ochre">Rating: 1–5</div>
                </div>
                <div className="pl-1 text-[13px] italic text-charcoal/85">{c.prompt}</div>
              </div>
            ))}
          </div>

          {/* Traffic-light decision */}
          <div>
            <div className="mb-2.5 text-[12px] font-semibold text-forest">
              Add the four 1–5 ratings → apply the traffic-light decision
            </div>
            <div className="grid grid-cols-3 gap-3.5">
              {trafficLight.map((t) => (
                <div
                  key={t.score}
                  className={`flex items-center gap-3.5 rounded-[4px] border px-4 py-3 ${t.box}`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ivory ${t.badge}`}
                  >
                    <DecisionIcon kind={t.icon} />
                  </span>
                  <div>
                    <div className="font-serif text-[22px] leading-none text-charcoal">
                      {t.score}
                    </div>
                    <div className={`mt-1 text-[10.5px] font-semibold tracking-[0.1em] ${t.text}`}>
                      {t.decision}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2.5 text-[11.5px] text-warmgrey">
          Original desirability scoring model · 0–20 scale · Original metric developed by the author
        </div>
      </Area>
      <Area col={1} span={7} top={772} layer="Explanation">
        <p className="text-[14.5px] leading-[1.55] text-charcoal/80">
          An original model for scoring the desirability of early-stage conversational concepts on a
          0–20 scale, used to compare concepts across design iterations.
        </p>
      </Area>

      <Area col={9} span={4} top={64} layer="Text stack">
        <SectionLabel>04 / Desirability</SectionLabel>
        <div className="mt-7">
          <Headline size={46}>Scoring Desirability Across Iterations</Headline>
        </div>
      </Area>

      <Area col={9} span={4} top={290} layer="Chart / Desirability scores">
        <Caption className="text-charcoal">
          Reported desirability scores across design iterations
        </Caption>
        <div className="mt-5 space-y-5">
          {scores.map((s) => (
            <div key={s.label} data-layer={`Bar / ${s.label}`}>
              <div className="flex items-baseline justify-between">
                <span className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-charcoal">
                  {s.label}
                </span>
                <span className="font-serif text-[22px] leading-none text-forest tabular-nums">
                  {s.value} <span className="text-[15px] text-warmgrey">/ {SCALE}</span>
                </span>
              </div>
              <div className="relative mt-2 h-4 w-full bg-sand">
                <div
                  className={`absolute inset-y-0 left-0 ${s.fill}`}
                  style={{ width: `${(s.value / SCALE) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div data-layer="Axis / 0–20" className="relative mt-2 h-6 border-t border-charcoal/30">
          {[0, 5, 10, 15, 20].map((t) => (
            <span
              key={t}
              className="absolute top-1 -translate-x-1/2 text-[10.5px] tabular-nums text-warmgrey first:translate-x-0 last:-translate-x-full"
              style={{ left: `${(t / SCALE) * 100}%` }}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          data-layer="Observed change"
          className="mt-6 flex items-end gap-4 border-t border-charcoal/15 pt-4"
        >
          <span className="font-serif text-[72px] leading-[0.85] tracking-[-0.02em] text-ochre">
            +4
          </span>
          <span className="pb-1">
            <span className="block text-[12px] font-medium uppercase tracking-[0.16em] text-charcoal">
              Observed change · points
            </span>
            <span className="mt-1 block text-[11px] italic leading-[1.4] text-warmgrey">
              Scores reported across iterations; not a controlled comparison or test of
              significance.
            </span>
          </span>
        </div>
      </Area>

      <Area col={9} span={4} top={666} layer="Desirability dimensions">
        <Caption>Early-stage desirability dimensions</Caption>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-charcoal/15 pt-3">
          {dimensions.map((d, i) => (
            <li
              key={d}
              className="flex items-baseline gap-2.5 text-[13.5px] leading-[1.3] text-charcoal"
            >
              <span className="font-serif text-[13px] text-ochre">
                {String(i + 1).padStart(2, "0")}
              </span>
              {d}
            </li>
          ))}
        </ul>
      </Area>

      <PageFooter left={CASE02_FOOTER} folio="12" />
    </Page>
  );
}
