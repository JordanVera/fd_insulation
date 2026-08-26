import { ServicePage, serviceMetadata } from '@/components/service-page';

export const metadata = serviceMetadata('duct-cleaning');

export default function DuctCleaningPage() {
  return <ServicePage slug="duct-cleaning" />;
}
