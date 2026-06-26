const posters = [
  { id: "whats-the-311", title: "What's the 311?", note: "Bold opener · graffiti drip" },
  { id: "block-hero", title: "Be Your Block's Hero", note: "Cape + cityscape" },
  { id: "plus-one-block", title: "+1 Block", note: "Pixel / arcade style" },
  { id: "love-it", title: "Love It? Then Look Out For It.", note: "Heart frame · SF skyline" },
];

const socialSquare = [
  { id: "whats-the-311-1080", title: "What's the 311?", size: "1080×1080" },
  { id: "block-hero-1080", title: "Be Your Block's Hero", size: "1080×1080" },
  { id: "plus-one-1080", title: "+1 Block", size: "1080×1080" },
  { id: "love-it-1080", title: "Love It? Look Out For It.", size: "1080×1080" },
];

const stories = [
  { id: "whats-the-311-story", title: "What's the 311?", size: "1080×1920" },
  { id: "block-hero-story", title: "Be Your Block's Hero", size: "1080×1920" },
  { id: "plus-one-story", title: "+1 Block", size: "1080×1920" },
  { id: "love-it-story", title: "Look Out For It.", size: "1080×1920" },
];

const print = [
  { id: "flyer", title: "Flyer", size: "5.5 × 8.5 in" },
  { id: "postcard", title: "Postcard", size: "4 × 6 in" },
  { id: "halfsheet", title: "Half-sheet", size: "5.5 × 8.5 in" },
  { id: "tabletent", title: "Table tent", size: "4 × 6 in" },
];

