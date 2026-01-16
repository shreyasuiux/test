import { CustomerSuccessStoriesSection } from '../../components/CustomerSuccessStoriesSection';
import { CaseStudiesSlider } from '../../components/CaseStudiesSlider';
import { SuccessStories } from '../../components/SuccessStories';
import { TestimonialSection } from '../../components/TestimonialSection';

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-20">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 lg:px-16 py-20">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-black dark:text-white">
            Case Studies
          </h1>
          <p className="text-xl text-black/60 dark:text-white/60 max-w-3xl">
            Discover how we've helped organizations transform their businesses through innovative cloud solutions.
          </p>
        </div>
      </div>
      <CustomerSuccessStoriesSection />
      <CaseStudiesSlider />
      <SuccessStories />
      <TestimonialSection 
        image="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0JTIwd29tYW58ZW58MXx8fHwxNzY0NTg0ODU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
      />
    </>
  );
}
