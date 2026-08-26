import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CheckIcon,
  MapPinIcon,
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
import {
  getNearbyServiceAreas,
  getServiceArea,
  type ServiceArea,
} from '@/lib/service-areas';
import { getService } from '@/lib/services';
import { site } from '@/lib/site';

export function serviceAreaMetadata(slug: string): Metadata {
  const area = getServiceArea(slug);
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: area.href },
  };
}

function areaPhone(area: ServiceArea) {
  return area.region === 'dfw' ? site.phones.dfw : site.phones.houston;
}

function ServiceAreaJsonLd({ area }: { area: ServiceArea }) {
  const phone = areaPhone(area);
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: site.url,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: area.name,
            item: `${site.url}${area.href}`,
          },
        ],
      },
      {
        '@type': 'Service',
        name: `Attic insulation in ${area.name}`,
        serviceType: 'Attic insulation',
        url: `${site.url}${area.href}`,
        description: area.metaDescription,
        provider: {
          '@type': 'HomeAndConstructionBusiness',
          name: site.name,
          telephone: phone.display,
          url: site.url,
        },
        areaServed: {
          '@type': 'City',
          name: area.shortName,
          containedInPlace: {
            '@type': 'State',
            name: 'Texas',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: area.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceAreaPage({ slug }: { slug: string }) {
  const area = getServiceArea(slug);
  if (!area) notFound();

  const phone = areaPhone(area);
  const nearby = getNearbyServiceAreas(area.slug);
  const featured = area.featuredServiceSlugs
    .map((item) => getService(item))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <ServiceAreaJsonLd area={area} />

      <div className="relative overflow-hidden">
        <Image
          src={area.image}
          alt={area.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-6xl flex-col justify-end px-4 py-16 md:min-h-[480px] md:px-6 md:py-24">
          <FadeIn>
            <Button asChild variant="ghost" className="mb-6 -ml-2 text-white/80 hover:bg-white/10 hover:text-white">
              <Link href="/">
                <ArrowLeftIcon className="size-4" />
                All service areas
              </Link>
            </Button>
            <Badge className="mb-4 border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <MapPinIcon className="mr-1.5 size-3" />
              {area.name} · {area.region === 'dfw' ? 'DFW' : 'Greater Houston'}
            </Badge>
            <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-white text-balance md:text-5xl">
              {area.heroHeadline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              {area.heroSubhead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 bg-white px-6 font-semibold text-blue-900 hover:bg-white/95">
                <Link href="/contact">
                  Get a free estimate
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="h-12 hero-cta-glass px-6 text-white hover:bg-white/15">
                <a href={phone.href}>
                  <PhoneIcon className="size-4" />
                  {phone.display}
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
              eyebrow={`${area.shortName} insulation`}
              title={`Local attic insulation for ${area.shortName} homes`}
            />
            <div className="space-y-4">
              {area.intro.map((paragraph) => (
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
                  What you get in {area.shortName}
                </p>
                <ul className="space-y-3">
                  {area.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircleIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
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
          eyebrow="Built for this climate"
          title={area.whyTitle}
          description={`First Defense Insulation has 35+ years of combined experience specifying attic, crawl space, and duct work for ${area.shortName} houses — not a generic statewide package.`}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {area.why.map((point) => (
            <FadeIn key={point.title}>
              <Card className="h-full border-border bg-card/80 shadow-sm dark:shadow-none">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-heading text-lg font-semibold">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              {area.housingTitle}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{area.housing}</p>
          </FadeIn>
        </div>
      </Section>

      <Section className="section-tint">
        <SectionHeading
          eyebrow="Communities"
          title={area.neighborhoodsTitle}
          description={`These are the ${area.shortName} neighborhoods we visit most. If you are nearby and not listed, still request an estimate — we will confirm the route.`}
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {area.neighborhoods.map((place) => (
            <li key={place}>
              <Card className="border-border bg-card/80 shadow-sm dark:shadow-none">
                <CardContent className="flex items-center gap-2 p-4">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{place}</span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services in this city"
          title={`Insulation services in ${area.shortName}`}
          description={area.servicesIntro}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <Section className="section-tint">
        <SectionHeading
          eyebrow="Our process"
          title={`How a ${area.shortName} insulation project works`}
          description="Free inspection, a written plan, and a clean install — most residential jobs finish in a single day."
          centered
        />
        <ol className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {[
            {
              title: 'Consultation and inspection',
              body: `We walk the attic (and crawl space when it matters) in ${area.shortName}, measure existing insulation, and show you leaks, moisture, and duct issues before quoting.`,
            },
            {
              title: 'A spec for this house',
              body: 'You get a tailored plan — air sealing, cellulose, foam, radiant barrier, removal, or duct work — based on what we found, not a one-size package.',
            },
            {
              title: 'Clean professional install',
              body: 'Crews protect living space, install to the specified depth and seal, and typically wrap residential work in 4–6 hours.',
            },
            {
              title: 'Support after we leave',
              body: 'Questions about R-value, financing, or a follow-up room that still feels off? Call us. The job is not done until the house feels right.',
            },
          ].map((step, index) => (
            <li key={step.title}>
              <Card className="h-full border-border bg-card/80 shadow-sm dark:shadow-none">
                <CardContent className="p-6">
                  <span className="mb-3 flex size-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {area.faqs.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="FAQs"
            title={`${area.shortName} insulation questions`}
            description={`Straight answers for homeowners in ${area.name}.`}
            centered
          />
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible>
              {area.faqs.map((faq) => (
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

      <Section className="section-tint">
        <SectionHeading
          eyebrow="Nearby cities"
          title="We also insulate these service areas"
          description="Same crews, same process — local pages for every city we list."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {nearby.map((item) => (
            <li key={item.slug}>
              <Link
                href={item.href}
                className="flex h-full items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-sm transition-colors hover:border-primary/40 hover:text-primary dark:shadow-none"
              >
                <MapPinIcon className="size-4 shrink-0 text-primary" />
                {item.shortName}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="estimate">
        <div className="mx-auto max-w-3xl">
          <FadeIn className="mb-8 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Free · no obligation
            </p>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Get a free {area.shortName} estimate
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your home in {area.name} and we&apos;ll schedule a free on-site comfort
              inspection.
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
                <LeadForm location={area.name} addressPlaceholder={`Street address, ${area.shortName} TX`} />
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      <div className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest opacity-70">
              {area.name} · BBB A-Rated · Free Estimates
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready to insulate your {area.shortName} home?
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
              <a href={phone.href}>
                <PhoneIcon className="size-4" />
                {phone.display}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
