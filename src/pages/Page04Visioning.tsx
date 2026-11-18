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
import { COLORS, colX, spanW } from "../design-system/grid";
import currentProcessPhoto from "../assets/mibanco-current-process.jpg";
import visioningSessionPhoto from "../assets/mibanco-visioning-session.jpg";

const stages = [
  { n: "01", label: "Current assumptions" },
  { n: "02", label: "Collaborative reimagination" },
  { n: "03", label: "Preferred future" },
  { n: "04", label: "Selected MVP" },
];

/** Diverge-then-converge glyphs: open assumptions → many voices → one future → one MVP. */
function StageGlyph({ i }: { i: number }) {
  const s = COLORS.forest;
  return (
    <svg viewBox="0 0 60 60" width={60} height={60} className="relative bg-ivory">
      {i === 0 && <circle cx={30} cy={30} r={22} fill="none" stroke={s} strokeDasharray="3 4" />}
      {i === 1 && (
        <g fill="none" stroke={s}>
          <circle cx={22} cy={25} r={13} />
          <circle cx={38} cy={25} r={13} />
          <circle cx={30} cy={39} r={13} />
        </g>
      )}
      {i === 2 && (
        <g>
          <circle cx={30} cy={30} r={22} fill="none" stroke={s} />
          <circle cx={30} cy={30} r={11} fill={COLORS.sage} />
        </g>
      )}
      {i === 3 && (
        <g>
          <circle cx={30} cy={30} r={16} fill="none" stroke={COLORS.ochre} />
          <circle cx={30} cy={30} r={9} fill={COLORS.ochre} />
        </g>
      )}
    </svg>
  );
}

export default function Page04Visioning() {
  return (
    <Page id="p04" name="04 — Mibanco: Strategic Visioning">
      <ImagePlaceholder
        label="Insert real visioning workshop photo"
        ratio="2.2 : 1"
        figure="Fig. 02.1 — ADN business advisor at local shop, December 2025"
        src={currentProcessPhoto}
        alt="Business advisor at the barred window of a neighbourhood grocery store"
        objectPosition="center 66%"
        style={{ left: colX(5), right: 0, top: 0, height: 470 }}
      />
      <ImagePlaceholder
        label="Insert real future-mapping / reimagination photo"
        ratio="4 : 5"
        figure="Fig. 02.2 — Visioning session"
        src={visioningSessionPhoto}
        alt="Team voting on ideas and storyboarding at a whiteboard during the visioning session"
        objectPosition="center 55%"
        className="shadow-[0_0_0_10px_#F7F5F0]"
        style={{ left: colX(10), width: spanW(3), top: 404, height: 420 }}
      />

      <Area col={1} span={4} top={64} layer="Text stack">
        <SectionLabel>02 / Strategic Visioning</SectionLabel>
        <div className="mt-7">
          <Headline size={48}>From Advisor Dependency to Entrepreneur Empowerment</Headline>
        </div>
        <div className="mt-5">
          <Subhead size={22}>
            Challenging institutional assumptions to envision a new relationship between
            entrepreneurs and financial services.
          </Subhead>
        </div>
        <div className="mt-8">
          <Body size={15}>
            <p>
              In December 2025, I led{" "}
              <strong className="font-semibold text-charcoal">
                collaborative visioning and future-mapping sessions
              </strong>{" "}
              to challenge the assumptions behind Mibanco’s traditional lending journey.
            </p>
            <p>
              Through shared visioning, journey redesign, and visualization exercises, we explored a
              future in which{" "}
              <strong className="font-semibold text-charcoal">
                entrepreneurs could confidently manage
              </strong>{" "}
              their credit through WhatsApp.
            </p>
            <p>The process resulted in a reimagined customer journey and a jointly selected MVP.</p>
          </Body>
        </div>
      </Area>
      <Area col={1} span={4} top={724} layer="Methods strip">
        <Caption>Methods</Caption>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-charcoal/15 pt-3">
          {["Shared Vision", "Future Mapping", "Journey Reimagination", "MVP Prioritization"].map(
            (m, i) => (
              <li
                key={m}
                className="flex items-baseline gap-2.5 text-[11.5px] font-medium uppercase tracking-[0.12em] text-charcoal"
              >
                <span className="font-serif text-[13px] normal-case tracking-normal text-ochre">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {m}
              </li>
            ),
          )}
        </ul>
      </Area>

      <Area col={5} span={5} top={510} layer="Diagram / Strategic innovation">
        <Caption>Fig. 02.3 — From assumptions to MVP</Caption>
        <div className="relative mt-5 grid grid-cols-4">
          <div className="absolute left-[30px] right-[calc(25%-30px)] top-[30px] h-px bg-charcoal/30" />
          {stages.map((s, i) => (
            <div key={s.n} data-layer={`Stage / ${s.label}`}>
              <StageGlyph i={i} />
              <div className="mt-3 font-serif text-[14px] text-ochre">{s.n}</div>
              <div
                className={`mt-1 max-w-[120px] text-[12px] font-medium uppercase leading-[1.35] tracking-[0.12em] ${i === 3 ? "text-forest" : "text-charcoal"}`}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Area>

      <Area col={5} span={4} top={712} layer="Pull quote">
        <PullQuote size={21}>
          A future where entrepreneurs confidently manage their own credit journey through a
          familiar digital channel.
        </PullQuote>
      </Area>

      <PageFooter left={MIBANCO_FOOTER} folio="04" />
    </Page>
  );
}
