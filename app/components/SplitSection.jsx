import Button from './PrimaryButton.jsx';

export default function SplitSection({
  title,
  description,
  imageSrc,
  buttonText,
  reverse = false,
}) {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* TEXT SIDE */}
      <div
        className={`flex flex-col justify-center px-12 py-16 md:w-1/2 
        ${reverse ? 'md:order-2 bg-purple-100' : 'bg-stone-100'}`}
      >
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 ">{title}</h2>

        <p className="mb-4 text-lg text-green-900">{description}</p>

        <div className="flex flex-col flex-col-end">
          <Button>{buttonText}</Button>
        </div>
      </div>

      {/* IMAGE SIDE */}
      <div
        className={`relative md:w-1/2 min-h-[500px] 
        ${reverse ? 'md:order-1' : ''}`}
      >
        <img src={imageSrc} alt="Section image" fill className="object-cover" />
      </div>
    </section>
  );
}
