import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
  Subhead,
} from "../design-system/components";
import { CASE02_FOOTER } from "../design-system/evidence";
import { colX } from "../design-system/grid";

const layers = [
  {
    n: "01",
    name: "Research framework",
    q: "When does human research enter AI development?",
    spec: "5 stages · Explore → Analyze",
    page: "p. 10",
  },
  {
    n: "02",
    name: "Experience principles",
    q: "What should a good conversation feel like?",
    spec: "4 principles · 12 criteria",
    page: "p. 11",
  },
  {
    n: "03",
    name: "Desirability scoring",
    q: "Is the experience becoming more desirable?",
    spec: "0–20 scale · 4 dimensions",
    page: "p. 12",
  },
];

export default function Page13BanqueroReflection() {
  const panelLeft = colX(9) - 12;
  return (
    <Page id="p13" name="13 — Banquero Digital: Synthesis & Reflection">
      <div
        data-layer="Panel / Forest"
        className="absolute inset-y-0 right-0 bg-forest"
        style={{ left: panelLeft }}
      />

      <Area col={1} span={7} top={64} layer="Text stack">
        <SectionLabel>05 / Synthesis &amp; Reflection</SectionLabel>
        <div className="mt-7">
          <Headline size={52}>From Principles to a Measurable Experience</Headline>
        </div>
        <div className="mt-5 max-w-[640px]">
          <Subhead size={22}>
            Three connected frameworks gave human-centred qualities a place in how conversational AI
            is evaluated.
          </Subhead>
        </div>
      </Area>

      <Area col={1} span={7} top={340} layer="Diagram / Measurement system">
        <div className="flex items-baseline justify-between pb-3">
          <Caption>Fig. 05.1 — A measurement system for human-centred AI</Caption>
          <Caption>Question it answers</Caption>
        </div>
        {layers.map((l, i) => (
          <div
            key={l.n}
            data-component="DiagramNode"
            data-layer={`Layer / ${l.name}`}
            className="relative grid h-[128px] grid-cols-[64px_1fr_1fr] items-center gap-6 border-t border-charcoal/15"
          >
            <span className="font-serif text-[52px] leading-none tracking-[-0.02em] text-charcoal/20">
              {l.n}
            </span>
            <div>
              <div className="font-serif text-[26px] leading-[1.1] text-charcoal">{l.name}</div>
              <div className="mt-2 flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-warmgrey">
                <span className={`h-2 w-2 rounded-full ${i === 2 ? "bg-ochre" : "bg-forest"}`} />
                {l.spec}
                <span className="text-ochre">{l.page}</span>
              </div>
            </div>
            <p className="font-serif text-[19px] italic leading-[1.3] text-forest">{l.q}</p>
          </div>
        ))}
        <div className="h-px bg-charcoal/15" />
      </Area>

      <Area col={9} span={4} top={64} layer="Reported score">
        <Caption tone="dark">Reported desirability</Caption>
        <div className="mt-4 flex items-baseline gap-4 font-serif leading-none text-ivory">
          <span className="text-[64px] text-ivory/45">12</span>
          <span className="text-[30px] text-ochre">→</span>
          <span className="text-[64px]">16</span>
          <span className="text-[20px] text-sage">/ 20</span>
        </div>
        <p className="mt-3 text-[11px] italic leading-[1.45] text-sage/80">
          Across design iterations · reported scores, not a controlled comparison.
        </p>
      </Area>

      <Area col={9} span={4} top={330} layer="Reflection">
        <div className="mb-4 h-px w-10 bg-ochre" />
        <Caption tone="dark" className="mb-4">
          Reflection
        </Caption>
        <p className="font-serif text-[25px] leading-[1.3] text-ivory">
          Making human-centred AI measurable is not about reducing experience to a score. It is
          about giving teams a shared language for what people need from a conversation — and
          keeping that question present as the technology evolves.
        </p>
      </Area>
      <Area col={9} span={4} top={700} layer="Foresight note">
        <p className="text-[13.5px] leading-[1.55] text-sage">
          As conversational AI becomes part of everyday services, the criteria used to evaluate it
          shape which futures get built.
        </p>
      </Area>

      <PageFooter left={CASE02_FOOTER} span={7} />
      <PageFooter left="End of case 02" folio="13" tone="dark" col={9} span={4} />
    </Page>
  );
}
