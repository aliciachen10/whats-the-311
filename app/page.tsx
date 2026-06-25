import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ReportWhat } from "@/components/ReportWhat";
import { Wins } from "@/components/Wins";
import { Heroes } from "@/components/Heroes";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <HowItWorks />
      <ReportWhat />
      <Wins />
      <Heroes />
      <Footer />
    </main>
  );
}
