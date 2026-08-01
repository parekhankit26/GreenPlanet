import { Link } from 'react-router-dom'
import ParallaxHero from '@/components/ui/wilderness'
import { useReveal, TiltCard, Counter } from '@/lib/anim'

const marqueeWords = [
  'Forests', 'Oceans', 'Mountains', 'Rivers', 'Wildlife', 'Meadows', 'Glaciers', 'Deserts',
]

const teasers = [
  {
    to: '/wonders',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    kicker: '01 · Explore',
    title: 'Wonders',
    text: 'Ancient forests, living rivers and silent mountain giants — the beauty we exist to protect.',
  },
  {
    to: '/mission',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
    kicker: '02 · Purpose',
    title: 'Mission',
    text: 'Why we plant, restore and defend — and the numbers behind a decade of green work.',
  },
  {
    to: '/gallery',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
    kicker: '03 · Wander',
    title: 'Gallery',
    text: 'Field notes from the wild — a hand of postcards from the places we keep wild.',
  },
]

const voices = [
  {
    quote: 'We planted eleven thousand saplings on a hillside that had been bare for thirty years. Last spring, the birds came back on their own.',
    name: 'Amara Okonjo',
    role: 'Restoration lead, Rift Valley',
  },
  {
    quote: 'People think conservation is about saying no. Most days it is about showing a village that a standing forest pays better than a felled one.',
    name: 'Tomas Lindqvist',
    role: 'Community forester, Nordics',
  },
  {
    quote: 'The river was declared dead in 1998. We measured otters in it again this year. Nothing about that was quick, and all of it was worth it.',
    name: 'Priya Raghunathan',
    role: 'Watershed scientist, Western Ghats',
  },
]

const journal = [
  { date: 'Jul 2026', title: 'A decade of the Rift Valley canopy project', tag: 'Field report' },
  { date: 'Jun 2026', title: 'What 12,000 restored acres actually look like on the ground', tag: 'Long read' },
  { date: 'May 2026', title: 'Why native seed banks beat imported saplings, every time', tag: 'Research' },
  { date: 'Apr 2026', title: 'The quiet return of the river otter', tag: 'Species watch' },
]

