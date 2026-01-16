export function PlatformSection() {
  const platforms = [
    { name: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', description: 'Microsoft Azure' },
    { name: 'Google Cloud', description: 'Google Cloud Platform' },
    { name: 'Oracle Cloud', description: 'Oracle Cloud Infrastructure' },
    { name: 'IBM Cloud', description: 'IBM Cloud Services' },
    { name: 'Alibaba Cloud', description: 'Alibaba Cloud Computing' }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl lg:text-6xl mb-6">
            Interactive Cloud Platform
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            We partner with leading cloud providers to deliver best-in-class solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-xl hover:border-[#A020F0] hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 bg-[#A020F0]/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#A020F0]/20 transition-colors">
                <span className="text-2xl text-[#A020F0]">{platform.name.charAt(0)}</span>
              </div>
              <h4 className="text-black text-center">{platform.name}</h4>
              <p className="text-gray-500 text-xs text-center mt-1">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
