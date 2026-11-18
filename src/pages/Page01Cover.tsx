import { Area, Caption, Page, SectionLabel } from "../design-system/components";
import { COLORS } from "../design-system/grid";

/** Futures cone emerging from the intersection of people, technology and systems. */
function SystemsVisualization() {
  const O = { x: 290, y: 318 };
  const circles = [
    { x: 290, y: 222, label: "Human behaviour" },
    { x: 207, y: 366, label: "Emerging technologies" },
    { x: 373, y: 366, label: "Complex systems" },
  ];
  const r = 132;
  const dir = (-36 * Math.PI) / 180;
  const pt = (len: number, off: number) => ({
    x: O.x + len * Math.cos(dir + (off * Math.PI) / 180),
    y: O.y + len * Math.sin(dir + (off * Math.PI) / 180),
  });
  const cone = (half: number, len: number) => {
    const a = pt(len, -half);
    const b = pt(len, half);
    return `M${O.x},${O.y} L${a.x},${a.y} A${len},${len} 0 0 1 ${b.x},${b.y} Z`;
  };
  // Nodes sit on circle perimeters; links suggest relationships across fields.
  const nodes = [
    [0, 200],
    [0, 320],
    [0, 250],
    [1, 150],
    [1, 220],
    [1, 100],
    [2, 340],
    [2, 30],
    [2, 80],
  ].map(([c, deg]) => {
    const k = circles[c];
    const a = (deg * Math.PI) / 180;
    return { x: k.x + r * Math.cos(a), y: k.y + r * Math.sin(a) };
  });
  const links = [
    [0, 4],
    [1, 6],
    [2, 8],
    [3, 7],
    [5, 8],
    [0, 5],
    [1, 7],
    [4, 6],
  ];
  const tip = pt(318, 0);

  return (
    <svg
      viewBox="0 0 580 620"
      width={580}
      height={620}
      data-layer="Cover / Systems visualization"
      className="overflow-visible"
    >
      <circle
        cx={O.x}
        cy={O.y}
        r={268}
        fill="none"
        stroke={COLORS.ivory}
        strokeOpacity={0.1}
        strokeDasharray="2 6"
      />
      <circle cx={O.x} cy={O.y} r={210} fill="none" stroke={COLORS.ivory} strokeOpacity={0.07} />
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={COLORS.sage}
          strokeOpacity={0.3}
          strokeWidth={0.75}
        />
      ))}
      {circles.map((c) => (
        <circle
          key={c.label}
          cx={c.x}
          cy={c.y}
          r={r}
          fill={COLORS.sage}
          fillOpacity={0.045}
          stroke={COLORS.ivory}
          strokeOpacity={0.55}
          strokeWidth={0.9}
        />
      ))}
      {/* futures cone: possible, plausible, preferable */}
      <path
        d={cone(24, 318)}
        fill={COLORS.ivory}
        fillOpacity={0.03}
        stroke={COLORS.ivory}
        strokeOpacity={0.25}
        strokeWidth={0.75}
      />
      <path
        d={cone(14, 318)}
        fill={COLORS.ivory}
        fillOpacity={0.04}
        stroke={COLORS.ivory}
        strokeOpacity={0.35}
        strokeWidth={0.75}
      />
      <path
        d={cone(5, 318)}
        fill={COLORS.ochre}
        fillOpacity={0.28}
        stroke={COLORS.ochre}
        strokeWidth={1}
      />
      {[120, 200, 270].map((len) => {
        const a = pt(len, -24);
        const b = pt(len, 24);
        return (
          <path
            key={len}
            d={`M${a.x},${a.y} A${len},${len} 0 0 1 ${b.x},${b.y}`}
            fill="none"
            stroke={COLORS.ivory}
            strokeOpacity={0.18}
            strokeWidth={0.75}
          />
        );
      })}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={3}
          fill={COLORS.forest}
          stroke={COLORS.sage}
          strokeWidth={1}
        />
      ))}
      <circle cx={O.x} cy={O.y} r={16} fill="none" stroke={COLORS.ochre} strokeWidth={0.9} />
      <circle cx={O.x} cy={O.y} r={5} fill={COLORS.ochre} />
      <circle cx={tip.x} cy={tip.y} r={4} fill={COLORS.ochre} />

      <g fontFamily="Inter, sans-serif" fontSize={10.5} letterSpacing="0.18em" fontWeight={500}>
        <text x={290} y={62} textAnchor="middle" fill={COLORS.ivory}>
          HUMAN BEHAVIOUR
        </text>
        <text x={110} y={532} textAnchor="middle" fill={COLORS.ivory}>
          EMERGING TECHNOLOGIES
        </text>
        <text x={470} y={532} textAnchor="middle" fill={COLORS.ivory}>
          COMPLEX SYSTEMS
        </text>
        <text x={tip.x + 12} y={tip.y - 14} fill={COLORS.ochre}>
          PREFERABLE
        </text>
        <text x={tip.x + 12} y={tip.y + 1} fill={COLORS.ochre}>
          FUTURES
        </text>
      </g>
      <g
        fontFamily="Inter, sans-serif"
        fontSize={9.5}
        letterSpacing="0.12em"
        fill={COLORS.sage}
        fillOpacity={0.7}
      >
        <text x={pt(212, 30).x + 6} y={pt(212, 30).y + 10}>
          possible
        </text>
        <text x={pt(160, 18).x + 4} y={pt(160, 18).y + 12}>
          plausible
        </text>
      </g>
    </svg>
  );
}

