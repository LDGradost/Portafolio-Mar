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
import landingImage from "../assets/mibanco-landing.jpg";
import serviceImage from "../assets/mibanco-whatsapp-service.jpg";
import { colX, spanW } from "../design-system/grid";

const metrics = [
  {
    value: "10,000+",
    label: "Credit disbursements reported during the first quarter of operation.",
    note: "Internal project-reported figure.",
  },
  { value: "45 + 20", label: "In-depth interviews and usability tests." },
  { value: "2025–2026", label: "From strategic visioning to pilot launch." },
];

const timeline = [
  { date: "DEC 2025", label: "Visioning" },
  { date: "APR 2026", label: "MVP" },
  { date: "JUL 2026", label: "Pilot" },
  { date: "2026", label: "Operational service" },
];

const BAND_TOP = 612;

export default function Page08Outcomes() {
  return (
    <Page id="p08" name="08 — Mibanco: Outcomes & Reflection">
      <Area col={1} span={5} top={64} layer="Text stack">
        <SectionLabel>06 / Outcomes &amp; Reflection</SectionLabel>
        <div className="mt-7">
          <Headline size={48}>From a Shared Vision to an Operational Credit Service</Headline>
        </div>
        <div className="mt-5">
          <Subhead size={22}>
            Turning strategic exploration and human-centred research into a real banking experience.
          </Subhead>
        </div>
        <div className="mt-8">
          <Body size={15}>
            <p>
              The initiative progressed from strategic visioning in December 2025 to an MVP in April
              2026 and a pilot launch in July 2026.
            </p>
            <p>
              The WhatsApp-based credit service has since supported credit disbursements in Peru,
              including repeat lending.
            </p>
            <p>
              I accompanied the Business and Technology teams through pilots and deployment, helping
              connect user evidence with the evolving service experience.
            </p>
          </Body>
        </div>
      </Area>
      <Area col={1} span={4} top={530} layer="Callout / Institutional positioning">
        <div className="border-l border-ochre pl-4">
          <Caption>Institutional positioning</Caption>
          <p className="mt-1.5 font-serif text-[17px] leading-[1.3] text-charcoal">
            Positioned internally as Peru’s first bank to become a neobank.
          </p>
        </div>
      </Area>

      <ImagePlaceholder
        label="Insert real Mibanco landing page screenshot"
        ratio="2 : 1"
        figure="Fig. 06.1 — Landing page"
        src={landingImage}
        alt="Mibanco landing hero: an entrepreneur smiling at her phone while chatting with @mibancochat on WhatsApp"
        style={{ left: colX(6), width: spanW(5), top: 64, height: 286 }}
      />
      <ImagePlaceholder
        label="Insert real WhatsApp service screenshot"
        ratio="9 : 19.5"
        figure="Fig. 06.2 — WhatsApp"
        style={{ left: colX(11), width: spanW(2), top: 64, height: 520 }}
        src={serviceImage}
        alt="Mibanco chat on WhatsApp showing the loan-offer card: Consulta tu oferta de préstamo"
      />

      <Area col={6} span={5} top={366} layer="Metrics ledger">
        {metrics.map((m) => (
          <div
            key={m.value}
            data-component="Metric"
            className="grid h-[73px] grid-cols-[328px_1fr] items-center gap-4 border-t border-charcoal/15"
          >
            <span className="font-serif text-[50px] leading-none tracking-[-0.02em] text-forest tabular-nums">
              {m.value}
            </span>
            <span className="text-[12.5px] leading-[1.4] text-charcoal/80">
              {m.label}
              {m.note && (
                <span className="mt-1 block text-[11px] italic text-warmgrey">{m.note}</span>
              )}
            </span>
          </div>
        ))}
      </Area>

      {/* Reflection band */}
      <div
        data-layer="Band / Reflection"
        className="absolute inset-x-0 bottom-0 bg-forest"
        style={{ top: BAND_TOP }}
      />
      <Area col={1} span={3} top={BAND_TOP + 36} layer="Timeline">
        <Caption tone="dark" className="mb-4">
          From vision to service
        </Caption>
        <ol className="relative space-y-3">
          <span className="absolute bottom-[8px] left-[5px] top-[8px] w-px bg-ivory/25" />
          {timeline.map((t, i) => (
            <li
              key={t.date + t.label}
              data-layer={`Timeline / ${t.date}`}
              className="relative flex items-center gap-4"
            >
              <span
                className={`h-[11px] w-[11px] rounded-full border ${i === timeline.length - 1 ? "border-ochre bg-ochre" : "border-ivory bg-forest"}`}
              />
              <span className="w-[76px] text-[11px] font-semibold tracking-[0.16em] text-ivory">
                {t.date}
              </span>
              <span className="text-[13px] text-sage">{t.label}</span>
            </li>
          ))}
        </ol>
      </Area>
      <Area col={4} span={6} top={BAND_TOP + 36} layer="Reflection">
        <Caption tone="dark" className="mb-3">
          Reflection
        </Caption>
        <p className="font-serif text-[23px] leading-[1.32] text-ivory text-pretty">
          This project showed me that designing a preferable future requires more than introducing
          technology. It involves challenging institutional assumptions, understanding the social
          foundations of trust, and creating pathways that enable people to adopt new forms of
          autonomy.
        </p>
      </Area>
      <Area col={10} span={3} top={BAND_TOP + 36} layer="Closing statement">
        <div className="mb-3 h-px w-10 bg-ochre" />
        <p className="font-serif text-[18px] italic leading-[1.35] text-sage">
          Strategic foresight becomes meaningful when imagined futures are translated into real,
          human-centred transformation.
        </p>
      </Area>

      <PageFooter left={MIBANCO_FOOTER} center="End of case 01" folio="08" tone="dark" />
    </Page>
  );
}
