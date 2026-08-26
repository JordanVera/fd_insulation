import type { MetadataRoute } from 'next';
import { serviceAreas } from '@/lib/service-areas';
import { services } from '@/lib/services';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${site.url}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${site.url}/financing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${site.url}/reviews`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${site.url}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${site.url}${service.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...serviceAreas.map((area) => ({
      url: `${site.url}${area.href}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    })),
  ];
}
