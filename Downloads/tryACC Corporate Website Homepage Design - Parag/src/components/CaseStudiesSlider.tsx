import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface CaseStudy {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface CaseStudiesSliderProps {
  caseStudies: CaseStudy[];
}

export function CaseStudiesSlider({ caseStudies }: CaseStudiesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, caseStudies.length - 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, caseStudies.length - 2)) % Math.max(1, caseStudies.length - 2));
  };

  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              Case Studies
            </h2>
            <p className="text-white/70 text-xl">
              Real results for real challenges
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex gap-4">
            <button 
              onClick={prev}
              className="p-3 border border-white/30 text-white hover:border-[#A020F0] hover:text-[#A020F0] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-3 border border-white/30 text-white hover:border-[#A020F0] hover:text-[#A020F0] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div 
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3 + 2.67)}%)` }}
          >
            {caseStudies.map((study) => (
              <div key={study.id} className="min-w-[calc(33.333%-1.33rem)] group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-2xl mb-4 group-hover:text-[#A020F0] transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-white/80 mb-6">
                      {study.description}
                    </p>
                    <span className="text-white flex items-center gap-2 group-hover:text-[#A020F0] transition-colors">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button 
            onClick={prev}
            className="p-3 border border-white/30 text-white hover:border-[#A020F0] hover:text-[#A020F0] transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="p-3 border border-white/30 text-white hover:border-[#A020F0] hover:text-[#A020F0] transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
