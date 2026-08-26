import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import { Separator } from '@/components/ui/separator';
import { serviceAreas } from '@/lib/service-areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/40 dark:bg-card transition-colors">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border py-5">
          {site.badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <ShieldCheckIcon className="size-4 shrink-0 text-primary" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        {/* Brand */}
        <div className="md:col-span-1">
          <Image
            src="/logo.png"
            alt="First Defense Insulation"
            width={64}
            height={64}
            className="mb-3 h-16 w-auto"
          />
          <p className="text-sm font-semibold">First Defense Insulation</p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Houston&apos;s leading attic and spray foam insulation contractor —
            improving comfort and energy efficiency for 35+ years.
          </p>
          <div className="mt-5 space-y-2.5 text-sm">
            <div className="space-y-1">
              <a
                href={site.phones.houston.href}
                className="flex items-center gap-2 font-semibold transition-colors hover:text-primary"
              >
                <PhoneIcon className="size-4 shrink-0 text-primary" />
                Houston: {site.phones.houston.display}
              </a>
              <a
                href={site.phones.dfw.href}
                className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground pl-6"
              >
                DFW: {site.phones.dfw.display}
              </a>
            </div>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4 shrink-0 text-primary" />
              <span className="break-all text-xs">{site.email}</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPinIcon className="size-4 shrink-0 text-primary" />
              <span className="text-xs">
                {site.address.city}, {site.address.state}
              </span>
            </div>
            <div className="flex items-start gap-2 text-muted-foreground">
              <ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div className="text-xs">
                <p>{site.hours.weekdays}</p>
                <p>{site.hours.weekend}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={s.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Get Free Estimate', href: '/contact' },
              { label: 'Financing Options', href: '/financing' },
              { label: 'Customer Reviews', href: '/reviews' },
              { label: 'Our Services', href: '/#services' },
              { label: 'Why Insulate', href: '/#benefits' },
              { label: 'About Us', href: '/about' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Service Areas
          </h3>
          <ul className="space-y-2">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={area.href}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-primary/50" />
                  {area.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-muted-foreground md:flex-row md:justify-between md:px-6">
        <p>
          © {new Date().getFullYear()} First Defense Insulation. All rights
          reserved.
        </p>
        <p>BBB A-Rated · Licensed & Insured · Houston, TX</p>
      </div>
    </footer>
  );
}
