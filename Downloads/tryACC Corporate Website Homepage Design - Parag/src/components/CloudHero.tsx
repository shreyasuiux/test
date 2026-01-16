import { Button } from './Button';
import { Cloud } from 'lucide-react';

export function CloudHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#A020F0] via-[#7B1ACF] to-[#5D15A0] overflow-hidden">
      {/* Decorative Cloud Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Cloud */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96">
          <Cloud className="w-full h-full text-white/10" strokeWidth={0.5} />
        </div>
        {/* Medium Cloud */}
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64">
          <Cloud className="w-full h-full text-white/15" strokeWidth={0.5} />
        </div>
        {/* Small Cloud */}
        <div className="absolute top-1/2 right-1/2 w-48 h-48">
          <Cloud className="w-full h-full text-white/10" strokeWidth={0.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl leading-tight">
              Building Transparency BI with the Power of Cloud
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              One-stop-shop and end-to-end solution to help clients scale and optimize cloud usage, while lowering cost and risk of digital transformation
            </p>
            <Button variant="secondary">Get Started</Button>
          </div>

          {/* Right Content - Form Card */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-black text-2xl mb-6">
              Accelerating AI Powered Digital Transformation with Comprehensive Cloud Solutions
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A020F0]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A020F0]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A020F0]"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#A020F0]"
              />
              <button
                type="submit"
                className="w-full bg-[#A020F0] text-white py-3 rounded-lg hover:bg-[#8A1ACF] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
