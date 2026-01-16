import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  headline: string;
  description: string;
}

interface NewsSliderProps {
  newsItems: NewsItem[];
}

export function NewsSlider({ newsItems }: NewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, newsItems.length - 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, newsItems.length - 1)) % Math.max(1, newsItems.length - 1));
  };

  return (
    <section className="bg-black py-24 border-t border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl">
            Latest News
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
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
            style={{ transform: `translateX(-${currentIndex * 52}%)` }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="min-w-[calc(50%-1rem)] group cursor-pointer">
                <div className="border-l-2 border-[#A020F0] pl-8 py-6 hover:border-white transition-colors">
                  <span className="text-[#A020F0] text-sm uppercase tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="text-white text-2xl md:text-3xl mt-4 mb-4 group-hover:text-[#A020F0] transition-colors">
                    {item.headline}
                  </h3>
                  <p className="text-white/70 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
