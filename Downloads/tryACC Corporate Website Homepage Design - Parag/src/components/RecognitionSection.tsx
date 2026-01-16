export function RecognitionSection() {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Purple Geometric Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#A020F0] opacity-10 rotate-45 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#A020F0] opacity-10 rounded-full blur-3xl" />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl mb-8">
            Global recognition<br />& awards
          </h2>
          
          {/* Award Logos/Names Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-20">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item}
                className="aspect-square flex items-center justify-center border border-white/10 hover:border-[#A020F0] transition-colors"
              >
                <span className="text-white/50 text-sm">Award {item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
