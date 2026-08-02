import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/** Prefix public assets with the deploy base so they resolve under a subpath
 *  (e.g. GitHub Pages serves this project from /GreenPlanet/). */
const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

interface ParallaxLayer {
  src: string;
  alt: string;
  speedX: number;
  speedY: number;
  speedZ: number;
  rotation: number;
  distance: number;
  className?: string;
  zIndex: number;
  initialTop: string;
  initialLeft: string;
  width: string;
}

interface ParallaxHeroProps {
  layers?: ParallaxLayer[];
  title?: string;
  subtitle?: string;
  description?: string;
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

const defaultLayers: ParallaxLayer[] = [
  {
    src: asset('hero/background.webp'),
    alt: 'background',
    speedX: 0.03,
    speedY: 0.038,
    speedZ: 0,
    rotation: 0,
    distance: -200,
    zIndex: 1,
    initialTop: 'calc(50% - 50px)',
    initialLeft: 'calc(50% + 0px)',
    width: '3200px',
  },
  {
    src: asset('hero/fog-7.webp'),
    alt: 'fog-7',
    speedX: 0.27,
    speedY: 0.32,
    speedZ: 0,
    rotation: 0,
    distance: 850,
    zIndex: 2,
    initialTop: 'calc(50% - 100px)',
    initialLeft: 'calc(50% + 300px)',
    width: '1900px',
  },
  {
    src: asset('hero/mountain-10.webp'),
    alt: 'mountain-10',
    speedX: 0.095,
    speedY: 0.005,
    speedZ: 0,
    rotation: 0,
    distance: 1110,
    zIndex: 3,
    initialTop: 'calc(50% + 169px)',
    initialLeft: 'calc(50% + 330px)',
    width: '1200px',
  },
  {
    src: asset('hero/fog-6.webp'),
    alt: 'fog-6',
    speedX: 0.25,
    speedY: 0.28,
    speedZ: 0,
    rotation: 0,
    distance: 1400,
    zIndex: 4,
    initialTop: 'calc(50% + 285px)',
    initialLeft: 'calc(50%)',
    width: '2200px',
    className: 'opacity-30',
  },
  {
    src: asset('hero/mountain-9.webp'),
    alt: 'mountain-9',
    speedX: 0.125,
    speedY: 0.155,
    speedZ: 0.15,
    rotation: 0.02,
    distance: 1700,
    zIndex: 51,
    initialTop: 'calc(50% + 313px)',
    initialLeft: 'calc(50% - 557px)',
    width: '670px',
  },
  {
    src: asset('hero/fog-5.webp'),
    alt: 'fog-5',
    speedX: 0.16,
    speedY: 0.105,
    speedZ: 0,
    rotation: 0,
    distance: 1900,
    zIndex: 7,
    initialTop: 'calc(50% + 360px)',
    initialLeft: 'calc(50% + 40px)',
    width: '650px',
  },
  {
    src: asset('hero/mountain-7.webp'),
    alt: 'mountain-7',
    speedX: 0.1,
    speedY: 0.1,
    speedZ: 0,
    rotation: 0.09,
    distance: 2000,
    zIndex: 19,
    initialTop: 'calc(50% + 223px)',
    initialLeft: 'calc(50% + 495px)',
    width: '738px',
  },
  {
    src: asset('hero/mountain-6.webp'),
    alt: 'mountain-6',
    speedX: 0.065,
    speedY: 0.05,
    speedZ: 0.05,
    rotation: 0.12,
    distance: 2300,
    zIndex: 18,
    initialTop: 'calc(50% + 120px)',
    initialLeft: 'calc(50% + 590px)',
    width: '408px',
  },
  {
    src: asset('hero/fog-4.webp'),
    alt: 'fog-4',
    speedX: 0.135,
    speedY: 0.1,
    speedZ: 0,
    rotation: 0,
    distance: 2400,
    zIndex: 11,
    initialTop: 'calc(50% + 223px)',
    initialLeft: 'calc(50% + 460px)',
    width: '590px',
    className: 'opacity-50',
  },
  {
    src: asset('hero/mountain-5.webp'),
    alt: 'mountain-5',
    speedX: 0.08,
    speedY: 0.05,
    speedZ: 0.13,
    rotation: 0.1,
    distance: 2550,
    zIndex: 12,
    initialTop: 'calc(50% + 320px)',
    initialLeft: 'calc(50% + 230px)',
    width: '725px',
  },
  {
    src: asset('hero/fog-3.webp'),
    alt: 'fog-3',
    speedX: 0.11,
    speedY: 0.018,
    speedZ: 0,
    rotation: 0,
    distance: 2800,
    zIndex: 113,
    initialTop: 'calc(50% + 210px)',
    initialLeft: 'calc(50% + 5px)',
    width: '1600px',
  },
  {
    src: asset('hero/mountain-4.webp'),
    alt: 'mountain-4',
    speedX: 0.059,
    speedY: 0.024,
    speedZ: 0.35,
    rotation: 0.14,
    distance: 3200,
    zIndex: 15,
    initialTop: 'calc(50% + 196px)',
    initialLeft: 'calc(50% - 698px)',
    width: '1100px',
  },
  {
    src: asset('hero/mountain-3.webp'),
    alt: 'mountain-3',
    speedX: 0.04,
    speedY: 0.018,
    speedZ: 0.32,
    rotation: 0.05,
    distance: 3400,
    zIndex: 20,
    initialTop: 'calc(50% - 20px)',
    initialLeft: 'calc(50% + 750px)',
    width: '630px',
  },
  {
    src: asset('hero/fog-2.webp'),
    alt: 'fog-2',
    speedX: 0.15,
    speedY: 0.0115,
    speedZ: 0,
    rotation: 0,
    distance: 3600,
    zIndex: 16,
    initialTop: 'calc(50% - 20px)',
    initialLeft: 'calc(50% + 698px)',
    width: '1100px',
  },
  {
    src: asset('hero/mountain-2.webp'),
    alt: 'mountain-2',
    speedX: 0.0235,
    speedY: 0.013,
    speedZ: 0.42,
    rotation: 0.15,
    distance: 3800,
    zIndex: 17,
    initialTop: 'calc(50% + 256px)',
    initialLeft: 'calc(50% + 528px)',
    width: '800px',
  },
  {
    src: asset('hero/mountain-1.webp'),
    alt: 'mountain-1',
    speedX: 0.027,
    speedY: 0.018,
    speedZ: 0.53,
    rotation: 0.2,
    distance: 4000,
    zIndex: 18,
    initialTop: 'calc(50% + 196px)',
    initialLeft: 'calc(50% - 728px)',
    width: '1100px',
  },
  {
    src: asset('hero/fog-1.webp'),
    alt: 'fog-1',
    speedX: 0.12,
    speedY: 0.01,
    speedZ: 0,
    rotation: 0,
    distance: 4200,
    zIndex: 21,
    initialTop: 'calc(100% - 355px)',
    initialLeft: 'calc(50% + 100px)',
    width: '1900px',
    className: 'opacity-50',
  },
];

const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  layers = defaultLayers,
  title = 'GREENPLANET',
  subtitle,
  description,
  actions,
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLImageElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const leftCache = useRef<number[]>([]);
  const textLeftCache = useRef(0);
  const rafId = useRef(0);
  const lastEvent = useRef<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false);

  /* fade the scene in once the key layers have decoded (2.5s safety cap) */
  useEffect(() => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setReady(true);
      }
    };
    const critical = layerRefs.current.filter(Boolean) as HTMLImageElement[];
    Promise.allSettled(critical.map((img) => img.decode())).then(finish);
    const cap = setTimeout(finish, 2500);
    return () => clearTimeout(cap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    /* measure layer left-positions once instead of per mouse event —
       getComputedStyle on every layer per move forces style recalc */
    const measure = () => {
      leftCache.current = layerRefs.current.map((el) =>
        el ? parseFloat(getComputedStyle(el).left) : 0
      );
      if (textRef.current) {
        textLeftCache.current = parseFloat(getComputedStyle(textRef.current).left);
      }
    };
    measure();
    window.addEventListener('resize', measure);

    const handleMouseMove = (e: MouseEvent) => {
      lastEvent.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          rafId.current = 0;
          const ev = lastEvent.current;
          if (!ev) return;
          const xVal = ev.x - window.innerWidth / 2;
          const yVal = ev.y - window.innerHeight / 2;
          const rotateDeg = (xVal / (window.innerWidth / 2)) * 20;
          updateLayers(ev.x, xVal, yVal, rotateDeg);
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', measure);
      cancelAnimationFrame(rafId.current);
      rafId.current = 0;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateLayers = (
    cursorPosition: number,
    xVal: number,
    yVal: number,
    rotateDeg: number
  ) => {
    layerRefs.current.forEach((el, index) => {
      if (!el) return;

      const layer = layers[index];
      const { speedX, speedY, speedZ, rotation } = layer;

      const computedLeft = leftCache.current[index] ?? 0;
      const isInLeft = computedLeft < window.innerWidth / 2 ? 1 : -1;
      const zValue = (cursorPosition - computedLeft) * isInLeft * 0.1;

      el.style.transform = `perspective(2300px) translateZ(${
        zValue * speedZ
      }px) rotateY(${rotateDeg * rotation}deg) translateX(calc(-50% + ${
        -xVal * speedX
      }px)) translateY(calc(-50% + ${yVal * speedY}px))`;
    });

    if (textRef.current) {
      const textSpeedX = 0.07;
      const textSpeedY = 0.05;
      const textSpeedZ = 0.08;
      const textRotation = 0.04;

      const computedLeft = textLeftCache.current;
      const isInLeft = computedLeft < window.innerWidth / 2 ? 1 : -1;
      const zValue = (cursorPosition - computedLeft) * isInLeft * 0.1;

      textRef.current.style.transform = `perspective(2300px) translateZ(${
        zValue * textSpeedZ
      }px) rotateY(${rotateDeg * textRotation}deg) translateX(calc(-50% + ${
        -xVal * textSpeedX
      }px)) translateY(calc(-50% + ${yVal * textSpeedY}px))`;
    }
  };

  return (
    <main
      ref={containerRef}
      className={cn(
        'relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#0b1d2a] via-[#12303c] to-[#1e3626]',
        className
      )}
    >
      <div className="absolute inset-0 z-[100] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_65%,rgba(0,0,0,0.7))]" />
      {/* Fade the hero into the page background so the next section blends in */}
      <div className="absolute inset-x-0 bottom-0 z-[120] h-40 pointer-events-none bg-gradient-to-b from-transparent to-night" />

      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-1000 ease-out',
          ready ? 'opacity-100' : 'opacity-0'
        )}
      >
        {layers.map((layer, index) => (
          <img
            key={index}
            ref={(el) => {
              if (el) layerRefs.current[index] = el;
            }}
            src={layer.src}
            alt={layer.alt}
            decoding="async"
            fetchPriority={index < 5 ? 'high' : 'auto'}
            className={cn(
              'absolute pointer-events-none will-change-transform transition-transform duration-[450ms] ease-out',
              layer.className
            )}
            style={{
              width: layer.width,
              top: layer.initialTop,
              left: layer.initialLeft,
              zIndex: layer.zIndex,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div
        ref={textRef}
        className="absolute z-[9] text-white text-center pointer-events-auto transition-transform duration-[450ms] ease-out"
        style={{
          top: 'calc(50% - 130px)',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {subtitle && (
          <p className="mb-4 text-sm md:text-base uppercase tracking-[0.55em] text-moss-100/80 font-light">
            {subtitle}
          </p>
        )}
        <h1 className="font-display font-black tracking-tight text-[9.5rem] leading-[0.85] max-2xl:text-[8rem] max-xl:text-[6.5rem] max-lg:text-[5rem] max-md:text-[3.4rem] max-sm:text-[2.4rem] drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
      </div>

      {/* Sits above the mountain layers so the copy stays readable and the
          buttons stay clickable, unlike the title which tucks behind peaks. */}
      {(description || actions) && (
        <div
          className="absolute inset-x-0 z-[130] flex flex-col items-center px-6 text-center"
          style={{ top: 'calc(50% + 30px)' }}
        >
          {description && (
            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-cream/80 drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]">
              {description}
            </p>
          )}
          {actions && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {actions}
            </div>
          )}
        </div>
      )}

      {children && (
        <div className="absolute inset-x-0 bottom-14 z-[130] flex justify-center">
          {children}
        </div>
      )}
    </main>
  );
};

export const ParallaxHeroDemo = () => {
  return <ParallaxHero subtitle="Where nature breathes" />;
};

export default ParallaxHero;
