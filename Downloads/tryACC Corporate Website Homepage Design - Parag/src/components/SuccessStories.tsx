interface SuccessStoriesProps {
  stories: {
    id: number;
    image: string;
    company: string;
    title: string;
    results: string[];
  }[];
}

export function SuccessStories({ stories }: SuccessStoriesProps) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl lg:text-6xl mb-6">
            Customer Success Stories
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Real results from real clients who transformed their business with our cloud solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-[#A020F0] hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 bg-[#A020F0] text-white px-4 py-2 rounded-lg">
                  {story.company}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-black text-2xl mb-4">{story.title}</h3>
                <div className="space-y-3">
                  {story.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#A020F0]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[#A020F0] text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
