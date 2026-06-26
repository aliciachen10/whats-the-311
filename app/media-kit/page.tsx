import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MediaKit } from "@/components/MediaKit";

export const metadata = {
  title: "Media Kit — What's the 311?",
  description:
    "Free posters, stickers, social media graphics, and print materials to spread the What's the 311? campaign in your neighborhood.",
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <MediaKit />
      <Footer />
    </main>
  );
}
