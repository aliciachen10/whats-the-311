const posters = [
  {
    id: "whats-the-311",
    title: "What's the 311?",
    note: "Bold opener, graffiti drip",
    preview: "/media-kit/whats-the-311-1080x1080.png",
    file: "/media-kit/whats-the-311-poster.pdf",
  },
  {
    id: "block-hero",
    title: "Be Your Block's Hero",
    note: "Cape, cityscape, hero portrait",
    preview: "/media-kit/be-your-blocks-hero-1080x1080.png",
    file: "/media-kit/be-your-blocks-hero-poster.pdf",
  },
];

const socialSquare = [
  {
    id: "whats-the-311-1080",
    title: "What's the 311?",
    size: "1080×1080",
    preview: "/media-kit/whats-the-311-1080x1080.png",
    file: "/media-kit/whats-the-311-1080x1080.png",
  },
  {
    id: "block-hero-1080",
    title: "Be Your Block's Hero",
    size: "1080×1080",
    preview: "/media-kit/be-your-blocks-hero-1080x1080.png",
    file: "/media-kit/be-your-blocks-hero-1080x1080.png",
  },
];

const stories = [
  {
    id: "whats-the-311-reel",
    title: "What's the 311?",
    size: "1080×1920",
    preview: "/media-kit/whats-the-311-reel.png",
    file: "/media-kit/whats-the-311-reel.png",
  },
  {
    id: "block-hero-reel",
    title: "Be Your Block's Hero",
    size: "1080×1920",
    preview: "/media-kit/be-your-blocks-hero-reel.png",
    file: "/media-kit/be-your-blocks-hero-reel.png",
  },
];

const stickers = [
  {
    title: "What's the 311?",
    preview: "/media-kit/whats-the-311-icon.png",
    file: "/media-kit/whats-the-311-icon.png",
  },
  {
    title: "Be Your Block's Hero",
    preview: "/media-kit/be-your-blocks-hero-icon.png",
    file: "/media-kit/be-your-blocks-hero-icon.png",
  },
];

const print = [
  { id: "flyer", title: "Flyer", size: "5.5 × 8.5 in" },
  { id: "postcard", title: "Postcard", size: "4 × 6 in" },
  { id: "halfsheet", title: "Half-sheet", size: "5.5 × 8.5 in" },
  { id: "tabletent", title: "Table tent", size: "4 × 6 in" },
];

const colors = [
  { hex: "#FF6A00", name: "Campaign orange" },
  { hex: "#2E7D32", name: "Civic green" },
  { hex: "#F2E6C9", name: "Paper cream" },
  { hex: "#111111", name: "Ink black" },
  { hex: "#0D4D57", name: "Bay teal" },
];

