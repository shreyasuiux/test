export function ServiceCapabilities() {
  const services = [
    {
      title: 'Cloud Consulting',
      description: 'Strategic planning and roadmap development for cloud adoption',
      features: ['Architecture Design', 'Technology Selection', 'Risk Assessment', 'ROI Analysis']
    },
    {
      title: 'Implementation',
      description: 'End-to-end implementation and deployment of cloud solutions',
      features: ['Setup & Configuration', 'Data Migration', 'Integration', 'Testing & Validation']
    },
    {
      title: 'Optimization',
      description: 'Continuous optimization for performance and cost efficiency',
      features: ['Performance Tuning', 'Cost Reduction', 'Resource Scaling', 'Monitoring']
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            APEX Card Service Capabilities
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Comprehensive services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-[#A020F0] transition-all group"
            >
              <h3 className="text-white text-3xl mb-4">{service.title}</h3>
              <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#A020F0] rounded-full" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
