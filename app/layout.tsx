import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What's the 311? — Help clean up San Francisco",
  description:
    "SF cleans up what citizens report. Snap, send, solved — often in hours. Report litter, graffiti, dumping, and more with SolveSF or 311.",
  openGraph: {
    title: "What's the 311?",
    description:
      "Snap it. Send it. Solved — often in hours. A public-service campaign for a cleaner SF.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
