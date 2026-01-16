import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage}
          alt="AI Technology"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl">
          {/* Large Heading */}
          <h1 className="text-white mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl">TOGETHER</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl flex items-center gap-4">
              WE REINVENT
              <ChevronRight className="w-16 h-16 md:w-20 md:h-20 text-[#A020F0]" />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed">
            Scaling AI. We help clients reinvent business sustainably.
          </p>

          {/* CTA Button */}
          <Button>See what we do</Button>
        </div>
      </div>
    </section>
  );
}
