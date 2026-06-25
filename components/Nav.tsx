export function Nav() {
  return (
    <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
      <a href="#top" className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-sf-orange text-white font-display text-sm">
          311
        </span>
        <span className="font-display text-lg tracking-tight">What&apos;s the 311?</span>
      </a>
      <div className="hidden gap-8 md:flex">
        <a href="#how" className="hover:text-sf-orange">How it works</a>
        <a href="#report" className="hover:text-sf-orange">What to report</a>
        <a href="#wins" className="hover:text-sf-orange">Clean SF Wins</a>
        <a href="#heroes" className="hover:text-sf-orange">Hero Reporters</a>
      </div>
      <a
        href="#download"
        className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-fog hover:bg-sf-orange transition-colors"
      >
        Get the app
      </a>
    </nav>
  );
}
