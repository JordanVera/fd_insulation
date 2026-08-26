import type { Metadata } from 'next';
import Link from 'next/link';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  CreditCardIcon,
} from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LeadForm } from '@/components/lead-form';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get a Free Estimate | First Defense Insulation Houston & DFW',
  description:
    'Request a free on-site insulation estimate for your Houston or DFW home. Attic insulation, spray foam, air sealing, duct services and more.',
};

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-border bg-muted/30 dark:bg-card/50 transition-colors">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <FadeIn>
            <Button
              asChild
              variant="ghost"
              className="mb-6 -ml-2 text-muted-foreground"
            >
              <Link href="/">
                <ArrowLeftIcon className="size-4" />
                Back to home
              </Link>
            </Button>
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">
              Free · No obligation
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Get your <span className="fdi-text">free estimate</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Schedule a free on-site comfort inspection. We serve Houston and
              DFW metro areas — most projects are completed in a single day.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-3">
        <FadeIn className="space-y-5 lg:col-span-1">
          <Card className="shadow-sm dark:shadow-none">
            <CardContent className="space-y-5 p-6">
              <h2 className="font-semibold">Contact information</h2>
              <Separator />
              <div className="space-y-4">
                <div className="space-y-2">
                  <a
                    href={site.phones.houston.href}
                    className="flex items-start gap-3 transition-colors hover:text-primary"
                  >
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <PhoneIcon className="size-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Houston</p>
                      <p className="font-semibold">
                        {site.phones.houston.display}
                      </p>
                    </div>
                  </a>
                  <a
                    href={site.phones.dfw.href}
                    className="flex items-start gap-3 pl-11 transition-colors hover:text-primary"
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">DFW</p>
                      <p className="font-semibold">{site.phones.dfw.display}</p>
                    </div>
                  </a>
                </div>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-primary"
                >
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MailIcon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="break-all text-sm font-medium">
                      {site.email}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPinIcon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Service area
                    </p>
                    <p className="text-sm font-medium">
                      Houston, TX & DFW metroplex
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <ClockIcon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Hours</p>
                    <p className="text-xs">{site.hours.weekdays}</p>
                    <p className="text-xs">{site.hours.weekend}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5 dark:bg-primary/8 shadow-sm dark:shadow-none">
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <CreditCardIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Financing available</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Flexible financing through EnerBank USA and Foundation
                    Finance Company.{' '}
                    <Link
                      href="/financing"
                      className="font-medium text-primary underline-offset-2 hover:underline"
                    >
                      View options
                    </Link>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm dark:shadow-none">
            <CardContent className="p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                What to expect
              </h3>
              <ul className="space-y-2.5">
                {[
                  'Free on-site comfort inspection',
                  'Quick response — same day',
                  'No obligation, no pressure',
                  'BBB A-Rated & fully insured',
                  'Most projects done in 4–6 hours',
                  'Financing available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircleIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:col-span-2">
          <Card className="shadow-md dark:shadow-none">
            <CardContent className="p-6 md:p-8">
              <h2 className="mb-6 text-xl font-bold">
                Tell us about your insulation needs
              </h2>
              <LeadForm />
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </>
  );
}
