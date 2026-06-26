const steps = [
  {
    n: "01",
    title: "You see something",
    body: "A pile of trash. Fresh graffiti. A mattress on the curb. You don't need to know who handles it.",
  },
  {
    n: "02",
    title: "You report in 30 seconds",
    body: "Open the 311 app (or call 311). Snap a photo, drop a pin, hit send. Categories auto-route to the right city crew.",
  },
  {
    n: "03",
    title: "DPW shows up",
    body: "Public Works dispatches in hours for most cleanliness issues. You get a status update when it's done.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-ink text-fog">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-sf-gold">
              The civic loop
            </p>
            <h2 className="mt-3 font-display text-5xl leading-none">
              The city <span className="text-sf-orange">relies on you</span> to call it in.
            </h2>
            <p className="mt-6 text-fog/70">
              SF Public Works has crews, trucks, and steam cleaners ready, but they
              can&apos;t be on every block at once. Citizen reports are how DPW knows
              where to go next. Every report counts as a vote for your neighborhood.
            </p>
          </div>
          <ol className="md:col-span-8 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-fog/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="font-display text-4xl text-sf-orange">{s.n}</div>
                <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm text-fog/70">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
