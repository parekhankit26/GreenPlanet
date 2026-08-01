import { useReveal, Counter, Bar, PageHeader } from '@/lib/anim'

const pillars = [
  {
    icon: '🌲',
    title: 'Protect',
    text: 'Standing guard over old-growth forests and fragile habitats before they become memories.',
  },
  {
    icon: '🌱',
    title: 'Restore',
    text: 'Replanting native species acre by acre, returning bare land to living, breathing wilderness.',
  },
  {
    icon: '🎓',
    title: 'Educate',
    text: 'Bringing the wild into classrooms and communities, raising the next generation of guardians.',
  },
]

const timeline = [
  {
    year: '2016',
    title: 'A hillside and a borrowed truck',
    text: 'Four volunteers planted 600 saplings on degraded farmland. Roughly half survived the first summer — enough to prove the method and embarrass us into improving it.',
  },
  {
    year: '2018',
    title: 'The first native seed bank',
    text: 'We stopped importing nursery stock and started collecting local seed. Survival rates nearly doubled within two seasons, and the cost per hectare fell by a third.',
  },
  {
    year: '2021',
    title: 'Watershed programme begins',
    text: 'Work expanded from trees to whole river systems, pairing replanting with upstream erosion control. The river otter returned to its first restored catchment that winter.',
  },
  {
    year: '2024',
    title: 'Ten thousand acres',
    text: 'The cumulative restored area passed 10,000 acres across four continents, with community forestry agreements covering most of it.',
  },
  {
    year: '2026',
    title: 'Open data, open method',
    text: 'Every survival rate, failure and cost figure is now published openly so other groups can copy what works and skip what does not.',
  },
]

const funding = [
  { label: 'Planting and land restoration', value: '62%', pct: 62 },
  { label: 'Community forestry partnerships', value: '18%', pct: 18 },
  { label: 'Science, monitoring and data', value: '12%', pct: 12 },
  { label: 'Education and outreach', value: '5%', pct: 5 },
  { label: 'Administration', value: '3%', pct: 3 },
]

const team = [
  { name: 'Amara Okonjo', role: 'Restoration lead' },
  { name: 'Tomas Lindqvist', role: 'Community forestry' },
  { name: 'Priya Raghunathan', role: 'Watershed science' },
  { name: 'Daniel Owusu', role: 'Seed bank programme' },
  { name: 'Mei-Lin Chen', role: 'Data and monitoring' },
  { name: 'Sofia Marchetti', role: 'Education outreach' },
]

export default function Mission() {
  useReveal()

  return (
    <>
      <PageHeader
        kicker="Our mission"
        title="Borrowed from"
        accent="our children"
        copy="GreenPlanet exists for one reason: to hand the living world forward in better shape than we found it."
      />

      {/* quote + stats over leaf backdrop */}
      <section className="relative overflow-hidden py-28">
        <img
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2000&auto=format&fit=crop"
          alt="green leaves"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night via-night/60 to-night" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="reveal font-display text-3xl md:text-5xl leading-snug font-light">
            "We do not inherit the Earth from our ancestors —{' '}
            <span className="italic text-moss-300">we borrow it from our children.</span>"
          </p>
          <div className="reveal reveal-delay-1 mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
            {[
              { n: 12000, s: '+', label: 'Acres restored' },
              { n: 340, s: '+', label: 'Species protected' },
              { n: 96, s: '%', label: 'Native replanting' },
              { n: 58, s: '', label: 'Countries reached' },
            ].map((st) => (
              <div key={st.label}>
                <div className="font-display text-4xl md:text-5xl font-semibold text-gold">
                  <Counter to={st.n} suffix={st.s} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/60">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pillars */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">How we work</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
            Three roots, <span className="italic text-moss-300">one canopy</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`reveal ${i === 1 ? 'reveal-delay-1' : ''} ${i === 2 ? 'reveal-delay-2' : ''} rounded-3xl border border-moss-800/50 bg-moss-950/50 p-9 hover:border-moss-500/50 transition-colors`}
            >
              <span className="text-4xl">{p.icon}</span>
              <h3 className="mt-5 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* timeline */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Our story</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Ten years, <span className="italic text-moss-300">told plainly</span>
            </h2>
          </div>

          <ol className="mt-16 relative border-l border-moss-800/60 pl-10">
            {timeline.map((t, i) => (
              <li key={t.year} className={`reveal ${i % 2 === 1 ? 'reveal-delay-1' : ''} relative pb-14 last:pb-0`}>
                <span className="absolute -left-[3.15rem] grid h-8 w-8 place-items-center rounded-full border border-moss-600/70 bg-night text-[10px] font-semibold text-gold">
                  ●
                </span>
                <span className="font-display text-sm tracking-[0.2em] text-gold">{t.year}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-cream/70">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* where support goes */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-5xl px-6 grid gap-14 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Where support goes</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              Every pound, <span className="italic text-moss-300">accounted for</span>
            </h2>
            <p className="mt-5 leading-relaxed text-cream/70">
              We keep overheads deliberately uncomfortable to live with, because money spent on
              administration is money not in the ground. Figures are from the most recent audited year.
            </p>
          </div>
          <div className="reveal reveal-delay-1 space-y-7">
            {funding.map((f) => (
              <Bar key={f.label} label={f.label} value={f.value} pct={f.pct} />
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">The people behind it</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Small team, <span className="italic text-moss-300">long horizon</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1 mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-4 rounded-2xl border border-moss-800/50 bg-moss-950/40 p-6 hover:border-moss-600/60 transition-colors"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-moss-600 to-moss-800 font-display text-sm text-cream">
                  {m.name.split(' ').map((w) => w[0]).join('')}
                </span>
                <span>
                  <span className="block font-display text-lg text-cream">{m.name}</span>
                  <span className="block text-sm text-cream/55">{m.role}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
