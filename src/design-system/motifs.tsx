import { COLORS } from "./grid";
import type { ProjectMotif } from "../content";

export function Motif({
  kind,
  active,
  tone = "light",
  size = 80,
}: {
  kind: ProjectMotif;
  active: boolean;
  tone?: "light" | "dark";
  size?: number;
}) {
  const dark = tone === "dark";
  const s = dark ? COLORS.sage : active ? COLORS.forest : COLORS.warmgrey;
  const accent = active ? COLORS.ochre : COLORS.sage;
  const bg = dark ? COLORS.forest : COLORS.ivory;
  // Keep strokes hairline-thin when the motif is scaled up.
  const sw = size > 80 ? ((0.9 * 80) / size) * 1.6 : 0.9;
  const common = { fill: "none", stroke: s, strokeWidth: sw };
  return (
    <svg viewBox="0 0 80 80" width={size} height={size} data-layer={`Motif / ${kind}`}>
      {kind === "network" && (
        <g>
          {[
            [40, 12],
            [66, 30],
            [58, 64],
            [22, 64],
            [14, 30],
          ].map(([x, y], i, arr) => (
            <g key={i}>
              <line x1={40} y1={40} x2={x} y2={y} {...common} strokeOpacity={0.5} />
              <line
                x1={x}
                y1={y}
                x2={arr[(i + 2) % 5][0]}
                y2={arr[(i + 2) % 5][1]}
                {...common}
                strokeOpacity={0.25}
              />
              <circle cx={x} cy={y} r={4} fill={bg} stroke={s} strokeWidth={sw} />
            </g>
          ))}
          <circle cx={40} cy={40} r={7} fill={accent} />
        </g>
      )}
      {kind === "matrix" && (
        <g>
          <rect x={10} y={10} width={60} height={60} {...common} strokeOpacity={0.5} />
          {[0, 1, 2, 3].flatMap((r) =>
            [0, 1, 2, 3].map((c) => {
              const on = (r + c) % 3 === 0 || (r === 1 && c === 2);
              return (
                <circle
                  key={`${r}${c}`}
                  cx={20 + c * 13.3}
                  cy={20 + r * 13.3}
                  r={on ? 3.6 : 2.2}
                  fill={on ? accent : "none"}
                  stroke={s}
                  strokeWidth={sw}
                />
              );
            }),
          )}
        </g>
      )}
      {kind === "behaviour" && (
        <g>
          {[
            [18, 18],
            [18, 40],
            [18, 62],
          ].map(([x, y]) => (
            <g key={y}>
              <circle cx={x} cy={y} r={8} {...common} />
              <path d={`M${x + 8},${y} C 42,${y} 44,40 56,40`} {...common} strokeOpacity={0.5} />
            </g>
          ))}
          <circle cx={64} cy={40} r={9} fill={accent} />
        </g>
      )}
      {kind === "ecosystem" && (
        <g>
          <circle cx={40} cy={40} r={28} {...common} strokeOpacity={0.35} strokeDasharray="2 3" />
          {Array.from({ length: 7 }, (_, i) => {
            const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
            const x = 40 + 28 * Math.cos(a);
            const y = 40 + 28 * Math.sin(a);
            return (
              <g key={i}>
                <line x1={40} y1={40} x2={x} y2={y} {...common} strokeOpacity={0.4} />
                <circle
                  cx={x}
                  cy={y}
                  r={i % 3 === 0 ? 4.5 : 3}
                  fill={bg}
                  stroke={s}
                  strokeWidth={sw}
                />
              </g>
            );
          })}
          <circle cx={40} cy={40} r={6} fill={accent} />
        </g>
      )}
    </svg>
  );
}
