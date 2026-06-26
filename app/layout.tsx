import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#E0552B",
};

export const metadata: Metadata = {
  title: "What's the 311? Help clean up San Francisco",
  description:
    "SF cleans up what citizens report. Snap, send, solved, often in hours. Report litter, graffiti, dumping, and more with the 311 app.",
  openGraph: {
    title: "What's the 311?",
    description:
      "Snap it. Send it. Solved, often in hours. A public-service campaign for a cleaner SF.",
    type: "website",
    images: [
      {
        url: "/media-kit/whats-the-311-1080x1080.png",
        width: 1080,
        height: 1080,
        alt: "What's the 311? campaign poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's the 311?",
    description:
      "Snap it. Send it. Solved, often in hours. A public-service campaign for a cleaner SF.",
    images: ["/media-kit/whats-the-311-1080x1080.png"],
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
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-semibold focus:text-fog focus:outline focus:outline-2 focus:outline-sf-orange"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
