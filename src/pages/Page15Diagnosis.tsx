import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE03_FOOTER, EvidenceFrame, FlowSteps } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";

export default function Page15Diagnosis() {
  return (
    <Page id="p15" name="15 — Behavioral Design: Behavioural Diagnosis">
      <Area col={1} span={7} top={64} layer="Text stack">
        <SectionLabel>02 / Behavioural Diagnosis</SectionLabel>
        <div className="mt-7">
          <Headline size={48}>Understanding What Prevents People from Reporting</Headline>
        </div>
      </Area>

      <Area col={8} span={5} top={64} layer="Diagram / COM-B summary">
        <Caption className="mb-4">Fig. 02.1 — COM-B conceptual summary</Caption>
        <FlowSteps
          steps={["Capability", "Opportunity", "Motivation", "Reporting behaviour"]}
          highlightLast
        />
        <p className="mt-3 text-[11px] italic text-warmgrey">
          A summary only — the original diagnosis below holds the detail.
        </p>
      </Area>

      <Area col={1} span={9} top={232} layer="SLIDE_15_REAL_COMB_DIAGNOSIS">
        <div className="flex flex-col justify-between" style={{ width: spanW(9), height: 580 }}>
          {/* Header */}
          <div>
            <h3 className="font-serif text-[24px] leading-tight text-forest">
              COM-B diagnosis: barriers to reporting
            </h3>
            <p className="mt-0.5 text-[11.5px] text-charcoal/75">
              Research on barriers to formal reporting among corporate women employees experiencing
              workplace sexual harassment.
            </p>
          </div>

          {/* 3 COM-B Cards */}
          <div>
            <div className="grid grid-cols-3 gap-4">
              {/* Capability */}
              <div className="flex flex-col overflow-hidden rounded-[4px] border border-sage/80 bg-white/80">
                <div className="border-b border-sage/70 bg-forest px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-ivory">
                  C · Capability
                </div>
                <div className="flex-1 space-y-2.5 p-3.5 text-[11.5px] leading-[1.38] text-charcoal/85">
                  <div>
                    <div className="font-semibold text-forest">Knowledge</div>
                    <ul className="mt-1 space-y-1">
                      <li>
                        • Unclear what happens after reporting: case owner, stages and timing.
                      </li>
                      <li>• Difficulty recognizing some behaviors as possible harassment.</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold text-forest">Attitudes</div>
                    <ul className="mt-1 space-y-1">
                      <li>• Belief: “Without evidence, it will not move forward.”</li>
                      <li>• Doubt, guilt and shame.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Opportunity */}
              <div className="flex flex-col overflow-hidden rounded-[4px] border border-sage/80 bg-white/80">
                <div className="border-b border-sage/70 bg-sand px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-forest">
                  O · Opportunity
                </div>
                <div className="flex flex-1 flex-col justify-between p-3.5 text-[11.5px] leading-[1.38] text-charcoal/85">
                  <div className="space-y-2.5">
                    <div>
                      <div className="font-semibold text-forest">Culture</div>
                      <ul className="mt-1 space-y-1">
                        <li>
                          • Perceived tolerance of harassment and protection of the aggressor.
                        </li>
                        <li>• Female leadership: only 8% (as reported in the source).</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-forest">Experience design</div>
                      <ul className="mt-1 space-y-1">
                        <li>• The victim loses anonymity as the process advances.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-2 border-t border-charcoal/10 pt-1.5 text-[10px] italic text-warmgrey">
                    Source notation: “Committee &lt;4m” (context unspecified).
                  </div>
                </div>
              </div>

              {/* Motivation */}
              <div className="flex flex-col overflow-hidden rounded-[4px] border border-sage/80 bg-white/80">
                <div className="border-b border-sage/70 bg-sand px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-forest">
                  M · Motivation
                </div>
                <div className="flex-1 p-3.5 text-[11.5px] leading-[1.38] text-charcoal/85">
                  <div className="font-semibold text-forest">Loss and avoidance · CD8</div>
                  <ul className="mt-1.5 space-y-2">
                    <li>• Fear of being singled out, isolated or dismissed.</li>
                    <li>• Fear of losing anonymity.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vertical connectors */}
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex justify-center">
                  <span className="h-3 w-px bg-forest/45" />
                </div>
              ))}
            </div>

            {/* Parallel COM-B bar */}
            <div className="rounded-[4px] border border-sage bg-sand/85 py-1.5 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-forest">
              Formal reporting · Parallel COM-B influences, not sequential steps
            </div>
          </div>

          {/* Three Key Findings */}
          <div className="border-t border-charcoal/15 pt-2.5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ochre">
              Three key findings · Synthesis across drivers
            </div>
            <div className="mt-2 grid grid-cols-3 gap-5">
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-forest">
                  01 Normalization
                </div>
                <p className="mt-1 text-[11.5px] leading-[1.35] text-charcoal/80">
                  Jokes, comments and invasive looks are perceived as not serious enough.
                </p>
                <div className="mt-1.5 text-[10.5px] font-medium text-[#8a6a3d]">
                  C: knowledge / attitudes + O: culture
                </div>
              </div>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-forest">
                  02 Process uncertainty
                </div>
                <p className="mt-1 text-[11.5px] leading-[1.35] text-charcoal/80">
                  Employees do not know what follows a report: who receives the case, who
                  investigates, the stages or duration.
                </p>
                <div className="mt-1.5 text-[10.5px] font-medium text-[#8a6a3d]">
                  C: knowledge + O: process / experience design
                </div>
              </div>
              <div>
                <div className="text-[11.5px] font-semibold uppercase tracking-[0.06em] text-forest">
                  03 Fear of consequences
                </div>
                <p className="mt-1 text-[11.5px] leading-[1.35] text-charcoal/80">
                  Employees fear being identified, singled out, isolated or facing employment
                  consequences.
                </p>
                <div className="mt-1.5 text-[10.5px] font-medium text-[#8a6a3d]">
                  M + O: anonymity / process
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 text-[11.5px] text-warmgrey">
          Original behavioural diagnosis · 10 anonymous interviews · COM-B and Octalysis
        </div>
      </Area>

      <Area col={10} span={3} top={232} layer="Research methodology">
        <Caption>Research methodology</Caption>
        <div className="mt-3 flex items-end gap-3 border-t border-charcoal/80 pt-3">
          <span className="font-serif text-[64px] leading-[0.85] text-forest">10</span>
          <span className="pb-1 text-[11.5px] font-medium uppercase leading-[1.35] tracking-[0.14em] text-charcoal">
            Anonymous
            <br />
            interviews
          </span>
        </div>
        <div data-component="DotMatrix" className="mt-4 flex gap-[7px]">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className={`h-3 w-3 rounded-full ${i < 8 ? "bg-forest" : "border border-forest"}`}
            />
          ))}
        </div>
        <ul className="mt-3 space-y-1 text-[12.5px] text-charcoal/80">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-forest" />8 participants who experienced
            harassment
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full border border-forest" />2 witnesses
          </li>
        </ul>
        <p className="mt-3 border-t border-charcoal/15 pt-2.5 text-[12px] leading-[1.45] text-warmgrey">
          External consultancy support to protect participant identities.
        </p>
      </Area>

      <Area col={10} span={3} top={486} layer="Insight highlight">
        <div className="bg-forest px-5 py-4">
          <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ochre">
            Key insight
          </div>
          <p className="mt-2 font-serif text-[17px] leading-[1.32] text-ivory">
            The process existed, but employees lacked clarity about its stages, responsibilities,
            and timelines.
          </p>
        </div>
      </Area>

      <PageFooter left={CASE03_FOOTER} folio="15" />
    </Page>
  );
}
