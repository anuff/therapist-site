'use client';
import { useState } from 'react';
import HalfRoundImage from './HalfRoundImage.jsx';
import Accordion from './Accordion.jsx';
import sign from '@/public/sign.jpg';

const faqItems = [
  {
    title: 'What can I expect in our first session?',
    content:
      'Our first meeting is about getting to know you and your goals. We’ll discuss what’s bringing you in, explore your history, and see if we feel like a good fit. I prioritize creating a warm, non-judgmental space where you can feel at ease from the very beginning.',
    isOpen: false,
  },
  {
    title: 'Do you offer in-person or online sessions?',
    content:
      'Both. I see clients at my private, light-filled office in Santa Monica, and I also provide secure telehealth sessions for anyone located throughout the state of California.',
    isOpen: false,
  },
  {
    title: 'How does EMDR help with trauma?',
    content:
      'EMDR (Eye Movement Desensitization and Reprocessing) is a specialized therapy that helps your brain process "stuck" memories. Instead of just talking about the past, we use EMDR to reduce the emotional and physical charge of difficult experiences, helping you feel safer and more grounded in the present.',
    isOpen: false,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6 ">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center ">
            <HalfRoundImage
              src={sign.src}
              alt="Decorative flowers"
              className="w-100 h-155"
            />
          </div>

          {/* FAQ */}
          <div className="flex flex-col md:flex-col w-full md:w-1/2 md:pt-20">
            <h2 className="mb-10">FAQs</h2>
            <hr />

            <div>
              {faqItems.map((item, index) => (
                <Accordion
                  key={item.title}
                  title={<h3>{item.title}</h3>}
                  content={<p className="md: py-2 md:px-9">{item.content}</p>}
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
