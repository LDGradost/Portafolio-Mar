import {
  Area,
  Body,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE03_FOOTER } from "../design-system/evidence";
import { colX } from "../design-system/grid";
import contextPhoto from "../assets/behavioral-context.jpg";

export default function Page14BehaviouralChallenge() {
  return (
    <Page id="p14" name="14 — Behavioral Design: The Challenge">
      <Area col={1} span={4} top={64} layer="Text stack">
        <SectionLabel>01 / The Challenge</SectionLabel>
        <div className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ochre">
          Case 03 — Behavioral Design
        </div>
        <div className="mt-6">
          <Headline size={46}>When Reporting Channels Exist, but People Remain Silent</Headline>
        </div>
        <div className="mt-7">
          <Body size={14.5}>
            <p>
              In 2025, the corporate office had formal channels for reporting workplace sexual
              harassment. No formal reports were recorded. Exit information told a different story.
            </p>
            <p>
              The project set out to understand what prevents people from reporting — and to design
              pathways that make the process clearer, more visible, and easier to access.
            </p>
          </Body>
        </div>
        <dl data-layer="Project metadata" className="mt-7 text-[12.5px]">
          {[
            ["Organization", "Sierra Sun Group · corporate office, Arequipa, Peru"],
            ["Period", "May–November 2026"],
            [
              "Role",
              "Led end to end: research, diagnosis, intervention and pilot evaluation design",
            ],
            [
              "Collaborators",
              "Organizational sustainability team · external consultancy (participant confidentiality)",
            ],
          ].map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[104px_1fr] gap-3 border-t border-charcoal/15 py-2.5"
            >
              <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-warmgrey">
                {k}
              </dt>
              <dd className="leading-[1.4] text-charcoal">{v}</dd>
            </div>
          ))}
        </dl>
      </Area>

      <Area col={5} span={5} top={64} layer="Signals / Historical 2025">
        <div className="flex items-center justify-between">
          <Caption>Fig. 01.1 — Historical organizational signals</Caption>
          <span className="border border-charcoal/25 px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-charcoal">
            2025 DATA
          </span>
        </div>

        <div
          data-component="Metric"
          data-layer="Signal / Formal reports"
          className="mt-6 grid grid-cols-[220px_1fr] items-end gap-6 border-t border-charcoal/80 pt-6"
        >
          <span className="font-serif text-[240px] leading-[0.74] tracking-[-0.04em] text-forest">
            0
          </span>
          <div className="pb-2">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
              Formal reports
            </div>
            <p className="mt-2 text-[16px] leading-[1.45] text-charcoal/80">
              Formal workplace sexual harassment reports recorded in the corporate office in 2025.
            </p>
          </div>
        </div>

        <div className="my-8 flex items-center gap-3">
          <span className="h-px flex-1 border-t border-dashed border-ochre" />
          <span className="text-[10.5px] uppercase tracking-[0.18em] text-[#8a6a3d]">
            Silence in formal channels · signals at exit
          </span>
          <span className="h-px flex-1 border-t border-dashed border-ochre" />
        </div>

        <div
          data-component="Metric"
          data-layer="Signal / Exit information"
          className="border-t border-charcoal/80 pt-6"
        >
          <div className="flex items-end justify-between gap-6">
            <span className="font-serif text-[112px] leading-[0.8] tracking-[-0.03em] text-forest">
              12 <span className="text-[56px] text-warmgrey">of</span> 24
            </span>
            <div data-component="DotMatrix" className="grid grid-cols-12 gap-[7px] pb-1">
              {Array.from({ length: 24 }, (_, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-full ${i < 12 ? "bg-ochre" : "border border-charcoal/35"}`}
                />
              ))}
            </div>
          </div>
          <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal">
            Exit information
          </div>
          <p className="mt-2 max-w-[520px] text-[16px] leading-[1.45] text-charcoal/80">
            Women who mentioned sexual harassment among their reasons for resigning from the
            corporate office in 2025.
          </p>
          <p className="mt-2 text-[11px] italic text-warmgrey">
            Mentions within exit information — not independently verified cases.
          </p>
        </div>
      </Area>

      <figure
        data-layer="SLIDE_14_ORIGINAL_CONTEXT_EVIDENCE"
        className="absolute"
        style={{ left: colX(10), right: 0, top: 0, height: 772 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-sand">
          <img
            src={contextPhoto}
            alt="Presentation of the behavioral change intervention: Que denunciar no cueste más que callar"
            className="h-full w-full object-cover"
            style={{ objectPosition: "22% center" }}
          />
        </div>
        <figcaption className="absolute left-0 right-6 top-full mt-2.5 text-[11.5px] leading-[1.45] text-warmgrey">
          Behavioral intervention presentation · Corporate office context
        </figcaption>
      </figure>

      <PageFooter left={CASE03_FOOTER} folio="14" />
    </Page>
  );
}
