export function Footer() {
  return (
    <footer className="bg-fog" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Site footer</h2>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/media-kit/whats-the-311-icon.png"
                alt=""
                aria-hidden="true"
                className="h-10 w-10 rounded-lg"
              />
              <span className="font-display text-lg">What&apos;s the 311?</span>
            </div>
            <p className="mt-3 text-sm text-ink/80">
              A public-service campaign in partnership with SF Public Works.
            </p>
          </div>
          <nav aria-label="Report" className="text-sm">
            <h3 className="font-display text-sm uppercase tracking-widest">Report</h3>
            <ul className="mt-3 space-y-2 text-ink/80">
              <li><a href="https://sf311.org" className="hover:text-sf-orange underline-offset-2 hover:underline">SF311.org</a></li>
              <li><a href="tel:311" className="hover:text-sf-orange underline-offset-2 hover:underline">Dial 311</a></li>
            </ul>
          </nav>
          <nav aria-label="City partners" className="text-sm">
            <h3 className="font-display text-sm uppercase tracking-widest">City partners</h3>
            <ul className="mt-3 space-y-2 text-ink/80">
              <li><a href="https://sfpublicworks.org" className="hover:text-sf-orange underline-offset-2 hover:underline">SF Public Works (DPW)</a></li>
              <li><a href="https://sf.gov/departments/mayor" className="hover:text-sf-orange underline-offset-2 hover:underline">Office of the Mayor</a></li>
              <li><a href="https://sf.gov" className="hover:text-sf-orange underline-offset-2 hover:underline">sf.gov</a></li>
            </ul>
          </nav>
          <nav aria-label="Follow" className="text-sm">
            <h3 className="font-display text-sm uppercase tracking-widest">Follow</h3>
            <ul className="mt-3 space-y-2 text-ink/80">
              <li><a href="https://twitter.com/sfpublicworks" className="hover:text-sf-orange underline-offset-2 hover:underline">@sfpublicworks</a></li>
              <li>#WhatsThe311</li>
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-ink/15 pt-6 text-xs text-ink/70">
          <span>© {new Date().getFullYear()} What&apos;s the 311? campaign.</span>
          <span>Not an official communication of the City of San Francisco unless co-branded.</span>
        </div>
      </div>
    </footer>
  );
}
