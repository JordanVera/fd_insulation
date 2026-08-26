'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRightIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  ThermometerSunIcon,
  WindIcon,
} from 'lucide-react';

import { Reveal, Stagger, StaggerItem } from '@/components/motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { serviceAreas } from '@/lib/service-areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

const quickServices = services.filter((s) =>
  ['cellulose', 'air-sealing', 'radiant-barriers', 'crawl-space-insulation'].includes(s.slug),
);

const quickLocations = serviceAreas.filter((a) =>
  ['houston-tx', 'katy-tx-attic-insulation', 'spring-tx', 'dallas-tx'].includes(a.slug),
);

function HeatParticle({ delay, x, size }: { delay: number; x: number; size: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className="not-found-heat-particle pointer-events-none absolute bottom-[38%] rounded-full bg-orange-400/70 blur-[1px] dark:bg-orange-300/50"
      style={{ left: `${x}%`, width: size, height: size }}
      initial={reduce ? { opacity: 0.35, y: 0 } : { opacity: 0, y: 0, scale: 0.4 }}
      animate={
        reduce
          ? { opacity: 0.35, y: -40 }
          : {
              opacity: [0, 0.85, 0],
              y: [-4, -88, -120],
              scale: [0.5, 1, 0.2],
            }
      }
      transition={{
        duration: 2.8,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    />
  );
}

function AtticCutaway() {
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        delay: i * 0.22,
        x: 22 + (i * 17) % 56,
        size: 4 + (i % 3) * 2,
      })),
    [],
  );

  return (
    <div
      aria-hidden
      className="relative mx-auto aspect-[4/3] w-full max-w-md select-none"
    >
      <div className="absolute inset-x-[8%] bottom-[18%] top-[22%] overflow-hidden rounded-sm border border-border/80 bg-gradient-to-b from-slate-100 to-slate-200 shadow-2xl dark:from-slate-800 dark:to-slate-900">
        {/* Roof deck */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-amber-900/80 to-amber-950/40 dark:from-amber-950 dark:to-black/40" />
        {/* Joists */}
        {[18, 38, 58, 78].map((left) => (
          <div
            key={left}
            className="absolute bottom-0 top-[18%] w-1 bg-amber-950/25 dark:bg-amber-900/40"
            style={{ left: `${left}%` }}
          />
        ))}
        {/* Insulation batts — gappy */}
        <div className="absolute inset-x-[6%] bottom-[8%] top-[34%]">
          <div className="absolute inset-x-0 top-0 h-[42%] rounded-sm bg-pink-200/90 dark:bg-pink-900/35" />
          <div className="absolute left-[22%] top-[18%] h-[55%] w-[18%] rounded-sm bg-pink-300/80 dark:bg-pink-800/30" />
          <div className="absolute right-[8%] top-[12%] h-[48%] w-[24%] rounded-sm bg-pink-200/70 dark:bg-pink-900/25" />
          {/* The gap — where the 404 lives */}
          <div className="absolute left-[38%] top-[8%] flex h-[58%] w-[22%] flex-col items-center justify-center rounded-md border-2 border-dashed border-orange-400/70 bg-orange-500/10 dark:border-orange-300/50 dark:bg-orange-400/5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-300">
              void
            </span>
            <span className="mt-0.5 font-heading text-2xl font-black text-orange-600/90 dark:text-orange-300">
              404
            </span>
            <span className="mt-0.5 text-[9px] font-semibold text-orange-600/70 dark:text-orange-300/80">
              R-0
            </span>
          </div>
        </div>
        {/* Living space glow */}
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-sky-200/50 to-transparent dark:from-sky-900/20" />
      </div>

      {/* Roof outline */}
      <div className="absolute inset-x-[4%] top-[6%] h-[28%] border-x-[3px] border-t-[3px] border-amber-950/30 dark:border-amber-800/50" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />

      {/* Heat leak arrows */}
      {[28, 44, 62, 76].map((left, i) => (
        <motion.div
          key={left}
          aria-hidden
          className="absolute text-orange-500/80 dark:text-orange-300/70"
          style={{ left: `${left}%`, bottom: `${36 + i * 2}%` }}
          animate={{ opacity: [0.25, 0.9, 0.25], y: [0, -6, 0] }}
          transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <WindIcon className="size-4 rotate-180" />
        </motion.div>
      ))}

      {particles.map((p) => (
        <HeatParticle key={p.id} delay={p.delay} x={p.x} size={p.size} />
      ))}
    </div>
  );
}

