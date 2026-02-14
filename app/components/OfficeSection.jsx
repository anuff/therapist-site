'use client';
import SecondaryButton from './SecondaryButton.jsx';
import { FiArrowRight } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function OfficeSection() {
  const images = ['/office-1.jpeg', '/office-2.jpeg', '/office-3.jpg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col-reverse md:flex-row md:h-screen bg-accent">
      {/* TEXT SIDE */}
      <div className="md:w-1/2">
        <div className="flex flex-col md:h-full">
          <div className="flex flex-col gap-4 px-10 py-5 md:px-10 md:pr-30 md:py-30">
            <h2>A Space to Breathe</h2>
            <p>
              I offer both in-person therapy from my Santa Monica office and
              secure telehealth sessions for clients located in California. My
              office is a quiet, private space designed for you to feel calm and
              grounding, combined with natural light and a comfortable,
              uncluttered environment where clients instantly feel more at ease
              when they arrive.{' '}
            </p>
          </div>

          <div className="mt-auto h-10 md:h-16.5">
            <SecondaryButton>
              GET IN TOUCH <FiArrowRight />
            </SecondaryButton>
          </div>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div className="relative h-70 md:w-1/2 md:h-full w-full overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Office"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
