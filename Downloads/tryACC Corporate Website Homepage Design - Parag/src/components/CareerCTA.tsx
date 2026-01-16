import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';

interface CareerCTAProps {
  image: string;
}

export function CareerCTA({ image }: CareerCTAProps) {
  return (
    <section className="bg-transparent py-16 px-8 sm:px-12 lg:px-16 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent">
              <img 
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY0Njc1ODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Career opportunities"
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#A020F0]/10 to-transparent blur-2xl -z-10 opacity-30" />
          </div>

          {/* Right - Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-black/[0.08] dark:from-white/[0.08] to-black/[0.04] dark:to-white/[0.04] border border-black/10 dark:border-white/10 rounded-full backdrop-blur-sm">
              <Briefcase className="w-3.5 h-3.5 text-[#A020F0]" />
              <span className="text-black/90 dark:text-white/90 text-[13px]">Careers</span>
            </div>

            <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.01em] leading-tight">
              Level up your career where innovation never stops.
            </h2>
            
            <p className="text-black/60 dark:text-white/60 text-[16px] leading-relaxed max-w-2xl">
              Step into a global community driven by innovation, collaboration, and a shared mission to shape a better future.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-[#A020F0]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(160,32,240,0.25)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#A020F0]/10 border border-[#A020F0]/20 flex items-center justify-center mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#A020F0]" />
                </div>
                <div>
                  <h4 className="text-black dark:text-white text-[14px] mb-1">Continuous Learning</h4>
                  <p className="text-black/50 dark:text-white/50 text-[13px]">Access to global training programs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-[#A020F0]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(160,32,240,0.25)]">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#A020F0]/10 border border-[#A020F0]/20 flex items-center justify-center mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#A020F0]" />
                </div>
                <div>
                  <h4 className="text-black dark:text-white text-[14px] mb-1">Global Impact</h4>
                  <p className="text-black/50 dark:text-white/50 text-[13px]">Work on world-changing projects</p>
                </div>
              </div>
            </div>
            
            <button className="group inline-flex items-center gap-2 px-6 py-3 bg-[#A020F0] hover:bg-[#A020F0]/90 text-white text-[14px] rounded-lg transition-all shadow-lg shadow-[#A020F0]/25 hover:shadow-xl hover:shadow-[#A020F0]/30">
              <span>Explore opportunities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}