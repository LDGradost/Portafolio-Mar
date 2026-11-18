import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE04_FOOTER } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";
import appHandsPhoto from "../assets/alimarket-app-hands.jpg";
import archetypeImage from "../assets/alimarket-archetype.jpg";

const insights = [
  {
    n: "01",
    title: "The salesperson was part of the service experience",
    text: "Retailers valued the relationship, advice, and familiarity built through repeated visits. Some feared self-service would mean losing it.",
  },
  {
    n: "02",
    title: "Small mistakes carried disproportionate consequences",
    text: "With narrow margins, ordering errors could cause financial losses — making confidence, confirmation, and clear feedback essential.",
  },
  {
    n: "03",
    title: "Accessibility was a condition for adoption",
    text: "Many participants were over 50 and used mid-range phones with small screens, needing readable text, clear progress, and reassurance.",
  },
];

const approach = [
  { value: "50+", label: "Interviews" },
  { value: "4+", label: "Co-creation workshops" },
  { value: "—", label: "Contextual shadowing" },
  { value: "—", label: "Prototype usability evaluations" },
];

export default function Page19AlimarketResearch() {
  return (
    <Page id="p19" name="19 — Alimarket: Research & Human Insights">
      <figure
        data-layer="SLIDE_19_REAL_SELLER_ARCHETYPE"
        className="absolute"
        style={{ left: 0, width: colX(6) - 24, top: 128, height: 375 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-white">
          <img
            src={archetypeImage}
            alt="Sales representative archetype 'La Angustiada' (Maria): worried about losing her job and seeing the app as a competitor"
            className="h-full w-full object-contain"
          />
        </div>
        <figcaption
          className="absolute left-0 right-0 top-full mt-2.5 text-[11.5px] leading-[1.45] text-warmgrey"
          style={{ paddingLeft: 80 }}
        >
          Sales representative archetype “La Angustiada” — worried about losing her role and seeing
          the app as a competitor.
          <span className="mt-0.5 block text-[10.5px] italic opacity-80">
            Original artifact created in Spanish during the Alimarket research process.
          </span>
        </figcaption>
      </figure>

      <figure
        data-layer="SLIDE_19_APP_IN_HANDS"
        className="absolute"
        style={{ left: colX(6), width: spanW(3), top: 64, height: 572 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-sand">
          <img
            src={appHandsPhoto}
            alt="Alimarket mobile app showing the shopping cart in the hands of a small grocery store owner"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center center" }}
          />
        </div>
        <figcaption className="absolute left-0 right-0 top-full mt-2.5 text-[11.5px] leading-[1.45] text-warmgrey">
          Alimarket app in the hands of a small grocery store owner during field validation.
        </figcaption>
      </figure>

      <Area col={1} span={8} top={734} layer="Research approach">
        <div className="flex items-baseline justify-between border-t border-charcoal/80 pt-2.5">
          <Caption className="text-charcoal">Research approach · across project phases</Caption>
          <span className="text-[11px] italic text-warmgrey">
            Approximate counts — retrospective estimates, not verified sample totals.
          </span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-6">
          {approach.map((a) => (
            <div key={a.label} className="flex items-baseline gap-2.5">
              {a.value !== "—" && (
                <span className="font-serif text-[34px] leading-none text-forest">{a.value}</span>
              )}
              {a.value === "—" && (
                <span className="h-2 w-2 shrink-0 translate-y-[-3px] rounded-full bg-forest" />
              )}
              <span className="text-[12px] font-medium uppercase leading-[1.3] tracking-[0.12em] text-charcoal">
                {a.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2.5 text-[11.5px] text-warmgrey">
          Small grocery store owners, market stall operators, and distribution ecosystem
          stakeholders.
        </p>
      </Area>

      <Area col={9} span={4} top={64} layer="Text stack">
        <SectionLabel>02 / Research &amp; Human Insights</SectionLabel>
        <div className="mt-6">
          <Headline size={46}>Autonomy Was Valuable—But Trust Could Not Be Removed</Headline>
        </div>
        <p className="mt-4 font-serif text-[16px] italic leading-[1.38] text-forest">
          Retailers did not simply need a faster way to order. They needed confidence that
          independence would not expose them to financial mistakes or remove a trusted relationship.
        </p>
        <div className="mt-5 space-y-3.5">
          {insights.map((it) => (
            <div
              key={it.n}
              data-component="ResearchCard"
              data-layer={`Insight / ${it.title}`}
              className="border-t border-charcoal/15 pt-2.5"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-[13px] text-ochre">{it.n}</span>
                <span className="text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.12em] text-charcoal">
                  {it.title}
                </span>
              </div>
              <p className="mt-1 pl-[26px] text-[12.5px] leading-[1.45] text-charcoal/75">
                {it.text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-forest px-4 py-3">
          <p className="font-serif text-[15.5px] leading-[1.32] text-ivory">
            The challenge was not to convince retailers to abandon human support, but to design
            autonomy around the realities of their work.
          </p>
        </div>
        <p className="mt-3 text-[11px] leading-[1.45] text-warmgrey">
          I led research activities, synthesized insights, facilitated co-creation, and developed
          research artifacts used to inform the service strategy.
        </p>
      </Area>

      <PageFooter left={CASE04_FOOTER} folio="19" />
    </Page>
  );
}