const stickers = [
  "What's the 311?",
  "Be Your Block's Hero",
  "+1 Block",
  "Spot it. Report it.",
  "Report trash · help your neighborhood",
  "311 — Report it.",
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
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <div className="text-xs font-extrabold tracking-widest uppercase text-sf-orange">
          Campaign Asset Pack v1.0 · free for community use
        </div>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-[1]">
          Spread the <span className="scribble-underline text-sf-orange">311</span> in your block.
        </h1>
        <p className="text-ink/70 mt-4 max-w-2xl text-lg">
          Posters, stickers, social media, and print-ready materials — for volunteer groups,
          neighborhood associations, block captains, small businesses, and anyone who wants a
          cleaner SF. Free to download, print, and remix.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#download-all"
            className="rounded-full bg-sf-orange px-6 py-3 font-semibold text-white shadow-lg shadow-sf-orange/30 hover:bg-ink"
          >
            Download full kit (.zip) →
          </a>
          <a
            href="#print-tips"
            className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-fog"
          >
            Print &amp; share tips
          </a>
        </div>
      </div>

      <SectionHead eyebrow="Posters" title="Letter (8.5×11) &amp; tabloid (11×17)">
        Hang in coffee shops, libraries, laundromats, community boards, transit stops.
      </SectionHead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {posters.map((p, i) => (
          <AssetCard key={p.id} title={p.title} sub={p.note} tone={i} ratio="aspect-[3/4]" file={`${p.id}-poster.pdf`} />
        ))}
      </div>

      <SectionHead eyebrow="Social media" title="Square — Instagram, Facebook, LinkedIn">
        Drop straight into a post. 1080×1080.
      </SectionHead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {socialSquare.map((p, i) => (
          <AssetCard key={p.id} title={p.title} sub={p.size} tone={i} ratio="aspect-square" file={`${p.id}.png`} />
        ))}
      </div>

      <SectionHead eyebrow="Stories &amp; Reels" title="Vertical — Instagram, TikTok, Snap">
        For stories, reels, and short-form video covers. 1080×1920.
      </SectionHead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {stories.map((p, i) => (
          <AssetCard key={p.id} title={p.title} sub={p.size} tone={i} ratio="aspect-[9/16]" file={`${p.id}.png`} />
        ))}
      </div>

      <SectionHead eyebrow="Stickers" title="Bumper · laptop · water bottle · window">
        Vinyl sticker pack — order a printed batch or download the cut files.
      </SectionHead>
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6 mb-12">
        {stickers.map((s, i) => (
          <div key={s} className="bg-white border border-ink/10 rounded-2xl p-4 shadow-sm">
            <div className={`aspect-square rounded-xl grid place-items-center p-3 text-center font-display text-sm leading-tight ${stickerTone(i)}`}>
              {s}
            </div>
            <a href="#" className="block text-center mt-3 text-xs font-semibold text-sf-orange hover:underline">
              Download SVG
            </a>
          </div>
        ))}
      </div>

      <SectionHead eyebrow="Community print materials" title="Hand them out, leave them around">
        Flyer for community boards, postcards for door-hangs, table tents for cafés.
      </SectionHead>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
        {print.map((p, i) => (
          <AssetCard key={p.id} title={p.title} sub={p.size} tone={i + 1} ratio="aspect-[3/4]" file={`${p.id}.pdf`} />
        ))}
      </div>

      <SectionHead eyebrow="Brand kit" title="Use the campaign look, your way">
        Colors, fonts, and QR codes — for remixers, designers, and your own materials.
      </SectionHead>
      <div className="grid gap-4 md:grid-cols-3 mb-12">
        <Card>
          <h3 className="font-display text-lg mb-3">Colors</h3>
          <div className="space-y-2">
            {colors.map((c) => (
              <div key={c.hex} className="flex items-center gap-3 text-sm">
                <span className="w-8 h-8 rounded-md border border-ink/10" style={{ background: c.hex }} />
                <span className="flex-1">{c.name}</span>
                <code className="text-xs text-ink/60 tabular-nums">{c.hex}</code>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="font-display text-lg mb-3">Typography</h3>
          <div className="space-y-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/50">Header</div>
              <div className="font-display text-2xl mt-1">Bungee / Archivo Black</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/50">Secondary</div>
              <div className="font-display text-xl mt-1">Bebo / Inter Bold</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/50">Body</div>
              <div className="text-base mt-1">Inter — AaBbCcDdEe 1234567890</div>
            </div>
          </div>
        </Card>
        <Card>
          <h3 className="font-display text-lg mb-3">QR codes</h3>
          <p className="text-sm text-ink/60 mb-4">Pre-built QR codes pointing to sf311.org.</p>
          <div className="grid grid-cols-2 gap-3">
            <QrTile label="Black on white" fg="#111111" bg="#FFFFFF" />
            <QrTile label="White on black" fg="#FFFFFF" bg="#111111" />
            <QrTile label="Green accent" fg="#2E7D32" bg="#F2E6C9" />
            <QrTile label="SVG vector" fg="#FF6A00" bg="#FFFFFF" />
          </div>
        </Card>
      </div>

      <div id="print-tips" className="bg-ink text-fog rounded-3xl p-8 md:p-12 mb-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="text-xs font-extrabold tracking-widest uppercase text-sf-gold">
              Where to put it
            </div>
            <h2 className="font-display text-3xl mt-3">Deployment ideas</h2>
            <p className="text-fog/70 mt-3 text-sm">
              These work best where neighbors already gather. Always ask permission for private property.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-6 sm:grid-cols-2 text-sm">
            <DeployList title="Posters" items={["Community boards", "Coffee shops", "Laundromats", "Libraries", "Apartment lobbies", "Transit stops"]} />
            <DeployList title="Stickers" items={["Business windows", "Utility boxes (where allowed)", "Laptops & water bottles", "Event tables"]} />
            <DeployList title="Postcards / flyers" items={["Door-hangs", "Neighborhood association mailings", "Tenant assoc. packets"]} />
            <DeployList title="Social" items={["Nextdoor groups", "Block-captain group chats", "Local Instagram pages", "School newsletters"]} />
          </div>
        </div>
      </div>

      <div id="download-all" className="bg-white border border-ink/10 rounded-3xl p-8 md:p-12 text-center">
        <div className="text-xs font-extrabold tracking-widest uppercase text-sf-orange">
          One file, everything inside
        </div>
        <h2 className="font-display text-3xl md:text-4xl mt-3">
          Download the full kit
        </h2>
        <p className="text-ink/70 mt-3 max-w-xl mx-auto">
          High-res posters, social media graphics, sticker SVGs, print PDFs, brand colors,
          fonts, and QR codes — bundled in one .zip.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href="#" className="rounded-full bg-sf-orange px-6 py-3 font-semibold text-white shadow-lg shadow-sf-orange/30 hover:bg-ink">
            Download .zip (≈ 24MB)
          </a>
          <a
            href="mailto:hello@whatsthe311.org?subject=Campaign%20asset%20pack%20request"
            className="rounded-full border-2 border-ink px-6 py-3 font-semibold hover:bg-ink hover:text-fog"
          >
            Request co-branded version
          </a>
        </div>
        <p className="text-xs text-ink/50 mt-6">
          Free for non-commercial community use. Please don&apos;t alter logos or partner marks.
        </p>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="text-xs font-extrabold tracking-widest uppercase text-sf-bay">
        <span dangerouslySetInnerHTML={{ __html: eyebrow }} />
      </div>
      <h2 className="font-display text-2xl md:text-3xl mt-1" dangerouslySetInnerHTML={{ __html: title }} />
      {children && <p className="text-ink/60 text-sm mt-1 max-w-2xl">{children}</p>}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white border border-ink/10 rounded-2xl p-5 shadow-sm">{children}</div>;
}

const TONES = [
  "bg-gradient-to-br from-[#F2E6C9] to-[#FFD9A8] text-ink",
  "bg-gradient-to-br from-[#FFD18A] to-[#FF6A00] text-ink",
  "bg-gradient-to-br from-[#0E2240] to-[#1E3A6B] text-fog",
  "bg-gradient-to-br from-[#9FD3E3] to-[#F2E6C9] text-ink",
];
function tone(i: number) {
  return TONES[i % TONES.length];
}
function stickerTone(i: number) {
  const t = [
    "bg-[#F2E6C9] text-ink border-2 border-ink",
    "bg-[#2E7D32] text-white",
    "bg-[#FF6A00] text-white",
    "bg-ink text-fog",
    "bg-[#0D4D57] text-fog",
    "bg-white text-ink border-2 border-sf-orange",
  ];
  return t[i % t.length];
}

function AssetCard({ title, sub, tone: t, ratio, file }: { title: string; sub: string; tone: number; ratio: string; file: string }) {
  return (
    <div className="bg-white border border-ink/10 rounded-2xl p-3 shadow-sm">
      <div className={`${ratio} ${tone(t)} rounded-xl grid place-items-center p-5 text-center relative overflow-hidden`}>
        <div className="font-display text-2xl leading-tight">{title}</div>
        <div className="absolute bottom-2 right-2 w-10 h-10 bg-white rounded-md grid place-items-center text-[8px] font-bold">QR</div>
      </div>
      <div className="flex items-center justify-between mt-3 px-1">
        <div>
          <div className="text-sm font-bold">{title}</div>
          <div className="text-xs text-ink/50">{sub}</div>
        </div>
        <a href={`#${file}`} className="text-xs font-semibold text-sf-orange hover:underline whitespace-nowrap">
          Download ↓
        </a>
      </div>
    </div>
  );
}

function QrTile({ label, fg, bg }: { label: string; fg: string; bg: string }) {
  return (
    <div className="text-center">
      <div className="aspect-square rounded-md grid place-items-center p-3" style={{ background: bg }}>
        <svg viewBox="0 0 21 21" className="w-full h-full" shapeRendering="crispEdges">
          {Array.from({ length: 21 * 21 }).map((_, i) => {
            const x = i % 21;
            const y = Math.floor(i / 21);
            const corner = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13);
            const fill = corner ? ((x === 0 || x === 6 || y === 0 || y === 6) || (x >= 2 && x <= 4 && y >= 2 && y <= 4) || (x === 14 || x === 20 || y === 14 || y === 20) || (x >= 16 && x <= 18 && y >= 2 && y <= 4) || (x >= 2 && x <= 4 && y >= 16 && y <= 18)) : ((x * 31 + y * 17) % 3 === 0);
            return fill ? <rect key={i} x={x} y={y} width="1" height="1" fill={fg} /> : null;
          })}
        </svg>
      </div>
      <div className="text-[10px] text-ink/60 mt-1">{label}</div>
    </div>
  );
}

function DeployList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-display text-base text-sf-gold">{title}</div>
      <ul className="mt-2 space-y-1 text-fog/80">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
