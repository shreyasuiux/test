import { GlobalRecognition } from '../../components/GlobalRecognition';
import { RecognitionSection } from '../../components/RecognitionSection';
import { CareerSection } from '../../components/CareerSection';
import { CareerCTA } from '../../components/CareerCTA';
import { QuoteSection } from '../../components/QuoteSection';

export default function CompanyPage() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            About Applied Cloud Computing
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-3xl">
            We are a team of cloud experts dedicated to helping organizations navigate their digital transformation journey with cutting-edge AWS solutions.
          </p>
        </div>
      </div>
      <GlobalRecognition />
      <RecognitionSection />
      <QuoteSection />
      <CareerSection />
      <CareerCTA 
        image="https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzY0NTg0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </>
  );
}
