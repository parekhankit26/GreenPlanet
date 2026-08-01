import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/* ---------- scroll reveal (call once per page) ---------- */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ---------- 3D tilt card ---------- */
export function TiltCard({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 12}deg) scale(1.03)`
  }
  const onLeave = () => {
    const el = ref.current
    if (el) el.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'
  }

  return (
    <div className="tilt-scene">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cn(
          'tilt-card relative overflow-hidden rounded-3xl border border-moss-800/60 bg-moss-950/60 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]',
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

/* ---------- animated counter ---------- */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true)
          io.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!started || !ref.current) return
    const el = ref.current
    const dur = 1800
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = Math.round(eased * to).toLocaleString() + suffix
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, to, suffix])

  return <span ref={ref}>0{suffix}</span>
}

/* ---------- bar that fills when scrolled into view ---------- */
export function Bar({ pct, label, value }: { pct: number; label: string; value: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-cream/80">{label}</span>
        <span className="font-display text-lg text-gold">{value}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-moss-900">
        <div
          className="h-full rounded-full bg-gradient-to-r from-moss-500 to-gold transition-[width] duration-[1400ms] ease-out"
          style={{ width: shown ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  )
}

/* ---------- mount children when scrolled into view ---------- */
export function MountOnView({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {inView ? children : null}
    </div>
  )
}

/* ---------- shared page header for subpages ---------- */
export function PageHeader({
  kicker,
  title,
  accent,
  copy,
}: {
  kicker: string
  title: string
  accent: string
  copy?: string
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-40 pb-16 text-center">
      <p className="reveal text-sm uppercase tracking-[0.45em] text-moss-400 mb-5">{kicker}</p>
      <h1 className="reveal reveal-delay-1 font-display text-5xl md:text-7xl font-semibold leading-tight">
        {title} <span className="italic text-moss-300">{accent}</span>
      </h1>
      {copy && (
        <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-2xl text-cream/70 leading-relaxed">
          {copy}
        </p>
      )}
    </div>
  )
}
