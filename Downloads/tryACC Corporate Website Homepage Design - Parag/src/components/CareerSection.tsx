import { Button } from './Button';

interface CareerSectionProps {
  image: string;
}

export function CareerSection({ image }: CareerSectionProps) {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={image}
              alt="Team collaboration"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
              Grow your career at the heart of change
            </h2>
            
            <p className="text-white/80 text-xl leading-relaxed">
              Join our team of innovators, problem solvers, and change makers. We're looking for talented individuals who are passionate about making a difference in the world through technology and innovation.
            </p>

            <Button>Join us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
