import { Award, Trophy, Star, Target } from 'lucide-react';

export function GlobalRecognition() {
  return (
    <section className="bg-transparent py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-black/[0.08] dark:from-white/[0.08] to-black/[0.04] dark:to-white/[0.04] border border-black/10 dark:border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Target className="w-3.5 h-3.5 text-[#A020F0]" />
            <span className="text-black/90 dark:text-white/90 text-[13px]">Recognition</span>
          </div>
          
          <h2 className="text-black dark:text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-tight mb-4">
            Global recognition<br />and awards
          </h2>
          <p className="text-black/60 dark:text-white/60 text-[16px] max-w-2xl mx-auto">
            Recognized by industry leaders for excellence and innovation
          </p>
        </div>
        
        {/* Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Award 1 */}
          <div className="group relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A020F0] to-purple-600 flex items-center justify-center shadow-lg shadow-[#A020F0]/20">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-black dark:text-white text-[15px]">Excellence Award</h3>
                <p className="text-black/50 dark:text-white/50 text-[13px]">Industry Leadership 2025</p>
              </div>
              <div className="pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                <span className="text-black/40 dark:text-white/40 text-[11px] uppercase tracking-wider">Tech Innovation Summit</span>
              </div>
            </div>
          </div>

          {/* Award 2 */}
          <div className="group relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A020F0] to-purple-600 flex items-center justify-center shadow-lg shadow-[#A020F0]/20">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-black dark:text-white text-[15px]">Innovation Leader</h3>
                <p className="text-black/50 dark:text-white/50 text-[13px]">Best AI Platform 2025</p>
              </div>
              <div className="pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                <span className="text-black/40 dark:text-white/40 text-[11px] uppercase tracking-wider">Global Tech Awards</span>
              </div>
            </div>
          </div>

          {/* Award 3 */}
          <div className="group relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A020F0] to-purple-600 flex items-center justify-center shadow-lg shadow-[#A020F0]/20">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-black dark:text-white text-[15px]">Best Workplace</h3>
                <p className="text-black/50 dark:text-white/50 text-[13px]">Top Employer 2025</p>
              </div>
              <div className="pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                <span className="text-black/40 dark:text-white/40 text-[11px] uppercase tracking-wider">Fortune Magazine</span>
              </div>
            </div>
          </div>

          {/* Award 4 */}
          <div className="group relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
            <div className="flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A020F0] to-purple-600 flex items-center justify-center shadow-lg shadow-[#A020F0]/20">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-black dark:text-white text-[15px]">Customer Choice</h3>
                <p className="text-black/50 dark:text-white/50 text-[13px]">Highest Satisfaction 2025</p>
              </div>
              <div className="pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                <span className="text-black/40 dark:text-white/40 text-[11px] uppercase tracking-wider">Gartner Peer Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}