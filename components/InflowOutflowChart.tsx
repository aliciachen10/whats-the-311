"use client";

import type { DailyFlow } from "@/lib/dashboardData";

type Props = { rows: DailyFlow[] };

const PAD = { top: 20, right: 24, bottom: 36, left: 48 };
const VB_W = 1000;
const VB_H = 320;
const PLOT_W = VB_W - PAD.left - PAD.right;
const PLOT_H = VB_H - PAD.top - PAD.bottom;

const OPEN_COLOR = "#E0552B";
const CLOSE_COLOR = "#3F7D5B";

// Trailing 7-day average. The first 6 points get a partial-window average
// (mean of whatever days are available) rather than NaN, so the line starts
// at the left edge of the chart instead of floating in mid-air.
function rolling7(values: number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < values.length; i++) {
    const start = Math.max(0, i - 6);
    const slice = values.slice(start, i + 1);
    out.push(slice.reduce((a, b) => a + b, 0) / slice.length);
  }
  return out;
}

function niceCeil(value: number): number {
  if (value <= 0) return 100;
  const pow = Math.pow(10, Math.floor(Math.log10(value)));
  const n = value / pow;
  const stepped = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return stepped * pow;
}

function buildPath(values: number[], xScale: (i: number) => number, yScale: (v: number) => number): string {
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"}${xScale(i).toFixed(1)},${yScale(v).toFixed(1)}`)
    .join(" ");
}

export function InflowOutflowChart({ rows }: Props) {
  if (rows.length === 0) return null;

  const opened = rolling7(rows.map((r) => r.opened));
  const closed = rolling7(rows.map((r) => r.closed));

  const yMax = niceCeil(Math.max(...opened, ...closed) * 1.15);
  const xScale = (i: number) => PAD.left + (i / (rows.length - 1)) * PLOT_W;
  const yScale = (v: number) => PAD.top + (1 - v / yMax) * PLOT_H;

  const yTicks = 5;
  const tickValues = Array.from({ length: yTicks + 1 }, (_, i) => (yMax * i) / yTicks);

  // X-axis labels: every ~2 weeks, plus first and last.
  const labelEvery = Math.max(1, Math.floor(rows.length / 6));
  const xLabels = rows
    .map((r, i) => ({ i, label: formatDate(r.date) }))
    .filter(({ i }) => i % labelEvery === 0 || i === rows.length - 1);

  const openedPath = buildPath(opened, xScale, yScale);
  const closedPath = buildPath(closed, xScale, yScale);

  return (
    <div>
      <div className="flex items-center gap-5 mb-3 text-xs">
        <LegendDot color={OPEN_COLOR}>Opened (7-day avg)</LegendDot>
        <LegendDot color={CLOSE_COLOR}>Closed (7-day avg)</LegendDot>
      </div>
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Inflow vs closures by day, last 90 days"
      >
        {tickValues.map((v, i) => {
          const y = yScale(v);
          return (
            <g key={i}>
              <line
                x1={PAD.left}
                x2={PAD.left + PLOT_W}
                y1={y}
                y2={y}
                stroke="#0B1220"
                strokeOpacity={0.08}
                strokeWidth={1}
              />
              <text
                x={PAD.left - 8}
                y={y + 4}
                textAnchor="end"
                className="fill-ink/60"
                fontSize={11}
              >
                {Math.round(v).toLocaleString()}
              </text>
            </g>
          );
        })}

        {xLabels.map(({ i, label }) => (
          <text
            key={i}
            x={xScale(i)}
            y={VB_H - 12}
            textAnchor="middle"
            className="fill-ink/60"
            fontSize={11}
          >
            {label}
          </text>
        ))}

        <text
          x={12}
          y={PAD.top + PLOT_H / 2}
          textAnchor="middle"
          className="fill-ink/50"
          fontSize={11}
          transform={`rotate(-90, 12, ${PAD.top + PLOT_H / 2})`}
        >
          Tickets per day
        </text>

        <path d={openedPath} fill="none" stroke={OPEN_COLOR} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
        <path d={closedPath} fill="none" stroke={CLOSE_COLOR} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function LegendDot({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-ink/70">
      <span className="inline-block w-3 h-0.5 rounded" style={{ background: color }} />
      <span className="font-bold">{children}</span>
    </span>
  );
}

function formatDate(iso: string): string {
  const [, m, d] = iso.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[Number(m) - 1]} ${Number(d)}`;
}
