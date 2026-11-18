import {
  Area,
  Body,
  Caption,
  Headline,
  Page,
  PageFooter,
  SectionLabel,
} from "../design-system/components";
import { CASE04_FOOTER } from "../design-system/evidence";
import { COLORS, colX, spanW } from "../design-system/grid";
import { ArrowRight } from "../design-system/icons";
import fieldInterviewPhoto from "../assets/alimarket-field-interview.jpg";

const W = 952;
const H = 470;
const N = {
  R: { x: 116, y: 262, r: 84 },
  S: { x: 336, y: 72, r: 46 },
  P: { x: 504, y: 272, r: 72 },
  A: { x: 852, y: 66, r: 46 },
  D: { x: 860, y: 262, r: 54 },
  L: { x: 648, y: 414, r: 44 },
};

type Kind = "current" | "future" | "role";
const stroke: Record<Kind, { color: string; dash?: string; width: number }> = {
  current: { color: COLORS.charcoal, width: 1 },
  future: { color: COLORS.ochre, dash: "4 5", width: 1.3 },
  role: { color: "#7d9580", dash: "2 4", width: 1.3 },
};

const links: { d: string; kind: Kind; label: string; lx: number; ly: number }[] = [
  {
    d: `M${N.R.x},${N.R.y} L${N.S.x},${N.S.y}`,
    kind: "current",
    label: "In-person orders · ~3 visits / week",
    lx: 150,
    ly: 150,
  },
  {
    d: `M${N.R.x},${N.R.y} Q 340,250 ${N.S.x},${N.S.y}`,
    kind: "role",
    label: "Support & supervision",
    lx: 300,
    ly: 200,
  },
  {
    d: `M${N.S.x},${N.S.y} Q 640,140 ${N.D.x},${N.D.y}`,
    kind: "current",
    label: "Orders relayed",
    lx: 520,
    ly: 116,
  },
  {
    d: `M${N.A.x},${N.A.y} L${N.D.x},${N.D.y}`,
    kind: "current",
    label: "Supply",
    lx: 900,
    ly: 164,
  },
  {
    d: `M${N.D.x},${N.D.y} L${N.L.x},${N.L.y}`,
    kind: "current",
    label: "Fulfilment",
    lx: 772,
    ly: 352,
  },
  {
    d: `M${N.L.x},${N.L.y} Q 300,476 ${N.R.x},${N.R.y}`,
    kind: "current",
    label: "Delivery",
    lx: 336,
    ly: 406,
  },
  {
    d: `M${N.R.x},${N.R.y} L${N.P.x},${N.P.y}`,
    kind: "future",
    label: "Self-service ordering",
    lx: 330,
    ly: 290,
  },
  {
    d: `M${N.P.x},${N.P.y} L${N.D.x},${N.D.y}`,
    kind: "future",
    label: "Digital order coordination",
    lx: 690,
    ly: 268,
  },
  {
    d: `M${N.P.x},${N.P.y} L${N.A.x},${N.A.y}`,
    kind: "future",
    label: "Business & operations",
    lx: 690,
    ly: 176,
  },
  {
    d: `M${N.P.x},${N.P.y} L${N.L.x},${N.L.y}`,
    kind: "future",
    label: "Order visibility",
    lx: 582,
    ly: 348,
  },
];

