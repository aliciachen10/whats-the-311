"use client";
import { QRCodeSVG } from "qrcode.react";

const APP_URL = "https://sf311.org";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden grain" aria-labelledby="hero-heading">
      <div className="absolute -top-32 -right-20 h-[520px] w-[520px] rounded-full bg-sf-orange/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-sf-sky/40 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-10 md:grid-cols-12 md:pt-16">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-sf-orange" aria-hidden="true" />
            A public-service campaign for a cleaner SF
          </div>

          <h1 id="hero-heading" className="mt-6 font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
            What&apos;s the <span className="scribble-underline text-sf-orange">311</span>?
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink/80 md:text-xl">
            San Francisco doesn&apos;t fix what it doesn&apos;t hear about.
            The fastest way to a cleaner block is{" "}
            <strong>you, your phone, and 30 seconds</strong>.
            Snap it. Send it. Solved, often within hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="rounded-full bg-sf-orange px-6 py-3 font-semibold text-white shadow-lg shadow-sf-orange/30 hover:bg-ink"
            >
              Download the 311 app →
            </a>
            <a
              href="tel:311"
              className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-fog"
            >
              Or just dial 311
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6 max-w-lg" aria-label="Campaign stats">
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink/75">Avg. response</dt>
              <dd className="font-display text-3xl">&lt;48h</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink/75">Fastest resolved</dt>
              <dd className="font-display text-3xl">2h</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-ink/75">Reports / yr</dt>
              <dd className="font-display text-3xl">1M+</dd>
            </div>
          </dl>
        </div>

        <div id="download" className="md:col-span-5">
          <div className="relative rotate-1 rounded-3xl border border-ink/10 bg-white p-6 shadow-xl">
            <div className="absolute -top-3 left-1/2 h-6 w-32 -translate-x-1/2 tape opacity-90" aria-hidden="true" />
            <p className="font-display text-sm uppercase tracking-widest text-ink/75">
              Point your camera
            </p>
            <h2 className="font-display text-2xl">Get the 311 app</h2>
            <div className="mt-4 grid place-items-center rounded-2xl bg-fog p-6">
              <QRCodeSVG
                value={APP_URL}
                size={208}
                bgColor="#F4F1EA"
                fgColor="#0B1220"
                level="M"
                marginSize={2}
                aria-label="QR code that opens sf311.org when scanned"
                role="img"
              />
            </div>
            <p className="sr-only">
              Or visit <a href={APP_URL}>sf311.org</a> directly.
            </p>
            <p className="mt-4 text-sm text-ink/80">
              Free. Built by civic technologists. Reports route directly to SF Public Works,
              SFMTA, and SFPD where appropriate.
            </p>
            <ul className="mt-4 flex gap-2 text-xs text-ink/80" aria-label="Available platforms">
              <li className="rounded-full bg-fog px-3 py-1">iOS</li>
              <li className="rounded-full bg-fog px-3 py-1">Android</li>
              <li className="rounded-full bg-fog px-3 py-1">Web</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
