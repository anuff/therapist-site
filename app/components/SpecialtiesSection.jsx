import SpecialtyCard from './SpecialtyCard.jsx';

const specialties = [
  {
    title: 'Self-Esteem',
    description:
      'Building a strong sense of self-worth is key to living a fulfilled life.',
    image: '/special-1.webp',
  },
  {
    title: 'Relationships',
    description:
      "Navigating relationships can be complex. I'm here to guide you.",
    image: '/special-2.webp',
  },
  {
    title: 'Burnout',
    description:
      'Feeling overwhelmed by your career is more common than you think.',
    image: '/special-3.webp',
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="py-24">
      <div className="max-w-8xl mx-auto px-6 border-2 border-red-500">
        <h2 className="text-center mb-16">My Specialties</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-5 border-blue-500">
          {specialties.map((item, index) => (
            <SpecialtyCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
