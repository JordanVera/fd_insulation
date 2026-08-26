import { ServicePage, serviceMetadata } from '@/components/service-page';

export const metadata = serviceMetadata('insulation-removal');

export default function InsulationRemovalPage() {
  return <ServicePage slug="insulation-removal" />;
}