export default function Page01Cover() {
  return (
    <Page id="p01" name="01 — Portfolio Cover" background="forest">
      <Area col={1} span={6} top={64} layer="Page label">
        <SectionLabel tone="dark">Portfolio / 2026</SectionLabel>
      </Area>
      <Area col={9} span={4} top={64} layer="Running head" className="text-right">
        <Caption tone="dark">Application portfolio · MDes SFI</Caption>
      </Area>

      <Area col={1} span={7} top={150} layer="Title">
        <h1 className="font-serif text-[116px] font-normal leading-[0.94] tracking-[-0.025em] text-ivory">
          Designing
          <br />
          Human-Centred
          <br />
          Futures<span className="text-ochre">.</span>
        </h1>
      </Area>
      <Area col={1} span={6} top={502} layer="Subtitle">
        <p className="text-[24px] font-light tracking-[-0.01em] text-sage">
          Research, Strategic Foresight &amp; Innovation
        </p>
      </Area>

      <Area col={1} span={6} top={590} layer="Author">
        <div className="font-serif text-[36px] leading-none text-ivory">Martha A. Valdez</div>
        <div className="mt-3 text-[12px] font-medium uppercase tracking-[0.22em] text-ochre">
          Strategic Design Researcher
        </div>
        <div className="mt-4 text-[12.5px] tracking-[0.02em] text-ivory/55">
          Psychology · Strategic Foresight · Behavioural Science · Human-Centred AI · Service
          Innovation
        </div>
      </Area>

      <div className="absolute" style={{ left: 940, top: 92 }}>
        <SystemsVisualization />
      </div>

      <Area col={1} span={12} top={756} layer="Rule">
        <div className="h-px w-full bg-ivory/15" />
      </Area>
      <Area col={1} span={4} top={786} layer="Application">
        <Caption tone="dark">Master of Design</Caption>
        <div className="mt-2 text-[15px] leading-[1.45] text-ivory">
          Strategic Foresight and Innovation
          <br />
          <span className="text-ivory/60">OCAD University · Toronto, Canada</span>
        </div>
      </Area>
      <Area col={6} span={5} top={786} layer="Positioning statement">
        <p className="font-serif text-[18px] italic leading-[1.4] text-ivory/80">
          Exploring how human behaviour, emerging technologies, and complex systems intersect to
          design more inclusive futures.
        </p>
      </Area>
      <Area col={11} span={2} top={780} layer="Year" className="text-right">
        <div className="font-serif text-[44px] leading-none text-ivory">2026</div>
      </Area>
    </Page>
  );
}
