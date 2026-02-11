import HalfRoundImage from './HalfRoundImage.jsx';
import Accordion from './Accordion.jsx';
import HeroImageThree from '@/public/hero-image-3.webp';

const faqItems = [
  {
    title: 'Do you take insurance?',
  },
  {
    title: 'What are your rates?',
  },
  {
    title: 'Do you have any openings?',
    content: 'Answer goes here.',
    isOpen: true,
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 border-2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <HalfRoundImage
              src={HeroImageThree.src}
              alt="Decorative flowers"
              className="w-100 h-155"
            />
          </div>

          {/* FAQ */}
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 border-2 border-amber-500">
            <h2 className="mb-8">FAQs</h2>

            <div className="space-y-6 border-2 h-70 w-full">
              {faqItems.map((item) => (
                <Accordion
                  key={item.title}
                  title={item.title}
                  content={item.content}
                  isOpen={item.isOpen}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
