import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PublicDashboard } from "@/components/PublicDashboard";

export const metadata = {
  title: "Public dashboard — What's the 311?",
  description: "How San Francisco is cleaning up, block by block. Public transparency view.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <PublicDashboard />
      <Footer />
    </main>
  );
}