export function NotFoundPage() {
  const reduce = useReducedMotion();

  return (
    <div className="relative overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/[0.04] via-background to-primary/[0.06] dark:from-orange-400/[0.06] dark:via-background dark:to-primary/[0.08]" />
        <div className="absolute inset-0 grid-dots opacity-40" />
        <div className="absolute inset-0 stripe-pattern opacity-30" />
        <motion.div
          className="absolute -left-32 top-20 size-96 rounded-full bg-orange-500/10 blur-3xl dark:bg-orange-400/10"
          animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-24 bottom-10 size-80 rounded-full bg-primary/10 blur-3xl"
          animate={reduce ? undefined : { scale: [1.05, 0.95, 1.05], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <Badge
                variant="outline"
                className="mb-5 border-orange-500/30 bg-orange-500/8 text-orange-700 dark:text-orange-300"
              >
                <ThermometerSunIcon className="mr-1.5 size-3" />
                Thermal bypass detected · HTTP 404
              </Badge>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                Insulation status
              </p>
              <h1 className="mt-3 font-heading text-[clamp(4.5rem,14vw,8rem)] font-black leading-[0.85] tracking-tighter">
                <span className="not-found-giant block bg-gradient-to-br from-orange-500 via-red-500 to-primary bg-clip-text text-transparent dark:from-orange-300 dark:via-orange-400 dark:to-blue-300">
                  404
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-balance md:text-4xl">
                This page has{' '}
                <span className="fdi-text">zero R-value.</span>
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                You found a major air leak in our site map. The URL you requested
                isn&apos;t insulated — it doesn&apos;t exist. Good news: we seal
                attics for a living, and we know exactly where to send you next.
              </p>
            </Reveal>

            <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6 font-semibold">
                <Link href="/">
                  <HomeIcon className="size-4" />
                  Back to home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
                <Link href="/contact">
                  Get a free estimate
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="h-12 px-6">
                <a href={site.phoneHref}>
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </Button>
            </Reveal>

            <Reveal delay={0.24}>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
                {[
                  { label: 'R-value', value: '0', sub: 'This URL' },
                  { label: 'Air leaks', value: '100%', sub: 'Unsealed' },
                  { label: 'Fix time', value: '1 click', sub: 'Try below' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/80 bg-card/70 px-3 py-4 text-center shadow-sm backdrop-blur-sm dark:bg-card/50"
                  >
                    <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 font-heading text-xl font-bold text-primary">{stat.value}</dd>
                    <dd className="text-[10px] text-muted-foreground">{stat.sub}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={0.1} y={32}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/10 via-transparent to-primary/10 blur-2xl" />
              <div className="relative rounded-2xl border border-border/80 bg-card/60 p-6 shadow-xl backdrop-blur-md dark:bg-card/40 md:p-8">
                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Attic cross-section · live leak scan
                </p>
                <AtticCutaway />
                <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
                  Conditioned air is escaping through an uninsulated gap.
                  <span className="block font-medium text-foreground">
                    We don&apos;t leave holes like this in Houston homes — or our website.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Quick escape routes */}
        <Reveal delay={0.28} className="mt-16 md:mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Seal the leak
              </p>
              <h3 className="mt-1 font-heading text-2xl font-bold tracking-tight">
                Popular destinations
              </h3>
            </div>
          </div>

          <Stagger className="grid gap-4 md:grid-cols-2">
            <StaggerItem>
              <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm dark:shadow-none">
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <ArrowRightIcon className="size-3.5 text-primary" />
                  Services
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {quickServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={s.href}
                        className="block rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-border bg-card/80 p-5 shadow-sm dark:shadow-none">
                <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  <MapPinIcon className="size-3.5 text-primary" />
                  Service areas
                </p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {quickLocations.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={a.href}
                        className="block rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        {a.shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </Stagger>
        </Reveal>
      </div>
    </div>
  );
}
