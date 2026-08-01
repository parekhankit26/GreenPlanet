import { useReveal, TiltCard, PageHeader } from '@/lib/anim'

const wonders = [
  {
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Forests',
    title: 'Ancient Canopies',
    text: 'Old-growth forests that filter our air, hold our soil, and shelter half of all life on land.',
  },
  {
    img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=1200&auto=format&fit=crop',
    tag: 'Waters',
    title: 'Living Rivers',
    text: 'Waterfalls, glaciers and rivers — the veins of the planet, carving valleys for millions of years.',
  },
  {
    img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Mountains',
    title: 'Silent Giants',
    text: 'High peaks where weather is born and light falls first — the watchtowers of every wilderness.',
  },
  {
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Oceans',
    title: 'Breathing Blue',
    text: 'Oceans produce over half the oxygen we breathe and cradle the greatest biodiversity on Earth.',
  },
  {
    img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop',
    tag: 'Grasslands',
    title: 'Golden Seas',
    text: 'Meadows and savannas that feed the herds, hold the carbon, and paint the horizon gold.',
  },
  {
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    tag: 'Night Skies',
    title: 'Starlit Silence',
    text: 'Dark skies above wild places — a wonder half the world can no longer see from home.',
  },
]

const facts = [
  { big: '3.04T', small: 'trees on Earth — and falling' },
  { big: '50%', small: 'of our oxygen comes from the ocean' },
  { big: '80%', small: 'of land species live in forests' },
]

const layers = [
  {
    img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1400&auto=format&fit=crop',
    kicker: 'Layer one',
    title: 'The canopy',
    text: 'Forty metres up, the leaves do the trading — carbon in, oxygen out, water lifted from root to sky. Most of a rainforest\'s species never touch the ground at all, living their whole lives in this suspended country of branches.',
    stat: '≈ 40 m',
    statLabel: 'above the forest floor',
  },
  {
    img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1400&auto=format&fit=crop',
    kicker: 'Layer two',
    title: 'The understorey',
    text: 'Below the canopy sits a dim, humid world of saplings waiting for their gap of light. When an old tree finally falls, the race that follows decides what the forest will look like for the next two centuries.',
    stat: '2%',
    statLabel: 'of sunlight reaches here',
  },
  {
    img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1400&auto=format&fit=crop',
    kicker: 'Layer three',
    title: 'The forest floor',
    text: 'The quietest layer is the busiest. Fungal networks trade sugar for minerals between trees, and a teaspoon of healthy soil holds more organisms than there are people on Earth.',
    stat: '1 tsp',
    statLabel: 'holds billions of organisms',
  },
]

const threats = [
  { name: 'Land clearing for agriculture', pct: 73, note: 'The single largest driver worldwide' },
  { name: 'Logging and fuelwood', pct: 52, note: 'Often illegal, rarely replanted' },
  { name: 'Wildfire intensity', pct: 41, note: 'Worsening with every hot year' },
  { name: 'Infrastructure and roads', pct: 28, note: 'Fragments habitat into islands' },
]

const species = [
  { emoji: '🦉', name: 'Spotted Owl', status: 'Near threatened', note: 'Needs unbroken old-growth to nest' },
  { emoji: '🦦', name: 'River Otter', status: 'Recovering', note: 'Returned to four of our watersheds' },
  { emoji: '🐝', name: 'Wild Bee', status: 'Declining', note: 'Pollinates a third of our food' },
  { emoji: '🦌', name: 'Forest Deer', status: 'Stable', note: 'Shapes which saplings survive' },
  { emoji: '🦋', name: 'Monarch', status: 'Endangered', note: 'Migrates 4,000 km on paper wings' },
]

export default function Wonders() {
  useReveal()

  return (
    <>
      <PageHeader
        kicker="Nature's beauty"
        title="The wonders we exist"
        accent="to protect"
        copy="Six faces of the living world. Every one of them older than us, every one of them counting on us."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-3">
          {wonders.map((w, i) => (
            <div key={w.title} className={`reveal ${i % 3 === 1 ? 'reveal-delay-1' : ''} ${i % 3 === 2 ? 'reveal-delay-2' : ''}`}>
              <TiltCard>
                <div className="relative h-[420px]">
                  <img src={w.img} alt={w.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent" />
                  <div className="tilt-pop absolute bottom-0 p-7">
                    <span className="mb-3 inline-block rounded-full border border-gold/40 bg-night/50 px-3 py-1 text-xs uppercase tracking-widest text-gold">
                      {w.tag}
                    </span>
                    <h3 className="font-display text-2xl font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70">{w.text}</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* facts strip */}
        <div className="reveal mt-20 grid gap-6 md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.big} className="rounded-3xl border border-moss-800/50 bg-moss-950/50 p-8 text-center">
              <div className="font-display text-4xl font-semibold text-gold">{f.big}</div>
              <div className="mt-2 text-sm text-cream/60">{f.small}</div>
            </div>
          ))}
        </div>
      </section>

      {/* anatomy of a forest — alternating full-bleed rows */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal max-w-2xl">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Anatomy of a forest</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Three worlds stacked <span className="italic text-moss-300">on top of each other</span>
            </h2>
          </div>

          <div className="mt-16 space-y-20">
            {layers.map((l, i) => (
              <div
                key={l.title}
                className={`reveal grid gap-10 md:grid-cols-2 md:items-center ${i % 2 === 1 ? 'md:[&>figure]:order-2' : ''}`}
              >
                <figure className="relative overflow-hidden rounded-[2rem] border border-moss-800/50">
                  <img src={l.img} alt={l.title} loading="lazy" className="h-[380px] w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6">
                    <div className="font-display text-3xl font-semibold text-gold">{l.stat}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-cream/70">{l.statLabel}</div>
                  </figcaption>
                </figure>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gold mb-3">{l.kicker}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold">{l.title}</h3>
                  <p className="mt-4 leading-relaxed text-cream/70">{l.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* what we're up against — measured bars */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">What we're up against</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              The pressure, <span className="italic text-moss-300">named honestly</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-cream/70">
              Share of monitored habitat loss attributable to each driver across our project regions.
              We publish these numbers whether or not they flatter us.
            </p>
          </div>

          <div className="reveal reveal-delay-1 mt-14 space-y-9">
            {threats.map((t) => (
              <div key={t.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg text-cream">{t.name}</span>
                  <span className="font-display text-xl text-gold">{t.pct}%</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-moss-900">
                  <div className="h-full rounded-full bg-gradient-to-r from-moss-600 to-gold" style={{ width: `${t.pct}%` }} />
                </div>
                <p className="mt-2 text-xs text-cream/50">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* species spotlight — horizontal scroll strip */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Species spotlight</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Who lives here</h2>
          </div>
        </div>

        <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-6 pb-4 md:px-[max(1.5rem,calc((100vw-80rem)/2))]">
          {species.map((s) => (
            <div
              key={s.name}
              className="group w-[230px] shrink-0 rounded-3xl border border-moss-800/50 bg-moss-950/50 p-7 hover:border-moss-500/60 hover:bg-moss-900/40 transition-colors"
            >
              <span className="text-4xl transition-transform duration-300 group-hover:scale-110 inline-block">{s.emoji}</span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.name}</h3>
              <span className="mt-2 inline-block rounded-full border border-moss-600/50 px-2.5 py-0.5 text-[11px] uppercase tracking-widest text-moss-300">
                {s.status}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">{s.note}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
