import type { ComponentType } from "react";
import {
  Area,
  Body,
  Caption,
  Headline,
  MIBANCO_FOOTER,
  Page,
  PageFooter,
  PullQuote,
  SectionLabel,
  Subhead,
} from "../design-system/components";
import { COLORS } from "../design-system/grid";
import {
  ChatIcon,
  DocumentScanIcon,
  FingerprintIcon,
  GaugeIcon,
  GuidanceIcon,
  TransferIcon,
} from "../design-system/icons";

type Group = "interaction" | "verification" | "decision";
const groupColor: Record<Group, string> = {
  interaction: COLORS.sage,
  verification: COLORS.ochre,
  decision: COLORS.ivory,
};

const capabilities: {
  n: string;
  label: string;
  note: string;
  group: Group;
  Icon: ComponentType<{ size?: number }>;
}[] = [
  {
    n: "01",
    label: "WhatsApp Interaction",
    note: "A familiar channel as the point of entry",
    group: "interaction",
    Icon: ChatIcon,
  },
  {
    n: "02",
    label: "Conversational Guidance",
    note: "Orientation in plain language",
    group: "interaction",
    Icon: GuidanceIcon,
  },
  {
    n: "03",
    label: "Identity and Biometric Verification",
    note: "Confirming who is applying",
    group: "verification",
    Icon: FingerprintIcon,
  },
  {
    n: "04",
    label: "Document Reading / OCR",
    note: "Capturing information from documents",
    group: "verification",
    Icon: DocumentScanIcon,
  },
  {
    n: "05",
    label: "Credit Risk Assessment",
    note: "Evaluating eligibility",
    group: "decision",
    Icon: GaugeIcon,
  },
  {
    n: "06",
    label: "Credit Evaluation and Disbursement",
    note: "From decision to available funds",
    group: "decision",
    Icon: TransferIcon,
  },
];

const W = 952;
const H = 640;
const C = { x: 476, y: 296 };
const RX = 340;
const RY = 214;

function CapabilityMap() {
  const pos = capabilities.map((_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / 6;
    return { x: C.x + RX * Math.cos(a), y: C.y + RY * Math.sin(a) };
  });
  // Illustrative cross-relationships between capabilities (not a sequence).
  const links: [number, number][] = [
    [0, 1],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 2],
    [0, 5],
  ];
  return (
    <div
      className="relative"
      style={{ width: W, height: H }}
      data-layer="Diagram / Service capability map"
    >
      <svg className="absolute inset-0" width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <ellipse
          cx={C.x}
          cy={C.y}
          rx={RX}
          ry={RY}
          fill="none"
          stroke={COLORS.ivory}
          strokeOpacity={0.14}
          strokeDasharray="2 6"
        />
        <ellipse
          cx={C.x}
          cy={C.y}
          rx={RX * 0.55}
          ry={RY * 0.55}
          fill="none"
          stroke={COLORS.ivory}
          strokeOpacity={0.08}
        />
        {pos.map((p, i) => (
          <line
            key={i}
            x1={C.x}
            y1={C.y}
            x2={p.x}
            y2={p.y}
            stroke={COLORS.ivory}
            strokeOpacity={0.18}
            strokeWidth={0.8}
          />
        ))}
        {links.map(([a, b]) => (
          <line
            key={`${a}${b}`}
            x1={pos[a].x}
            y1={pos[a].y}
            x2={pos[b].x}
            y2={pos[b].y}
            stroke={groupColor[capabilities[a].group]}
            strokeOpacity={0.45}
            strokeWidth={0.9}
          />
        ))}
      </svg>

      <div
        data-layer="Node / Core"
        className="absolute flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-ivory/35 bg-forest text-center"
        style={{ left: C.x, top: C.y }}
      >
        <span className="absolute inset-[10px] rounded-full border border-ivory/10" />
        <span className="text-[10.5px] font-semibold tracking-[0.2em] text-ochre">CORE</span>
        <span className="mt-1.5 font-serif text-[19px] leading-[1.1] text-ivory">
          The entrepreneur’s
          <br />
          credit experience
        </span>
      </div>

      {capabilities.map((c, i) => {
        const p = pos[i];
        const color = groupColor[c.group];
        return (
          <div
            key={c.n}
            data-component="DiagramNode"
            data-layer={`Node / ${c.n} ${c.label}`}
            className="absolute flex w-[210px] -translate-x-1/2 flex-col items-center text-center"
            style={{ left: p.x, top: p.y - 30 }}
          >
            <div
              className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-forest"
              style={{ border: `1px solid ${color}`, color }}
            >
              <c.Icon size={24} />
              <span className="absolute -right-2 -top-2 rounded-full bg-forest px-1 font-serif text-[13px] text-ivory/70">
                {c.n}
              </span>
            </div>
            <div className="mt-2 bg-forest px-2 py-1">
              <div className="text-[12px] font-semibold uppercase leading-[1.35] tracking-[0.12em] text-ivory">
                {c.label}
              </div>
              <div className="mt-1 text-[12.5px] leading-[1.35] text-sage">{c.note}</div>
            </div>
          </div>
        );
      })}

      <div
        data-layer="Legend"
        className="absolute right-0 top-0 space-y-2 text-[11px] uppercase tracking-[0.14em] text-ivory/70"
      >
        {(
          [
            ["interaction", "Interaction"],
            ["verification", "Verification & data"],
            ["decision", "Decision"],
          ] as [Group, string][]
        ).map(([g, l]) => (
          <div key={g} className="flex items-center gap-2.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ border: `1px solid ${groupColor[g]}` }}
            />
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page05ZeroBased() {
  return (
    <Page id="p05" name="05 — Mibanco: Zero-Based Design" background="forest">
      <Area col={1} span={4} top={64} layer="Text stack">
        <SectionLabel tone="dark">03 / Zero-Based Design</SectionLabel>
        <div className="mt-7">
          <Headline size={50} tone="dark">
            Redesigning the Lending Journey from Zero
          </Headline>
        </div>
        <div className="mt-5">
          <Subhead tone="dark" size={22}>
            Moving beyond digitization to reconsider how the entire credit experience could work.
          </Subhead>
        </div>
        <div className="mt-9">
          <Body tone="dark" size={15}>
            <p>
              Rather than digitizing the existing process step by step, the team used zero-based
              design to reimagine credit evaluation and disbursement as a fully digital journey.
            </p>
            <p>
              The emerging service brought together conversational interactions, digital identity
              verification, document-reading capabilities using OCR, and credit risk assessment.
            </p>
            <p>
              I led the reimagination sessions and helped translate the future vision into a
              redesigned journey and prioritized MVP, collaborating with Business, Product,
              Credicorp AI, and Technology teams.
            </p>
          </Body>
        </div>
      </Area>

      <Area col={5} span={8} top={64} layer="Figure label">
        <Caption tone="dark">Fig. 03.1 — Service capability map</Caption>
      </Area>
      <Area col={5} span={8} top={100} layer="Capability map">
        <CapabilityMap />
      </Area>

      <Area col={5} span={5} top={752} layer="Strategic insight">
        <PullQuote tone="dark" size={20}>
          Zero-based design allowed us to question the process itself, rather than simply digitize
          its existing steps.
        </PullQuote>
      </Area>
      <Area col={10} span={3} top={770} layer="Disclaimer caption" className="text-right">
        <span className="text-[11.5px] italic text-sage/80">
          Illustrative service capability map — not the proprietary operational flow.
        </span>
      </Area>

      <PageFooter left={MIBANCO_FOOTER} folio="05" tone="dark" />
    </Page>
  );
}
