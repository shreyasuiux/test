import { useState, useRef } from 'react';
import { Play, Maximize, Minimize } from 'lucide-react';

export function CustomerSuccessStoriesSection() {
  const [playingVideo1, setPlayingVideo1] = useState(false);
  const [playingVideo2, setPlayingVideo2] = useState(false);
  const [playingCarouselVideo, setPlayingCarouselVideo] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      company: 'Religare Broking',
      title: 'Cloud Migration Success at Religare Broking',
      description: 'Amit Bhatia, CISO at Religare Broking, shares how ACC\'s multi-tier cloud solution transformed their IT infrastructure, improving uptime, performance, and scalability.',
      author: 'Amit Bhatia',
      role: 'CISO at Religare Broking',
      videoId: 'hsUEiFOh1UA'
    },
    {
      company: 'Nippon',
      title: 'Digital Transformation at Nippon India Mutual Fund',
      description: 'Abhijit Shah, CTO at Nippon Life India Asset Management, discusses how ACC helped create a seamless mobile-first investor experience and enhanced their digital presence.',
      author: 'Abhijit Shah',
      role: 'CTO, Nippon Life India Asset Management',
      videoId: 'QbjcP1JPYQU'
    }
  ];

  const handlePrevious = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setPlayingCarouselVideo(false);
  };

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setPlayingCarouselVideo(false);
  };

  const toggleFullscreen = () => {
    const currentRef = videoContainerRef.current;
    if (currentRef) {
      if (isFullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (currentRef.requestFullscreen) {
          currentRef.requestFullscreen();
        } else if (currentRef.mozRequestFullScreen) {
          currentRef.mozRequestFullScreen();
        } else if (currentRef.webkitRequestFullscreen) {
          currentRef.webkitRequestFullscreen();
        } else if (currentRef.msRequestFullscreen) {
          currentRef.msRequestFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <section className="bg-transparent py-20 px-8 sm:px-12 lg:px-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-black dark:text-white text-4xl md:text-5xl tracking-[-0.01em] leading-tight mb-4">
            Customer Success Stories
          </h2>
          <p className="text-black/60 dark:text-white/60 text-[16px] leading-relaxed">
            Hear from our clients about how we've helped transform their business and deliver exceptional results
          </p>
        </div>

        {/* Video Grid */}


        {/* Testimonial Carousel Section */}
        <div className="mt-24 relative">
          <div className="rounded-3xl bg-black dark:bg-black overflow-hidden border border-black/20 dark:border-white/10">
            <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
              {/* Left Side - Quote */}
              <div className="flex flex-col justify-between p-12 lg:p-16">
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#A020F0] flex items-center justify-center mb-8">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <blockquote className="text-white text-2xl md:text-3xl lg:text-4xl tracking-[-0.02em] leading-tight mb-8">
                    {testimonials[activeTestimonial].title}
                  </blockquote>
                  <p className="text-white/70 text-[16px] leading-relaxed">
                    {testimonials[activeTestimonial].description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-[#A020F0] to-[#A020F0]/60"></div>
                    </div>
                    <div>
                      <div className="text-white">{testimonials[activeTestimonial].author}</div>
                      <div className="text-white/60 text-[14px]">{testimonials[activeTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Video */}
              <div className="relative bg-gradient-to-br from-[#A020F0]/20 to-transparent flex items-center justify-center p-8 lg:p-12">
                <div className="relative w-full max-w-md" ref={videoContainerRef}>
                  {/* Decorative Elements */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-[#A020F0] opacity-50 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#A020F0] opacity-30 blur-2xl"></div>
                  
                  {/* Mock Device/Screen */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-2xl">
                    <div className="aspect-[4/5] bg-gradient-to-br from-white/10 to-white/5 rounded-xl overflow-hidden relative group cursor-pointer">
                      {!playingCarouselVideo ? (
                        <div 
                          className="relative w-full h-full"
                          onClick={() => setPlayingCarouselVideo(true)}
                        >
                          {/* YouTube Thumbnail */}
                          <img
                            src={`https://img.youtube.com/vi/${testimonials[activeTestimonial].videoId}/maxresdefault.jpg`}
                            alt={testimonials[activeTestimonial].title}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Custom Play Button Overlay */}
                          <div className="absolute inset-0 flex items-end justify-center pb-8 bg-black/20 transition-all duration-300 group-hover:bg-black/40">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#A020F0] to-[#A020F0]/60 flex items-center justify-center transition-all duration-300 scale-100 group-hover:scale-110 shadow-2xl shadow-[#A020F0]/50">
                              <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${testimonials[activeTestimonial].videoId}?autoplay=1`}
                          title="Customer Success Video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                          allowFullScreen={true}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-white/10 px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-6 text-white/40 text-[12px] overflow-x-auto">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTestimonial(index);
                      setPlayingCarouselVideo(false);
                    }}
                    className={`transition-all duration-300 hover:text-white/80 cursor-pointer flex items-center gap-2 ${
                      activeTestimonial === index ? 'text-white' : 'opacity-40'
                    }`}
                  >
                    {activeTestimonial === index && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#A020F0] to-[#A020F0]/60 flex items-center justify-center shadow-lg shadow-[#A020F0]/30">
                        <Play className="w-3 h-3 fill-white text-white" />
                      </div>
                    )}
                    {testimonial.company}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrevious}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button 
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                >
                  {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}