function EcosystemMap() {
  const node =
    "absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center";
  const tag =
    "absolute text-[10.5px] font-semibold uppercase leading-[1.35] tracking-[0.13em] text-charcoal";
  return (
    <div className="relative" style={{ width: W, height: H }} data-layer="Diagram / Ecosystem map">
      <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {links.map((l) => (
          <path
            key={l.label}
            d={l.d}
            fill="none"
            stroke={stroke[l.kind].color}
            strokeOpacity={l.kind === "current" ? 0.45 : 1}
            strokeWidth={stroke[l.kind].width}
            strokeDasharray={stroke[l.kind].dash}
          />
        ))}
      </svg>
      {links.map((l) => (
        <span
          key={l.label}
          data-layer={`Connector label / ${l.label}`}
          className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-ivory px-1.5 text-[11px] ${l.kind === "future" ? "text-[#8a6a3d]" : l.kind === "role" ? "text-[#5f7763]" : "text-warmgrey"}`}
          style={{ left: l.lx, top: l.ly }}
        >
          {l.label}
        </span>
      ))}

      <div
        data-component="DiagramNode"
        data-layer="Actor / Retailers"
        className={`${node} bg-forest`}
        style={{ left: N.R.x, top: N.R.y, width: N.R.r * 2, height: N.R.r * 2 }}
      >
        <span className="text-[10.5px] font-semibold uppercase leading-[1.4] tracking-[0.13em] text-ivory">
          Retailers /<br />
          market stall
          <br />
          owners
        </span>
      </div>
      <div
        data-component="DiagramNode"
        data-layer="Actor / Alimarket platform"
        className={`${node} border border-ochre bg-ivory`}
        style={{
          left: N.P.x,
          top: N.P.y,
          width: N.P.r * 2,
          height: N.P.r * 2,
          boxShadow: `0 0 0 8px ${COLORS.ivory}, 0 0 0 9px rgba(196,154,98,0.4)`,
        }}
      >
        <span>
          <span className="block font-serif text-[20px] leading-none text-charcoal">Alimarket</span>
          <span className="mt-1.5 block text-[9.5px] font-semibold uppercase leading-[1.35] tracking-[0.12em] text-[#8a6a3d]">
            Digital ordering
            <br />
            platform
          </span>
        </span>
      </div>
      {(["S", "A", "D", "L"] as const).map((k) => (
        <div
          key={k}
          data-component="DiagramNode"
          className={`${node} border border-forest bg-ivory`}
          style={{ left: N[k].x, top: N[k].y, width: N[k].r * 2, height: N[k].r * 2 }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-forest" />
        </div>
      ))}
      <span
        data-layer="Actor label / Sales representatives"
        className={`${tag} text-right`}
        style={{ right: W - N.S.x + N.S.r + 12, top: N.S.y - 14 }}
      >
        Sales
        <br />
        representatives
      </span>
      <span
        data-layer="Actor label / Alicorp"
        className={`${tag} text-right`}
        style={{ right: W - N.A.x + N.A.r + 12, top: N.A.y - 14 }}
      >
        Alicorp business
        <br />& operations
      </span>
      <span
        data-layer="Actor label / Distributors"
        className={`${tag} -translate-x-1/2 text-center`}
        style={{ left: N.D.x, top: N.D.y + N.D.r + 10 }}
      >
        Exclusive
        <br />
        distributors
      </span>
      <span
        data-layer="Actor label / Logistics"
        className={tag}
        style={{ left: N.L.x + N.L.r + 12, top: N.L.y - 14 }}
      >
        Delivery &amp; logistics
        <br />
        partners
      </span>
    </div>
  );
}

const before = [
  "In-person order collection",
  "Dependency on scheduled sales visits",
  "Close personal retailer–salesperson relationships",
  "Operational effort associated with salesforce turnover",
];
const future = [
  "Self-service ordering through Alimarket",
  "Greater flexibility for retailers",
  "A redefined role for high-performing sales representatives",
  "Digital coordination across ordering and distribution",
];

export default function Page18AlimarketEcosystem() {
  return (
    <Page id="p18" name="18 — Alimarket: The Ecosystem Challenge">
      <Area col={1} span={4} top={64} layer="Text stack">
        <SectionLabel>01 / The Ecosystem Challenge</SectionLabel>
        <div className="mt-4 text-[11px] uppercase tracking-[0.16em] text-ochre">
          Case 04 — Alimarket · Alicorp, Peru · Jan–Dec 2022
        </div>
        <div className="mt-6">
          <Headline size={44}>From Salesperson-Dependent Ordering to Retailer Autonomy</Headline>
        </div>
        <p className="mt-5 font-serif text-[18px] italic leading-[1.35] text-forest">
          Digital transformation meant redesigning an entire commercial relationship—not simply
          replacing a manual task with an app.
        </p>
        <div className="mt-5">
          <Body size={13.5}>
            <p>
              Alicorp relied on an ecosystem connecting small retailers, sales representatives,
              exclusive distributors, and logistics. Representatives visited stores about three
              times a week to collect orders — visits that, over time, built trusted personal
              relationships. High salesforce turnover and recurring onboarding costs created
              operational challenges.
            </p>
          </Body>
        </div>
        <div className="mt-5 border-l border-ochre pl-4">
          <Caption>Strategic challenge</Caption>
          <p className="mt-2 font-serif text-[17px] leading-[1.32] text-charcoal">
            How might we create a more autonomous and efficient ordering ecosystem without removing
            the human relationships that retailers value?
          </p>
        </div>
      </Area>
      <Area col={1} span={4} top={762} layer="My contribution">
        <Caption>My contribution · Design Researcher &amp; Service Designer</Caption>
        <p className="mt-1.5 text-[12px] leading-[1.45] text-charcoal/75">
          I researched the needs of ecosystem participants and contributed to the strategic design
          of a service connecting retailer experiences with operational and technological systems.
        </p>
      </Area>

      <Area col={5} span={8} top={64} layer="Ecosystem diagram">
        <div className="flex items-start justify-between gap-6">
          <Caption>
            Fig. 01.1 — Conceptual ecosystem reconstruction based on the project research and
            service model.
          </Caption>
        </div>
        <div
          className="mt-2 flex gap-5 text-[10.5px] uppercase tracking-[0.12em] text-warmgrey"
          data-layer="Legend"
        >
          <span className="flex items-center gap-2">
            <span className="w-6 border-t border-charcoal/50" />
            Current relationship
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 border-t border-dashed border-ochre" />
            Desired digital coordination
          </span>
          <span className="flex items-center gap-2">
            <span className="w-6 border-t border-dotted border-[#7d9580]" />
            Evolving human role
          </span>
        </div>
        <div className="mt-3">
          <EcosystemMap />
        </div>
      </Area>

      <Area col={5} span={5} top={620} layer="Transformation opportunity">
        <div className="grid grid-cols-[1fr_28px_1fr] gap-4">
          <div>
            <div className="border-b border-charcoal/80 pb-2 text-[10.5px] font-semibold tracking-[0.2em] text-warmgrey">
              BEFORE
            </div>
            <ul className="mt-1">
              {before.map((b) => (
                <li
                  key={b}
                  className="border-b border-charcoal/10 py-1.5 text-[12.5px] leading-[1.35] text-charcoal/70"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <span className="pt-8 text-ochre">
            <ArrowRight size={24} strokeWidth={1} />
          </span>
          <div>
            <div className="border-b border-forest pb-2 text-[10.5px] font-semibold tracking-[0.2em] text-ochre">
              DESIRED FUTURE
            </div>
            <ul className="mt-1">
              {future.map((f) => (
                <li
                  key={f}
                  className="border-b border-charcoal/10 py-1.5 text-[12.5px] leading-[1.35] text-charcoal"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Area>

      <figure
        data-layer="SLIDE_18_AUTHORIZED_CONTEXT_VISUAL"
        className="absolute"
        style={{ left: colX(10), width: spanW(3), top: 586, height: 222 }}
      >
        <div className="absolute inset-0 overflow-hidden border border-sage bg-sand">
          <img
            src={fieldInterviewPhoto}
            alt="Field research interview with a small grocery store owner in her shop"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 52%" }}
          />
        </div>
        <figcaption className="absolute left-0 right-0 top-full mt-2 text-[11.5px] leading-[1.4] text-warmgrey">
          Field research interview with a small grocery store owner · 2022 fieldwork
        </figcaption>
      </figure>

      <PageFooter left={CASE04_FOOTER} folio="18" />
    </Page>
  );
}
