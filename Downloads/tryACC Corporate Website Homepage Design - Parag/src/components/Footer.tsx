export function Footer() {
  return (
    <footer className="bg-black border-t border-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Side */}
          <div className="lg:col-span-8">
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl mb-8">
              Let there be change
            </h3>
          </div>

          {/* Vertical Text on Right */}
          <div className="lg:col-span-4 flex justify-end">
            <div className="hidden lg:block">
              <p className="text-white/30 text-sm tracking-widest transform rotate-0 lg:rotate-90 origin-top-right whitespace-nowrap translate-x-8">
                TRANSFORMING BUSINESS
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 mb-12 text-white/70">
          <a href="#" className="hover:text-[#A020F0] transition-colors">Privacy policy</a>
          <a href="#" className="hover:text-[#A020F0] transition-colors">Contact us</a>
          <a href="#" className="hover:text-[#A020F0] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#A020F0] transition-colors">Careers</a>
          <a href="#" className="hover:text-[#A020F0] transition-colors">Sitemap</a>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#1A1A1A]">
          <p className="text-white/50">
            © 2025 Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
