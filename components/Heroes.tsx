const heroes = [
  { rank: 1, handle: "@dee_sf",     hood: "Bayview",        reports: 412, badge: "Bayview Block Captain" },
  { rank: 2, handle: "@civicjon",   hood: "Visitacion Valley", reports: 287, badge: "VisVal Voice" },
  { rank: 3, handle: "@maria_b",    hood: "Excelsior",      reports: 244, badge: "Excelsior Eyes" },
  { rank: 4, handle: "@reesha",     hood: "OMI",            reports: 211, badge: "OMI Originator" },
  { rank: 5, handle: "@khoa.sf",    hood: "Portola",        reports: 198, badge: "Portola Patroller" },
];

const underreported = ["Bayview", "Visitacion Valley", "OMI", "Portola", "Excelsior"];

export function Heroes() {
  return (
    <section id="heroes" className="bg-ink text-fog">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-sf-gold">
              Hero Reporters
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none">
              Reporters from{" "}
              <span className="text-sf-orange">underheard neighborhoods</span> meet the Mayor.
            </h2>
            <p className="mt-6 text-fog/70">
              Downtown gets reported on constantly. Bayview, Visitacion Valley, the
              OMI, Portola, and Excelsior don&apos;t — and crews go where data goes.
              Each quarter, the top reporter from each of these neighborhoods is invited
              to City Hall to meet the Mayor and SF Public Works leadership.
            </p>

            <div className="mt-8 rounded-2xl border border-fog/10 bg-white/5 p-6">
              <h3 className="font-display text-xl">The Mayor&apos;s Table 🏛️</h3>
              <ul className="mt-3 space-y-2 text-sm text-fog/80">
                <li>• Quarterly lunch at City Hall with Mayor + DPW Director</li>
                <li>• Tell the city what your block actually needs</li>
                <li>• Limited-edition &quot;Bayview Block Captain&quot; jacket</li>
                <li>• Feature on @sfpublicworks + this site</li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-widest text-sf-gold">
                Spotlight neighborhoods this quarter
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {underreported.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-fog/20 px-3 py-1 text-xs"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-2xl border border-fog/10 bg-white/5 p-2">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs uppercase tracking-widest text-fog/50">
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Reporter</th>
                    <th className="px-4 py-3">Neighborhood</th>
                    <th className="px-4 py-3 text-right">Reports (Q)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fog/10">
                  {heroes.map((h) => (
                    <tr key={h.handle} className="text-sm">
                      <td className="px-4 py-4 font-display text-xl text-sf-orange">
                        {String(h.rank).padStart(2, "0")}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="grid h-9 w-9 place-items-center rounded-full bg-sf-orange/20 font-display text-sm text-sf-gold">
                            {h.handle[1].toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold">{h.handle}</div>
                            <div className="text-xs text-fog/60">{h.badge}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">{h.hood}</td>
                      <td className="px-4 py-4 text-right font-display text-lg">
                        {h.reports}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-fog/60">
              Leaderboard refreshes weekly. To qualify, link your SF311 account
              at sign-up. One spot per neighborhood per quarter.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#download" className="rounded-full bg-sf-orange px-5 py-3 font-semibold text-white">
                Start reporting →
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-fog/30 px-5 py-3 font-semibold hover:bg-fog hover:text-ink"
              >
                Program rules
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
