export function Footer() {
  return (
    <footer className="bg-fog">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sf-orange text-white font-display text-sm">
                311
              </span>
              <span className="font-display text-lg">What&apos;s the 311?</span>
            </div>
            <p className="mt-3 text-sm text-ink/60">
              A public-service campaign in partnership with SF Public Works and SolveSF.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest">Report</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li><a href="https://solvesf.com">SolveSF app</a></li>
              <li><a href="https://sf311.org">SF311.org</a></li>
              <li><a href="tel:311">Dial 311</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest">City partners</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li><a href="https://sfpublicworks.org">SF Public Works (DPW)</a></li>
              <li><a href="https://sf.gov/departments/mayor">Office of the Mayor</a></li>
              <li><a href="https://sf.gov">sf.gov</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest">Follow</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink/70">
              <li><a href="https://twitter.com/solvesf">@solvesf on X</a></li>
              <li><a href="https://twitter.com/sfpublicworks">@sfpublicworks</a></li>
              <li>#WhatsThe311</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink/50">
          <span>© {new Date().getFullYear()} What&apos;s the 311? campaign.</span>
          <span>Not an official communication of the City of San Francisco unless co-branded.</span>
        </div>
      </div>
    </footer>
  );
}
