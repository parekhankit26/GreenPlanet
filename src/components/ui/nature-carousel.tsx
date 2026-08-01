import React, { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface CarouselItem {
  img: string
  label: string
  tag: string
  location: string
}

interface NatureCarouselProps {
  items: CarouselItem[]
  className?: string
}

export default function NatureCarousel({ items, className }: NatureCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const pausedRef = useRef(false)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  /* center-distance based 3D transforms */
  const applyTransforms = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const center = track.scrollLeft + track.clientWidth / 2
    const cards = Array.from(track.children) as HTMLElement[]
    let nearest = 0
    let nearestDist = Infinity

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const offset = (cardCenter - center) / track.clientWidth
      const c = Math.max(-1, Math.min(1, offset * 1.8))
      const inner = card.firstElementChild as HTMLElement | null
      if (inner) {
        inner.style.transform = `perspective(1400px) rotateY(${c * -16}deg) translateZ(${-Math.abs(c) * 110}px) scale(${1 - Math.abs(c) * 0.06})`
        inner.style.opacity = `${1 - Math.abs(c) * 0.5}`
      }
      const d = Math.abs(cardCenter - center)
      if (d < nearestDist) {
        nearestDist = d
        nearest = i
      }
    })

    setActive(nearest)
    const max = track.scrollWidth - track.clientWidth
    setProgress(max > 0 ? track.scrollLeft / max : 0)
  }, [])

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(applyTransforms)
  }, [applyTransforms])

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i] as HTMLElement | undefined
    if (!card) return
    track.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
      behavior: 'smooth',
    })
  }, [])

  /* initial layout + resize */
  useEffect(() => {
    applyTransforms()
    const onResize = () => applyTransforms()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [applyTransforms])

  /* gentle autoplay, paused while the user is over the carousel */
  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current || !trackRef.current) return
      const track = trackRef.current
      const center = track.scrollLeft + track.clientWidth / 2
      const cards = Array.from(track.children) as HTMLElement[]
      let nearest = 0
      let nearestDist = Infinity
      cards.forEach((card, i) => {
        const d = Math.abs(card.offsetLeft + card.offsetWidth / 2 - center)
        if (d < nearestDist) {
          nearestDist = d
          nearest = i
        }
      })
      const next = nearest + 1 >= cards.length ? 0 : nearest + 1
      const card = track.children[next] as HTMLElement
      track.scrollTo({
        left: card.offsetLeft + card.offsetWidth / 2 - track.clientWidth / 2,
        behavior: 'smooth',
      })
    }, 4500)
    return () => clearInterval(id)
  }, [])

  /* drag to scroll */
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false })

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current
    if (!track) return
    drag.current = { down: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false }
    track.classList.add('is-dragging')
  }
  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current
    if (!track || !drag.current.down) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 4) drag.current.moved = true
    track.scrollLeft = drag.current.startScroll - dx
  }
  const endDrag = () => {
    if (!drag.current.down) return
    const track = trackRef.current
    drag.current.down = false
    if (track) {
      track.classList.remove('is-dragging')
      // settle onto the nearest snap point
      requestAnimationFrame(() => scrollToIndex(activeRef.current))
    }
  }

  /* keep a ref of active for endDrag without re-binding */
  const activeRef = useRef(0)
  useEffect(() => {
    activeRef.current = active
  }, [active])

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
    >
      {/* track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="carousel-track no-scrollbar flex items-center gap-6 md:gap-10 overflow-x-auto cursor-grab select-none py-8 px-[calc(50%-150px)] md:px-[calc(50%-230px)]"
      >
        {items.map((item, i) => (
          <div
            key={item.label}
            className="carousel-card shrink-0 w-[300px] md:w-[460px] snap-center"
            onClick={() => {
              if (!drag.current.moved) scrollToIndex(i)
            }}
          >
            <figure className="relative h-[420px] md:h-[520px] overflow-hidden rounded-[2rem] border border-moss-800/60 bg-moss-950 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] transition-[transform,opacity] duration-300 ease-out will-change-transform">
              <img
                src={item.img}
                alt={item.label}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/95 via-night/25 to-transparent" />

              {/* faint index numeral */}
              <span className="absolute top-5 right-6 font-display text-5xl md:text-6xl font-light italic text-cream/25">
                {String(i + 1).padStart(2, '0')}
              </span>

              <figcaption className="absolute inset-x-0 bottom-0 p-7">
                <span className="mb-3 inline-block rounded-full border border-gold/40 bg-night/60 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-gold">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-semibold">{item.label}</h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-cream/60">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {item.location}
                </p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>

      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-night to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-night to-transparent" />

      {/* controls */}
      <div className="mx-auto mt-6 flex max-w-7xl items-center gap-6 px-6">
        <div className="flex gap-3">
          <button
            aria-label="Previous"
            onClick={() => scrollToIndex(Math.max(0, active - 1))}
            className="grid h-12 w-12 place-items-center rounded-full border border-moss-600/60 bg-moss-950/60 text-cream/80 backdrop-blur transition-colors hover:bg-moss-600/40 hover:text-cream disabled:opacity-30"
            disabled={active === 0}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollToIndex(Math.min(items.length - 1, active + 1))}
            className="grid h-12 w-12 place-items-center rounded-full border border-moss-600/60 bg-moss-950/60 text-cream/80 backdrop-blur transition-colors hover:bg-moss-600/40 hover:text-cream disabled:opacity-30"
            disabled={active === items.length - 1}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* progress */}
        <div className="relative h-px flex-1 bg-moss-800/60">
          <div
            className="absolute inset-y-0 left-0 -my-px h-[3px] rounded-full bg-gradient-to-r from-moss-500 to-gold transition-[width] duration-200"
            style={{ width: `${Math.max(4, progress * 100)}%` }}
          />
        </div>

        <div className="font-display text-lg text-cream/70 tabular-nums">
          <span className="text-moss-300">{String(active + 1).padStart(2, '0')}</span>
          <span className="mx-1 text-cream/40">/</span>
          {String(items.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}
