import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { OperationsDashboard } from "@/components/OperationsDashboard";

export const metadata = {
  title: "DPW operations dashboard — What's the 311?",
  description: "Today's queue, prioritized and de-duplicated. Internal DPW operations view.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <OperationsDashboard />
      <Footer />
    </main>
  );
}
