import CircleImage from './CircleImage';

export default function SpecialtyCard({ title, description, image }) {
  return (
    <div className="flex flex-col justify-between min-h-125 p-8 border-2 border-amber-700">
      <div>
        <h3 className="mb-4">{title}</h3>
        <p>{description}</p>
      </div>

      <div className="mt-8 flex justify-center">
        <CircleImage src={image} alt={title} size={300} />
      </div>
    </div>
  );
}
