import SocialCards, { type CardItem } from '@/components/ui/card-fan-carousel'
import { useReveal, MountOnView, PageHeader } from '@/lib/anim'

const gallery: CardItem[] = [
  { imgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=700&fit=crop', alt: 'Mountain landscape' },
  { imgUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=700&fit=crop', alt: 'Foggy forest' },
  { imgUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=700&fit=crop', alt: 'Sunlit woods' },
  { imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=700&fit=crop', alt: 'Tropical beach' },
  { imgUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=700&fit=crop', alt: 'Starry mountain' },
  { imgUrl: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=400&h=700&fit=crop', alt: 'Golden sunset' },
  { imgUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=700&fit=crop', alt: 'Lake reflection' },
  { imgUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=700&fit=crop', alt: 'Green valley' },
  { imgUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=700&fit=crop', alt: 'Sunbeam nature' },
  { imgUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=700&fit=crop', alt: 'Misty peaks' },
]

const mosaic = [
  { img: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=900&auto=format&fit=crop', label: 'Forest Light', place: 'Redwoods, California', tall: true },
  { img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=900&auto=format&fit=crop', label: 'Emerald Valleys', place: 'Fiordland, New Zealand', tall: false },
  { img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=900&auto=format&fit=crop', label: 'Sunlit Leaves', place: 'Black Forest, Germany', tall: false },
  { img: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=900&auto=format&fit=crop', label: 'Wild Shores', place: 'Big Sur, California', tall: true },
  { img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=900&auto=format&fit=crop', label: 'Falling Water', place: 'Highlands', tall: false },
  { img: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=900&auto=format&fit=crop', label: 'Cloud Peaks', place: 'Himalayas, Nepal', tall: true },
  { img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=900&auto=format&fit=crop', label: 'Golden Fields', place: 'Tuscany, Italy', tall: false },
  { img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=900&auto=format&fit=crop', label: 'Still Water', place: 'Lake District, UK', tall: false },
]

const notes = [
  {
    date: '14 July 2026',
    place: 'Rift Valley, Kenya',
    text: 'Counted 40 surviving acacia in the north plot — better than the 25 we budgeted for. The rains came late but came properly, which is all these seedlings ever needed.',
  },
  {
    date: '2 June 2026',
    place: 'Västerbotten, Sweden',
    text: 'Spent the morning with three landowners who have each agreed to leave a 30-metre buffer along the stream. Ten years ago that conversation would have ended at the gate.',
  },
  {
    date: '19 April 2026',
    place: 'Western Ghats, India',
    text: 'Otter tracks in the silt again, two kilometres further upstream than last season. Nobody released them here. They simply walked back once the water was worth living in.',
  },
]

export default function Gallery() {
  useReveal()

  return (
    <>
      <PageHeader
        kicker="Field notes"
        title="A planet"
        accent="in green"
        copy="A hand of postcards from the wild places our community works to keep wild. Hover to fan them out, arrows to shuffle the deck."
      />

      <section className="pb-16">
        <MountOnView className="min-h-[24rem]">
          <SocialCards cards={gallery} />
        </MountOnView>
      </section>

      {/* mosaic — masonry columns, distinct from the fan above */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal flex items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">The archive</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">
                Everything else <span className="italic text-moss-300">we brought home</span>
              </h2>
            </div>
            <span className="hidden md:block text-sm text-cream/50">{mosaic.length} frames</span>
          </div>

          <div className="reveal mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>figure]:mb-5">
            {mosaic.map((m) => (
              <figure
                key={m.label}
                className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-moss-800/50"
              >
                <img
                  src={m.img}
                  alt={m.label}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${m.tall ? 'h-[420px]' : 'h-[280px]'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95" />
                <figcaption className="absolute bottom-0 p-5">
                  <span className="block font-display text-lg italic text-cream">{m.label}</span>
                  <span className="mt-0.5 block text-xs uppercase tracking-[0.2em] text-cream/55">{m.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* field notes — journal entries */}
      <section className="border-t border-moss-800/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.45em] text-moss-400 mb-4">From the notebook</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight">
              What the photos <span className="italic text-moss-300">don't say</span>
            </h2>
          </div>

          <div className="mt-14 space-y-10">
            {notes.map((n, i) => (
              <article
                key={n.date}
                className={`reveal ${i === 1 ? 'reveal-delay-1' : ''} ${i === 2 ? 'reveal-delay-2' : ''} rounded-3xl border border-moss-800/50 bg-moss-950/40 p-8 md:p-10`}
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-cream/50">
                  <span className="text-gold">{n.date}</span>
                  <span className="h-1 w-1 rounded-full bg-moss-600" />
                  <span>{n.place}</span>
                </div>
                <p className="mt-5 font-display text-xl md:text-2xl font-light italic leading-relaxed text-cream/85">
                  {n.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* submission band */}
      <section className="border-t border-moss-800/40 py-20">
        <div className="reveal mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <span className="text-4xl">📷</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold">
            Been somewhere <span className="italic text-moss-300">worth keeping?</span>
          </h2>
          <p className="max-w-xl leading-relaxed text-cream/70">
            We publish photographs sent in by the people who walk these places — volunteers, rangers,
            and anyone who stopped long enough to look properly.
          </p>
          <a
            href="#"
            className="rounded-full border border-moss-500/60 bg-moss-600/20 px-7 py-3.5 font-semibold text-cream hover:bg-moss-500/40 transition-colors"
          >
            Submit a photograph
          </a>
        </div>
      </section>
    </>
  )
}
