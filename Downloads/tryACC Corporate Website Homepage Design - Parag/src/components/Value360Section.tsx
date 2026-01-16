import { ArrowRight, BarChart3 } from 'lucide-react';

export function Value360Section() {
  return (
    <section className="bg-transparent py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-black/[0.08] dark:from-white/[0.08] to-black/[0.04] dark:to-white/[0.04] border border-black/10 dark:border-white/10 rounded-full mb-8 backdrop-blur-sm">
          <BarChart3 className="w-3.5 h-3.5 text-[#A020F0]" />
          <span className="text-black/90 dark:text-white/90 text-[13px]">Impact Report 2025</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-black dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[-0.02em] leading-[1.05] mb-6">
          360° VALUE
        </h2>
        
        {/* Description */}
        <p className="text-black/60 dark:text-white/60 text-[17px] leading-relaxed max-w-3xl mx-auto mb-8">
          Every day, we embrace change and create value for all of our stakeholders in every part of the world.
        </p>
        
        {/* CTA Button */}
        <button className="group inline-flex items-center gap-2 px-6 py-3 bg-[#A020F0] hover:bg-[#A020F0]/90 text-white text-[14px] rounded-lg transition-all shadow-lg shadow-[#A020F0]/25 hover:shadow-xl hover:shadow-[#A020F0]/30">
          <span>Download the report</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Decorative line */}
        <div className="mt-16 h-px w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />
      </div>
    </section>
  );
}