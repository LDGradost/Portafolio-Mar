import { Area, Caption, Page, PageFooter, SectionLabel } from "../design-system/components";
import { Motif } from "../design-system/motifs";
import { projects, type SectionKey } from "../content";

/** Section divider introducing a case study; content comes from src/content.ts. */
function SectionCover({ section }: { section: SectionKey }) {
  const p = projects.find((x) => x.key === section)!;
  return (
    <Page id={`s-${p.key}`} name={`Section — ${p.number} ${p.name}`} background="forest">
      <Area col={1} span={6} top={64} layer="Section label">
        <SectionLabel tone="dark">
          Case {p.number} / {String(projects.length).padStart(2, "0")}
        </SectionLabel>
      </Area>
      <Area col={9} span={4} top={64} layer="Running head" className="text-right">
        <Caption tone="dark">Selected Work</Caption>
      </Area>

      <Area col={1} span={7} top={118} layer="Case numeral">
        <div className="font-serif text-[280px] leading-[0.78] tracking-[-0.04em] text-ivory/12">
          {p.number}
        </div>
      </Area>
      <Area col={1} span={7} top={384} layer="Case title">
        <div className="text-[34px] font-medium uppercase leading-none tracking-[0.14em] text-ochre">
          {p.name}
        </div>
        <h2 className="mt-4 font-serif text-[80px] font-normal leading-[1.02] tracking-[-0.02em] text-ivory text-balance">
          {p.title}
          <span className="text-ochre">.</span>
        </h2>
        <p className="mt-6 max-w-[640px] text-[20px] font-light leading-[1.4] text-sage">
          {p.description}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] uppercase tracking-[0.16em] text-ivory/60">
          {p.disciplines.map((d, i) => (
            <span key={d} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-ochre" />}
              {d}
            </span>
          ))}
        </div>
        {p.context && <div className="mt-3 text-[12.5px] text-ivory/45">{p.context}</div>}
      </Area>

      <Area col={9} span={4} top={112} layer="Motif">
        <div className="flex justify-end">
          <Motif kind={p.motif} active tone="dark" size={300} />
        </div>
      </Area>
      <Area col={9} span={4} top={472} layer="Chapters">
        <Caption tone="dark">In this case</Caption>
        <ol className="mt-3">
          {p.chapters.map((c) => (
            <li key={c.page} className="flex items-baseline gap-5 border-t border-ivory/15 py-3">
              <span className="w-7 font-serif text-[17px] text-ochre">{c.page}</span>
              <span className="text-[14.5px] text-ivory/85">{c.title}</span>
            </li>
          ))}
        </ol>
      </Area>

      <PageFooter folio={`pp. ${p.pages}`} tone="dark" />
    </Page>
  );
}

export const MibancoCover = () => <SectionCover section="mibanco" />;
export const BanqueroCover = () => <SectionCover section="banquero" />;
export const BehavioralCover = () => <SectionCover section="behavioral" />;
export const AlimarketCover = () => <SectionCover section="alimarket" />;
