import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ShieldCheckIcon,
  HomeIcon,
  LayersIcon,
  WindIcon,
  GitBranchIcon,
  ArrowDownToLineIcon,
  Trash2Icon,
  DollarSignIcon,
  ThermometerIcon,
  ZapIcon,
  BadgeCheckIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Attic & Spray Foam Insulation Houston TX | BBB A-Rated | Free Estimates',
  description: site.description,
};

const serviceIconMap: Record<string, React.ElementType> = {
  Home: HomeIcon,
  Layers: LayersIcon,
  Wind: WindIcon,
  GitBranch: GitBranchIcon,
  ArrowDownToLine: ArrowDownToLineIcon,
  Trash2: Trash2Icon,
};

const benefitIconMap: Record<string, React.ElementType> = {
  DollarSign: DollarSignIcon,
  Thermometer: ThermometerIcon,
  Zap: ZapIcon,
  Wind: WindIcon,
};

export default function HomePage() {
  return (
    <>
      {/* ── VIDEO HERO ──────────────────────────────────────────────── */}
      <div className="relative min-h-[88vh] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* Overlay — always dark for video legibility regardless of theme */}
        <div className="video-overlay absolute inset-0" />

        {/* Content — always white text over video */}
        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-24 md:px-6">
          <FadeIn delay={0.02}>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Badge className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15">
                <BadgeCheckIcon className="mr-1.5 size-3" />
                BBB A-Rated · 35+ Years Experience
              </Badge>
              <Badge className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
                Houston & DFW
              </Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight text-white text-balance drop-shadow-lg md:text-6xl lg:text-7xl">
              Houston&apos;s #1 attic & spray foam{' '}
              <span className="text-blue-300">insulation contractor.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 drop-shadow md:text-lg">
              Cut energy bills, eliminate hot and cold spots, and protect your home&apos;s
              comfort year-round. First Defense Insulation delivers expert attic insulation,
              spray foam, air sealing, and duct services across Greater Houston.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 bg-white px-6 text-base font-semibold text-blue-900 shadow-lg hover:bg-white/95"
            >
              <Link href="/contact">
                Get a free estimate
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-12 hero-cta-glass px-6 text-base font-medium text-white hover:bg-white/15"
            >
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </FadeIn>

          <FadeIn delay={0.28} className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
            {site.badges.map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs font-medium text-white/80">
                <CheckCircleIcon className="size-3.5 text-blue-300" />
                {b}
              </span>
            ))}
          </FadeIn>
        </div>

        {/* Bottom fade — blends video into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <div className="border-b border-border bg-card transition-colors dark:bg-card/80">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {site.stats.map((stat) => (
            <FadeIn key={stat.label}>
              <div className="flex flex-col items-center gap-1 py-8 text-center">
                <span className="font-heading text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <Section id="services">
        <SectionHeading
          eyebrow="Our services"
          title="Comprehensive insulation solutions for Houston homes"
          description="From attic insulation and spray foam to air sealing and duct services — First Defense Insulation handles every insulation need with 35+ years of expertise."
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon] ?? HomeIcon;
            return (
              <StaggerItem key={service.slug}>
                <Card className="group h-full border-border bg-card shadow-sm transition-all hover:shadow-md hover:glow-primary dark:shadow-none">
                  <CardHeader>
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <span className="text-right text-[10px] font-semibold uppercase leading-relaxed tracking-widest text-muted-foreground">
                        {service.eyebrow}
                      </span>
                    </div>
                    <CardTitle className="text-base leading-snug">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* ── BENEFITS ──────────────────────────────────────────────── */}
      <Section id="benefits" className="section-tint stripe-pattern">
        <SectionHeading
          eyebrow="Why insulate"
          title="Four ways proper insulation improves your home"
          description="Houston's climate demands high-performance insulation. Here's what you gain when your home is properly sealed and insulated."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {site.benefits.map((benefit) => {
            const BIcon = benefitIconMap[benefit.icon] ?? ZapIcon;
            return (
              <FadeIn key={benefit.title}>
                <Card className="h-full border-border bg-card/80 shadow-sm backdrop-blur-sm dark:bg-card/60">
                  <CardContent className="p-6">
                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                      <BIcon className="size-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-sm font-semibold">{benefit.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{benefit.body}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* ── ABOUT ─────────────────────────────────────────────────── */}
      <Section id="about">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="About First Defense Insulation"
              title="Houston's trusted insulation experts for 35+ years."
            />
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              First Defense Insulation is a leading attic and spray foam insulation contractor
              in Houston, helping homeowners improve comfort and lower energy bills. We provide
              FREE estimates for a broad range of insulation needs — most residential projects
              are completed in a single day, typically within 4 to 6 hours.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We help homeowners mitigate heat buildup in attics using spray foam insulation,
              carefully sealing air leaks to improve energy efficiency and reduce energy bills.
              From attic insulation to crawl space moisture management, we offer comprehensive
              solutions for Houston&apos;s unique climate challenges.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Free on-site comfort inspections',
                'Most projects completed in a single day',
                'BBB A-Rated and accredited',
                'Serving Houston and DFW metro areas',
                'Financing available for all projects',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckIcon className="size-4 shrink-0 text-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="space-y-4">
            {/* Two-phone card */}
            <Card className="border-primary/20 bg-primary/5 dark:bg-primary/8 shadow-sm dark:shadow-none">
              <CardContent className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  Call for a free estimate
                </p>
                <div className="space-y-3">
                  <a
                    href={site.phones.houston.href}
                    className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <span className="text-sm font-medium text-muted-foreground">Houston</span>
                    <span className="font-heading text-lg font-bold">{site.phones.houston.display}</span>
                  </a>
                  <a
                    href={site.phones.dfw.href}
                    className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-4 py-3 transition-colors hover:border-primary/40"
                  >
                    <span className="text-sm font-medium text-muted-foreground">DFW</span>
                    <span className="font-heading text-lg font-bold">{site.phones.dfw.display}</span>
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheckIcon className="size-3.5 text-primary" />
                  Monday – Friday · 8:00 AM – 5:00 PM
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: 'BBB A-Rated', sub: 'Accredited business' },
                { label: '35+ Years', sub: 'Combined experience' },
                { label: 'Same-Day', sub: 'Most projects done in 4–6 hrs' },
                { label: 'Free Estimates', sub: 'On-site comfort inspections' },
              ].map((item) => (
                <Card key={item.label} className="border-border bg-card shadow-sm dark:shadow-none">
                  <CardContent className="p-4 text-center">
                    <p className="font-heading text-base font-bold text-primary">{item.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── LEAD FORM ─────────────────────────────────────────────── */}
      <Section id="estimate" className="section-tint">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Free · no obligation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get your free estimate today
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your insulation needs and we&apos;ll schedule a free on-site
              comfort inspection — no pressure, no commitment.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card className="border-border shadow-md dark:shadow-none">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
                  {['Free on-site inspection', 'Same-day response', 'Financing available', 'BBB A-Rated'].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircleIcon className="size-3.5 shrink-0 text-primary" />
                      {p}
                    </div>
                  ))}
                </div>
                <LeadForm />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <div className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div className="flex items-start gap-4">
            <Image
              src="/logo.png"
              alt="First Defense Insulation"
              width={52}
              height={52}
              className="hidden size-14 shrink-0 md:block"
            />
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest opacity-70">
                Houston & DFW · BBB A-Rated · Free Estimates
              </p>
              <h2 className="font-heading text-2xl font-bold">
                Stop losing money to poor insulation.
              </h2>
              <p className="mt-1.5 max-w-lg text-sm opacity-80">
                Call First Defense Insulation today or fill out the form for a free,
                no-obligation estimate. Most projects completed in a single day.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button asChild variant="secondary" className="h-11 px-6 font-semibold">
              <Link href="/contact">
                Free estimate
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 border-primary-foreground/30 px-6 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={site.phoneHref}>
                <PhoneIcon className="size-4" />
                {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
