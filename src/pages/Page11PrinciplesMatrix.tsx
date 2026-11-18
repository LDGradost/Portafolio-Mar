import { useState } from "react";
import { Area, Body, Headline, Page, PageFooter, SectionLabel } from "../design-system/components";
import { CASE02_FOOTER } from "../design-system/evidence";
import { spanW } from "../design-system/grid";

type TabKey = "principles" | "pre" | "post";
type ScoreOption = "0" | "1" | "2" | "3" | "N/A";
const SCORE_OPTIONS: ScoreOption[] = ["0", "1", "2", "3", "N/A"];

const matrixRows = [
  {
    principle: "Empathy",
    criteria: [
      { name: "Cognitive empathy", desc: "Understands the user’s emotion." },
      { name: "Affective empathy", desc: "Responds with emotional attunement." },
      { name: "Behavioral empathy", desc: "Shows willingness to help." },
    ],
  },
  {
    principle: "Proactivity",
    criteria: [
      {
        name: "Anticipation",
        desc: "Identifies predictable needs before the user states them explicitly.",
      },
      {
        name: "Relevance",
        desc: "Intervenes proactively ONLY when it adds value to the user’s goal or context.",
      },
      {
        name: "Actionability",
        desc: "Proposes a next step, alternative or concrete action to help the user move forward.",
      },
    ],
  },
  {
    principle: "Naturalness",
    criteria: [
      {
        name: "Fluency",
        desc: "Maintains coherent, continuous conversation without unnecessarily rigid interactions.",
      },
      {
        name: "Language appropriateness",
        desc: "Uses clear language aligned with the user’s context, channel and way of speaking.",
      },
      {
        name: "Conversational adaptability",
        desc: "Adjusts responses to what the user says, without forcing a rigid structure.",
      },
    ],
  },
  {
    principle: "Accessibility",
    criteria: [
      {
        name: "Comprehensibility",
        desc: "Communicates clearly, simply and in an easy-to-interpret way.",
      },
      {
        name: "Interaction flexibility",
        desc: "Allows different ways to express the same need and tolerates communication variations.",
      },
      {
        name: "Inclusion",
        desc: "Usable by people with different abilities, knowledge and contexts.",
      },
    ],
  },
];

type MetricType = "Performance" | "Design" | "Business" | "Experience";

type MetricRow = {
  type: MetricType;
  metric: string;
  method: string;
};

const preReleaseGroups: { objective: string; rows: MetricRow[] }[] = [
  {
    objective: "#1 in Experience",
    rows: [
      { type: "Performance", metric: "Understanding", method: "Understanding matrix" },
      { type: "Performance", metric: "Quality", method: "Gen AI evaluation matrix" },
      {
        type: "Design",
        metric: "Usability score",
        method:
          "Efficiency, effectiveness, and satisfaction. Composite score: task completion + SEQ + SUS / UMUX / UMUX Lite",
      },
      {
        type: "Design",
        metric: "Desirability score",
        method: "Desirability traffic-light framework",
      },
      {
        type: "Design",
        metric: "Capabilities & performance",
        method: "Heuristics / Checklist",
      },
      { type: "Design", metric: "Principles", method: "Heuristics / Checklist" },
    ],
  },
];

const postReleaseGroups: { objective: string; rows: MetricRow[] }[] = [
  {
    objective: "Improved % Efficiency",
    rows: [
      {
        type: "Business",
        metric: "Containment / self-service",
        method: "Resolutions / total conversations",
      },
      {
        type: "Business",
        metric: "Escalation rate",
        method: "Escalated conversations / total",
      },
      {
        type: "Business",
        metric: "Abandonment rate",
        method: "No resolution or escalation / total",
      },
      { type: "Business", metric: "Sales", method: "Total sales in the channel" },
      {
        type: "Business",
        metric: "Payment commitment",
        method: "Total payment commitments in the channel",
      },
      { type: "Business", metric: "Adoption", method: "Growth in channel usage" },
    ],
  },
  {
    objective: "#1 in Experience",
    rows: [
      { type: "Experience", metric: "Overall NPS", method: "Survey" },
      { type: "Experience", metric: "NPS attributes", method: "Survey" },
      { type: "Experience", metric: "Perceived resolution", method: "Survey" },
      { type: "Experience", metric: "Recontact", method: "TBD" },
      {
        type: "Performance",
        metric: "Monitoring",
        method: "Understanding & hallucination sampling · Gen AI evaluation matrix",
      },
    ],
  },
];

