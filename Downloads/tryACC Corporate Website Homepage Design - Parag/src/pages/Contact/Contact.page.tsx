import { CTASection } from '../../components/CTASection';

export default function ContactPage() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            Get In Touch
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-3xl mb-12">
            Ready to transform your business with cloud solutions? Contact our team of experts today.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-8">
              <h2 className="text-2xl mb-6 text-black dark:text-white">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-black/70 dark:text-white/70">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] rounded-lg text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-[#A020F0] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-black/70 dark:text-white/70">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] rounded-lg text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-[#A020F0] transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm mb-2 text-black/70 dark:text-white/70">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] rounded-lg text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-[#A020F0] transition-colors"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-black/70 dark:text-white/70">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/60 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] rounded-lg text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none focus:border-[#A020F0] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#A020F0] hover:bg-[#8f1cd6] text-white rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-8">
                <h3 className="text-xl mb-4 text-black dark:text-white">Contact Information</h3>
                <div className="space-y-4 text-black/70 dark:text-white/70">
                  <div>
                    <p className="text-sm text-black/50 dark:text-white/50 mb-1">Email</p>
                    <p>contact@appliedcloud.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-black/50 dark:text-white/50 mb-1">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-sm text-black/50 dark:text-white/50 mb-1">Address</p>
                    <p>123 Cloud Street<br />San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-8">
                <h3 className="text-xl mb-4 text-black dark:text-white">Office Hours</h3>
                <div className="space-y-2 text-black/70 dark:text-white/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-sm text-black/50 dark:text-white/50 mt-4">
                    All times in Pacific Standard Time (PST)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CTASection />
    </>
  );
}
