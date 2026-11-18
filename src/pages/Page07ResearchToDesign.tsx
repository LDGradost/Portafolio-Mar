import {
  Area,
  Body,
  Caption,
  Headline,
  ImagePlaceholder,
  MIBANCO_FOOTER,
  Page,
  PageFooter,
  PullQuote,
  SectionLabel,
  Subhead,
} from "../design-system/components";
import storyboardImage from "../assets/mibanco-storyboard.jpg";
import prototypeImage from "../assets/mibanco-whatsapp-prototype.png";
import { colX, spanW } from "../design-system/grid";
import { ArrowRight } from "../design-system/icons";

const rows = [
  { insight: "Fear of fraud", response: "Advisor-supported first interaction" },
  { insight: "Need for clarity and security", response: "Structured identity-verification flows" },
  {
    insight: "Need for reassurance during adoption",
    response: "Human support as a bridge to digital self-service",
  },
];

export default function Page07ResearchToDesign() {
  return (
    <Page id="p07" name="07 — Mibanco: Research into Design">
      <ImagePlaceholder
        label="Insert real storyboard or experience concept"
        ratio="4 : 3"
        figure="Fig. 05.1 — Storyboard / experience concept"
        src={storyboardImage}
        alt="Four-stage storyboard: QR campaign in shops, virtual assistant asks about the need, information is collected and evaluated, loan is disbursed"
        fit="contain"
        style={{ left: colX(5), width: spanW(5), top: 64, height: 456, backgroundColor: "#F9FAFA" }}
      />
      <ImagePlaceholder
        label="Insert real WhatsApp conversation or prototype screen"
        ratio="9 : 16"
        figure="Fig. 05.2 — Prototype"
        src={prototypeImage}
        alt="WhatsApp prototype: Mibanco assistant greets Ana and starts identity validation"
        objectPosition="center top"
        style={{ left: colX(10), right: 0, top: 0, height: 612 }}
      />

      <Area col={1} span={4} top={64} layer="Text stack">
        <SectionLabel>05 / Research into Design</SectionLabel>
        <div className="mt-7">
          <Headline size={48}>Designing for Trust, Not Just Automation</Headline>
        </div>
        <div className="mt-5">
          <Subhead size={22}>
            Translating behavioural insights into decisions that support digital autonomy.
          </Subhead>
        </div>
        <div className="mt-9">
          <Body size={15}>
            <p>Research informed two important design decisions.</p>
            <p>
              First, the business advisor remained involved in the customer’s initial interaction
              with the WhatsApp platform and first credit experience, helping{" "}
              <strong className="font-semibold text-charcoal">establish confidence</strong> before
              subsequent self-service interactions.
            </p>
            <p>
              Second, usability testing showed that not every step should be conversational.
              Identity verification and biometric processes could benefit from{" "}
              <strong className="font-semibold text-charcoal">
                simpler, deterministic flows that prioritize clarity and security.
              </strong>
            </p>
          </Body>
        </div>
      </Area>
      <Area col={1} span={4} top={680} layer="Key principle">
        <Caption className="mb-3">Key principle</Caption>
        <PullQuote size={19}>
          Human support and digital autonomy are not opposites. They can be designed as
          complementary stages of adoption.
        </PullQuote>
      </Area>

      <Area col={5} span={5} top={548} layer="Diagram / Insight to design response">
        <div className="grid grid-cols-[1fr_44px_1.2fr] gap-3 pb-2">
          <Caption>Insight</Caption>
          <span />
          <Caption>Design response</Caption>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.insight}
            data-layer={`Row / ${r.insight}`}
            className="grid h-[86px] grid-cols-[1fr_44px_1.2fr] items-center gap-3 border-t border-charcoal/15"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-[14px] text-ochre">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] leading-[1.35] text-charcoal/75">{r.insight}</span>
            </div>
            <span className="text-ochre">
              <ArrowRight size={26} strokeWidth={1} />
            </span>
            <span className="font-serif text-[19px] leading-[1.2] text-forest">{r.response}</span>
          </div>
        ))}
      </Area>

      <Area col={10} span={3} top={640} layer="Panel / Qualitative trust finding">
        <div className="border-t-2 border-forest bg-sand px-5 pb-5 pt-4">
          <Caption>Qualitative evidence</Caption>
          <div className="mt-2 font-serif text-[19px] leading-[1.15] text-charcoal">
            Trust as an emerging design outcome
          </div>
          <p className="mt-2.5 text-[12.5px] leading-[1.5] text-charcoal/75">
            Qualitative observations across usability testing suggested greater confidence in the
            proposed experience as participants understood how the service worked and how their
            identity would be verified.
          </p>
        </div>
      </Area>

      <PageFooter left={MIBANCO_FOOTER} folio="07" />
    </Page>
  );
}
