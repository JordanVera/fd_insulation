import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  GraduationCapIcon,
  HandshakeIcon,
  LightbulbIcon,
  MessageCircleIcon,
  PhoneIcon,
  ShieldIcon,
} from 'lucide-react';

import { companyIntro, founders, mission, values } from '@/lib/about';
import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us | First Defense Insulation Houston & DFW',
  description:
    'Meet the founders of First Defense Insulation — John Blackwelder and Shadrick Wall. A+ BBB accredited with 35+ years of building performance expertise in Houston and DFW.',
};

const valueIconMap: Record<string, React.ElementType> = {
  Shield: ShieldIcon,
  MessageCircle: MessageCircleIcon,
  GraduationCap: GraduationCapIcon,
  Handshake: HandshakeIcon,
  BadgeCheck: BadgeCheckIcon,
  Lightbulb: LightbulbIcon,
};

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-border bg-muted/30 transition-colors dark:bg-card/50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <FadeIn>
            <Button asChild variant="ghost" className="mb-6 -ml-2 text-muted-foreground">
              <Link href="/">
                <ArrowLeftIcon className="size-4" />
                Back to home
              </Link>
            </Button>
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">
              <BadgeCheckIcon className="mr-1.5 size-3" />
              A+ BBB Accredited · 35+ Years Experience
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              About{' '}
              <span className="fdi-text">First Defense Insulation</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {companyIntro}
            </p>
          </FadeIn>
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="First Defense Values"
          title="What drives everything we do"
          description="Our core values shape how we serve homeowners, support our team, and deliver building performance solutions across Houston and DFW."
          centered
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => {
            const Icon = valueIconMap[value.icon] ?? ShieldIcon;
            return (
              <StaggerItem key={value.title}>
                <Card className="h-full border-border bg-card shadow-sm dark:shadow-none">
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      <Section className="section-tint stripe-pattern">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Our mission"
            title="Committed to building performance excellence"
            centered
          />
          <FadeIn>
            <ul className="space-y-4">
              {mission.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Meet the team"
          title="Founded by two industry veterans"
          description="John Blackwelder and Shadrick Wall built First Defense Insulation on decades of hands-on experience, public service, and a shared commitment to solving real problems in existing homes."
          centered
        />
        <div className="space-y-16">
          {founders.map((founder, index) => (
            <FadeIn key={founder.name} delay={index * 0.05}>
              <div className="grid items-start gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
                <div className="mx-auto w-full max-w-[240px] lg:mx-0">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm dark:shadow-none">
                    <Image
                      src={founder.image}
                      alt={founder.imageAlt}
                      width={300}
                      height={300}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center lg:text-left">
                    <h3 className="font-heading text-xl font-bold">{founder.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{founder.role}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {founder.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <div className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest opacity-70">
              Ready to work with us?
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Get a free estimate from Houston&apos;s trusted insulation experts.
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Button asChild variant="secondary" className="h-11 px-6 font-semibold">
              <Link href="/contact">
                Free estimate
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 border-primary-foreground/30 px-6 text-primary-foreground hover:bg-primary-foreground/10"
            >
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
