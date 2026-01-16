import { Check } from 'lucide-react';

export function AWSCertifiedSection() {
  return (
    <section className="bg-transparent py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#A020F0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Main Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-40" />
                <div className="relative px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] uppercase tracking-wider rounded-2xl">
                  AWS Premier Consulting Partner
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-black dark:text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.1]">
                Cloud Excellence,<br />Certified & Proven
              </h2>
              <p className="text-black/60 dark:text-white/60 text-[16px] leading-relaxed max-w-xl">
                As an AWS Premier Consulting Partner, we deliver enterprise-grade cloud solutions backed by deep technical expertise and industry-leading certifications.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="text-black dark:text-white text-4xl tracking-tight mb-2">200<span className="text-[#A020F0]">+</span></div>
                  <div className="text-black/60 dark:text-white/60 text-[13px]">AWS Certified<br />Professionals</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="text-black dark:text-white text-4xl tracking-tight mb-2">500<span className="text-[#A020F0]">+</span></div>
                  <div className="text-black/60 dark:text-white/60 text-[13px]">Cloud Migrations<br />Completed</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="text-black dark:text-white text-4xl tracking-tight mb-2">15<span className="text-[#A020F0]">+</span></div>
                  <div className="text-black/60 dark:text-white/60 text-[13px]">AWS Service<br />Competencies</div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] p-6 backdrop-blur-sm">
                  <div className="text-black dark:text-white text-4xl tracking-tight mb-2">24<span className="text-[#A020F0]">/7</span></div>
                  <div className="text-black/60 dark:text-white/60 text-[13px]">Global Cloud<br />Support</div>
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A020F0]" />
                <span className="text-black/70 dark:text-white/70 text-[14px]">End-to-end cloud architecture & design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A020F0]" />
                <span className="text-black/70 dark:text-white/70 text-[14px]">Enterprise-scale migration & modernization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A020F0]" />
                <span className="text-black/70 dark:text-white/70 text-[14px]">Security, compliance & governance</span>
              </div>
            </div>
          </div>

          {/* Right Side - Video Showcase */}
          <div className="relative">
            {/* Main Video Card */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#A020F0]/20 via-transparent to-orange-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              {/* Video Container */}
              <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.06] to-black/[0.02] dark:from-white/[0.06] dark:to-white/[0.02] p-3">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/40 dark:bg-white/5">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/fX8ZlG9UWfo?start=3"
                    title="AWS Certified Excellence"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Floating Certification Badge */}
            <div className="absolute -bottom-6 -left-6 z-10">
              <div className="relative">
                <div className="absolute inset-0 bg-[#A020F0] rounded-2xl blur-2xl opacity-30" />
                <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/80 to-black/60 dark:from-white/10 dark:to-white/5 backdrop-blur-xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A020F0] to-[#A020F0]/70 flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-[15px] tracking-tight mb-0.5">AWS Certified</div>
                      <div className="text-white/60 text-[11px]">Premier Tier Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border border-[#A020F0]/20 rounded-2xl rotate-12 pointer-events-none" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}