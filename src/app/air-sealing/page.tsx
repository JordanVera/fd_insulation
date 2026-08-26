import { ServicePage, serviceMetadata } from '@/components/service-page';

export const metadata = serviceMetadata('air-sealing');

export default function AirSealingPage() {
  return <ServicePage slug="air-sealing" />;
}
