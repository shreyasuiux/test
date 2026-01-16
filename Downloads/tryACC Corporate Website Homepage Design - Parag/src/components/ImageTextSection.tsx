import { ArrowRight, ExternalLink } from 'lucide-react';

interface ImageTextSectionProps {
  image: string;
  title: string;
  description: string;
  linkText: string;
}

export function ImageTextSection({ image, title, description, linkText }: ImageTextSectionProps) {
  return (
    <section className="hidden bg-transparent py-16 px-8 sm:px-12 lg:px-16 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Image - 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent">
              <img 
                src={image}
                alt={title}
                className="w-full aspect-[4/3] object-cover"
              />
              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-[#A020F0]/10 to-transparent blur-2xl -z-10 opacity-30" />
          </div>

          {/* Right - Text - 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            {/* Category tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 rounded-lg">
              <ExternalLink className="w-3.5 h-3.5 text-[#A020F0]" />
              <span className="text-black/70 dark:text-white/70 text-[13px]">Featured Article</span>
            </div>

            <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.01em] leading-tight">
              {title}
            </h2>
            
            <p className="text-black/60 dark:text-white/60 text-[16px] leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-black/[0.06] dark:bg-white/[0.06] hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white text-[14px] rounded-lg transition-all">
              <span>{linkText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}