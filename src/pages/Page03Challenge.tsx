import {
  Area,
  Body,
  Caption,
  Headline,
  MIBANCO_FOOTER,
  Page,
  PageFooter,
  SectionLabel,
  Subhead,
  Timeline,
} from "../design-system/components";
import { COLORS, colX } from "../design-system/grid";
import { ArrowRight } from "../design-system/icons";

function RelationshipDiagram() {
  const y = 150;
  const font = { fontFamily: "Inter, sans-serif" };
  return (
    <svg viewBox="0 0 586 280" width={586} height={280} data-layer="Diagram / Current relationship">
      <defs>
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10" fill="none" stroke={COLORS.ivory} strokeOpacity={0.7} />
        </marker>
      </defs>
      {/* opportunity: direct access */}
      <path
        d={`M60,${y - 48} C 150,30 436,30 526,${y - 48}`}
        fill="none"
        stroke={COLORS.ochre}
        strokeDasharray="3 5"
        strokeWidth={1}
      />
      <text
        x={293}
        y={22}
        textAnchor="middle"
        fill={COLORS.ochre}
        fontSize={10.5}
        letterSpacing="0.16em"
        {...font}
      >
        INDEPENDENT ACCESS — THE OPPORTUNITY
      </text>

      <line
        x1={106}
        y1={y}
        x2={212}
        y2={y}
        stroke={COLORS.ivory}
        strokeOpacity={0.7}
        markerEnd="url(#arr)"
      />
      <line
        x1={374}
        y1={y}
        x2={478}
        y2={y}
        stroke={COLORS.ivory}
        strokeOpacity={0.7}
        markerEnd="url(#arr)"
      />

      <circle cx={60} cy={y} r={44} fill="none" stroke={COLORS.ivory} strokeOpacity={0.6} />
      <circle
        cx={293}
        cy={y}
        r={78}
        fill={COLORS.ochre}
        fillOpacity={0.1}
        stroke={COLORS.ochre}
        strokeOpacity={0.35}
        strokeDasharray="2 4"
      />
      <circle
        cx={293}
        cy={y}
        r={60}
        fill={COLORS.ochre}
        fillOpacity={0.16}
        stroke={COLORS.ochre}
        strokeWidth={1.25}
      />
      <rect
        x={482}
        y={y - 42}
        width={84}
        height={84}
        fill="none"
        stroke={COLORS.ivory}
        strokeOpacity={0.6}
      />

      <g
        {...font}
        fill={COLORS.ivory}
        fontSize={11}
        letterSpacing="0.14em"
        fontWeight={500}
        textAnchor="middle"
      >
        <text x={60} y={y + 4}>
          ENTRE-
        </text>
        <text x={60} y={y + 18}>
          PRENEUR
        </text>
        <text x={293} y={y - 4}>
          BUSINESS
        </text>
        <text x={293} y={y + 11}>
          ADVISOR
        </text>
        <text x={293} y={y + 27} fill={COLORS.ochre}>
          (ADN)
        </text>
        <text x={524} y={y - 2}>
          CREDIT
        </text>
        <text x={524} y={y + 13}>
          PROCESS
        </text>
      </g>
      <line x1={293} y1={y + 82} x2={293} y2={y + 104} stroke={COLORS.ochre} />
      <text x={293} y={y + 122} textAnchor="middle" fill={COLORS.sage} fontSize={12.5} {...font}>
        Key relationship and dependency — trust built through in-person visits
      </text>
    </svg>
  );
}

function MiniModel({ mode }: { mode: "from" | "towards" }) {
  const s = COLORS.ivory;
  return (
    <svg viewBox="0 0 120 64" width={120} height={64}>
      {mode === "from" ? (
        <g>
          <line x1={14} y1={32} x2={60} y2={32} stroke={s} strokeOpacity={0.6} />
          <line x1={60} y1={32} x2={106} y2={32} stroke={s} strokeOpacity={0.6} />
          <circle cx={14} cy={32} r={7} fill="none" stroke={s} />
          <circle
            cx={60}
            cy={32}
            r={14}
            fill={COLORS.ochre}
            fillOpacity={0.25}
            stroke={COLORS.ochre}
          />
          <rect x={99} y={25} width={14} height={14} fill="none" stroke={s} />
        </g>
      ) : (
        <g>
          <path d="M14,32 C 40,6 80,6 106,32" fill="none" stroke={s} />
          <line x1={14} y1={32} x2={60} y2={50} stroke={COLORS.ochre} strokeDasharray="2 3" />
          <circle cx={14} cy={32} r={9} fill={s} />
          <circle cx={60} cy={50} r={6} fill="none" stroke={COLORS.ochre} />
          <rect x={99} y={25} width={14} height={14} fill="none" stroke={s} />
        </g>
      )}
    </svg>
  );
}

