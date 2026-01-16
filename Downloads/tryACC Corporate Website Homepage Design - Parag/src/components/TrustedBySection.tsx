import { useState } from 'react';
import { ChevronLeft, ChevronRight, Briefcase, Building2, Clapperboard, Gamepad2, Shield, Monitor, Factory } from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  icon: any;
}

export function TrustedBySection() {
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);

  const industries: Industry[] = [
    { id: 'all', name: 'All Industries', icon: Briefcase },
    { id: 'financial', name: 'Financial Services', icon: Building2 },
    { id: 'media', name: 'Media & Entertainment', icon: Clapperboard },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
    { id: 'insurance', name: 'Insurance', icon: Shield },
    { id: 'it', name: 'IT Services', icon: Monitor },
    { id: 'manufacturing', name: 'Manufacturing & Energy', icon: Factory },
  ];

  // Company logos data - you can add real logo URLs here
  const companies = [
    { name: 'AGS', logo: 'AGS', industry: 'all' },
    { name: 'Angel Broking', logo: 'Angel Broking', industry: 'financial' },
    { name: 'Axis Bank', logo: 'AXIS BANK', industry: 'financial' },
    { name: 'CAMS', logo: 'CAMS', industry: 'financial' },
    { name: 'Edelweiss', logo: 'Edelweiss', industry: 'financial' },
    { name: 'Federal Bank', logo: 'FEDERAL BANK', industry: 'financial' },
    { name: 'HDFC Bank', logo: 'HDFC BANK', industry: 'financial' },
    { name: 'HDFC Bank', logo: 'HDFC BANK', industry: 'financial' },
    { name: 'ICICI Bank', logo: 'ICICI Bank', industry: 'financial' },
    { name: 'ICICI Securities', logo: 'ICICI Securities', industry: 'financial' },
    { name: 'IndusInd Bank', logo: 'IndusInd Bank', industry: 'financial' },
    { name: 'Fintech', logo: 'FINTECH', industry: 'it' },
  ];

  const totalPages = 7; // Based on the dots in the image

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-black dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-black/70 dark:text-white/70 text-[16px] leading-relaxed max-w-3xl mx-auto">
            We're proud to partner with leading organizations across industries, delivering innovative cloud and AI solutions that drive digital transformation.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = activeIndustry === industry.id;
            
            return (
              <button
                key={industry.id}
                onClick={() => {
                  setActiveIndustry(industry.id);
                  setCurrentPage(0);
                }}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] transition-all duration-300
                  ${isActive 
                    ? 'bg-[#A020F0] text-white shadow-lg shadow-[#A020F0]/30' 
                    : 'bg-white/5 dark:bg-white/5 text-black/70 dark:text-white/70 hover:bg-white/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-black/10 dark:border-white/10 p-8 flex items-center justify-center aspect-square transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-[#A020F0]/20 hover:border-[#A020F0]/30"
            >
              {/* Logo placeholder - replace with actual logos */}
              <div className="text-center">
                <div className="text-black/90 dark:text-white/90 font-medium text-[14px] tracking-wide">
                  {company.logo}
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/0 to-[#A020F0]/0 group-hover:from-[#A020F0]/5 group-hover:to-transparent rounded-2xl transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-[#A020F0] dark:hover:text-[#A020F0] transition-colors duration-300 text-[14px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          {/* Page Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${currentPage === index 
                    ? 'bg-[#A020F0] w-6' 
                    : 'bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
                  }
                `}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-black/70 dark:text-white/70 hover:text-[#A020F0] dark:hover:text-[#A020F0] transition-colors duration-300 text-[14px]"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
