import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  PhoneIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { ServiceCard } from '@/components/service-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LeadForm } from '@/components/lead-form';
import { getRelatedServices, getService } from '@/lib/services';
import { site } from '@/lib/site';

export function serviceMetadata(slug: string): Metadata {
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export function ServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(service.slug);

  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col justify-end px-4 py-16 md:min-h-[480px] md:px-6 md:py-24">
          <FadeIn>
            <Button asChild variant="ghost" className="mb-6 -ml-2 text-white/80 hover:bg-white/10 hover:text-white">
              <Link href="/#services">
                <ArrowLeftIcon className="size-4" />
                All services
              </Link>
            </Button>
            <Badge className="mb-4 border-white/20 bg-white/10 text-white backdrop-blur-sm">
              {service.eyebrow}
            </Badge>
            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
              {service.heroHeadline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {service.heroSubhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 bg-white px-6 font-semibold text-blue-900 hover:bg-white/95">
                <Link href="/contact">
                  Get a free estimate
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-12 hero-cta-glass px-6 text-white hover:bg-white/15"
              >
                <a href={site.phoneHref}>
                  <PhoneIcon className="size-4" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow={service.name}
              title="Built for Houston homes and Houston heat"
            />
            <div className="space-y-4">
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="border-border bg-card shadow-sm dark:shadow-none">
              <CardContent className="p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  What this service includes
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section className="section-tint stripe-pattern">
        <SectionHeading
          eyebrow="Why it matters"
          title={
            service.slug === 'how-insulation-works'
              ? 'What quietly ruins insulation performance'
              : `Why homeowners choose ${service.name.toLowerCase()}`
          }
          description="Practical results — not generic insulation talk. Here is what this work actually does for a Houston or DFW home."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {service.benefits.map((benefit) => (
            <FadeIn key={benefit.title}>
              <Card className="h-full border-border bg-card/80 shadow-sm dark:shadow-none">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-heading text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{benefit.body}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {service.sections.map((section) => (
            <FadeIn key={section.title}>
              <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {service.faqs.length > 0 ? (
        <Section className="section-tint">
          <SectionHeading
            eyebrow="FAQs"
            title="Common questions"
            description={`Straight answers about ${service.name.toLowerCase()} from First Defense Insulation.`}
            centered
          />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {service.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      ) : null}

      <Section>
        <SectionHeading
          eyebrow="Related services"
          title="Complete the system"
          description="Insulation performs best as a system. These services are commonly paired with this work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </Section>

      <Section id="estimate" className="section-tint">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Free · no obligation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get a free estimate
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your home and we&apos;ll schedule a free on-site comfort inspection.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="border-border shadow-md dark:shadow-none">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
                  {['Free on-site inspection', 'Same-day response', 'Financing available', 'BBB A-Rated'].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckIcon className="size-3.5 shrink-0 text-primary" />
                        {item}
                      </div>
                    ),
                  )}
                </div>
                <LeadForm defaultService={service.formValue} />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <div className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest opacity-70">
              Houston & DFW · BBB A-Rated · Free Estimates
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to stop wasting energy?
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
