import CircleImage from './CircleImage';

export default function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-secondary flex flex-col justify-between  md:min-w-50 md:min-h-125 p-4 border">
      <div>
        <p className="mb-8 font-semibold">{title}</p>
        <small className="text-[14px] font-light">{description}</small>
      </div>

      <div className="flex justify-center py-8">
        <CircleImage src={image} alt={title} size="big" />
      </div>
    </div>
  );
}
