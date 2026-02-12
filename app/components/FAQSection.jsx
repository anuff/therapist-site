'use client';
import { useState } from 'react';
import HalfRoundImage from './HalfRoundImage.jsx';
import Accordion from './Accordion.jsx';
import HeroImageThree from '@/public/hero-image-3.webp';

const faqItems = [
  {
    title: 'Do you take insurance?',
    content: 'Answer goes here.',
    isOpen: false,
  },
  {
    title: 'What are your rates?',
    content: 'Answer goes here.',
    isOpen: false,
  },
  {
    title: 'Do you have any openings?',
    content: 'Answer goes here.',
    isOpen: false,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-primary py-24">
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
          <div className="flex flex-col md:flex-col w-full md:w-1/2 pt-20">
            <h2 className="mb-10">FAQs</h2>
            <hr />

            <div>
              {faqItems.map((item, index) => (
                <Accordion
                  key={item.title}
                  title={
                    <h3 className="md:text-[41px] font-base">{item.title}</h3>
                  }
                  content={<p>{item.content}</p>}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  iconPosition="left"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
