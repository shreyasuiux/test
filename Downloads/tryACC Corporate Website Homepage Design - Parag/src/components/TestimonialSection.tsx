import { ArrowRight, Quote } from 'lucide-react';
import founderImage from 'figma:asset/90a5c78dd01d952aa2196aa93242378526543bcb.png';

interface TestimonialSectionProps {
  image: string;
}

export function TestimonialSection({ image }: TestimonialSectionProps) {
  return (
    <section className="bg-transparent py-16 px-8 sm:px-12 lg:px-16 border-y border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent">
              <img 
                src={founderImage}
                alt="Executive"
                className="w-full aspect-square object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#A020F0]/10 to-transparent blur-2xl -z-10 opacity-40" />
          </div>

          {/* Right - Quote - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#A020F0]/20 to-[#A020F0]/5 border border-[#A020F0]/20">
              <Quote className="w-5 h-5 text-[#A020F0]" />
            </div>

            {/* Quote Text */}
            <blockquote className="text-black dark:text-white text-[24px] tracking-[-0.01em] leading-[1.5]">
              "Founder of ACC, Nilesh transformed a small garage vision into a global technology company. Through resilience, innovation, and people-first leadership, he built ACC into a 450+ member organization serving some of the largest BFSI and enterprise clients. His journey reflects empathy toward people, humility in success, and an unwavering commitment to hard work."
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-px flex-1 bg-gradient-to-r from-black/20 dark:from-white/20 to-transparent" />
              <div>
                <p className="text-black dark:text-white text-[15px]">Nilesh Satpute</p>
                <p className="text-black/50 dark:text-white/50 text-[13px]">CEO and Cloud Delivery</p>
              </div>
            </div>
            
            {/* CTA */}
            <button className="group inline-flex items-center gap-2 text-[#A020F0] hover:text-[#A020F0]/80 text-[14px] transition-all pt-2">
              <span>Read full story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}