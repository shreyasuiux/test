interface QuoteSectionProps {
  image: string;
  quote: string;
  personName: string;
  personTitle: string;
}

export function QuoteSection({ image, quote, personName, personTitle }: QuoteSectionProps) {
  return (
    <section className="bg-[#0A0A0A] py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={image}
              alt={personName}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Quote */}
          <div className="space-y-8">
            <div className="text-[#A020F0] text-8xl leading-none">&ldquo;</div>
            <p className="text-white text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              {quote}
            </p>
            <div className="pt-8 border-t border-white/20">
              <p className="text-white text-xl">
                {personName}
              </p>
              <p className="text-white/60 mt-2">
                {personTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
