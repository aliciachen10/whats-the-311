// SF DPW / SF311 commonly handled cleanliness categories.
const issues = [
  { emoji: "🗑️", label: "Street litter", desc: "Trash, broken glass, debris on sidewalks or streets." },
  { emoji: "💩", label: "Human or animal waste", desc: "Steam-cleaning crews are dispatched specifically for this." },
  { emoji: "🎨", label: "Graffiti", desc: "On public or private property. DPW abates within days." },
  { emoji: "🛋️", label: "Illegal dumping", desc: "Mattresses, couches, electronics, construction debris." },
  { emoji: "🗑️", label: "Overflowing trash can", desc: "Public Big Belly bins that are full or busted." },
  { emoji: "💉", label: "Used syringes", desc: "Sharps & needle pickup, handled with priority." },
  { emoji: "🐀", label: "Dead animals", desc: "On public right-of-way. DPW or Animal Care responds." },
  { emoji: "🌳", label: "Tree & sidewalk hazards", desc: "Fallen branches, broken sidewalk panels, uplifted curbs." },
  { emoji: "🚗", label: "Abandoned vehicles", desc: "72+ hours in one spot, stripped, or expired tags." },
  { emoji: "💧", label: "Encampment debris", desc: "Routed to HSOC for outreach + DPW for cleanup." },
];

export function ReportWhat() {
  return (
    <section id="report" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-sf-bay">
              If you see it, report it
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none">
              What you can <span className="scribble-underline text-sf-orange">call in</span>.
            </h2>
            <p className="mt-4 text-ink/70">
              These are the cleanliness categories SF Public Works (DPW) actually
              dispatches against. Don&apos;t self-edit, if you&apos;re unsure, report it and
              the city routes it.
            </p>
          </div>
          <a href="#download" className="rounded-full bg-ink px-5 py-2 font-semibold text-fog">
            Report one now
          </a>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {issues.map((i, idx) => (
            <li
              key={i.label}
              className="group rounded-2xl border border-ink/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl"
              style={{ rotate: `${(idx % 2 ? 0.6 : -0.6)}deg` }}
            >
              <div className="text-3xl">{i.emoji}</div>
              <h3 className="mt-3 font-display text-lg">{i.label}</h3>
              <p className="mt-1 text-sm text-ink/75">{i.desc}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-sm text-ink/75">
          Don&apos;t see it here? Public Works also handles street sweeping schedules,
          flooded gutters, and damaged street signs. When in doubt, dial 311.
        </p>
      </div>
    </section>
  );
}
