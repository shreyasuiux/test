import { Check, Trophy, Shield, Globe } from 'lucide-react';

export function AWSServicesSection() {
  return (
    <section className="bg-transparent py-32 px-8 sm:px-12 lg:px-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#A020F0]/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#A020F0] animate-pulse" />
            <span className="text-black/70 dark:text-white/70 text-[13px]">AWS Expertise</span>
          </div>
          <h2 className="text-black dark:text-white text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.1] mb-4">
            Comprehensive Cloud Capabilities
          </h2>
          <p className="text-black/60 dark:text-white/60 text-[16px] leading-relaxed">
            Certified across the full spectrum of AWS services, competencies, and industry solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Column 1 - AWS Competencies */}
          <div className="lg:col-span-1 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#A020F0]/30">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A020F0] to-[#A020F0]/70 flex items-center justify-center shadow-lg shadow-[#A020F0]/30">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black dark:text-white text-xl tracking-tight mb-1">
                    AWS Competencies
                  </h3>
                  <p className="text-black/50 dark:text-white/50 text-[12px]">
                    Industry-validated expertise
                  </p>
                </div>
              </div>

              {/* List with enhanced styling */}
              <div className="space-y-2">
                {[
                  'Data & Analytics',
                  'DevOps',
                  'Machine Learning',
                  'Migration',
                  'Financial Services',
                  'Healthcare & Life Sciences'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-200 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A020F0] group-hover/item:scale-150 transition-transform duration-200" />
                    <span className="text-black/70 dark:text-white/70 text-[14px] group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 - Service Validations */}
          <div className="lg:col-span-1 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#A020F0]/30">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A020F0] to-[#A020F0]/70 flex items-center justify-center shadow-lg shadow-[#A020F0]/30">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black dark:text-white text-xl tracking-tight mb-1">
                    Service Validations
                  </h3>
                  <p className="text-black/50 dark:text-white/50 text-[12px]">
                    Certified service delivery
                  </p>
                </div>
              </div>

              {/* List with enhanced styling */}
              <div className="space-y-2">
                {[
                  'Amazon EC2 for Windows Server',
                  'Amazon EKS',
                  'Amazon RDS',
                  'AWS Control Tower',
                  'AWS Lambda',
                  'Amazon Connect'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-200 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A020F0] group-hover/item:scale-150 transition-transform duration-200" />
                    <span className="text-black/70 dark:text-white/70 text-[14px] group-hover/item:text-black dark:group-hover/item:text-white transition-colors duration-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3 - Marketplace Solutions */}
          <div className="lg:col-span-1 group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/5 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full rounded-3xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm p-8 transition-all duration-300 hover:border-[#A020F0]/30">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A020F0] to-[#A020F0]/70 flex items-center justify-center shadow-lg shadow-[#A020F0]/30">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-black dark:text-white text-xl tracking-tight mb-1">
                    Marketplace Solutions
                  </h3>
                  <p className="text-black/50 dark:text-white/50 text-[12px]">
                    Ready-to-deploy platforms
                  </p>
                </div>
              </div>

              {/* Solution Cards */}
              <div className="space-y-3">
                {[
                  { title: 'Cloud Migration Factory', desc: 'Accelerate large-scale migrations with automation' },
                  { title: 'DataOps Platform', desc: 'End-to-end data pipeline management' },
                  { title: 'Security Automation Suite', desc: 'Comprehensive security & compliance tools' }
                ].map((solution, index) => (
                  <div key={index} className="group/card p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] hover:border-[#A020F0]/40 hover:bg-gradient-to-br hover:from-[#A020F0]/5 hover:to-transparent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#A020F0]/10">
                    <h4 className="text-black dark:text-white text-[15px] mb-1.5 group-hover/card:text-[#A020F0] transition-colors duration-200">
                      {solution.title}
                    </h4>
                    <p className="text-black/50 dark:text-white/50 text-[12px] leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A020F0]/10 via-[#A020F0]/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-black/[0.04] to-transparent dark:from-white/[0.04] dark:to-transparent backdrop-blur-sm p-8 lg:p-10 transition-all duration-300 hover:border-[#A020F0]/30">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-black dark:text-white text-2xl sm:text-3xl tracking-tight mb-2">
                  Ready to transform your cloud infrastructure?
                </h3>
                <p className="text-black/60 dark:text-white/60 text-[15px]">
                  Connect with our AWS-certified experts to design your cloud journey
                </p>
              </div>
              <button className="group/btn px-6 py-3 bg-[#A020F0] hover:bg-[#A020F0]/90 text-white rounded-xl transition-all shadow-lg shadow-[#A020F0]/25 hover:shadow-xl hover:shadow-[#A020F0]/40 hover:scale-105">
                <span className="text-[14px]">Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}