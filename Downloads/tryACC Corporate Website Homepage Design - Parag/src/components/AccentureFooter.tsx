import { Twitter, Linkedin, Facebook, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AccentureFooter() {
  return (
    <footer className="bg-zinc-900 dark:bg-zinc-900 border-t border-black/[0.08] dark:border-white/[0.08] transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left - Large Heading - 6 columns */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-white text-4xl md:text-5xl lg:text-6xl tracking-[-0.01em] leading-tight">
              Let there be change
            </h3>
            <p className="text-white/70 text-[15px] max-w-md leading-relaxed">
              Connect with us to start the conversation about how we can help transform your business.
            </p>

            {/* Newsletter */}
            <div className="pt-4">
              <div className="flex gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/[0.06] border border-white/10 rounded-lg text-white text-[14px] placeholder:text-white/40 focus:outline-none focus:border-[#A020F0] transition-colors"
                  />
                </div>
                <button className="px-5 py-2.5 bg-[#A020F0] hover:bg-[#A020F0]/90 text-white text-[14px] rounded-lg transition-all shadow-lg shadow-[#A020F0]/20">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-[#A020F0]/30 flex items-center justify-center transition-all group">
                <Twitter className="w-4 h-4 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-[#A020F0]/30 flex items-center justify-center transition-all group">
                <Linkedin className="w-4 h-4 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-[#A020F0]/30 flex items-center justify-center transition-all group">
                <Facebook className="w-4 h-4 text-white/70 group-hover:text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 hover:bg-white/10 hover:border-[#A020F0]/30 flex items-center justify-center transition-all group">
                <Youtube className="w-4 h-4 text-white/70 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Right - Footer Links - 6 columns */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-white text-[13px] uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/company" className="text-white/60 hover:text-white transition-colors text-[14px]">About Us</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Leadership</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Investor Relations</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Newsroom</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white text-[13px] uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-white/60 hover:text-white transition-colors text-[14px]">Cloud Services</Link></li>
                <li><Link to="/products" className="text-white/60 hover:text-white transition-colors text-[14px]">Products</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Technology</a></li>
                <li><Link to="/case-studies" className="text-white/60 hover:text-white transition-colors text-[14px]">Case Studies</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-white text-[13px] uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors text-[14px]">Get In Touch</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Support</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Partnerships</a></li>
                <li><a href="#" className="text-white/60 hover:text-white transition-colors text-[14px]">Careers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors text-[13px]">Privacy Statement</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-[13px]">Terms of Use</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-[13px]">Cookie Policy</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors text-[13px]">Sitemap</a>
            </div>
            <p className="text-white/50 text-[13px]">
              © 2025 Applied Cloud Computing. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}