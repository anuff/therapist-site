import SpecialtyCard from './SpecialtyCard.jsx';

const specialties = [
  {
    title: 'Self-Esteem',
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: '/special-1.webp',
  },
  {
    title: 'Relationships',
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: '/special-2.webp',
  },
  {
    title: 'Burnout',
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: '/special-3.webp',
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="bg-primary">
      <div className="max-w-8xl mx-auto pt-20 pb-45 px-10 md:py-20">
        <h2 className="text-center mb-8">My Specialties</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
