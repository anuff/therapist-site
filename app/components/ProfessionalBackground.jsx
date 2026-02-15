'use client';

import { useState } from 'react';
import Accordion from './Accordion.jsx';

const backgroundItems = [
  { title: 'Education', content: 'Details about education.' },
  { title: 'Licensure', content: 'Details about licensure.' },
  { title: 'Certifications', content: 'Details about certifications.' },
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-primary py-24">
      <div className="max-w-3xl mx-auto px-6 flex flex-col">
        <h3 className="text-center mb-4 md:mb-8 font-semibold">
          My Professional Background
        </h3>
        <hr />
        <div>
          {backgroundItems.map((item, index) => (
            <Accordion
              key={item.title}
              title={<h5>{item.title}</h5>}
              content={<p className="md:pl-16">{item.content}</p>}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              iconPosition="right"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
