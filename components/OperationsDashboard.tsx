"use client";

import { useMemo, useState } from "react";
import type { Cluster, DailyFlow, Kpis, Neighborhood, QueueRow } from "@/lib/dashboardData";
import { InflowOutflowChart } from "@/components/InflowOutflowChart";

type SortKey = keyof Pick<QueueRow, "priority" | "category" | "location" | "neighborhood" | "severity" | "ageHrs" | "dupes">;

const PR: Record<QueueRow["priority"], number> = { P1: 3, P2: 2, P3: 1 };

type Props = {
  queue: QueueRow[];
  neighborhoods: Neighborhood[];
  clusters: Cluster[];
  kpis: Kpis;
  dailyFlow: DailyFlow[];
};

export function OperationsDashboard({ queue, neighborhoods, clusters, kpis, dailyFlow }: Props) {
  const [fcat, setFcat] = useState("");
  const [fpri, setFpri] = useState("");
  const [fsearch, setFsearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("severity");
  const [sortDir, setSortDir] = useState<-1 | 1>(-1);
  const [page, setPage] = useState(0);

  const PAGE_SIZE = 10;

  const categories = useMemo(
    () => [...new Set(queue.map((q) => q.category))].sort(),
    [queue]
  );

  const rows = useMemo(() => {
    const filtered = queue.filter(
      (r) =>
        (!fcat || r.category === fcat) &&
        (!fpri || r.priority === fpri) &&
        (!fsearch || (r.location + r.neighborhood).toLowerCase().includes(fsearch.toLowerCase()))
    );
    return filtered.sort((a, b) => {
      let x: number | string = a[sortKey];
      let y: number | string = b[sortKey];
      if (sortKey === "priority") {
        x = PR[a.priority];
        y = PR[b.priority];
      }
      if (typeof x === "string" && typeof y === "string") return sortDir * x.localeCompare(y);
      return sortDir * ((x as number) - (y as number));
    });
  }, [queue, fcat, fpri, fsearch, sortKey, sortDir]);

  const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const clampedPage = Math.min(page, pageCount - 1);
  const pagedRows = rows.slice(clampedPage * PAGE_SIZE, (clampedPage + 1) * PAGE_SIZE);
  // When filters narrow the result set so much that the current page is
  // past the end, snap back to the last available page on the next render.
  const resetPage = () => setPage(0);

  const sortBy = (k: SortKey) => {
    if (k === sortKey) setSortDir((d) => (d === -1 ? 1 : -1));
    else {
      setSortKey(k);
      setSortDir(-1);
    }
  };

  const blindRows = [...neighborhoods].sort((a, b) => a.prop - b.prop);
  const minP = Math.log(0.1);
  const maxP = Math.log(3.8);
  const pos = (p: number) => ((Math.log(p) - minP) / (maxP - minP)) * 100;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <div className="text-xs font-extrabold tracking-widest uppercase" style={{ color: "#3E78B2" }}>
          DPW operations · internal · refreshes every morning
        </div>
        <h1 className="font-display text-3xl md:text-4xl mt-2">
          Today&apos;s queue, prioritized and de-duplicated.
        </h1>
        <p className="text-ink/70 mt-2 max-w-2xl">
          ~{fmtInt(kpis.raw_24h_rounded)} raw tickets reduced to a ranked work list, with blind-spot correction so crews aren&apos;t sent only where it&apos;s loudest.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Kpi accent="#3E78B2" bg="#E7F1FB" big={fmtInt(kpis.queue_count)} lbl="Tickets in queue today" delta={kpis.queue_subtitle} />
        <Kpi accent="#E0552B" bg="#FDEEE2" big={fmtInt(kpis.dupes_merged)} lbl="Duplicates auto-merged" delta={kpis.dupes_subtitle} />
        <Kpi accent="#C0392B" bg="#FBE9E7" big={fmtInt(kpis.p1_count)} lbl="P1, dispatch now" delta="syringes · human/animal waste" />
        <Kpi accent="#E0A92E" bg="#FFF6EC" big={fmtInt(kpis.blindspot_count)} lbl="Blind-spot alerts" delta={kpis.blindspot_subtitle} />
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_1.5fr] mb-6">
        <Card>
          <h3 className="font-display text-lg">Blind-spot neighborhoods</h3>
          <p className="text-ink/75 text-sm mt-1 mb-4">
            Where objective dirtiness (Controller audit) outruns 311 volume. Reporting propensity vs citywide average of 1.0.
          </p>
          <div>
            {blindRows.map((d) => {
              const color = d.prop < 0.5 ? "#C0392B" : d.prop > 1.3 ? "#3E78B2" : "#E0A92E";
              return (
                <div key={d.n} className="flex items-center gap-3 py-2 border-b border-ink/10 text-sm last:border-b-0">
                  <div className="flex-1 min-w-0 flex items-center gap-1.5 font-bold whitespace-nowrap">
                    <span className="truncate">{d.n}</span>
                    {d.spot && (
                      <span className="flex-none text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-sf-orange text-white">
                        BLIND
                      </span>
                    )}
                  </div>
                  <div className="w-[102px] flex-none flex flex-col items-end gap-1.5">
                    <div className="font-extrabold tabular-nums text-xs" style={{ color }}>
                      {d.prop.toFixed(2)}× · litter {d.litter.toFixed(1)}
                    </div>
                    <div className="w-full h-2.5 rounded relative" style={{ background: "linear-gradient(90deg,#E7F1FB,#f6e3dc)" }}>
                      <div
                        className="absolute -top-0.5 w-4 h-4 rounded-full border-2 border-white"
                        style={{ left: `${pos(d.prop).toFixed(0)}%`, transform: "translateX(-50%)", background: color, boxShadow: "0 1px 3px rgba(0,0,0,.2)" }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-xs text-ink/75 flex flex-wrap gap-4 mt-3">
            <Legend color="#3E78B2">over-reports (loud)</Legend>
            <Legend color="#C0392B">under-reports (blind spot)</Legend>
          </div>
          <p className="text-xs text-ink/70 mt-3">
            Correction factor applied to live 311 to estimate true need where reports are sparse. Runs on open data; no new sensors.
          </p>
        </Card>

        <Card>
          <h3 className="font-display text-lg">Automatic de-duplication</h3>
          <p className="text-ink/75 text-sm mt-1 mb-4">
            Clustered reports merged into one job before dispatch, so two crews aren&apos;t sent to one pile.
          </p>
          <div>
            {clusters.map((c, i) => (
              <div key={i} className="border border-ink/10 rounded-xl p-3 mb-2 bg-white">
                <div className="flex items-center gap-2 font-extrabold text-sm">
                  <span className="bg-[#C0392B] text-white text-xs font-extrabold rounded-full px-2 py-0.5">
                    {c.n} reports
                  </span>
                  <span className="text-ink/40 font-bold">→</span>
                  <span>1 job</span>
                </div>
                <div className="text-ink/75 text-xs mt-1">
                  <b className="text-ink/80">{c.cat}</b> · {c.loc} · {c.nbh} · window {c.win}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-ink/70 mt-3">
            Today: <b>{fmtInt(kpis.dupes_merged)}</b> duplicates merged · est. <b>{Math.max(Math.floor(kpis.dupes_merged / 4), 1)}</b> redundant dispatches avoided.
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="font-display text-lg">Daily prioritization queue</h3>
        <p className="text-ink/75 text-sm mt-1 mb-4">
          Ranked by severity, jurisdiction-routed, blind-spot adjusted. Sort any column; filter by category.
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          <select
            value={fcat}
            onChange={(e) => { setFcat(e.target.value); resetPage(); }}
            className="text-sm px-3 py-2 border border-ink/15 rounded-lg bg-white"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <select
            value={fpri}
            onChange={(e) => { setFpri(e.target.value); resetPage(); }}
            className="text-sm px-3 py-2 border border-ink/15 rounded-lg bg-white"
          >
            <option value="">All priorities</option>
            <option>P1</option>
            <option>P2</option>
            <option>P3</option>
          </select>
          <input
            type="search"
            value={fsearch}
            onChange={(e) => { setFsearch(e.target.value); resetPage(); }}
            placeholder="Search location or neighborhood…"
            className="text-sm px-3 py-2 border border-ink/15 rounded-lg bg-white flex-1 min-w-[200px]"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-ink/70 text-xs uppercase tracking-wider">
                <Th onClick={() => sortBy("priority")}>Priority</Th>
                <Th onClick={() => sortBy("category")}>Category</Th>
                <Th onClick={() => sortBy("location")}>Location</Th>
                <Th onClick={() => sortBy("neighborhood")}>Neighborhood</Th>
                <Th onClick={() => sortBy("severity")} right>Severity</Th>
                <Th onClick={() => sortBy("ageHrs")} right>Age</Th>
                <Th onClick={() => sortBy("dupes")} right>Merged</Th>
                <th className="text-left py-2 pr-3">Route to</th>
                <th className="text-left py-2 pr-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pagedRows.map((r, i) => (
                <tr key={i} className="border-t border-ink/10">
                  <td className="py-2 pr-3">
                    <PriorityPill priority={r.priority} />
                  </td>
                  <td className="py-2 pr-3">{r.category}</td>
                  <td className="py-2 pr-3">{r.location}</td>
                  <td className="py-2 pr-3">{r.neighborhood}</td>
                  <td className="py-2 pr-3 text-right tabular-nums font-bold">{r.severity}</td>
                  <td className="py-2 pr-3 text-right tabular-nums">{r.ageHrs}h</td>
                  <td className="py-2 pr-3 text-right tabular-nums">{r.dupes ? `+${r.dupes}` : "—"}</td>
                  <td className="py-2 pr-3">{r.route}</td>
                  <td className="py-2 pr-3">
                    <StatusBadge status={r.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between mt-4 text-xs text-ink/75">
          <div>
            {rows.length === 0
              ? "No matches"
              : `${clampedPage * PAGE_SIZE + 1}–${Math.min((clampedPage + 1) * PAGE_SIZE, rows.length)} of ${rows.length}`}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={clampedPage === 0}
              className="px-3 py-1.5 rounded-lg border border-ink/15 bg-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-ink/5"
            >
              ← Prev
            </button>
            <span className="tabular-nums">
              Page {clampedPage + 1} of {pageCount}
            </span>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
              disabled={clampedPage >= pageCount - 1}
              className="px-3 py-1.5 rounded-lg border border-ink/15 bg-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-ink/5"
            >
              Next →
            </button>
          </div>
        </div>
        <p className="text-xs text-ink/70 mt-3">
          Severity blends audit-calibrated need with report signal. &ldquo;Merged&rdquo; = duplicate reports folded into this job.
        </p>
      </Card>

      <div className="mt-6">
        <Card>
          <h3 className="font-display text-lg">Inflow vs. closures by day, last 90 days</h3>
          <p className="text-ink/75 text-sm mt-1 mb-4">
            Are crews closing as fast as the city reports? When opened (red) outruns closed (green), the backlog grows.
          </p>
          <InflowOutflowChart rows={dailyFlow} />
        </Card>
      </div>

      <p className="text-xs text-ink/70 mt-8">
        Prototype data illustrative. Built on SF open data (311 cases <code>vw6y-z8j6</code>, Street &amp; Sidewalk Standards <code>qya8-uhsz</code>).
        Not an official communication of the City unless co-branded.
      </p>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">{children}</div>;
}

function Kpi({ accent, bg, big, lbl, delta }: { accent: string; bg: string; big: string; lbl: string; delta: string }) {
  return (
    <Card>
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg mb-2"
        style={{ background: bg, color: accent }}
      >
        ●
      </div>
      <div className="text-3xl font-extrabold leading-none tabular-nums">{big}</div>
      <div className="text-xs text-ink/75 mt-2">{lbl}</div>
      <div className="text-xs font-bold mt-2 text-ink/75">{delta}</div>
    </Card>
  );
}

function Th({ children, onClick, right }: { children: React.ReactNode; onClick: () => void; right?: boolean }) {
  return (
    <th
      onClick={onClick}
      className={`py-2 pr-3 cursor-pointer select-none hover:text-ink ${right ? "text-right" : "text-left"}`}
    >
      {children}
    </th>
  );
}

function PriorityPill({ priority }: { priority: QueueRow["priority"] }) {
  const styles = {
    P1: "bg-[#C0392B] text-white",
    P2: "bg-[#E0A92E] text-[#3a2c05]",
    P3: "bg-[#7f8c99] text-white",
  } as const;
  return (
    <span className={`inline-block text-xs font-extrabold px-2 py-0.5 rounded-full ${styles[priority]}`}>
      {priority}
    </span>
  );
}

function StatusBadge({ status }: { status: QueueRow["status"] }) {
  const map = {
    queued: ["bg-[#FDEEE2] text-[#9c4a13]", "Queued"],
    dispatched: ["bg-[#E6F4EA] text-[#1e6b32]", "Dispatched"],
    blindspot: ["bg-[#E7F1FB] text-[#23527c]", "Blind-spot ▲"],
  } as const;
  const [cls, label] = map[status];
  return <span className={`text-xs font-bold px-2 py-1 rounded ${cls}`}>{label}</span>;
}

function fmtInt(n: number): string {
  return n.toLocaleString("en-US");
}

function Legend({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: color }} />
      {children}
    </span>
  );
}
