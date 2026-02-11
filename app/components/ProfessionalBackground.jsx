import Accordion from './Accordion.jsx';

const backgroundItems = [
  { title: 'Education' },
  { title: 'Licensure' },
  { title: 'Certifications' },
];

export default function ProfessionalBackground() {
  return (
    <section className="py-24 border-2">
      <div className="max-w-4xl mx-auto px-6 border-2 border-bluee-500">
        <h2 className="text-center mb-12">My Professional Background</h2>

        <div className="space-y-6">
          {backgroundItems.map((item) => (
            <Accordion key={item.title} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
