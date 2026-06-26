export const CITY_RESP = 38;

export type Neighborhood = {
  n: string;
  reports: number;
  resp: number;
  litter: number;
  prop: number;
  spot?: boolean;
};

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

export const queue: QueueRow[] = [
  { priority: "P1", category: "Used syringes", location: "Ellis & Jones", neighborhood: "Tenderloin", severity: 98, ageHrs: 1, dupes: 5, route: "DPW Sharps", status: "queued" },
  { priority: "P1", category: "Human/animal waste", location: "3rd St & Palou", neighborhood: "Bayview Hunters Point", severity: 95, ageHrs: 2, dupes: 2, route: "Steam crew", status: "dispatched" },
  { priority: "P1", category: "Illegal dumping", location: "16th & Mission", neighborhood: "Mission", severity: 91, ageHrs: 2, dupes: 7, route: "DPW + Recology", status: "queued" },
  { priority: "P1", category: "Encampment debris", location: "Cesar Chavez underpass", neighborhood: "Bayview Hunters Point", severity: 88, ageHrs: 4, dupes: 3, route: "HSOC + DPW", status: "queued" },
  { priority: "P2", category: "Illegal dumping", location: "Sunnydale Ave", neighborhood: "Visitacion Valley", severity: 79, ageHrs: 6, dupes: 1, route: "DPW + Recology", status: "blindspot" },
  { priority: "P2", category: "Human/animal waste", location: "Orizaba & Broad", neighborhood: "Oceanview/Merced/Ingleside", severity: 77, ageHrs: 7, dupes: 0, route: "Steam crew", status: "blindspot" },
  { priority: "P2", category: "Overflowing bin", location: "Geneva & Mission", neighborhood: "Excelsior", severity: 71, ageHrs: 5, dupes: 2, route: "Recology", status: "queued" },
  { priority: "P2", category: "Street litter", location: "7th & Market", neighborhood: "South of Market", severity: 68, ageHrs: 3, dupes: 4, route: "DPW sweep", status: "dispatched" },
  { priority: "P2", category: "Dead animal", location: "Bayshore Blvd", neighborhood: "Portola", severity: 66, ageHrs: 8, dupes: 0, route: "DPW / ACC", status: "blindspot" },
  { priority: "P2", category: "Graffiti", location: "Valencia & 24th", neighborhood: "Mission", severity: 58, ageHrs: 20, dupes: 3, route: "Paint crew", status: "queued" },
  { priority: "P3", category: "Street litter", location: "Powell & Geary", neighborhood: "Union Square", severity: 44, ageHrs: 5, dupes: 6, route: "DPW sweep", status: "queued" },
  { priority: "P3", category: "Overflowing bin", location: "Columbus & Bay", neighborhood: "North Beach", severity: 39, ageHrs: 9, dupes: 2, route: "Recology", status: "queued" },
  { priority: "P3", category: "Graffiti", location: "Clay & Kearny", neighborhood: "Financial District", severity: 33, ageHrs: 30, dupes: 1, route: "Paint crew", status: "queued" },
  { priority: "P3", category: "Street litter", location: "Irving & 19th", neighborhood: "Inner Sunset", severity: 28, ageHrs: 14, dupes: 0, route: "DPW sweep", status: "queued" },
];

export const clusters = [
  { n: 7, cat: "Illegal dumping", loc: "16th St & Mission", win: "6:40–8:15am", nbh: "Mission" },
  { n: 5, cat: "Human/animal waste", loc: "Ellis & Jones", win: "overnight", nbh: "Tenderloin" },
  { n: 4, cat: "Overflowing bin", loc: "3rd St & Palou", win: "7:10–7:55am", nbh: "Bayview" },
  { n: 3, cat: "Graffiti", loc: "Valencia & 24th", win: "yesterday pm", nbh: "Mission" },
];
