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
    <section className="bg-secondary py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-center text-4xl mb-4">
          My Professional Background
        </h3>
        <hr />

        <div>
          {backgroundItems.map((item, index) => (
            <Accordion
              key={item.title}
              title={<h5 className=" font-light ">{item.title}</h5>}
              content={<p>{item.content}</p>}
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
