const wins = [
  {
    where: "Mission St & 16th",
    days: "Resolved in 6h",
    category: "Illegal dumping",
    reporter: "@maria_b",
    before: "/wins/dumping-before.jpg",
    after: "/wins/dumping-after.jpg",
  },
  {
    where: "Geary & Polk",
    days: "Resolved in 1d",
    category: "Street litter",
    reporter: "@civicjon",
    before: "/wins/sidewalk-before.jpg",
    after: "/wins/sidewalk-after.jpg",
  },
  {
    where: "Bayview · Quesada Ave",
    days: "Resolved in 1d",
    category: "Bulky item pickup",
    reporter: "@dee_sf",
    before: "/wins/fridge-before.jpg",
    after: "/wins/fridge-after.jpg",
  },
  {
    where: "SoMa · Folsom & 8th",
    days: "Resolved in 2d",
    category: "Graffiti abatement",
    reporter: "@reesha",
    before: "/wins/graffiti-before.jpg",
    after: "/wins/graffiti-after.jpg",
  },
  {
    where: "Mission · Valencia & 22nd",
    days: "Resolved in 3d",
    category: "Pole graffiti",
    reporter: "@civicjon",
    before: "/wins/graffiti-pole-before.jpg",
    after: "/wins/graffiti-pole-after.jpg",
  },
];

function BeforeAfter({ before, after, alt }: { before: string; after: string; alt: string }) {
  return (
    <div className="relative grid h-72 grid-cols-2 overflow-hidden rounded-xl bg-ink/5">
      <div className="relative">
        <img src={before} alt={`Before , ${alt}`} className="h-full w-full object-cover" />
        <span className="absolute left-2 top-2 rounded-full bg-ink/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fog">
          Before
        </span>
      </div>
      <div className="relative">
        <img src={after} alt={`After , ${alt}`} className="h-full w-full object-cover" />
        <span className="absolute right-2 top-2 rounded-full bg-sf-orange px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          After
        </span>
      </div>
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/80" />
    </div>
  );
}

export function Wins() {
  return (
    <section id="wins" className="bg-fog">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sf-moss">
              Real reports, real results
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-none">
              Clean SF <span className="text-sf-orange">Wins</span>.
            </h2>
            <p className="mt-4 max-w-xl text-ink/70">
              These before/afters came from neighbors like you. Tag{" "}
              <span className="font-semibold">#WhatsThe311</span> on your wins,
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wins.map((w) => (
            <article
              key={w.where}
              className="rounded-2xl border border-ink/10 bg-white p-4 shadow-sm"
            >
              <BeforeAfter before={w.before} after={w.after} alt={w.where} />
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="rounded-full bg-sf-moss/15 px-2 py-1 font-semibold text-sf-moss">
                  {w.category}
                </span>
                <span className="font-semibold text-sf-orange">{w.days}</span>
              </div>
              <h3 className="mt-3 font-display text-lg leading-tight">{w.where}</h3>
              <p className="text-sm text-ink/75">Reported by {w.reporter}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
