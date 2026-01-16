import { Cloud, Database, Shield, Zap, BarChart3, Lock } from 'lucide-react';

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      items: [
        'Assessment & Planning',
        'Infrastructure Setup',
        'Data Migration',
        'Application Modernization',
        'Post-Migration Support'
      ]
    },
    {
      icon: Database,
      title: 'Data Analytics',
      items: [
        'Big Data Solutions',
        'Real-time Analytics',
        'Data Warehousing',
        'Business Intelligence',
        'Predictive Analytics'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      items: [
        'Security Assessment',
        'Compliance Management',
        'Identity & Access',
        'Threat Detection',
        'Disaster Recovery'
      ]
    },
    {
      icon: Zap,
      title: 'DevOps & Automation',
      items: [
        'CI/CD Pipeline',
        'Infrastructure as Code',
        'Automated Deployment',
        'Monitoring & Logging',
        'Performance Optimization'
      ]
    },
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      items: [
        'Resource Management',
        'Cost Analysis',
        'Budget Planning',
        'Usage Monitoring',
        'Savings Recommendations'
      ]
    },
    {
      icon: Lock,
      title: 'Managed Services',
      items: [
        '24/7 Support',
        'Proactive Monitoring',
        'Incident Management',
        'Regular Updates',
        'Performance Tuning'
      ]
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Comprehensive Cloud Capabilities
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Complete suite of cloud services to power your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-[#A020F0] transition-colors group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#A020F0] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-2xl">{capability.title}</h3>
                </div>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80">
                      <span className="w-1.5 h-1.5 bg-[#A020F0] rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
