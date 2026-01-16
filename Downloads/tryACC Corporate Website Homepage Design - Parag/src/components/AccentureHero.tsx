import { ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import heroImage from 'figma:asset/f005792b16fa557466c80193183ad1aa1ba997df.png';

export function AccentureHero() {
  return (
    <section className="bg-transparent min-h-screen flex items-center px-8 sm:px-12 lg:px-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10 w-full py-16 mt-16 sm:mt-20">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16 relative">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6 relative z-10">


            {/* Main Heading */}
            <h1 className="text-black dark:text-white sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.1] max-w-3xl text-[64px]">
              Building Trustworthy AI with the Power of Cloud
            </h1>

            {/* Description */}
            <p className="text-black/60 dark:text-white/60 text-[17px] leading-relaxed max-w-2xl">
              We integrate ethical, people centered AI into every service and operation using cloud as the foundation to drive transformation, inspire confidence, and deliver lasting value for clients and communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="group px-5 py-2.5 bg-[#A020F0] hover:bg-[#A020F0]/90 text-white text-[14px] rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-[#A020F0]/25 hover:shadow-xl hover:shadow-[#A020F0]/30">
                <span>Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="px-5 py-2.5 bg-black/[0.06] dark:bg-white/[0.06] hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-black dark:text-white text-[14px] rounded-lg transition-all backdrop-blur-sm">
                Our work
              </button>
            </div>
          </div>

          {/* Right Side - 5 columns */}
          <div className="lg:col-span-5 relative z-10">
            {/* Premium Hero Image - Merged with background */}
            <div className="group relative rounded-2xl overflow-hidden">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <img 
                  src={heroImage} 
                  alt="AI Cloud Technology Visualization" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                {/* Soft gradient overlay to blend with background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 dark:from-black/40 via-transparent to-transparent" />
                {/* Purple accent glow - always visible, intensifies on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#A020F0]/10 via-purple-500/5 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Edge fade to blend with background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 dark:from-black/40 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 dark:from-black/30 via-transparent to-white/20 dark:to-black/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 pb-16 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="group p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 relative hover:shadow-[0_0_40px_rgba(160,32,240,0.3)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#A020F0]/10 border border-[#A020F0]/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#A020F0]" />
              </div>
            </div>
            <div className="text-black dark:text-white text-2xl tracking-tight mb-1">98%</div>
            <div className="text-black/50 dark:text-white/50 text-[13px]">Client Satisfaction</div>
          </div>

          <div className="group p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 relative hover:shadow-[0_0_40px_rgba(160,32,240,0.3)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#A020F0]/10 border border-[#A020F0]/20 flex items-center justify-center">
                <Users className="w-4 h-4 text-[#A020F0]" />
              </div>
            </div>
            <div className="text-black dark:text-white text-2xl tracking-tight mb-1">500+</div>
            <div className="text-black/50 dark:text-white/50 text-[13px]">Enterprise Clients</div>
          </div>

          <div className="group p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 relative hover:shadow-[0_0_40px_rgba(160,32,240,0.3)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#A020F0]/10 border border-[#A020F0]/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#A020F0]" />
              </div>
            </div>
            <div className="text-black dark:text-white text-2xl tracking-tight mb-1">2.5x</div>
            <div className="text-black/50 dark:text-white/50 text-[13px]">Faster Deployment</div>
          </div>

          <div className="group p-5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 relative hover:shadow-[0_0_40px_rgba(160,32,240,0.3)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-[#A020F0]/10 border border-[#A020F0]/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-[#A020F0]" />
              </div>
            </div>
            <div className="text-black dark:text-white text-2xl tracking-tight mb-1">100%</div>
            <div className="text-black/50 dark:text-white/50 text-[13px]">Security Compliant</div>
          </div>
        </div>

        {/* Featured Case Studies */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-black dark:text-white text-xl tracking-tight mb-1">Featured Case Studies</h2>
              <p className="text-black/50 dark:text-white/50 text-[14px]">Explore our recent client success stories</p>
            </div>
            <button className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white text-[13px] flex items-center gap-1 group">
              <span>View all</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <style>{`
            @keyframes hoverZoomPan {
              0% { transform: scale(1.05); }
              100% { transform: scale(1.15) translate(-3%, -3%); }
            }
            @keyframes hoverPanRight {
              0% { transform: scale(1.05); }
              100% { transform: scale(1.15) translate(-4%, 0); }
            }
            @keyframes hoverPanLeft {
              0% { transform: scale(1.05); }
              100% { transform: scale(1.15) translate(4%, 0); }
            }
            @keyframes hoverDiagonalPan {
              0% { transform: scale(1.05); }
              100% { transform: scale(1.15) translate(-3%, 3%); }
            }
            .group:hover .hover-zoom-pan {
              animation: hoverZoomPan 3s ease-in-out forwards;
            }
            .group:hover .hover-pan-right {
              animation: hoverPanRight 3s ease-in-out forwards;
            }
            .group:hover .hover-pan-left {
              animation: hoverPanLeft 3s ease-in-out forwards;
            }
            .group:hover .hover-diagonal-pan {
              animation: hoverDiagonalPan 3s ease-in-out forwards;
            }
          `}</style>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1680055196833-c2965de0caec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMGNsb3VkJTIwY29tcHV0aW5nJTIwcHVycGxlfGVufDF8fHx8MTc2NDY1OTkyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Financial Services Workload to AWS"
                  className="absolute inset-0 w-full h-full object-cover hover-zoom-pan transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Research Report</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Migration of Financial-Services Workload to AWS
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1645839078449-124db8a049fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjAzRHxlbnwxfHx8fDE3NjQ2NTk5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cloud Migration for Private Bank"
                  className="absolute inset-0 w-full h-full object-cover hover-pan-right transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Research Report</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Cloud Migration for Leading Private Bank
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1672581437674-3186b17b405a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMHB1cnBsZXxlbnwxfHx8fDE3NjQ2NDk2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Housing Finance Transformation"
                  className="absolute inset-0 w-full h-full object-cover hover-diagonal-pan transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Research Report</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Cloud Transformation for Housing Finance
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1722080826167-4ea87368cbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwM0QlMjByZW5kZXJ8ZW58MXx8fHwxNzY0NjU5OTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Secure Cloud Migration"
                  className="absolute inset-0 w-full h-full object-cover hover-pan-left transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Research Report</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Secure Cloud Migration for Leading Private Bank
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 5 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1653179675238-cc722693b666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMDNEfGVufDF8fHx8MTc2NDY1OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="VMware Cloud Migration"
                  className="absolute inset-0 w-full h-full object-cover hover-pan-left transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Research Report</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    VMware Cloud Migration for Leading Private Bank
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1644329770639-1a20809b82a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NjQ1OTEzNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Insurance Platform Modernization"
                  className="absolute inset-0 w-full h-full object-cover hover-diagonal-pan transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Research Report</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Insurance Platform Modernization
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1756908992154-c8a89f5e517f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBob2xvZ3JhbXxlbnwxfHx8fDE3NjQ2NTk5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Claims Management System"
                  className="absolute inset-0 w-full h-full object-cover hover-zoom-pan transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Case Study</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Claims Management System for Leading General
                  </h3>
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="group relative overflow-hidden rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] dark:from-white/[0.04] to-transparent hover:from-black/[0.08] dark:hover:from-white/[0.08] hover:border-[#A020F0]/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_50px_rgba(160,32,240,0.4)]">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1748723594319-142e211b46a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMG5ldHdvcmslMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NDY1OTkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Digital Investor App"
                  className="absolute inset-0 w-full h-full object-cover hover-pan-right transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#A020F0]/20 backdrop-blur-sm border border-[#A020F0]/30 rounded-md mb-3 w-fit">
                    <span className="text-[#A020F0] text-[11px] uppercase tracking-wider">Case Study</span>
                  </div>
                  <h3 className="text-white text-[15px] leading-tight">
                    Digital Investor App Transformation
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}