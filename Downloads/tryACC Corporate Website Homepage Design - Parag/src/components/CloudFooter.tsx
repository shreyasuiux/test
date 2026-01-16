export function CloudFooter() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl mb-4">CloudTech</h3>
            <p className="text-white/60 leading-relaxed">
              Empowering businesses with comprehensive cloud solutions and digital transformation services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">Security & Compliance</a></li>
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">DevOps</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-[#A020F0] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60">
              <li>contact@cloudtech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Cloud Street</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 CloudTech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/50 text-sm">
            <a href="#" className="hover:text-[#A020F0] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#A020F0] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#A020F0] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
