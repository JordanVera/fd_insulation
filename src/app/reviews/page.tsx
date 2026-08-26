import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BadgeCheckIcon,
  ExternalLinkIcon,
  PhoneIcon,
  StarIcon,
} from 'lucide-react';

import { FadeIn, Stagger, StaggerItem } from '@/components/motion';
import { ReviewCard } from '@/components/review-card';
import { Section, SectionHeading } from '@/components/section';
import { StarRating } from '@/components/star-rating';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { googleReviews, reviews, reviewsIntro } from '@/lib/reviews';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Customer Success Stories | Google Reviews',
  description:
    'Read 5-star Google reviews for First Defense Insulation in Houston and DFW. Real customer stories about attic insulation, spray foam, air sealing, and crawl space work.',
};

export default function ReviewsPage() {
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
              <StarIcon className="mr-1.5 size-3 fill-amber-400 text-amber-400" />
              {googleReviews.rating.toFixed(1)} · {googleReviews.count}+ Google reviews
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
              Customer{' '}
              <span className="fdi-text">success stories</span>
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {reviewsIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="h-12 px-6">
                <a href={googleReviews.mapsUrl} target="_blank" rel="noopener noreferrer">
                  View all on Google
                  <ExternalLinkIcon className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
                <Link href="/contact">
                  Get a free estimate
                  <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="border-b border-border bg-card transition-colors dark:bg-card/80">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {[
            { value: googleReviews.rating.toFixed(1), label: 'Average Google rating' },
            { value: `${googleReviews.count}+`, label: 'Verified reviews' },
            { value: 'BBB A', label: 'Rated & accredited' },
            { value: '35+', label: 'Years experience' },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="flex flex-col items-center gap-1 py-8 text-center">
                <span className="font-heading text-2xl font-bold text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <Section>
        <SectionHeading
          eyebrow="Google reviews"
          title="What Houston homeowners are saying"
          description="Real feedback from customers who chose First Defense Insulation for attic, crawl space, and spray foam projects."
        />
        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.id}>
              <ReviewCard review={review} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="section-tint stripe-pattern">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <div className="mb-4 flex justify-center">
              <StarRating rating={5} />
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              See all {googleReviews.count}+ reviews on Google
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              These are a sample of recent five-star reviews. Visit our Google Business Profile
              to read every customer story, see photos, and leave your own review after a
              project.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="h-12 px-6">
                <a href={googleReviews.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Read more on Google
                  <ExternalLinkIcon className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6">
                <a href={googleReviews.writeReviewUrl} target="_blank" rel="noopener noreferrer">
                  Leave a review
                  <ExternalLinkIcon className="size-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Professional crews',
              body: 'Customers consistently praise clear communication, punctual arrivals, and respectful job sites.',
            },
            {
              title: 'Technical expertise',
              body: 'From humid attics to pier-and-beam crawl spaces, reviews highlight real building-science solutions.',
            },
            {
              title: 'Results that last',
              body: 'Homeowners report lower bills, better comfort, and workmanship other contractors notice.',
            },
          ].map((item) => (
            <FadeIn key={item.title}>
              <Card className="h-full border-border bg-card shadow-sm dark:shadow-none">
                <CardContent className="p-6">
                  <BadgeCheckIcon className="mb-3 size-5 text-primary" />
                  <h3 className="mb-2 font-heading text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <div className="border-y border-primary/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest opacity-70">
              Join our happy customers
            </p>
            <h2 className="font-heading text-2xl font-bold">
              Ready for your own success story?
            </h2>
            <p className="mt-1.5 max-w-lg text-sm opacity-80">
              Schedule a free on-site comfort inspection. Most residential projects are
              completed in a single day.
            </p>
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
