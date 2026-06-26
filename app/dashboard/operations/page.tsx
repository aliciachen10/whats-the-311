import fs from "node:fs";
import path from "node:path";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { OperationsDashboard } from "@/components/OperationsDashboard";
import type { Cluster, DailyFlow, Kpis, Neighborhood, QueueRow } from "@/lib/dashboardData";

export const metadata = {
  title: "DPW operations dashboard, What's the 311?",
  description: "Today's queue, prioritized and de-duplicated. Internal DPW operations view.",
};

function readJson<T>(name: string): T {
  const p = path.join(process.cwd(), "data", name);
  return JSON.parse(fs.readFileSync(p, "utf8")) as T;
}

type Snapshot<T> = { as_of: string; rows: T[] };

export default function Page() {
  const queue = readJson<Snapshot<QueueRow>>("queue.json").rows;
  const neighborhoods = readJson<Snapshot<Neighborhood>>("neighborhoods.json").rows;
  const clusters = readJson<Snapshot<Cluster>>("clusters.json").rows;
  const kpis = readJson<Kpis>("kpis.json");
  const dailyFlow = readJson<Snapshot<DailyFlow>>("daily_flow.json").rows;

  return (
    <div className="min-h-screen">
      <Nav />
      <main id="main-content">
        <OperationsDashboard
          queue={queue}
          neighborhoods={neighborhoods}
          clusters={clusters}
          kpis={kpis}
          dailyFlow={dailyFlow}
        />
      </main>
      <Footer />
    </div>
  );
}
