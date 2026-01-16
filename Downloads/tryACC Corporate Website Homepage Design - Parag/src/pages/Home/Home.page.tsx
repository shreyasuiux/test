import { AccentureHero } from '../../components/AccentureHero';
import { TestimonialSection } from '../../components/TestimonialSection';
import { Value360Section } from '../../components/Value360Section';
import { AWSCertifiedSection } from '../../components/AWSCertifiedSection';
import { AWSServicesSection } from '../../components/AWSServicesSection';
import { ImageTextSection } from '../../components/ImageTextSection';
import { CustomerSuccessStoriesSection } from '../../components/CustomerSuccessStoriesSection';
import { GlobalRecognition } from '../../components/GlobalRecognition';
import { CareerCTA } from '../../components/CareerCTA';
import { NewsSection } from '../../components/NewsSection';
import { TrustedBySection } from '../../components/TrustedBySection';

export default function HomePage() {
  return (
    <>
      <AccentureHero />

      <TestimonialSection 
        image="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzY0NTg0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <Value360Section />

      <AWSCertifiedSection />

      <AWSServicesSection />

      <ImageTextSection 
        image="https://images.unsplash.com/photo-1747978886420-7908aeb83fa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZWxseWZpc2glMjBibHVlJTIwcHVycGxlfGVufDF8fHx8MTY0NTg0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
        title="Winning in the new era on environment, social and governance"
        description="Environmental, social and governance (ESG) is moving from a compliance-driven exercise to a value-creation opportunity. Here's how leaders can seize the moment."
        linkText="Learn more"
      />

      <CustomerSuccessStoriesSection />

      <GlobalRecognition />

      <CareerCTA 
        image="https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY0NTg0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <NewsSection />

      <TrustedBySection />
    </>
  );
}
