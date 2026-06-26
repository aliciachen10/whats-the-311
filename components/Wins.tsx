// NOTE: Swap these placeholder gradients for real before/after photos.
// Drop images into /public/wins and reference them.
const wins = [
  {
    where: "Mission St & 16th",
    days: "Resolved in 6h",
    category: "Illegal dumping",
    reporter: "@maria_b",
  },
  {
    where: "Bayview · 3rd St",
    days: "Resolved in 2d",
    category: "Graffiti abatement",
    reporter: "@dee_sf",
  },
  {
    where: "Tenderloin · Ellis",
    days: "Resolved in 4h",
    category: "Steam cleaning",
    reporter: "@civicjon",
  },
  {
    where: "SoMa · 7th",
    days: "Resolved in 1d",
    category: "Bulky item pickup",
    reporter: "@reesha",
  },
];

function BeforeAfter({ tone }: { tone: "warm" | "cool" | "moss" | "bay" }) {
  const palettes = {
    warm: ["from-amber-200 to-rose-300", "from-emerald-100 to-sky-200"],
    cool: ["from-stone-300 to-zinc-500", "from-sky-100 to-emerald-200"],
    moss: ["from-yellow-200 to-orange-300", "from-lime-100 to-emerald-200"],
    bay:  ["from-rose-200 to-stone-400", "from-sky-100 to-indigo-200"],
  }[tone];

  return (
    <div className="relative grid h-56 grid-cols-2 overflow-hidden rounded-xl">
      <div className={`bg-gradient-to-br ${palettes[0]} relative`}>
        <span className="absolute left-2 top-2 rounded-full bg-ink/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fog">
          Before
        </span>
      </div>
      <div className={`bg-gradient-to-br ${palettes[1]} relative`}>
        <span className="absolute right-2 top-2 rounded-full bg-sf-orange px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          After
        </span>
      </div>
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80" />
    </div>
  );
}

export function Wins() {
  const tones: Array<"warm" | "cool" | "moss" | "bay"> = ["warm", "cool", "moss", "bay"];
  return (
    <section id="wins" className="bg-fog">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sf-moss">
              Real reports, real results
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none">
              Clean SF <span className="text-sf-orange">Wins</span>.
            </h2>
            <p className="mt-4 max-w-xl text-ink/70">
              These before/afters came from neighbors like you. Tag{" "}
              <span className="font-semibold">#WhatsThe311</span> on your wins —
              we feature them weekly.
            </p>
          </div>
          <a
            href="https://twitter.com/sfpublicworks"
            className="rounded-full border-2 border-ink px-5 py-2 font-semibold hover:bg-ink hover:text-fog"
          >
            More on @sfpublicworks →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((w, i) => (
            <article
              key={w.where}
              className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm"
            >
              <BeforeAfter tone={tones[i]} />
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-sf-moss/15 px-2 py-1 font-semibold text-sf-moss">
                  {w.category}
                </span>
                <span className="font-semibold text-sf-orange">{w.days}</span>
              </div>
              <h3 className="mt-3 font-display text-lg leading-tight">{w.where}</h3>
              <p className="text-sm text-ink/60">Reported by {w.reporter}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
