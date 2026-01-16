export function CTASection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-[#A020F0] to-[#7B1ACF] rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Power Your Cloud?
          </h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8">
            Let's discuss how we can help accelerate your cloud transformation journey
          </p>
          <button className="bg-white text-[#A020F0] px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
