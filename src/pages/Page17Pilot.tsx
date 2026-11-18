import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE03_FOOTER, PendingModule } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";
import pilotPostersPhoto from "../assets/behavioral-pilot-posters.jpg";

export default function Page17Pilot() {
  const panelLeft = colX(9) - 24;
  return (
    <Page id="p17" name="17 — Behavioral Design: Pilot, Early Outcomes & Reflection">
      <div
        data-layer="Zone C / Forest panel"
        className="absolute inset-y-0 right-0 bg-forest"
        style={{ left: panelLeft }}
      />

      <Area col={1} span={8} top={64} layer="Text stack">
        <SectionLabel>04 / Pilot, Early Outcomes &amp; Reflection</SectionLabel>
        <div className="mt-7 pr-10">
          <Headline size={48}>Early Signals of Engagement in a Complex Social System</Headline>
        </div>
      </Area>

      {/* Zone A */}
      <Area col={1} span={4} top={262} layer="Zone A / Early observed results">
        <div className="flex items-center justify-between">
          <Caption className="text-charcoal">Early observed results</Caption>
          <span className="border border-charcoal/25 px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-charcoal">
            2026 PILOT
          </span>
        </div>
        <div
          data-component="Metric"
          className="mt-4 grid grid-cols-[120px_1fr] items-start gap-4 border-t border-charcoal/80 pt-4"
        >
          <span className="font-serif text-[72px] leading-[0.85] text-forest">2</span>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
              Formal reports
            </div>
            <p className="mt-1.5 text-[13.5px] leading-[1.45] text-charcoal/80">
              Received from the intervention floor during the first two weeks.
            </p>
          </div>
        </div>
        <div
          data-component="Metric"
          className="mt-5 grid grid-cols-[120px_1fr] items-start gap-4 border-t border-charcoal/15 pt-4"
        >
          <span className="font-serif text-[72px] leading-[0.85] text-forest">50+</span>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
              QR scans
            </div>
            <p className="mt-1.5 text-[13.5px] leading-[1.45] text-charcoal/80">
              Recorded interactions with the WhatsApp information access mechanism.
            </p>
            <p className="mt-1 text-[11px] italic text-warmgrey">
              Scans are interactions, not unique people.
            </p>
          </div>
        </div>
        <div
          data-layer="Two-floor comparison"
          className="mt-5 grid grid-cols-[120px_1fr] items-start gap-4 border-t border-charcoal/15 pt-4"
        >
          <svg viewBox="0 0 96 76" width={96} height={76} aria-hidden>
            <rect
              x={6}
              y={6}
              width={84}
              height={30}
              fill="#C49A62"
              fillOpacity={0.18}
              stroke="#C49A62"
            />
            <rect
              x={6}
              y={40}
              width={84}
              height={30}
              fill="none"
              stroke="#A9B9AA"
              strokeWidth={1.2}
            />
            <text
              x={48}
              y={25}
              textAnchor="middle"
              fontSize={10}
              fontFamily="Inter"
              fill="#252B2A"
              letterSpacing="0.1em"
            >
              2F
            </text>
            <text
              x={48}
              y={59}
              textAnchor="middle"
              fontSize={10}
              fontFamily="Inter"
              fill="#252B2A"
              letterSpacing="0.1em"
            >
              1F
            </text>
          </svg>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
              2-floor comparison
            </div>
            <ul className="mt-1.5 space-y-1 text-[13.5px] leading-[1.4] text-charcoal/80">
              <li>Second floor: intervention condition</li>
              <li>First floor: comparison condition</li>
            </ul>
          </div>
        </div>
      </Area>

      {/* Zone B */}
      <figure
        data-layer="SLIDE_17_REAL_PILOT_DESIGN"
        className="absolute"
        style={{ left: colX(5), width: spanW(4) - 24, top: 262, height: 468 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-sand">
          <img
            src={pilotPostersPhoto}
            alt="Employees reading the workplace sexual harassment awareness poster installed on bathroom doors"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
        </div>
        <figcaption className="absolute left-0 right-0 top-full mt-2.5 text-[11.5px] leading-[1.45] text-warmgrey">
          Posters placed on bathroom doors on the intervention floor · 2026 pilot
        </figcaption>
      </figure>

      <Area col={1} span={7} top={796} layer="Methodological note">
        <p className="flex items-start gap-3 text-[12.5px] italic leading-[1.45] text-charcoal/75">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ochre" />
          Early observations from a small, non-randomized pilot; causal effectiveness has not been
          established.
        </p>
      </Area>

      {/* Zone C */}
      <PendingModule
        layer="SLIDE_17_FINAL_RESULTS_UPDATE"
        label="Final pilot results"
        status="Completed"
        style={{ left: colX(9), width: spanW(4), top: 64 }}
        fields={[
          { label: "Final observation period", value: "November 15, 2026" },
          { label: "Reports from intervention floor", value: "4 reports" },
          { label: "Reports from comparison floor", value: "0 reports" },
          { label: "QR scans", value: "32 scans" },
          {
            label: "Additional research findings",
            value: "Positive initial reception and strong engagement with the initiative.",
          },
        ]}
        footnote="Observation completed."
      />
      <Area col={9} span={4} top={590} layer="Reflection">
        <div className="mb-4 h-px w-10 bg-ochre" />
        <Caption tone="dark" className="mb-3">
          Reflection
        </Caption>
        <p className="font-serif text-[23px] leading-[1.3] text-ivory">
          Designing for social well-being requires understanding the behavioural and institutional
          barriers that prevent people from taking action.
        </p>
      </Area>

      <PageFooter left={CASE03_FOOTER} span={7} />
      <PageFooter left="End of case 03" folio="17" tone="dark" col={9} span={4} />
    </Page>
  );
}
