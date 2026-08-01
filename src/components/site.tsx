import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/wonders', label: 'Wonders' },
  { to: '/mission', label: 'Mission' },
  { to: '/gallery', label: 'Gallery' },
]

/* ---------- scroll to top on route change ---------- */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

/* ---------- navbar ---------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const solid = scrolled || pathname !== '/' || open

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-[500] transition-all duration-500',
        solid
          ? 'bg-night/80 backdrop-blur-xl border-b border-moss-800/40 py-3'
          : 'bg-transparent py-6'
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-wide">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-moss-600/30 border border-moss-500/40 text-lg">🌿</span>
          Green<span className="text-moss-300">Planet</span>
        </Link>

        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-cream/70">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }: { isActive: boolean }) =>
                cn(
                  'relative transition-colors hover:text-moss-300',
                  isActive &&
                    'text-moss-300 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-1 after:w-1 after:rounded-full after:bg-gold'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#join"
            className="rounded-full border border-moss-500/60 bg-moss-600/20 px-5 py-2 text-cream hover:bg-moss-500/40 transition-colors"
          >
            Join the Movement
          </a>
        </div>

        {/* mobile toggle */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-moss-600/50 text-cream/80"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-moss-800/40 bg-night/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5 text-cream/80">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }: { isActive: boolean }) => cn('text-lg', isActive && 'text-moss-300')}
            >
              {item.label}
            </NavLink>
          ))}
          <a href="#join" className="text-lg text-gold">Join the Movement</a>
        </div>
      )}
    </header>
  )
}

/* ---------- join CTA (shared, bottom of every page) ---------- */
export function JoinCTA() {
  return (
    <section id="join" className="relative mx-auto max-w-6xl px-6 pb-32 pt-10">
      <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-moss-700/50 bg-gradient-to-br from-moss-900 via-moss-950 to-night p-12 md:p-20 text-center">
        <span className="pointer-events-none absolute -top-10 left-10 text-7xl opacity-20 animate-float">🍃</span>
        <span className="pointer-events-none absolute bottom-6 right-12 text-6xl opacity-20 animate-float [animation-delay:2s]">🌱</span>
        <h2 className="font-display text-4xl md:text-6xl font-semibold leading-tight">
          The forest is calling.<br />
          <span className="italic text-moss-300">Answer it.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-cream/70 leading-relaxed">
          Join thousands of guardians planting, restoring and defending the green heart of our planet — one acre at a time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-moss-500 px-8 py-4 font-semibold text-night hover:bg-moss-400 transition-colors shadow-[0_10px_40px_-10px_rgba(72,127,84,0.8)]"
          >
            Become a Guardian
          </a>
          <Link
            to="/wonders"
            className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream/90 hover:border-moss-300 hover:text-moss-200 transition-colors"
          >
            Explore the Wild
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ---------- footer ---------- */
export function Footer() {
  return (
    <footer className="border-t border-moss-800/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
        <Link to="/" className="font-display text-base text-cream/80">🌿 GreenPlanet</Link>
        <span>Made with love for the living world · © {new Date().getFullYear()}</span>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-moss-300 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
