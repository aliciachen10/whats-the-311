export const CITY_RESP = 38;

export type Neighborhood = {
  n: string;
  reports: number;
  resp: number;
  litter: number;
  prop: number;
  spot?: boolean;
};

export type QueueRow = {
  priority: "P1" | "P2" | "P3";
  category: string;
  location: string;
  neighborhood: string;
  severity: number;
  ageHrs: number;
  dupes: number;
  route: string;
  status: "queued" | "dispatched" | "blindspot";
};

export type Cluster = {
  n: number;
  cat: string;
  loc: string;
  win: string;
  nbh: string;
};

export type Kpis = {
  queue_count: number;
  queue_subtitle: string;
  dupes_merged: number;
  dupes_subtitle: string;
  p1_count: number;
  blindspot_count: number;
  blindspot_subtitle: string;
  raw_24h: number;
  raw_24h_rounded: number;
  backlog_90d: number;
  as_of: string;
};

export type DailyFlow = {
  date: string;
  opened: number;
  closed: number;
};

export type PublicKpis = {
  median_resolve_hours: number;
  median_resolve_delta_pct: number;
  fastest_resolved_hours: number;
  fastest_category: string;
  fastest_neighborhood: string;
  reports_this_month: number;
  reports_delta_pct: number;
  closed_within_target_pct: number;
  closed_within_target_delta_pts: number;
  as_of: string;
};

// Static neighborhood data used by the PUBLIC dashboard (campaign page).
// The DPW ops page reads its own live numbers from data/neighborhoods.json
// (produced by scripts/snapshot.py). Both use the same audit-derived
// litter/prop/spot values — kept in sync manually with snapshot.py's
// BLINDSPOT_NEIGHBORHOODS list.
export const neighborhoods: Neighborhood[] = [
  { n: "Tenderloin", reports: 9120, resp: 19, litter: 2.91, prop: 3.8 },
  { n: "Mission", reports: 8470, resp: 23, litter: 2.79, prop: 1.6 },
  { n: "South of Market", reports: 6890, resp: 31, litter: 2.6, prop: 0.7 },
  { n: "Financial District", reports: 5210, resp: 18, litter: 2.2, prop: 2.1 },
  { n: "Chinatown", reports: 4870, resp: 20, litter: 2.1, prop: 3.1 },
  { n: "Nob Hill", reports: 3960, resp: 21, litter: 2.05, prop: 2.4 },
  { n: "North Beach", reports: 3040, resp: 22, litter: 2.15, prop: 2.0 },
  { n: "Russian Hill", reports: 3210, resp: 20, litter: 1.98, prop: 2.6 },
  { n: "Bayview Hunters Point", reports: 2980, resp: 44, litter: 2.74, prop: 0.31, spot: true },
  { n: "Excelsior", reports: 1620, resp: 36, litter: 2.45, prop: 0.34, spot: true },
  { n: "West of Twin Peaks", reports: 1430, resp: 33, litter: 2.02, prop: 0.6 },
  { n: "Portola", reports: 1110, resp: 39, litter: 2.41, prop: 0.27, spot: true },
  { n: "Visitacion Valley", reports: 1240, resp: 46, litter: 2.62, prop: 0.22, spot: true },
  { n: "Oceanview/Merced/Ingleside", reports: 980, resp: 47, litter: 2.55, prop: 0.1, spot: true },
];
