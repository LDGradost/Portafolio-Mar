import {
  Area,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { PendingModule } from "../design-system/evidence";
import { colX, spanW } from "../design-system/grid";

const BAND_TOP = 372;

export default function Page21Closing() {
  return (
    <Page id="p21" name="21 — Alimarket Outcomes & Portfolio Closing">
      {/* Top: Alimarket outcomes */}
      <Area col={1} span={5} top={56} layer="Outcomes text">
        <SectionLabel>04 / Outcomes</SectionLabel>
        <div className="mt-5">
          <Headline size={46}>From Research to an Implemented Service</Headline>
        </div>
        <div className="mt-4 space-y-2 text-[13px] leading-[1.5] text-charcoal/80">
          <p>
            The Alimarket application was implemented as the standard ordering channel for the
            targeted retail customer population in Metropolitan Lima. Subsequently reported rollout
            status indicates installation across the full in-scope customer base; customers unable
            to order through the app could receive support through an alternative service path.
          </p>
          <p className="text-[11px] italic text-warmgrey">
            Installation coverage does not indicate active usage, adoption, or business impact.
          </p>
        </div>
      </Area>
      <Area col={6} span={3} top={64} layer="Key learning">
        <Caption className="mb-3">My key learning</Caption>
        <p className="border-l border-ochre pl-4 font-serif text-[18px] italic leading-[1.36] text-forest">
          Technology and experience cannot be designed independently. A successful service must
          account for the people, relationships, and operational systems that make it work.
        </p>
      </Area>
      <PendingModule
        layer="SLIDE_21_VERIFIED_ROLLOUT_METRICS"
        label="Insert verified Alimarket rollout metrics"
        className="[&_dl>div]:grid [&_dl>div]:grid-cols-[1fr_auto] [&_dl>div]:items-center [&_dl>div]:gap-3 [&_dl>div]:py-[7px] [&_dd]:mt-0"
        style={{ left: colX(9), width: spanW(4), top: 48 }}
        fields={[
          { label: "In-scope retail customer population", value: "[TO BE CONFIRMED]" },
          { label: "App installation coverage", value: "[REPORTED AS 100% — VERIFY]" },
          { label: "Active ordering usage", value: "[NOT PROVIDED]" },
          { label: "Operational efficiency outcome", value: "[NOT PROVIDED]" },
          { label: "Measurement date and source", value: "[TO BE CONFIRMED]" },
        ]}
      />

      {/* Bottom: portfolio closing */}
      <div
        data-layer="Band / Portfolio closing"
        className="absolute inset-x-0 bottom-0 bg-forest"
        style={{ top: BAND_TOP }}
      />

      <Area col={1} span={6} top={BAND_TOP + 44} layer="Closing statement">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-ochre" />
          <span className="text-[11.5px] font-medium uppercase tracking-[0.2em] text-sage">
            Four projects. One design philosophy.
          </span>
        </div>
        <p className="mt-7 font-serif text-[40px] leading-[1.12] tracking-[-0.01em] text-ivory text-pretty">
          The future is not something we simply inherit. It is something we can design—by placing
          human needs, dignity, and agency at the heart of every system we transform
          <span className="text-ochre">.</span>
        </p>
      </Area>

      <Area col={1} span={6} top={752} layer="Signature">
        <div className="flex items-end justify-between border-t border-ivory/15 pt-4">
          <div>
            <div className="font-serif text-[28px] leading-none text-ivory">Martha Valdez</div>
            <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ochre">
              Strategic Design Researcher
            </div>
            <div className="mt-1.5 text-[11.5px] text-ivory/55">
              Psychology · Behavioural Science · Human-Centred AI · Service Design
            </div>
          </div>
          <div className="text-right font-serif text-[19px] italic leading-[1.15] text-sage">
            Designing Human-Centred
            <br />
            Futures<span className="text-ochre">.</span>
          </div>
        </div>
      </Area>

      <Area col={8} span={5} top={BAND_TOP + 44} layer="Synthesis & OCAD connection">
        <p className="text-[12.5px] leading-[1.55] text-ivory/70">
          Across financial services, conversational AI, workplace well-being, and retail
          distribution, my work has explored a common question:
        </p>
        <p className="mt-2.5 font-serif text-[21px] leading-[1.25] text-ivory">
          How can we transform complex systems without losing sight of the people who depend on
          them?
        </p>
        <p className="mt-2.5 text-[12.5px] leading-[1.55] text-ivory/70">
          These projects have taught me that technology alone does not create meaningful progress.
          Progress requires understanding human behaviour, recognizing institutional and operational
          constraints, and designing systems that support trust, accessibility, dignity, and agency.
        </p>
        <div className="mt-4 border-t border-ivory/15 pt-3">
          <Caption tone="dark">Strategic Foresight and Innovation · OCAD University</Caption>
          <p className="mt-2 text-[12.5px] leading-[1.55] text-ivory/70">
            At OCAD University’s Strategic Foresight and Innovation program, I hope to deepen my
            ability to imagine and shape sustainable, desirable futures. I want to combine my
            background in psychology, design research, strategic service design, and human-centred
            AI with systems thinking and foresight methodologies. My goal is to help organizations
            move beyond technology-driven transformation toward futures intentionally designed
            around human and societal well-being.
          </p>
        </div>
      </Area>

      <PageFooter
        left="Martha Valdez — Designing Human-Centred Futures"
        center="Portfolio / 2026"
        folio="21"
        tone="dark"
      />
    </Page>
  );
}