const badgeStyle: Record<MetricType, string> = {
  Performance: "bg-forest text-ivory border border-forest",
  Design: "bg-ochre/20 text-[#7d5d33] border border-ochre/60",
  Business: "bg-sage/35 text-forest border border-sage",
  Experience: "bg-sand text-charcoal border border-charcoal/20",
};

function MetricsTable({
  groups,
  compact = false,
}: {
  groups: { objective: string; rows: MetricRow[] }[];
  compact?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-charcoal/15 bg-white/75">
      <div className="grid grid-cols-[240px_170px_320px_1fr] border-b border-charcoal/15 bg-sand/75 px-6 py-2.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal/75">
        <span>Key Objective</span>
        <span>Metric Type</span>
        <span>Metric</span>
        <span>Measurement Method</span>
      </div>
      {groups.map((group, gi) => (
        <div
          key={group.objective}
          className={`grid grid-cols-[240px_1fr] ${gi > 0 ? "border-t border-charcoal/20" : ""}`}
        >
          <div className="flex items-center border-r border-charcoal/12 bg-sand/30 px-6 py-3 font-serif text-[20px] leading-[1.2] text-forest">
            {group.objective}
          </div>
          <div className="divide-y divide-charcoal/10">
            {group.rows.map((row) => (
              <div
                key={row.metric}
                className={`grid grid-cols-[170px_320px_1fr] items-center px-6 ${
                  compact ? "py-[9.5px]" : "py-4"
                }`}
              >
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-0.5 text-[10.5px] font-medium tracking-[0.04em] ${badgeStyle[row.type]}`}
                  >
                    {row.type}
                  </span>
                </div>
                <div className="pr-4 text-[13px] font-semibold text-charcoal">{row.metric}</div>
                <div className="text-[12.5px] leading-[1.35] text-charcoal/80">{row.method}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Page11PrinciplesMatrix() {
  const [tab, setTab] = useState<TabKey>("principles");
  const [scores, setScores] = useState<Record<string, ScoreOption>>({});

  const setCriterionScore = (name: string, val: ScoreOption) => {
    setScores((prev) => ({
      ...prev,
      [name]: prev[name] === val ? (undefined as unknown as ScoreOption) : val,
    }));
  };

  const scoredEntries = Object.values(scores).filter(Boolean);
  const numericScores = scoredEntries.filter((v) => v !== "N/A").map(Number);
  const earned = numericScores.reduce((a, b) => a + b, 0);
  const maxPossible = numericScores.length * 3;

  return (
    <Page id="p11" name="11 — Banquero Digital: Experience Principles Matrix">
      <Area col={1} span={7} top={64} layer="Text stack">
        <SectionLabel>03 / Experience Principles</SectionLabel>
        <div className="mt-7">
          <Headline size={48}>Defining What a Good Conversation Feels Like</Headline>
        </div>
      </Area>
      <Area col={9} span={4} top={72} layer="Explanation">
        <Body size={14.5}>
          <p>
            Drawing on psychological theory and design research, four experience principles
            translate abstract qualities of conversation into criteria that product teams can
            evaluate. Each principle is assessed through three evaluation criteria.
          </p>
        </Body>
      </Area>

      <Area col={1} span={12} top={222} layer="Interactive evaluation tabs">
        <div style={{ width: spanW(12) }}>
          {/* Tab bar */}
          <div className="flex items-center justify-between border-b border-charcoal/15 pb-3">
            <div className="flex items-center gap-2" role="tablist" aria-label="Evaluation views">
              {(
                [
                  ["principles", "Experience Principles"],
                  ["pre", "Pre-Release Metrics"],
                  ["post", "Post-Release Metrics"],
                ] as [TabKey, string][]
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={tab === key}
                  onClick={() => setTab(key)}
                  className={`rounded-full px-4 py-1.5 text-[12px] font-medium tracking-[0.04em] transition-colors ${
                    tab === key
                      ? "bg-forest text-ivory"
                      : "border border-charcoal/15 bg-sand/60 text-charcoal/75 hover:bg-sand hover:text-charcoal"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <span className="text-[12.5px] italic text-warmgrey">
              {tab === "principles" &&
                "Heuristics / Checklist — assess observable conversational behavior against 12 criteria."}
              {tab === "pre" && "Is the solution ready to go into production?"}
              {tab === "post" && "How is the solution performing in production?"}
            </span>
          </div>

          {/* Tab 1: Experience Principles checklist */}
          {tab === "principles" && (
            <div className="mt-4 flex flex-col justify-between" style={{ height: 556 }}>
              <div className="space-y-2.5">
                {matrixRows.map((row, idx) => (
                  <div
                    key={row.principle}
                    className="grid grid-cols-[172px_repeat(3,minmax(0,1fr))] items-stretch gap-5"
                  >
                    <div
                      className={`flex items-center rounded-[4px] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] ${
                        idx === 0
                          ? "bg-forest text-ivory"
                          : "border border-sage/80 bg-sand text-forest"
                      }`}
                    >
                      {row.principle}
                    </div>
                    {row.criteria.map((c) => {
                      const current = scores[c.name];
                      return (
                        <div
                          key={c.name}
                          className="flex flex-col justify-between border-t border-charcoal/12 py-2"
                        >
                          <div>
                            <div className="text-[12.5px] font-semibold leading-[1.3] text-forest">
                              {c.name}
                            </div>
                            <p className="mt-1 text-[11.5px] leading-[1.32] text-charcoal/75">
                              {c.desc}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center gap-1">
                            {SCORE_OPTIONS.map((opt) => {
                              const active = current === opt;
                              return (
                                <button
                                  key={opt}
                                  type="button"
                                  onClick={() => setCriterionScore(c.name, opt)}
                                  aria-pressed={active}
                                  className={`rounded border px-2 py-0.5 text-[10px] font-medium tracking-[0.04em] transition-colors ${
                                    active
                                      ? opt === "N/A"
                                        ? "border-charcoal bg-charcoal text-ivory"
                                        : "border-forest bg-forest text-ivory"
                                      : "border-charcoal/15 bg-white/70 text-charcoal/70 hover:border-forest/50 hover:text-forest"
                                  }`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-[210px_1fr_auto] items-center gap-6 rounded-[4px] border border-sage/80 bg-sand/75 px-5 py-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ochre">
                    Measurement · Checklist
                  </div>
                  <div className="mt-0.5 text-[13.5px] font-semibold text-forest">
                    Evaluation rubric
                  </div>
                </div>
                <div className="text-[11.5px] leading-[1.45] text-charcoal/80">
                  Evaluate the same scenarios/transcripts. Score each criterion:{" "}
                  <strong className="font-semibold text-charcoal">
                    0 Not met / 1 Partly met / 2 Developing / 3 Met · N/A
                  </strong>{" "}
                  when not applicable. For each principle: points earned / applicable maximum, plus
                  conversation evidence and issues.
                </div>
                <div className="border-l border-charcoal/15 pl-5 text-right">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-warmgrey">
                    Checklist score
                  </div>
                  <div className="font-serif text-[24px] leading-none text-forest tabular-nums">
                    {earned} <span className="text-[15px] text-warmgrey">/ {maxPossible}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Pre-Release Metrics */}
          {tab === "pre" && (
            <div className="mt-4">
              <MetricsTable groups={preReleaseGroups} />
            </div>
          )}

          {/* Tab 3: Post-Release Metrics */}
          {tab === "post" && (
            <div className="mt-3">
              <MetricsTable groups={postReleaseGroups} compact />
            </div>
          )}
        </div>
      </Area>

      <PageFooter left={CASE02_FOOTER} folio="11" />
    </Page>
  );
}
