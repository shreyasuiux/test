import { Button } from './Button';

export function ValueSection() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Large Heading */}
          <h2 className="text-white text-6xl md:text-7xl lg:text-8xl">
            360° VALUE
          </h2>

          {/* Subtext */}
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Every day, we embrace change and create value for our stakeholders around the world.
          </p>

          {/* CTA */}
          <div className="pt-8">
            <Button>See the report</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
