import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckCircleIcon,
  CreditCardIcon,
  ExternalLinkIcon,
  PhoneIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { Section, SectionHeading } from '@/components/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { financingIntro, financingOptions } from '@/lib/financing';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Financing Options for Insulation Projects',
  description:
    'Flexible financing for attic insulation, spray foam, air sealing, and crawl space work in Houston and DFW. Prequalify through EnerBank USA or Foundation Finance Company.',
};

export default function FinancingPage() {
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
              <CreditCardIcon className="mr-1.5 size-3" />
              Flexible payment options
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              <span className="fdi-text">Financing</span> for your insulation project
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {financingIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6">
                <Link href="/contact">
                  Get a free estimate first
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
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
        <SectionHeading
          eyebrow="Our lending partners"
          title="Three ways to finance your project"
          description="Choose the option that fits your timeline. Not sure which is best? Our team will walk you through prequalification and help you pick the right program after your free estimate."
        />
        <Stagger className="grid gap-6 lg:grid-cols-3">
          {financingOptions.map((option) => (
            <StaggerItem key={option.id}>
              <Card className="flex h-full flex-col border-border bg-card shadow-sm dark:shadow-none">
                <CardContent className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {option.provider}
                  </p>
                  <h2 className="mt-2 font-heading text-xl font-bold">{option.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {option.summary}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {option.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <a href={option.applyUrl} target="_blank" rel="noopener noreferrer">
                      {option.applyLabel}
                      <ExternalLinkIcon className="size-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="section-tint stripe-pattern">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <FadeIn>
            <SectionHeading
              eyebrow="How it works"
              title="Finance after you know the scope"
            />
            <ol className="space-y-4">
              {[
                'Schedule a free on-site comfort inspection and written estimate.',
                'Review project scope, pricing, and expected energy savings with our team.',
                'Prequalify or apply through EnerBank USA or Foundation Finance Company.',
                'Complete your insulation project — most residential jobs finish in one day.',
              ].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Card className="border-primary/20 bg-primary/5 dark:bg-primary/8 shadow-sm dark:shadow-none">
              <CardContent className="p-6">
                <BadgeCheckIcon className="mb-3 size-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold">Questions about financing?</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our sales team helps Houston and DFW homeowners compare programs and understand
                  prequalification vs. full application. Call us or request an estimate and ask
                  about payment options during your consultation.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="secondary" size="sm">
                    <Link href="/contact">Contact us</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={site.phoneHref}>{site.phone}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Legal disclosures"
          title="Important financing information"
          description="Review the terms for each lender below. All financing is subject to credit approval."
          centered
        />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible>
            {financingOptions.map((option) => (
              <AccordionItem key={option.id} value={option.id}>
                <AccordionTrigger className="text-left text-base">
                  {option.provider} — {option.name}
                </AccordionTrigger>
                <AccordionContent className="text-xs leading-relaxed text-muted-foreground">
                  <p>{option.disclaimer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      <div className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest opacity-70">
              Free estimates · BBB A-Rated
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Get your quote, then choose how to pay.
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
