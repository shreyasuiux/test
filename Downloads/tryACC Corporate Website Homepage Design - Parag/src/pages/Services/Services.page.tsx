import { CloudHero } from '../../components/CloudHero';
import { AWSServicesSection } from '../../components/AWSServicesSection';
import { AWSCertifiedSection } from '../../components/AWSCertifiedSection';
import { CapabilitiesSection } from '../../components/CapabilitiesSection';
import { ManagedSection } from '../../components/ManagedSection';
import { ServiceCapabilities } from '../../components/ServiceCapabilities';

export default function ServicesPage() {
  return (
    <>
      <CloudHero />
      <AWSServicesSection />
      <AWSCertifiedSection />
      <CapabilitiesSection />
      <ManagedSection />
      <ServiceCapabilities />
    </>
  );
}
