import fs from "node:fs";
import path from "node:path";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PublicDashboard } from "@/components/PublicDashboard";
import type { Neighborhood, PublicKpis } from "@/lib/dashboardData";

export const metadata = {
  title: "Public dashboard — What's the 311?",
  description: "How San Francisco is cleaning up, block by block. Public transparency view.",
};

function readJson<T>(name: string): T {
  const p = path.join(process.cwd(), "data", name);
  return JSON.parse(fs.readFileSync(p, "utf8")) as T;
}

type Snapshot<T> = { as_of: string; rows: T[] };

export default function Page() {
  const neighborhoods = readJson<Snapshot<Neighborhood>>("neighborhoods.json").rows;
  const kpis = readJson<PublicKpis>("public_kpis.json");

  return (
    <main className="min-h-screen">
      <Nav />
      <PublicDashboard neighborhoods={neighborhoods} kpis={kpis} />
      <Footer />
    </main>
  );
}
