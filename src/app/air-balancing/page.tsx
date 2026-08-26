import { ServicePage, serviceMetadata } from '@/components/service-page';

export const metadata = serviceMetadata('air-balancing');

export default function AirBalancingPage() {
  return <ServicePage slug="air-balancing" />;
}
