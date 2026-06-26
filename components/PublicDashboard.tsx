import { neighborhoods } from "@/lib/dashboardData";

export function PublicDashboard() {
  const leaderboard = [...neighborhoods].sort((a, b) => b.reports - a.reports);

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
        <Kpi accent="#E0552B" bg="#FDEEE2" big="41 hrs" lbl="Avg. time to resolve" delta="▼ 12% vs last month" deltaClass="text-emerald-700" />
        <Kpi accent="#2F9E44" bg="#E6F4EA" big="2 hrs" lbl="Fastest resolved this week" delta="Steam cleaning · Tenderloin" deltaClass="text-ink/60" />
        <Kpi accent="#3E78B2" bg="#E7F1FB" big="84,210" lbl="Reports this month" delta="▲ 9% participation" deltaClass="text-emerald-700" />
        <Kpi accent="#5a4ea3" bg="#EDEBF7" big="92%" lbl="Closed within target" delta="▲ 4 pts" deltaClass="text-emerald-700" />
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
        Prototype data illustrative. Built on SF open data (311 cases <code>vw6y-z8j6</code>, Street &amp; Sidewalk Standards <code>qya8-uhsz</code>).
        Not an official communication of the City unless co-branded.
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

