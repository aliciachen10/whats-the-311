"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#report", label: "What to report" },
  { href: "/#wins", label: "Clean SF Wins" },
  { href: "/media-kit", label: "Media kit" },
  { href: "/dashboard/public", label: "Public dashboard" },
  { href: "/dashboard/operations", label: "DPW ops" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="relative z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <a href="/" className="flex items-center gap-2" aria-label="What's the 311? home">
          <img
            src="/media-kit/whats-the-311-icon.png"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-lg sm:h-10 sm:w-10"
          />
          <span className="font-display text-base tracking-tight sm:text-lg">What&apos;s the 311?</span>
        </a>

        <div className="hidden gap-6 lg:flex text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sf-orange">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/#download"
            className="hidden sm:inline-block rounded-full bg-ink px-4 py-2 text-sm font-semibold text-fog hover:bg-sf-orange transition-colors"
          >
            Get the app
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink hover:bg-ink hover:text-fog"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-fog p-6 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-lg">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink hover:bg-ink hover:text-fog"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-1 text-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 font-semibold hover:bg-ink/5 active:bg-ink/10"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/#download"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-sf-orange px-5 py-3 text-center font-semibold text-white"
            >
              Get the 311 app
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