export function MediaKit() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12" aria-labelledby="media-kit-heading">
      <div className="mb-10">
        <p className="text-xs font-extrabold tracking-widest uppercase text-sf-orange">
          Campaign Asset Pack v1.0 · free for community use
        </p>
        <h1 id="media-kit-heading" className="font-display text-4xl md:text-6xl mt-3 leading-[1]">
          Spread the <span className="scribble-underline text-sf-orange">311</span> in your block.
        </h1>
        <p className="text-ink/80 mt-4 max-w-2xl text-lg">
          Posters, stickers, social media, and print-ready materials for volunteer groups,
          neighborhood associations, block captains, small businesses, and anyone who wants a
          cleaner SF. Free to download, print, and remix.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#download-all"
            className="rounded-full bg-sf-orange px-6 py-3 font-semibold text-white shadow-lg shadow-sf-orange/30 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Jump to download options
          </a>
          <a
            href="#print-tips"
            className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-fog focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-orange"
          >
            Print &amp; share tips
          </a>
        </div>
      </div>

      <SectionHead
        eyebrow="Posters"
        title="Letter (8.5×11) and tabloid (11×17)"
        sub="Hang in coffee shops, libraries, laundromats, community boards, and transit stops."
      />
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {posters.map((p) => (
          <AssetCard
            key={p.id}
            title={p.title}
            sub={p.note}
            preview={p.preview}
            file={p.file}
            ratio="aspect-[3/4]"
            altPrefix="Poster preview"
            downloadLabel="Download poster PDF"
          />
        ))}
      </div>

      <SectionHead
        eyebrow="Social media"
        title="Square for Instagram, Facebook, LinkedIn"
        sub="Drop straight into a feed post. 1080×1080."
      />
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {socialSquare.map((p) => (
          <AssetCard
            key={p.id}
            title={p.title}
            sub={p.size}
            preview={p.preview}
            file={p.file}
            ratio="aspect-square"
            altPrefix="Square graphic"
            downloadLabel="Download PNG"
          />
        ))}
      </div>

      <SectionHead
        eyebrow="Stories and Reels"
        title="Vertical for Instagram, TikTok, Snap"
        sub="For stories, reels, and short-form video covers. 1080×1920."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {stories.map((p) => (
          <AssetCard
            key={p.id}
            title={p.title}
            sub={p.size}
            preview={p.preview}
            file={p.file}
            ratio="aspect-[9/16]"
            altPrefix="Vertical graphic"
            downloadLabel="Download PNG"
          />
        ))}
      </div>

      <SectionHead
        eyebrow="Stickers"
        title="Bumper, laptop, water bottle, window"
        sub="Print or stick directly. Use these icon marks on anything you can put a sticker on."
      />
      <div className="grid gap-6 sm:grid-cols-2 mb-12">
        {stickers.map((s) => (
          <AssetCard
            key={s.title}
            title={s.title}
            sub="Icon mark, PNG"
            preview={s.preview}
            file={s.file}
            ratio="aspect-square"
            altPrefix="Sticker design"
            downloadLabel="Download PNG"
            previewBg="bg-fog"
            cover={false}
          />
        ))}
      </div>

      <SectionHead
        eyebrow="Community print materials"
        title="Hand them out, leave them around"
        sub="Coming soon: flyers for community boards, postcards for door-hangs, table tents for cafés."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {print.map((p, i) => (
          <PlaceholderCard key={p.id} title={p.title} sub={p.size} tone={i + 1} />
        ))}
      </div>

      <SectionHead
        eyebrow="Brand kit"
        title="Use the campaign look, your way"
        sub="Colors, fonts, and QR codes for remixers, designers, and your own materials."
      />
      <div className="grid gap-4 md:grid-cols-3 mb-12">
        <Card>
          <h3 className="font-display text-lg mb-3">Colors</h3>
          <ul className="space-y-2">
            {colors.map((c) => (
              <li key={c.hex} className="flex items-center gap-3 text-sm">
                <span
                  className="w-8 h-8 rounded-md border border-ink/15"
                  style={{ background: c.hex }}
                  aria-hidden="true"
                />
                <span className="flex-1">{c.name}</span>
                <code className="text-xs text-ink/70 tabular-nums">{c.hex}</code>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="font-display text-lg mb-3">Typography</h3>
          <div className="space-y-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/70">Header</div>
              <div className="font-display text-2xl mt-1">Bungee / Archivo Black</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/70">Secondary</div>
              <div className="font-display text-xl mt-1">Bebo / Inter Bold</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/70">Body</div>
              <div className="text-base mt-1">Inter, AaBbCcDdEe 1234567890</div>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="font-display text-lg mb-3">QR codes</h3>
          <p className="text-sm text-ink/70 mb-4">Pre-built QR codes pointing to sf311.org.</p>
          <div className="grid grid-cols-2 gap-3">
            <QrTile label="Black on white" fg="#111111" bg="#FFFFFF" />
            <QrTile label="White on black" fg="#FFFFFF" bg="#111111" />
            <QrTile label="Green accent" fg="#2E7D32" bg="#F2E6C9" />
            <QrTile label="Orange accent" fg="#FF6A00" bg="#FFFFFF" />
          </div>
        </Card>
      </div>

      <div id="print-tips" className="bg-ink text-fog rounded-3xl p-8 md:p-12 mb-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-xs font-extrabold tracking-widest uppercase text-sf-gold">
              Where to put it
            </p>
            <h2 className="font-display text-3xl mt-3">Deployment ideas</h2>
            <p className="text-fog/80 mt-3 text-sm">
              These work best where neighbors already gather. Always ask permission for private property.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2 text-sm">
            <DeployList title="Posters" items={["Community boards", "Coffee shops", "Laundromats", "Libraries", "Apartment lobbies", "Transit stops"]} />
            <DeployList title="Stickers" items={["Business windows", "Utility boxes (where allowed)", "Laptops and water bottles", "Event tables"]} />
            <DeployList title="Postcards and flyers" items={["Door-hangs", "Neighborhood association mailings", "Tenant assoc. packets"]} />
            <DeployList title="Social" items={["Nextdoor groups", "Block-captain group chats", "Local Instagram pages", "School newsletters"]} />
          </div>
        </div>
      </div>

      <div id="download-all" className="bg-white border border-ink/15 rounded-3xl p-8 md:p-12 text-center">
        <p className="text-xs font-extrabold tracking-widest uppercase text-sf-orange">
          Need something specific?
        </p>
        <h2 className="font-display text-3xl md:text-4xl mt-3">
          Request a co-branded version
        </h2>
        <p className="text-ink/80 mt-3 max-w-xl mx-auto">
          We can prep custom variants for your block-captain group, neighborhood association,
          or small business. Email us with what you need.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:hello@whatsthe311.org?subject=Campaign%20asset%20pack%20request"
            className="rounded-full bg-sf-orange px-6 py-3 font-semibold text-white shadow-lg shadow-sf-orange/30 hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Email hello@whatsthe311.org
          </a>
        </div>
        <p className="text-xs text-ink/70 mt-6">
          Free for non-commercial community use. Please don&apos;t alter logos or partner marks.
        </p>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-extrabold tracking-widest uppercase text-sf-bay">{eyebrow}</p>
      <h2 className="font-display text-2xl md:text-3xl mt-1">{title}</h2>
      {sub && <p className="text-ink/80 text-sm mt-1 max-w-2xl">{sub}</p>}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-ink/15 rounded-2xl p-5 shadow-sm">{children}</div>;
}

function AssetCard({
  title,
  sub,
  preview,
  file,
  ratio,
  altPrefix,
  downloadLabel,
  previewBg = "bg-ink/5",
  cover = true,
}: {
  title: string;
  sub: string;
  preview: string;
  file: string;
  ratio: string;
  altPrefix: string;
  downloadLabel: string;
  previewBg?: string;
  cover?: boolean;
}) {
  return (
    <div className="bg-white border border-ink/15 rounded-2xl p-3 shadow-sm">
      <div className={`${ratio} ${previewBg} rounded-xl overflow-hidden`}>
        <img
          src={preview}
          alt={`${altPrefix}: ${title}`}
          loading="lazy"
          className={`w-full h-full ${cover ? "object-cover" : "object-contain p-4"}`}
        />
      </div>
      <div className="flex items-center justify-between gap-3 mt-3 px-1">
        <div className="min-w-0">
          <div className="text-sm font-bold truncate">{title}</div>
          <div className="text-xs text-ink/70">{sub}</div>
        </div>
        <a
          href={file}
          download
          aria-label={`${downloadLabel}: ${title}`}
          className="text-xs font-semibold text-sf-orange hover:underline whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sf-orange rounded"
        >
          Download ↓
        </a>
      </div>
    </div>
  );
}

const PLACEHOLDER_TONES = [
  "bg-gradient-to-br from-[#F2E6C9] to-[#FFD9A8] text-ink",
  "bg-gradient-to-br from-[#FFD18A] to-[#FF6A00] text-ink",
  "bg-gradient-to-br from-[#0E2240] to-[#1E3A6B] text-fog",
  "bg-gradient-to-br from-[#9FD3E3] to-[#F2E6C9] text-ink",
];

function PlaceholderCard({ title, sub, tone }: { title: string; sub: string; tone: number }) {
  return (
    <div className="bg-white border border-ink/15 rounded-2xl p-3 shadow-sm">
      <div
        className={`aspect-[3/4] ${PLACEHOLDER_TONES[tone % PLACEHOLDER_TONES.length]} rounded-xl grid place-items-center p-5 text-center`}
        role="img"
        aria-label={`Placeholder preview for ${title}`}
      >
        <div className="font-display text-2xl leading-tight">{title}</div>
      </div>
      <div className="flex items-center justify-between mt-3 px-1">
        <div>
          <div className="text-sm font-bold">{title}</div>
          <div className="text-xs text-ink/70">{sub}</div>
        </div>
        <span className="text-xs font-semibold text-ink/50 whitespace-nowrap">Coming soon</span>
      </div>
    </div>
  );
}

function QrTile({ label, fg, bg }: { label: string; fg: string; bg: string }) {
  return (
    <div className="text-center">
      <div className="aspect-square rounded-md grid place-items-center p-3" style={{ background: bg }}>
        <svg viewBox="0 0 21 21" className="w-full h-full" shapeRendering="crispEdges" role="img" aria-label={`Sample QR code, ${label}`}>
          {Array.from({ length: 21 * 21 }).map((_, i) => {
            const x = i % 21;
            const y = Math.floor(i / 21);
            const corner = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
            const fill = corner
              ? ((x === 0 || x === 6 || y === 0 || y === 6) ||
                 (x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
                 (x === 14 || x === 20 || y === 14 || y === 20) ||
                 (x >= 16 && x <= 18 && y >= 2 && y <= 4) ||
                 (x >= 2 && x <= 4 && y >= 16 && y <= 18))
              : ((x * 31 + y * 17) % 3 === 0);
            return fill ? <rect key={i} x={x} y={y} width="1" height="1" fill={fg} /> : null;
          })}
        </svg>
      </div>
      <div className="text-[11px] text-ink/70 mt-1">{label}</div>
    </div>
  );
}

function DeployList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-base text-sf-gold">{title}</h3>
      <ul className="mt-2 space-y-1 text-fog/85">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
