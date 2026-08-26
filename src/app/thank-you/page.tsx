import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon, ArrowRightIcon } from 'lucide-react';

import { FadeIn } from '@/components/motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Estimate Request Received | First Defense Insulation',
  description: 'Thank you for contacting First Defense Insulation. We will be in touch shortly.',
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <FadeIn className="mx-auto max-w-lg text-center">
        <Image
          src="/logo.png"
          alt="First Defense Insulation"
          width={72}
          height={72}
          className="mx-auto mb-5 h-16 w-auto"
        />

        <div className="mb-5 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/15">
            <CheckCircleIcon className="size-8 text-primary" />
          </div>
        </div>

        <h1 className="font-heading text-3xl font-bold md:text-4xl">
          Estimate request received!
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Thank you for reaching out to First Defense Insulation. Our team will review
          your request and get back to you promptly to schedule your free on-site
          comfort inspection.
        </p>

        <Card className="mt-6 border-primary/20 bg-primary/5 dark:bg-primary/8">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Need a faster response? Give us a call:</p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <a href={site.phones.houston.href} className="text-base font-bold text-primary hover:underline">
                Houston: {site.phones.houston.display}
              </a>
              <span className="hidden text-border sm:block">|</span>
              <a href={site.phones.dfw.href} className="text-base font-bold text-primary hover:underline">
                DFW: {site.phones.dfw.display}
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="h-11 px-6 font-semibold text-primary-foreground">
            <Link href="/">
              Back to home
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="h-11 px-6">
            <a href={site.phoneHref}>
              <PhoneIcon className="size-4" />
              {site.phone}
            </a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
