import {
  Area,
  Body,
  Caption,
  Headline,
  ImagePlaceholder,
  Page,
  PageFooter,
  SectionLabel,
  Subhead,
} from "../design-system/components";
import { CASE02_FOOTER } from "../design-system/evidence";
import { colX } from "../design-system/grid";
import contextImage from "../assets/digital-banker-context.jpg";

const architecture = [
  {
    n: "01",
    name: "Research framework",
    q: "When does human research enter AI development?",
    page: "p. 10",
  },
  {
    n: "02",
    name: "Experience principles",
    q: "What should a good conversation feel like?",
    page: "p. 11",
  },
  {
    n: "03",
    name: "Desirability scoring",
    q: "Is the experience becoming more desirable?",
    page: "p. 12",
  },
];

export default function Page09BanqueroChallenge() {
  return (
    <Page id="p09" name="09 — Banquero Digital: The Challenge">
      <ImagePlaceholder
        label="Digital Banker conversational AI context"
        ratio="2 : 3"
        src={contextImage}
        alt="User interacting with a banking conversational assistant on a smartphone"
        objectPosition="60% center"
        className="border-0"
        style={{ left: 0, width: colX(5) - 12, top: 0, bottom: 0 }}
      />

      <Area col={6} span={7} top={64} layer="Text stack">
        <SectionLabel>01 / The Challenge</SectionLabel>
        <div className="mt-7">
          <Headline size={52}>How Do You Measure Whether a Conversation Feels Human?</Headline>
        </div>
        <div className="mt-5 max-w-[700px]">
          <Subhead size={22}>
            Translating empathy, desirability, and human-centred design principles into evaluation
            frameworks for conversational AI.
          </Subhead>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <Body size={15}>
            <p>
              Conversational AI is usually evaluated by what it can do. Whether an interaction feels
              natural, empathetic, or appropriate is harder to observe — and easier to leave out of
              product decisions.
            </p>
            <p>
              This project set out to make those human qualities visible and comparable across the
              AI development lifecycle.
            </p>
          </Body>
          <div className="border-l border-ochre pl-5">
            <Caption>Research question</Caption>
            <p className="mt-3 font-serif text-[21px] italic leading-[1.32] text-forest">
              How might we translate empathy, desirability, and human-centred principles into
              criteria that teams can evaluate as conversational AI evolves?
            </p>
          </div>
        </div>
      </Area>

      <Area col={6} span={7} top={604} layer="Diagram / Case architecture">
        <Caption>Fig. 01.1 — Three connected evaluation frameworks</Caption>
        <div className="relative mt-5 grid grid-cols-3 gap-6">
          <div className="absolute left-[14px] right-[calc(33.3%-14px)] top-[14px] h-px bg-charcoal/30" />
          {architecture.map((a, i) => (
            <div
              key={a.n}
              data-component="DiagramNode"
              data-layer={`Framework / ${a.name}`}
              className="relative"
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border font-serif text-[12px] ${i === 2 ? "border-ochre bg-ochre text-ivory" : "border-forest bg-ivory text-forest"}`}
              >
                {a.n}
              </span>
              <div className="mt-4 font-serif text-[22px] leading-[1.1] text-charcoal">
                {a.name}
              </div>
              <p className="mt-2 text-[13px] leading-[1.45] text-warmgrey">{a.q}</p>
              <div className="mt-3 text-[10.5px] uppercase tracking-[0.16em] text-ochre">
                {a.page}
              </div>
            </div>
          ))}
        </div>
      </Area>

      <PageFooter left={CASE02_FOOTER} folio="09" col={6} span={7} />
    </Page>
  );
}