export default function Home() {
  useReveal()

  return (
    <>
      <ParallaxHero
        title="GREENPLANET"
        subtitle="Where nature breathes"
        description="We are a global collective of foresters, scientists and volunteers restoring the wild places that keep this planet liveable — one canopy, one river, one returning species at a time."
        actions={
          <>
            <Link
              to="/mission"
              className="rounded-full bg-moss-500 px-7 py-3.5 font-semibold text-night shadow-[0_10px_40px_-10px_rgba(72,127,84,0.9)] hover:bg-moss-400 transition-colors"
            >
              Our Mission
            </Link>
            <Link
              to="/wonders"
              className="rounded-full border border-cream/40 bg-night/30 px-7 py-3.5 font-semibold text-cream backdrop-blur-sm hover:border-moss-300 hover:text-moss-200 transition-colors"
            >
              See the Wonders
            </Link>
          </>
        }
      >
        <a
          href="#explore"
          className="group flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors"
        >
          <span className="text-xs uppercase tracking-[0.4em]">Explore</span>
          <span className="h-10 w-6 rounded-full border border-cream/40 flex justify-center pt-2">
            <span className="h-2 w-1 rounded-full bg-cream/80 animate-bounce" />
          </span>
        </a>
      </ParallaxHero>

      {/* marquee strip */}
      <section className="border-y border-moss-800/40 bg-moss-950/40 py-5 overflow-hidden">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="flex items-center gap-14 font-display text-2xl text-moss-300/70 italic">
              {w} <span className="text-gold/60 text-base not-italic">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* intro statement */}
      <section className="mx-auto max-w-4xl px-6 pt-24 text-center">
        <p className="reveal font-display text-2xl md:text-4xl font-light leading-snug text-cream/90">
          A third of the planet's forests are already gone.
          <span className="text-moss-300 italic"> The rest is still winnable</span> — and that is the
          whole of our work.
        </p>
      </section>

      {/* page teasers */}
      <section id="explore" className="mx-auto max-w-7xl px-6 py-24">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Step inside</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
            Three paths <span className="italic text-moss-300">into the green</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {teasers.map((t, i) => (
            <div key={t.to} className={`reveal ${i === 1 ? 'reveal-delay-1 md:translate-y-10' : ''} ${i === 2 ? 'reveal-delay-2' : ''}`}>
              <Link to={t.to} className="block group">
                <TiltCard>
                  <div className="relative h-[440px]">
                    <img src={t.img} alt={t.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-night via-night/25 to-transparent" />
                    <div className="tilt-pop absolute bottom-0 w-full p-7">
                      <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{t.kicker}</p>
                      <h3 className="font-display text-3xl font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/70">{t.text}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-moss-300 group-hover:gap-3 transition-all">
                        Enter
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* why it matters — offset split, sticky image */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-start">
          <div className="reveal md:sticky md:top-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-moss-800/50">
              <img
                src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1400&auto=format&fit=crop"
                alt="Light through an old-growth forest"
                loading="lazy"
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent" />
              <div className="absolute bottom-7 left-7 right-7">
                <div className="font-display text-5xl font-semibold text-gold">
                  <Counter to={12000} suffix="+" />
                </div>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-cream/70">Acres brought back</p>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="reveal">
              <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Why it matters</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
                Every acre is a <span className="italic text-moss-300">life-support system</span>
              </h2>
            </div>
            {[
              {
                n: '01',
                h: 'Forests are the planet\'s lungs',
                p: 'A single mature tree moves hundreds of litres of water into the air each day and locks away carbon for centuries. Cut it down and both services stop the same afternoon.',
              },
              {
                n: '02',
                h: 'Biodiversity is infrastructure',
                p: 'Pollinators, soil fungi and predators are not decoration — they are the machinery behind the food on every table. Losing them is an engineering failure, not a sentimental one.',
              },
              {
                n: '03',
                h: 'Restoration actually works',
                p: 'Given seed, shade and a decade of being left alone, degraded land comes back. We have watched it happen on four continents. It is slow, unglamorous and completely reliable.',
              },
            ].map((item, i) => (
              <div
                key={item.n}
                className={`reveal ${i === 1 ? 'reveal-delay-1' : ''} ${i === 2 ? 'reveal-delay-2' : ''} border-l border-moss-700/60 pl-7`}
              >
                <span className="font-display text-sm text-gold">{item.n}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold">{item.h}</h3>
                <p className="mt-2 leading-relaxed text-cream/70">{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* voices — quote-first, staggered */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-moss-950/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="reveal text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">Voices from the field</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              The people doing <span className="italic text-moss-300">the actual work</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {voices.map((v, i) => (
              <figure
                key={v.name}
                className={`reveal ${i === 1 ? 'reveal-delay-1 md:-translate-y-6' : ''} ${i === 2 ? 'reveal-delay-2' : ''} rounded-3xl border border-moss-800/50 bg-night/60 p-8 backdrop-blur-sm hover:border-moss-600/60 transition-colors`}
              >
                <span className="font-display text-6xl leading-none text-moss-600">"</span>
                <blockquote className="-mt-4 font-display text-lg italic leading-relaxed text-cream/85">
                  {v.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-moss-800/60 pt-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-moss-700/50 font-display text-sm text-moss-100">
                    {v.name.split(' ').map((w) => w[0]).join('')}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-cream">{v.name}</span>
                    <span className="block text-xs text-cream/55">{v.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* journal — list rows, not cards */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">From the field</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Recent dispatches</h2>
          </div>
          <Link to="/gallery" className="hidden md:inline text-sm text-moss-300 hover:text-moss-200">
            View the gallery →
          </Link>
        </div>

        <ul className="reveal mt-12 divide-y divide-moss-800/50 border-y border-moss-800/50">
          {journal.map((j) => (
            <li key={j.title}>
              <a href="#" className="group flex flex-col gap-2 py-6 md:flex-row md:items-center md:gap-8">
                <span className="w-24 shrink-0 font-display text-sm text-cream/50">{j.date}</span>
                <span className="flex-1 font-display text-xl text-cream group-hover:text-moss-300 transition-colors">
                  {j.title}
                </span>
                <span className="shrink-0 rounded-full border border-moss-700/60 px-3 py-1 text-xs uppercase tracking-widest text-moss-300/80">
                  {j.tag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
