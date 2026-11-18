import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE03_FOOTER } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";
import { ArrowRight } from "../design-system/icons";
import presentationPhoto from "../assets/behavioral-presentation.jpg";
import storyboardImage from "../assets/behavioral-storyboard.jpg";

const mapping = [
  { barrier: "Uncertainty about the process", response: "Step-by-step visual explanation" },
  { barrier: "Low visibility", response: "Communication in bathrooms and shared spaces" },
  { barrier: "Doubts about institutional support", response: "Leadership-endorsed messaging" },
  { barrier: "Difficulty accessing information", response: "QR code linked to WhatsApp" },
];

export default function Page16Intervention() {
  return (
    <Page id="p16" name="16 — Behavioral Design: Intervention Design">
      <figure
        data-layer="SLIDE_16_AWARENESS_STORYBOARD"
        className="absolute"
        style={{ left: colX(1), width: spanW(5), top: 64, height: 396 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-white">
          <img
            src={storyboardImage}
            alt="Eight-panel awareness storyboard showing that anyone can report workplace sexual harassment"
            className="h-full w-full object-contain"
          />
        </div>
        <figcaption className="absolute left-0 right-0 top-full mt-2.5 text-[11.5px] leading-[1.45] text-warmgrey">
          <span className="mr-2 font-serif text-[13px] text-ochre">01</span>
          Awareness storyboard reinforcing that anyone can report. Created with AI as a concept
          prototype; a video with actors will be produced from this content.
        </figcaption>
      </figure>

      <figure
        data-layer="SLIDE_16_INTERVENTION_PRESENTATION"
        className="absolute"
        style={{ left: colX(4), width: spanW(5), top: 516, height: 294 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-sand">
          <img
            src={presentationPhoto}
            alt="Martha Valdez presenting the behavioural intervention and organizational cost of silence"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 22%" }}
          />
        </div>
        <figcaption className="absolute left-0 right-0 top-full mt-2.5 text-[11.5px] leading-[1.45] text-warmgrey">
          <span className="mr-2 font-serif text-[13px] text-ochre">02</span>
          Presentation of the behavioural intervention to organizational stakeholders.
        </figcaption>
      </figure>

      <Area col={9} span={4} top={64} layer="Text stack">
        <SectionLabel>03 / Intervention Design</SectionLabel>
        <div className="mt-7">
          <Headline size={46}>
            Making the Reporting Process Visible, Understandable, and Actionable
          </Headline>
        </div>
      </Area>

      <Area col={9} span={4} top={380} layer="Diagram / Barrier to intervention">
        <div className="grid grid-cols-[1fr_28px_1.15fr] gap-3 pb-2">
          <Caption>Barrier</Caption>
          <span />
          <Caption>Intervention</Caption>
        </div>
        {mapping.map((m, i) => (
          <div
            key={m.barrier}
            data-layer={`Row / ${m.barrier}`}
            className="grid h-[86px] grid-cols-[1fr_28px_1.15fr] items-center gap-3 border-t border-charcoal/15"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-[13px] text-ochre">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13.5px] leading-[1.35] text-charcoal/75">{m.barrier}</span>
            </div>
            <span className="text-ochre">
              <ArrowRight size={22} strokeWidth={1} />
            </span>
            <span className="font-serif text-[17px] leading-[1.22] text-forest">{m.response}</span>
          </div>
        ))}
        <div className="h-px bg-charcoal/15" />
      </Area>

      <Area col={9} span={4} top={780} layer="Authorship label">
        <p className="border-l border-ochre pl-3 text-[11px] leading-[1.5] text-warmgrey">
          Research synthesis, behavioural intervention design, and visual materials led and created
          by Martha Valdez.
        </p>
      </Area>

      <PageFooter left={CASE03_FOOTER} folio="16" />
    </Page>
  );
}
