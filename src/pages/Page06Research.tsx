import {
  Area,
  Body,
  Caption,
  Headline,
  ImagePlaceholder,
  MIBANCO_FOOTER,
  Page,
  PageFooter,
  SectionLabel,
  Subhead,
} from "../design-system/components";
import { COLORS, colX } from "../design-system/grid";
import fieldResearchPhoto from "../assets/mibanco-field-research.jpg";

const SEGMENTS = [
  { key: "micro", label: "Micro", color: COLORS.forest },
  { key: "small", label: "Small", color: COLORS.sage },
  { key: "medium", label: "Medium", color: COLORS.ochre },
] as const;

const samples = [
  { value: 45, label: "In-depth interviews", counts: { micro: 15, small: 15, medium: 15 } },
  { value: 20, label: "Usability tests", counts: { micro: 10, small: 5, medium: 5 } },
];

const UNIT = 12; // px per session, shared scale across both samples

function DotStrip({ counts }: { counts: Record<string, number> }) {
  return (
    <div className="flex" data-component="DotMatrix">
      {SEGMENTS.map((s) => (
        <div
          key={s.key}
          data-layer={`Segment / ${s.label}`}
          style={{ width: counts[s.key] * UNIT }}
        >
          <div className="flex">
            {Array.from({ length: counts[s.key] }, (_, i) => (
              <span
                key={i}
                className="mr-[4px] h-2 w-2 rounded-full"
                style={{ background: s.color }}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-col whitespace-nowrap border-l border-charcoal/25 pl-1.5 text-[10.5px] leading-[1.35] tracking-[0.08em] text-charcoal/75">
            <span className="uppercase">{s.label}</span>
            <span className="text-[13px] font-semibold tabular-nums text-charcoal">
              {counts[s.key]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const insights = [
  {
    n: "01",
    title: "Digital readiness",
    text: (
      <>
        Entrepreneurs were more comfortable with technology and AI than{" "}
        <strong className="font-semibold">initially expected.</strong>
      </>
    ),
  },
  {
    n: "02",
    title: "Fear of fraud",
    text: (
      <>
        Concerns about <strong className="font-semibold">scams and legitimacy</strong> were major
        barriers to adoption.
      </>
    ),
  },
  {
    n: "03",
    title: "Human reassurance",
    text: (
      <>
        Trusted <strong className="font-semibold">human touchpoints</strong> remained important
        during initial adoption.
      </>
    ),
  },
];

export default function Page06Research() {
  return (
    <Page id="p06" name="06 — Mibanco: Design Research">
      <ImagePlaceholder
        label="Insert real field research photo"
        ratio="1 : 2"
        figure="Fig. 04.2 — Field research"
        src={fieldResearchPhoto}
        alt="Business advisor pointing at handwritten field notes in a Mibanco notebook"
        objectPosition="44% center"
        style={{ left: colX(10) - 12, right: 0, top: 0, bottom: 0 }}
      />

      <Area col={1} span={6} top={64} layer="Section label">
        <SectionLabel>04 / Design Research</SectionLabel>
      </Area>
      <Area col={1} span={9} top={104} layer="Headline">
        <Headline size={56}>
          The Real Barrier Was Trust,
          <br />
          Not Digital Literacy
        </Headline>
      </Area>
      <Area col={1} span={7} top={244} layer="Subhead">
        <Subhead size={22}>
          Research challenged our assumptions about entrepreneurs’ readiness to adopt digital
          banking.
        </Subhead>
      </Area>

      <Area col={1} span={4} top={352} layer="Body">
        <Body size={15}>
          <p>
            I led a research programme involving 45 in-depth interviews, 20 usability tests, and
            shadowing of two ADN business advisors with entrepreneurs across micro, small, and
            medium-sized businesses.
          </p>
          <p>
            Participants demonstrated greater technological familiarity and openness to AI than
            initially expected, but shadowing revealed a manual, notebook-based customer profiling
            process.
          </p>
          <p>
            Their main concern was the possibility of fraud, reflecting the broader context of
            insecurity in Peru.
          </p>
          <p>
            Many wanted to verify the service’s legitimacy through a physical branch before using it
            independently, highlighting the importance of human reassurance during initial adoption.
          </p>
        </Body>
      </Area>

      <Area col={5} span={5} top={352} layer="Research sample">
        <Caption>Fig. 04.1 — Research sample by business size and role</Caption>
        <div className="mt-3 space-y-2.5">
          {samples.map((s) => (
            <div
              key={s.label}
              data-layer={`Sample / ${s.label}`}
              className="border-t border-charcoal/15 pt-3"
            >
              <div className="flex items-end gap-4">
                <span className="font-serif text-[56px] leading-[0.85] tracking-[-0.02em] text-forest tabular-nums">
                  {s.value}
                </span>
                <span className="pb-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-charcoal">
                  {s.label}
                </span>
              </div>
              <div className="mt-3">
                <DotStrip counts={s.counts} />
              </div>
            </div>
          ))}
          <div
            data-layer="Sample / Shadowing"
            className="flex items-end gap-4 border-t border-charcoal/15 pt-3"
          >
            <span className="font-serif text-[56px] leading-[0.85] tracking-[-0.02em] text-forest tabular-nums">
              2
            </span>
            <span className="pb-1.5 text-[12px] font-medium uppercase tracking-[0.16em] text-charcoal">
              Shadowings
            </span>
            <span className="ml-auto flex items-center gap-2.5 pb-1.5">
              <span className="flex gap-[4px]">
                <span className="h-2 w-2 rounded-full border border-charcoal" />
                <span className="h-2 w-2 rounded-full border border-charcoal" />
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.08em] text-charcoal/75">
                ADN business advisors
              </span>
            </span>
          </div>
        </div>
      </Area>

      <Area
        col={1}
        span={9}
        top={742}
        layer="Insights"
        style={{ marginTop: -17, marginBottom: -17 }}
      >
        <div className="flex items-baseline justify-between border-t border-charcoal/80 pt-3">
          <Caption className="text-charcoal">Three research insights</Caption>
          <span className="text-[11px] italic text-warmgrey">
            Qualitative findings from interviews and usability testing.
          </span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-6">
          {insights.map((it) => (
            <div key={it.n} data-component="ResearchCard" data-layer={`Insight / ${it.title}`}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ochre">
                {it.n} / {it.title}
              </div>
              <p className="mt-2 text-[15px] leading-[1.45] text-charcoal">{it.text}</p>
            </div>
          ))}
        </div>
      </Area>

      <PageFooter left={MIBANCO_FOOTER} folio="06" span={9} />
    </Page>
  );
}
