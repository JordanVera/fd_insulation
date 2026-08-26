import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceAreaPage, serviceAreaMetadata } from '@/components/service-area-page';
import { getServiceArea, serviceAreas } from '@/lib/service-areas';

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!getServiceArea(slug)) notFound();
  return serviceAreaMetadata(slug);
}

export default async function ServiceAreaRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceAreaPage slug={slug} />;
}
