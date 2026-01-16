import { ArrowRight, Calendar, Newspaper } from 'lucide-react';

export function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: 'Accenture Reports Fourth-Quarter and Full-Year Fiscal 2025 Results',
      date: 'Dec 15, 2025',
      category: 'Financial Results'
    },
    {
      id: 2,
      title: 'Bank of England and Accenture Announce Renewed Partnership',
      date: 'Dec 12, 2025',
      category: 'Partnership'
    }
  ];

  return (
    <section className="hidden bg-transparent py-16 px-8 sm:px-12 lg:px-16 border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-black/[0.08] dark:from-white/[0.08] to-black/[0.04] dark:to-white/[0.04] border border-black/10 dark:border-white/10 rounded-full mb-4 backdrop-blur-sm">
              <Newspaper className="w-3.5 h-3.5 text-[#A020F0]" />
              <span className="text-black/90 dark:text-white/90 text-[13px]">Latest Updates</span>
            </div>
            <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl tracking-[-0.01em]">Accenture news</h2>
          </div>
          <button className="group inline-flex items-center gap-2 text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-[14px] transition-colors">
            <span>View all news</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/10 border border-[#A020F0]/20 rounded-md mb-4">
                <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">{item.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-black dark:text-white text-lg md:text-xl leading-tight mb-4 group-hover:text-black/90 dark:group-hover:text-white/90 transition-colors">
                {item.title}
              </h3>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex items-center gap-2 text-black/50 dark:text-white/50">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[13px]">{item.date}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-black/40 dark:text-white/40 group-hover:text-[#A020F0] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-8 text-center">
          <button className="group inline-flex items-center gap-2 px-5 py-2.5 bg-black/[0.06] dark:bg-white/[0.06] hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white text-[14px] rounded-lg transition-all">
            <span>Load more articles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}