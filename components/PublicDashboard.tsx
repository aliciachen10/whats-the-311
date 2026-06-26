import type { Neighborhood, PublicKpis } from "@/lib/dashboardData";

type Props = {
  neighborhoods: Neighborhood[];
  kpis: PublicKpis;
};

function fmtResolveTime(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  return `${Math.round(hours)} hrs`;
}

// Direction-aware delta labels.
// `positiveIsGood=true`  — higher numbers = green ▲ / lower = red ▼ (participation, % within SLA)
// `positiveIsGood=false` — lower numbers  = green ▼ / higher = red ▲ (avg resolve time)
function deltaLabel(value: number, suffix: string, positiveIsGood: boolean) {
  if (value === 0) {
    return { text: `flat ${suffix}`.trim(), cls: "text-ink/60" };
  }
  const up = value > 0;
  const good = positiveIsGood ? up : !up;
  const arrow = up ? "▲" : "▼";
  return {
    text: `${arrow} ${Math.abs(value)}${suffix}`,
    cls: good ? "text-emerald-700" : "text-rose-700",
  };
}

export function PublicDashboard({ neighborhoods, kpis }: Props) {
  const leaderboard = [...neighborhoods].sort((a, b) => b.reports - a.reports);

  const resolveDelta = deltaLabel(kpis.median_resolve_delta_pct, "% vs last month", false);
  const reportsDelta = deltaLabel(kpis.reports_delta_pct, "% participation", true);
  const slaDelta = deltaLabel(kpis.closed_within_target_delta_pts, " pts", true);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <div className="text-xs font-extrabold tracking-widest uppercase text-sf-bay">
          Public view · updates daily
        </div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">
          How San Francisco is cleaning up, block by block.
        </h1>
        <p className="text-ink/70 mt-2 max-w-2xl">
          Every report is a vote for your neighborhood. Here&apos;s what the city is doing with them.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Kpi
          accent="#E0552B"
          bg="#FDEEE2"
          big={fmtResolveTime(kpis.median_resolve_hours)}
          lbl="Median time to resolve"
          delta={resolveDelta.text}
          deltaClass={resolveDelta.cls}
        />
        <Kpi
          accent="#2F9E44"
          bg="#E6F4EA"
          big={fmtResolveTime(kpis.fastest_resolved_hours)}
          lbl="Fastest resolved this week"
          delta={`${kpis.fastest_category} · ${kpis.fastest_neighborhood}`}
          deltaClass="text-ink/60"
        />
        <Kpi
          accent="#3E78B2"
          bg="#E7F1FB"
          big={kpis.reports_this_month.toLocaleString()}
          lbl="Reports this month"
          delta={reportsDelta.text}
          deltaClass={reportsDelta.cls}
        />
        <Kpi
          accent="#5a4ea3"
          bg="#EDEBF7"
          big={`${kpis.closed_within_target_pct}%`}
          lbl="Closed within target"
          delta={slaDelta.text}
          deltaClass={slaDelta.cls}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-[1.4fr_1fr] mb-6">
        <Card>
          <h3 className="font-display text-lg">Neighborhood leaderboard</h3>
          <p className="text-ink/60 text-sm mt-1 mb-4">
            Reports filed this month. Spotlight neighborhoods are historically under-heard — crews go where the data goes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-ink/50 text-xs uppercase tracking-wider">
                  <th className="text-right py-2 pr-3">#</th>
                  <th className="text-left py-2 pr-3">Neighborhood</th>
                  <th className="text-right py-2 pr-3">Reports</th>
                  <th className="text-right py-2 pr-3">Avg resolve</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((d, i) => (
                  <tr key={d.n} className={`border-t border-ink/10 ${d.spot ? "bg-sf-gold/10" : ""}`}>
                    <td className="text-right py-2 pr-3 font-bold text-ink/50 tabular-nums">{String(i + 1).padStart(2, "0")}</td>
                    <td className="py-2 pr-3">{d.n}</td>
                    <td className="text-right py-2 pr-3 tabular-nums">{d.reports.toLocaleString()}</td>
                    <td className="text-right py-2 pr-3 tabular-nums">{d.resp}h</td>
                    <td className="py-2">
                      {d.spot && (
                        <span className="inline-block text-[10px] font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-sf-orange text-white">
                          SPOTLIGHT
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="font-display text-lg">This month&apos;s Community Hero</h3>
          <p className="text-ink/60 text-sm mt-1 mb-4">
            Top reporter from a spotlight neighborhood. Invited to City Hall to meet the Mayor and DPW leadership.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sf-orange to-sf-gold text-white font-extrabold text-2xl flex items-center justify-center flex-none">
              D
            </div>
            <div>
              <div className="font-extrabold text-lg">@dee_sf</div>
              <div className="text-ink/60 text-sm">Bayview · &ldquo;Bayview Block Captain&rdquo;</div>
              <div className="mt-2">
                <Chip>412 reports this quarter</Chip>
                <Chip>96% actionable</Chip>
              </div>
            </div>
          </div>
          <hr className="border-ink/10 my-5" />
          <h4 className="font-display text-sm">Runner-up reporters</h4>
          <div className="text-sm text-ink/80 leading-loose mt-1">
            <div>🥈 @civicjon · Visitacion Valley · 287</div>
            <div>🥉 @maria_b · Excelsior · 244</div>
            <div>4 · @reesha · OMI · 211</div>
          </div>
        </Card>
      </div>

      <p className="text-xs text-ink/50 mt-8">
        Headline KPIs and leaderboard derived from SF open data (311 cases <code>vw6y-z8j6</code>, Street &amp; Sidewalk Standards <code>qya8-uhsz</code>) — snapshot as of {new Date(kpis.as_of).toLocaleDateString()}. Community Hero card is illustrative; the 311 dataset does not include reporter identity. Not an official communication of the City unless co-branded.
      </p>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">{children}</div>
  );
}

function Kpi({ accent, bg, big, lbl, delta, deltaClass }: { accent: string; bg: string; big: string; lbl: string; delta: string; deltaClass: string }) {
  return (
    <Card>
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-2"
        style={{ background: bg, color: accent }}
      >
        ●
      </div>
      <div className="text-3xl font-extrabold leading-none tabular-nums">{big}</div>
      <div className="text-xs text-ink/60 mt-2">{lbl}</div>
      <div className={`text-xs font-bold mt-2 ${deltaClass}`}>{delta}</div>
    </Card>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-fog border border-ink/10 rounded-full px-3 py-1 text-xs font-bold mr-1.5 mt-1">
      {children}
    </span>
  );
}
