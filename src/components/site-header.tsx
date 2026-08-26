'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MenuIcon, PhoneIcon, XIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { getService, isServicePath, serviceNavGroups } from '@/lib/services';
import { nav, site } from '@/lib/site';

const [atticGroup, ...otherGroups] = serviceNavGroups;

function ServicesDropdownGroup({
  group,
}: {
  group: (typeof serviceNavGroups)[number];
}) {
  return (
    <div>
      <p className="px-2 pb-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
        {group.label}
      </p>
      <ul>
        {group.slugs.map((slug) => {
          const service = getService(slug);
          if (!service) return null;
          return (
            <li key={slug}>
              <NavigationMenuLink asChild>
                <Link href={service.href} className="rounded-md px-2 py-1.5 text-sm font-medium">
                  {service.name}
                </Link>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const servicesActive = isServicePath(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md transition-colors">
      {/* Announcement bar */}
      <div className="hidden md:block border-b border-primary/15 bg-primary/5 dark:bg-primary/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs md:px-6">
          <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
            <span className="font-semibold text-foreground/80">
              BBB A-Rated
            </span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">35+ Years Experience</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden font-medium text-primary md:inline">
              Financing Available
            </span>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={site.phones.houston.href}
              className="font-semibold transition-colors hover:text-primary"
            >
              Houston: {site.phones.houston.display}
            </a>
            <span className="text-border">|</span>
            <a
              href={site.phones.dfw.href}
              className="font-semibold transition-colors hover:text-primary"
            >
              DFW: {site.phones.dfw.display}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="First Defense Insulation"
            width={52}
            height={52}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {nav.map((item) =>
            item.label === 'Services' ? (
              <NavigationMenu key={item.href} viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`bg-transparent px-3 py-1.5 hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent ${
                        servicesActive
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-50">
                      <div className="grid w-96 grid-cols-2 gap-x-2 p-2">
                        {atticGroup ? <ServicesDropdownGroup group={atticGroup} /> : null}
                        <div className="flex flex-col gap-3">
                          {otherGroups.map((group) => (
                            <ServicesDropdownGroup key={group.label} group={group} />
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted sm:flex lg:hidden"
          >
            <PhoneIcon className="size-3.5 text-primary" />
            Call
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-9 lg:hidden"
                aria-label="Open menu"
              >
                {open ? (
                  <XIcon className="size-4" />
                ) : (
                  <MenuIcon className="size-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader className="pb-4">
                <SheetTitle>
                  <Image
                    src="/logo.png"
                    alt="First Defense Insulation"
                    width={52}
                    height={52}
                    className="h-12 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="space-y-2 px-4 pb-2">
                <Button asChild className="h-11 w-full text-primary-foreground">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Get Free Estimate
                  </Link>
                </Button>
                <a
                  href={site.phones.houston.href}
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium"
                >
                  <PhoneIcon className="size-4" />
                  Houston: {site.phones.houston.display}
                </a>
                <a
                  href={site.phones.dfw.href}
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border text-sm font-medium"
                >
                  <PhoneIcon className="size-4" />
                  DFW: {site.phones.dfw.display}
                </a>
              </div>
              <nav className="flex flex-col gap-0.5 px-4 pb-8 pt-4">
                {nav.map((item) =>
                  item.label === 'Services' ? (
                    <Accordion
                      key={item.href}
                      type="single"
                      collapsible
                      defaultValue={servicesActive ? 'services' : undefined}
                    >
                      <AccordionItem value="services" className="border-none">
                        <AccordionTrigger
                          className={`rounded-lg px-3 py-2.5 text-sm font-medium hover:no-underline ${
                            servicesActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted'
                          }`}
                        >
                          Services
                        </AccordionTrigger>
                        <AccordionContent className="px-1 pb-2">
                          <div className="space-y-3 pl-2">
                            {serviceNavGroups.map((group) => (
                              <div key={group.label}>
                                <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-primary">
                                  {group.label}
                                </p>
                                {group.slugs.map((slug) => {
                                  const service = getService(slug);
                                  if (!service) return null;
                                  return (
                                    <Link
                                      key={slug}
                                      href={service.href}
                                      onClick={() => setOpen(false)}
                                      className={`block rounded-lg px-2 py-1.5 text-sm transition-colors ${
                                        pathname === service.href
                                          ? 'bg-primary/10 text-primary'
                                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                      }`}
                                    >
                                      {service.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        pathname === item.href
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
