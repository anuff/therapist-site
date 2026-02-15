import ServiceCard from './ServiceCard.jsx';

const specialties = [
  {
    title: 'Anxiety & Panic Management',
    description:
      'Our sessions incorporate Cognitive-Behavioral Therapy (CBT) and mindfulness-based practices to address the symptoms of panic and chronic stress.',
    image: '/card-1.jpg',
  },
  {
    title: 'Burnout',
    description:
      'I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure.',
    image: '/burnout.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      'I utilize EMDR and body-oriented techniques to help you process past experiences that continue to affect your current sense of safety and confidence.',
    image: '/trauma.jpg',
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-accent">
      <div className="max-w-8xl mx-auto pt-20 pb-15 px-10 md:py-20">
        <h2 className="text-center mb-8">My Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {specialties.map((item, index) => (
            <ServiceCard
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