export default function Page03Challenge() {
  const panelLeft = colX(8) - 12;
  return (
    <Page id="p03" name="03 — Mibanco: The Challenge">
      <div
        data-layer="Panel / Forest"
        className="absolute inset-y-0 right-0 bg-forest"
        style={{ left: panelLeft }}
      />

      <Area col={1} span={6} top={64} layer="Text stack">
        <SectionLabel>01 / The Challenge</SectionLabel>
        <div className="mt-7">
          <Headline size={48}>
            What If Entrepreneurs Could Access Credit Without Depending on a Bank Advisor?
          </Headline>
        </div>
        <div className="mt-5 max-w-[586px]">
          <Subhead size={22}>
            Reimagining a relationship-based lending model for a more autonomous digital future.
          </Subhead>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <div data-layer="Body">
            <Body size={15}>
              <p>
                Mibanco’s traditional lending model relied heavily on business advisors (ADNs), who
                visited entrepreneurs{" "}
                <strong className="font-semibold text-charcoal">in person to offer credit</strong>{" "}
                and build relationships of trust.
              </p>
              <p>
                As the bank sought to become more digital, the challenge was not simply to replace
                face-to-face interactions with technology. It was to enable entrepreneurs to access
                credit independently while preserving the trust that sustained their relationship
                with the bank.
              </p>
            </Body>
          </div>

          <div data-layer="Research question">
            <div className="border-l border-ochre pl-5">
              <Caption>Research question</Caption>
              <p className="mt-3 font-serif text-[21px] italic leading-[1.32] text-forest">
                How might we empower entrepreneurs to access credit independently without losing the
                human trust that has traditionally sustained their relationship with the bank?
              </p>
            </div>
            <dl data-layer="Project metadata" className="mt-8 text-[12.5px]">
              {[
                ["Organization", "Mibanco, Peru"],
                ["Role", "Senior Design Researcher"],
                ["Collaborators", "Business, Product, Credicorp AI, Technology"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[112px_1fr] gap-3 border-t border-charcoal/15 py-2.5"
                >
                  <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-warmgrey">
                    {k}
                  </dt>
                  <dd className="text-charcoal">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Area>

      {/* Right panel */}
      <Area col={8} span={5} top={64} layer="Figure label">
        <Caption tone="dark" className="px-[55px]">
          Fig. 01.1 — Current relationship model
        </Caption>
      </Area>
      <Area col={8} span={5} top={104} layer="Diagram" style={{ padding: "0 55px" }}>
        <RelationshipDiagram />
      </Area>

      <Area col={8} span={5} top={424} layer="Transition" style={{ padding: "0 55px" }}>
        <Caption tone="dark" className="px-[9px]">
          Fig. 01.2 — Strategic shift
        </Caption>
        <div className="mt-5 grid grid-cols-[1fr_40px_1fr] items-start gap-4 border-t border-ivory/15 pt-6">
          <div>
            <MiniModel mode="from" />
            <div className="mt-4 text-[10.5px] font-semibold tracking-[0.2em] text-sage">FROM</div>
            <p className="mt-2 font-serif text-[21px] leading-[1.2] text-ivory/70">
              Advisor-dependent, face-to-face lending.
            </p>
          </div>
          <div className="pt-6 text-ochre">
            <ArrowRight size={32} strokeWidth={1} />
          </div>
          <div>
            <MiniModel mode="towards" />
            <div className="mt-4 text-[10.5px] font-semibold tracking-[0.2em] text-ochre">
              TOWARDS
            </div>
            <p className="mt-2 font-serif text-[21px] leading-[1.2] text-ivory">
              Digital autonomy supported by trust.
            </p>
          </div>
        </div>
      </Area>

      <Area col={8} span={5} top={708} layer="Timeline">
        <Caption tone="dark" className="mb-4 px-[55px]">
          Project timeline
        </Caption>
        <Timeline
          tone="dark"
          highlightLast
          className="px-[55px]"
          items={[
            { date: "DEC 2025", label: "Strategic Visioning" },
            { date: "APR 2026", label: "MVP" },
            { date: "JUL 2026", label: "Pilot Launch" },
          ]}
        />
      </Area>

      <PageFooter left={MIBANCO_FOOTER} span={6} />
      <PageFooter left="" folio="03" tone="dark" col={8} span={5} />
    </Page>
  );
}
