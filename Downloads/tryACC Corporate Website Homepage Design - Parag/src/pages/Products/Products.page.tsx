import { PlatformSection } from '../../components/PlatformSection';
import { ValueSection } from '../../components/ValueSection';
import { AWSServicesSection } from '../../components/AWSServicesSection';

export default function ProductsPage() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            Our Products
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-3xl">
            Explore our suite of cloud-native products designed to accelerate your digital transformation journey.
          </p>
        </div>
      </div>
      <PlatformSection />
      <ValueSection />
      <AWSServicesSection />
    </>
  );
}
