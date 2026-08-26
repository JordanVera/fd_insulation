import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import type { Service } from '@/lib/services';

export function ServiceCard({
  service,
  priority = false,
}: {
  service: Service;
  priority?: boolean;
}) {
  return (
    <Link href={service.href} className="group block h-full">
      <article className="relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-xl border border-border shadow-sm transition-shadow hover:shadow-md hover:glow-primary dark:shadow-none">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/55 to-black/25" />
        <div className="relative z-10 mt-auto flex flex-col justify-end p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
            {service.eyebrow}
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold leading-snug text-white">
            {service.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/80">
            {service.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300">
            Learn more
            <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </article>
    </Link>
  );
}
