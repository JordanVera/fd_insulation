import type { Metadata } from 'next';

import { NotFoundPage } from '@/components/not-found-page';

export const metadata: Metadata = {
  title: 'Page Not Found — Zero R-Value',
  description:
    'This page does not exist. Head back to First Defense Insulation for attic insulation, air sealing, and free estimates across Houston and DFW.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage />;
}
