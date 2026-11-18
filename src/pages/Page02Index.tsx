import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { projects } from "../content";
import { Motif } from "../design-system/motifs";

const movements = [
  "Understanding existing systems",
  "Challenging assumptions",
  "Envisioning preferable futures",
  "Investigating human behaviour",
  "Translating insights into design",
  "Supporting implementation",
];

export default function Page02Index() {
  return (
    <Page id="p02" name="02 — Portfolio Index">
      <Area col={1} span={4} top={64} layer="Section label">
        <SectionLabel>00 / Selected Work</SectionLabel>
      </Area>
      <Area col={1} span={4} top={118} layer="Headline">
        <Headline size={62} as="h2">
          Selected Work<span className="text-ochre">.</span>
        </Headline>
      </Area>
      <Area col={1} span={3} top={208} layer="Supporting text">
        <p className="text-[17px] font-light leading-[1.5] text-charcoal/80">
          Four projects exploring the intersection of human behaviour, emerging technologies, and
          systemic transformation.
        </p>
      </Area>

      <Area col={1} span={3} top={470} layer="Practice / six movements">
        <Caption>A practice in six movements</Caption>
        <ol className="relative mt-5 space-y-[15px]">
          <span className="absolute bottom-[7px] left-[3.5px] top-[7px] w-px bg-charcoal/15" />
          {movements.map((m, i) => (
            <li key={m} className="relative flex items-center gap-4 text-[13.5px] text-charcoal/80">
              <span
                className={`relative h-2 w-2 rounded-full ${i === movements.length - 1 ? "bg-ochre" : "border border-forest bg-ivory"}`}
              />
              <span className="w-5 font-serif text-[14px] text-warmgrey">
                {String(i + 1).padStart(2, "0")}
              </span>
              {m}
            </li>
          ))}
        </ol>
      </Area>

      <Area col={5} span={8} top={70} layer="Project list">
        <div className="grid grid-cols-[100px_1fr_196px_80px_74px] gap-x-6 pb-3">
          <Caption>No.</Caption>
          <Caption>Project</Caption>
          <Caption>Disciplines</Caption>
          <span />
          <Caption className="text-right">Pages</Caption>
        </div>
        {projects.map((p) => (
          <div
            key={p.number}
            data-layer={`Project / ${p.number} ${p.name}`}
            className="grid h-[178px] grid-cols-[100px_1fr_196px_80px_74px] items-start gap-x-6 border-t border-charcoal/15 pt-6"
          >
            <div
              className={`font-serif text-[80px] leading-[0.82] tracking-[-0.03em] tabular-nums ${p.complete ? "text-forest" : "text-charcoal/22"}`}
            >
              {p.number}
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ochre">
                {p.number} / {p.name}
              </div>
              <div className="mt-2 font-serif text-[28px] leading-[1.1] text-charcoal">
                {p.title}
              </div>
              <p className="mt-2 max-w-[440px] text-[14px] leading-[1.5] text-warmgrey">
                {p.description}
              </p>
            </div>
            <ul className="space-y-1.5 pt-1 text-[12.5px] text-charcoal/75">
              {p.disciplines.map((d) => (
                <li key={d}>{d}</li>
              ))}
              <li className="flex items-center gap-2 pt-2 text-[10.5px] uppercase tracking-[0.14em] text-warmgrey">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${p.complete ? "bg-forest" : "border border-warmgrey"}`}
                />
                {p.status ?? (p.complete ? "Complete case study" : "In preparation")}
              </li>
            </ul>
            <Motif kind={p.motif} active={p.complete} />
            <div
              data-layer="Page number (editable)"
              className={`text-right font-serif text-[24px] leading-none ${p.complete ? "text-charcoal" : "text-warmgrey"}`}
            >
              {p.pages}
            </div>
          </div>
        ))}
      </Area>

      <PageFooter left="Research · Strategy · Innovation" folio="02" />
    </Page>
  );
}
